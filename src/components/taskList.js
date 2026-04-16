import { daysUntil, formatDate } from '../utils/date.js';
import { buildTaskPlan, getSmartReminder, getTaskMetrics } from '../utils/workload.js';

const priorityText = {
  low: 'Низкий приоритет',
  medium: 'Средний приоритет',
  high: 'Высокий приоритет'
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function renderTaskList(container, tasks, loadMap, handlers) {
  if (!tasks.length) {
    container.innerHTML = '<div class="empty">Пока нет задач. Добавьте первый дедлайн и получите план по нагрузке.</div>';
    return;
  }

  container.innerHTML = tasks
    .map((task) => {
      const days = daysUntil(task.deadline);
      const metrics = getTaskMetrics(task, loadMap);
      const reminder = getSmartReminder(task, loadMap);
      const plan = buildTaskPlan(task, loadMap);
      const deadlineText = days < 0 ? `Просрочено на ${Math.abs(days)} дн.` : `Осталось ${days} дн.`;

      return `
        <article class="task" data-id="${task.id}">
          <div class="task-top">
            <div>
              <h3 class="task-title">${escapeHtml(task.title)}</h3>
              <p class="task-meta">${escapeHtml(task.subject)} · ${formatDate(task.deadline)}</p>
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
            <span class="tag tag-${reminder.tone}">${reminder.label}</span>
            <span class="tag">Нужно ${metrics.dailyNeed} ч/день</span>
            ${task.completed ? '<span class="tag">Завершено</span>' : ''}
          </div>
          <p class="task-plan">${reminder.text}</p>
          <p class="task-plan">${plan}</p>
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
