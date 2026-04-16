import { renderTaskForm } from './components/taskForm.js';
import { renderTaskList } from './components/taskList.js';
import { renderSummary } from './components/summary.js';
import { renderThemeToggle } from './components/themeToggle.js';
import { createTasksStore } from './state/tasksStore.js';
import { createThemeStore } from './state/themeStore.js';
import { buildLoadMap } from './utils/workload.js';

const rootElement = document.documentElement;
const formRoot = document.getElementById('task-form');
const listRoot = document.getElementById('task-list');
const summaryRoot = document.getElementById('summary');
const clearCompletedButton = document.getElementById('clear-completed');
const themeToggleRoot = document.getElementById('theme-toggle');

const store = createTasksStore();
const themeStore = createThemeStore();

function applyTheme() {
  rootElement.setAttribute('data-theme', themeStore.get());
}

function rerender() {
  const tasks = store.getAll();
  const loadMap = buildLoadMap(tasks);

  renderSummary(summaryRoot, tasks, loadMap);
  renderTaskList(listRoot, tasks, loadMap, {
    onToggle: (id) => {
      store.toggleComplete(id);
      rerender();
    },
    onRemove: (id) => {
      store.remove(id);
      rerender();
    }
  });
}

renderTaskForm(formRoot, {
  onSubmit: (payload) => {
    store.add(payload);
    rerender();
  }
});

renderThemeToggle(themeToggleRoot, {
  currentTheme: themeStore.get(),
  options: themeStore.getAvailableThemes(),
  onChange: (theme) => {
    themeStore.set(theme);
    applyTheme();
  }
});

clearCompletedButton.addEventListener('click', () => {
  store.clearCompleted();
  rerender();
});

applyTheme();
rerender();
