import { state, pages } from './state.js';
import { createTopActions } from './components/topActions.js';
import { createSidebar } from './components/sidebar.js';
import { renderPage } from './router.js';

const app = document.querySelector('#app');

function setPage(page) {
  state.page = page;
  state.sidebarOpen = false;
  renderApp();
}

function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  renderApp();
}

function renderApp() {
  const root = document.createElement('div');
  root.className = 'app';

  const topActions = createTopActions({
    onMenuToggle: toggleSidebar,
    onHome: () => setPage(pages.home)
  });

  const sidebar = createSidebar({
    state,
    onNavigate: setPage
  });

  const shell = document.createElement('main');
  shell.className = 'shell';
  shell.append(renderPage(state));

  root.append(topActions, sidebar, shell);
  app.replaceChildren(root);
}

renderApp();
