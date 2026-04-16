import { daysUntil, formatDate } from '../utils/date.js';
import { getRecommendation, getSmartReminderLevel } from '../utils/workload.js';

const priorityText = {
  low: 'Низкий приоритет',
  medium: 'Средний приоритет',
  high: 'Высокий приоритет'
};

export function renderTaskList(container, tasks, loadMap, handlers) {
  if (!tasks.length) {
    container.innerHTML = '<div class="empty">Пока нет задач. Добавьте первый дедлайн.</div>';
    return;
  }

  container.innerHTML = tasks
    .map((task) => {
      const days = daysUntil(task.deadline);
      const reminder = getSmartReminderLevel(task, loadMap);
      const recommendation = getRecommendation(task, loadMap);
      const statusTag = reminder.tone === 'urgent' ? 'tag tag-urgent' : reminder.tone === 'warning' ? 'tag tag-warning' : 'tag';
      const deadlineText = days < 0 ? `Просрочено на ${Math.abs(days)} дн.` : `Осталось ${days} дн.`;

      return `
        <article class="task" data-id="${task.id}">
          <div class="task-top">
            <div>
              <h3 class="task-title">${task.title}</h3>
              <p class="task-meta">${task.subject} · ${formatDate(task.deadline)}</p>
            </div>
            <div class="task-actions">
              <button class="button button-secondary" type="button" data-action="toggle">${task.completed ? 'Вернуть' : 'Выполнено'}</button>
              <button class="button button-secondary" type="button" data-action="remove">Удалить</button>
            </div>
          </div>
          <div class="task-tags">
            <span class="tag">${priorityText[task.priority]}</span>
            <span class="tag">Нагрузка ${task.effortHours} ч</span>
            <span class="tag">${deadlineText}</span>
            <span class="${statusTag}">${reminder.label}</span>
            <span class="tag">${recommendation}</span>
            ${task.completed ? '<span class="tag">Завершено</span>' : ''}
          </div>
        </article>
      `;
    })
    .join('');

  container.querySelectorAll('[data-action="toggle"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.closest('.task')?.dataset.id;
      if (id) {
        handlers.onToggle(id);
      }
    });
  });

  container.querySelectorAll('[data-action="remove"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.closest('.task')?.dataset.id;
      if (id) {
        handlers.onRemove(id);
      }
    });
  });
}
