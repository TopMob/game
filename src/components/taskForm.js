import { toDateKey } from '../utils/date.js';

export function renderTaskForm(container, { onSubmit }) {
  const minDate = toDateKey(new Date());

  container.innerHTML = `
    <label class="field">
      <span class="label">Название задачи</span>
      <input class="input" name="title" type="text" placeholder="Например: Курсовая по физике" required />
    </label>

    <label class="field">
      <span class="label">Предмет</span>
      <input class="input" name="subject" type="text" placeholder="Физика" required />
    </label>

    <label class="field">
      <span class="label">Дедлайн</span>
      <input class="input" name="deadline" type="date" min="${minDate}" required />
    </label>

    <label class="field">
      <span class="label">Оценка нагрузки (часы)</span>
      <input class="input" name="effortHours" type="number" min="1" max="100" value="4" required />
    </label>

    <label class="field">
      <span class="label">Приоритет</span>
      <select class="select" name="priority">
        <option value="low">Низкий</option>
        <option value="medium" selected>Средний</option>
        <option value="high">Высокий</option>
      </select>
    </label>

    <div class="actions">
      <button class="button" type="submit">Добавить</button>
    </div>
  `;

  container.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(container);
    const payload = {
      title: String(formData.get('title') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      deadline: formData.get('deadline'),
      effortHours: Number(formData.get('effortHours')),
      priority: formData.get('priority')
    };

    if (!payload.title || !payload.subject || !payload.deadline || payload.effortHours < 1) {
      return;
    }

    onSubmit(payload);
    container.reset();
  });
}
