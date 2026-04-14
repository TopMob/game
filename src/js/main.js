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

function openPostsWithPreset({ sort, scoreMin }) {
  state.page = pages.posts;
  state.sidebarOpen = false;
  state.postFilters.applied = { ...state.postFilters.applied, sort, scoreMin };
  state.postFilters.draft = { ...state.postFilters.applied };
  renderApp();
}

function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  renderApp();
}

function openFilters() {
  state.postFilters.open = true;
  renderApp();
}

function changeDraftFilters(patch) {
  state.postFilters.draft = { ...state.postFilters.draft, ...patch };
  renderApp();
}

function applyFilters() {
  state.postFilters.applied = { ...state.postFilters.draft };
  state.postFilters.open = false;
  renderApp();
}

function savePost(post) {
  const exists = state.savedPosts.some((item) => item.title === post.title);
  if (!exists) {
    state.savedPosts = [...state.savedPosts, { title: post.title, tags: post.tags }];
  }
  renderApp();
}

function hidePost(post) {
  const hiddenExists = state.hiddenPosts.some((item) => item.id === post.id);
  if (!hiddenExists) {
    state.hiddenPosts = [...state.hiddenPosts, post];
    state.posts = state.posts.filter((item) => item.id !== post.id);
  }
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
  shell.append(
    renderPage(state, {
      onOpenPosts: openPostsWithPreset,
      onOpenFilters: openFilters,
      onDraftChange: changeDraftFilters,
      onApplyFilters: applyFilters,
      onSavePost: savePost,
      onHidePost: hidePost
    })
  );

  root.append(topActions, sidebar, shell);
  app.replaceChildren(root);
}

renderApp();
