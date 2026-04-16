import { addDays, daysUntil, eachDateUntil, toDateKey } from './date.js';

const CAPACITY_HOURS = 4;

function priorityFactor(priority) {
  if (priority === 'high') {
    return 1.25;
  }
  if (priority === 'low') {
    return 0.85;
  }
  return 1;
}

export function buildLoadMap(tasks) {
  const map = new Map();

  tasks
    .filter((task) => !task.completed)
    .forEach((task) => {
      const days = eachDateUntil(task.deadline);
      const adjusted = task.effortHours * priorityFactor(task.priority);
      const perDay = adjusted / Math.max(days.length, 1);

      days.forEach((key) => {
        map.set(key, (map.get(key) || 0) + perDay);
      });
    });

  return map;
}

export function getTodayLoad(loadMap) {
  return Number((loadMap.get(toDateKey(new Date())) || 0).toFixed(1));
}

export function getPeakLoad(loadMap) {
  let max = 0;
  for (const value of loadMap.values()) {
    if (value > max) {
      max = value;
    }
  }
  return Number(max.toFixed(1));
}

export function getOverloadedDays(loadMap) {
  let total = 0;
  for (const value of loadMap.values()) {
    if (value > CAPACITY_HOURS) {
      total += 1;
    }
  }
  return total;
}

export function getTaskMetrics(task, loadMap) {
  const daysLeft = daysUntil(task.deadline);
  const remainingDays = Math.max(daysLeft + 1, 1);
  const adjustedEffort = task.effortHours * priorityFactor(task.priority);
  const dailyNeed = adjustedEffort / remainingDays;
  const freeToday = Math.max(CAPACITY_HOURS - getTodayLoad(loadMap), 0);
  const bufferDays = Math.max(Math.floor((CAPACITY_HOURS - dailyNeed) * remainingDays / CAPACITY_HOURS), 0);

  return {
    daysLeft,
    dailyNeed: Number(dailyNeed.toFixed(1)),
    freeToday: Number(freeToday.toFixed(1)),
    bufferDays
  };
}

export function getSmartReminder(task, loadMap) {
  const metrics = getTaskMetrics(task, loadMap);

  if (metrics.daysLeft < 0) {
    return {
      label: 'Просрочено',
      tone: 'urgent',
      text: 'Сделайте первый блок работы прямо сейчас и перенесите новый дедлайн.'
    };
  }

  if (metrics.daysLeft <= 1 || metrics.dailyNeed >= 3) {
    return {
      label: 'Критично',
      tone: 'urgent',
      text: `Сегодня нужно минимум ${Math.max(metrics.dailyNeed, 2).toFixed(1)} ч, иначе задача станет перегруженной.`
    };
  }

  if (metrics.daysLeft <= 3 || metrics.freeToday < 1.5) {
    return {
      label: 'Важно',
      tone: 'warning',
      text: `Лучше начать сегодня короткой сессией ${Math.min(metrics.dailyNeed + 0.5, 2).toFixed(1)} ч.`
    };
  }

  return {
    label: 'Стабильно',
    tone: 'calm',
    text: `Достаточно ${metrics.dailyNeed.toFixed(1)} ч в день, запас по сроку: ${metrics.bufferDays} дн.`
  };
}

export function buildTaskPlan(task, loadMap) {
  const metrics = getTaskMetrics(task, loadMap);
  const sessions = Math.max(Math.ceil(task.effortHours / 1.5), 1);
  const startOffset = Math.min(Math.max(metrics.daysLeft - Math.ceil(task.effortHours / 2), 0), 6);
  const startDate = addDays(new Date(), startOffset);

  if (metrics.daysLeft < 0) {
    return 'План: 2 интенсивные сессии сегодня и новая дата сдачи после согласования.';
  }

  return `План: старт ${startDate}, ${sessions} сессий по ${(task.effortHours / sessions).toFixed(1)} ч.`;
}
