import { renderTaskForm } from './components/taskForm.js';
import { renderTaskList } from './components/taskList.js';
import { renderSummary } from './components/summary.js';
import { createTasksStore } from './state/tasksStore.js';
import { buildLoadMap } from './utils/workload.js';

const formRoot = document.getElementById('task-form');
const listRoot = document.getElementById('task-list');
const summaryRoot = document.getElementById('summary');
const clearCompletedButton = document.getElementById('clear-completed');

const store = createTasksStore();

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

clearCompletedButton.addEventListener('click', () => {
  store.clearCompleted();
  rerender();
});

rerender();
