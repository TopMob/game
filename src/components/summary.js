import { getPeakLoad, getTodayLoad } from '../utils/workload.js';

export function renderSummary(container, tasks, loadMap) {
  const active = tasks.filter((task) => !task.completed);
  const completed = tasks.length - active.length;
  const totalHours = active.reduce((sum, task) => sum + task.effortHours, 0);
  const todayLoad = getTodayLoad(loadMap);
  const peakLoad = getPeakLoad(loadMap);

  container.innerHTML = `
    <article class="summary-card">
      <p class="summary-title">Активные задачи</p>
      <p class="summary-value">${active.length}</p>
    </article>
    <article class="summary-card">
      <p class="summary-title">Выполненные задачи</p>
      <p class="summary-value">${completed}</p>
    </article>
    <article class="summary-card">
      <p class="summary-title">Часов в работе</p>
      <p class="summary-value">${totalHours}</p>
    </article>
    <article class="summary-card">
      <p class="summary-title">Нагрузка на сегодня</p>
      <p class="summary-value">${todayLoad} ч</p>
    </article>
    <article class="summary-card">
      <p class="summary-title">Пиковая дневная нагрузка</p>
      <p class="summary-value">${peakLoad} ч</p>
    </article>
  `;
}
