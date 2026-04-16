import { getOverloadedDays, getPeakLoad, getTodayLoad } from '../utils/workload.js';

export function renderSummary(container, tasks, loadMap) {
  const active = tasks.filter((task) => !task.completed);
  const completed = tasks.length - active.length;
  const totalHours = active.reduce((sum, task) => sum + task.effortHours, 0);
  const todayLoad = getTodayLoad(loadMap);
  const peakLoad = getPeakLoad(loadMap);
  const overloadedDays = getOverloadedDays(loadMap);

  container.innerHTML = `
    <article class="summary-card">
      <p class="summary-title">Активные задачи</p>
      <p class="summary-value">${active.length}</p>
      <p class="summary-note">Выполнено: ${completed}</p>
    </article>
    <article class="summary-card">
      <p class="summary-title">Часов в работе</p>
      <p class="summary-value">${totalHours}</p>
      <p class="summary-note">Оценка суммарной нагрузки</p>
    </article>
    <article class="summary-card">
      <p class="summary-title">Нагрузка на сегодня</p>
      <p class="summary-value">${todayLoad} ч</p>
      <p class="summary-note">Целевой комфорт: до 4 ч/день</p>
    </article>
    <article class="summary-card">
      <p class="summary-title">Пиковая нагрузка</p>
      <p class="summary-value">${peakLoad} ч</p>
      <p class="summary-note">Дней с перегрузом: ${overloadedDays}</p>
    </article>
  `;
}
