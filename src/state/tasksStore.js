const STORAGE_KEY = 'smart-deadline-tasks';

function normalizeTask(raw) {
  return {
    id: raw.id,
    title: String(raw.title || '').trim(),
    subject: String(raw.subject || '').trim(),
    deadline: raw.deadline,
    effortHours: Number(raw.effortHours || 1),
    priority: raw.priority || 'medium',
    completed: Boolean(raw.completed)
  };
}

export function createTasksStore() {
  let tasks = loadTasks();

  function loadTasks() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed.map(normalizeTask);
    } catch {
      return [];
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  return {
    getAll() {
      return [...tasks].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    },
    add(data) {
      const task = normalizeTask({
        ...data,
        id: crypto.randomUUID(),
        completed: false
      });
      tasks = [...tasks, task];
      save();
      return task;
    },
    toggleComplete(id) {
      tasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
      save();
    },
    remove(id) {
      tasks = tasks.filter((task) => task.id !== id);
      save();
    },
    clearCompleted() {
      tasks = tasks.filter((task) => !task.completed);
      save();
    }
  };
}
