import { daysUntil, eachDateUntil, toDateKey } from './date.js';

export function buildLoadMap(tasks) {
  const map = new Map();

  tasks
    .filter((task) => !task.completed)
    .forEach((task) => {
      const span = eachDateUntil(task.deadline);
      const share = task.effortHours / Math.max(span.length, 1);

      span.forEach((key) => {
        map.set(key, (map.get(key) || 0) + share);
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

export function getSmartReminderLevel(task, loadMap) {
  const days = daysUntil(task.deadline);
  const dailyShare = task.effortHours / Math.max(days + 1, 1);
  const todayLoad = getTodayLoad(loadMap);
  const pressure = todayLoad + dailyShare;

  if (days < 0) {
    return { label: 'Просрочено', tone: 'urgent' };
  }

  if (days <= 1 || pressure >= 6) {
    return { label: 'Высокий приоритет', tone: 'urgent' };
  }

  if (days <= 3 || pressure >= 4) {
    return { label: 'Стоит начать сейчас', tone: 'warning' };
  }

  return { label: 'Можно планировать спокойно', tone: 'normal' };
}

export function getRecommendation(task, loadMap) {
  const deadlineDays = daysUntil(task.deadline);
  const todayLoad = getTodayLoad(loadMap);
  const startInDays = Math.max(Math.min(Math.floor(todayLoad / 2), deadlineDays), 0);

  if (deadlineDays < 0) {
    return 'Дедлайн уже прошел, начните с этой задачи в первую очередь';
  }

  if (startInDays === 0) {
    return 'Рекомендуем выделить время на эту задачу сегодня';
  }

  return `Оптимальный старт: через ${startInDays} дн.`;
}
