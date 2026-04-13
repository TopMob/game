import { Header } from '../components/Header.js';
import { Sidebar } from '../components/Sidebar.js';
import { FilterPanel } from '../components/FilterPanel.js';
import { createRouter } from '../core/router.js';
import { HomePage } from '../pages/HomePage.js';
import { DiscoverPage } from '../pages/DiscoverPage.js';
import { ViewPage } from '../pages/ViewPage.js';
import { createRepository } from '../services/repository.js';
import { createStore } from '../state/store.js';
import { applyFilters, uniqueTags } from '../utils/format.js';

export function createApp(root) {
  const repository = createRepository();
  const store = createStore();
  let searchTimer = null;

  const router = createRouter({
    onRouteChange: async (route) => {
      if (route.section === 'view' && route.id) {
        const item = await repository.getMediaById(route.id);
        store.setState({ currentItem: item });
      }
      render(route);
    }
  });

  async function loadContent() {
    const state = store.getState();
    try {
      store.setState({ loading: true, error: '' });
      const content = await repository.searchMedia({
        query: state.query,
        tags: state.activeTags,
        mediaType: state.mediaType,
        limit: 48,
        page: 0
      });
      store.setState({ content, loading: false });
    } catch (error) {
      store.setState({ loading: false, error: String(error.message || error) });
    }
  }

  async function loadTagSuggestions(term) {
    if (!term.trim()) {
      store.setState({ tagSuggestions: [] });
      return;
    }
    try {
      const tags = await repository.searchTags(term, 8);
      store.setState({ tagSuggestions: tags });
    } catch {
      store.setState({ tagSuggestions: [] });
    }
  }

  function scheduleSearch() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      loadContent();
    }, 320);
  }

  function bindActions() {
    return {
      onSearch: (query) => {
        store.setState({ query });
        loadTagSuggestions(query);
        scheduleSearch();
      },
      onTagToggle: (tag) => {
        const { activeTags } = store.getState();
        const next = activeTags.includes(tag) ? activeTags.filter((item) => item !== tag) : [...activeTags, tag];
        store.setState({ activeTags: next });
        loadContent();
      },
      onPickSuggestion: (tagName) => {
        const { activeTags } = store.getState();
        if (!activeTags.includes(tagName)) {
          store.setState({ activeTags: [...activeTags, tagName], query: '' });
          loadContent();
        }
      },
      onTagSelect: (tag) => {
        store.setState({ activeTags: [tag], query: '' });
        loadContent();
        router.navigate('#/discover');
      },
      onTypeChange: (mediaType) => {
        store.setState({ mediaType });
        loadContent();
      },
      onSortChange: (sortBy) => store.setState({ sortBy }),
      onOpen: (id) => router.navigate(`#/view/${id}`),
      onNavigate: (route) => router.navigate(route)
    };
  }

  function render(route = router.parseRoute()) {
    const state = store.getState();
    const actions = bindActions();
    const filtered = applyFilters(state.content, state);
    const tags = uniqueTags(state.content);

    const shell = document.createElement('div');
    shell.className = 'shell';

    const main = document.createElement('main');
    main.className = 'main';

    main.append(
      Header({
        onSearch: actions.onSearch,
        query: state.query,
        tagSuggestions: state.tagSuggestions,
        onPickSuggestion: actions.onPickSuggestion
      }),
      FilterPanel({
        tags,
        activeTags: state.activeTags,
        mediaType: state.mediaType,
        sortBy: state.sortBy,
        onTagToggle: actions.onTagToggle,
        onTypeChange: actions.onTypeChange,
        onSortChange: actions.onSortChange
      })
    );

    if (state.error) {
      const errorBlock = document.createElement('section');
      errorBlock.className = 'page';
      errorBlock.textContent = state.error;
      main.append(errorBlock);
    }

    if (route.section === 'home') {
      main.append(HomePage({ items: filtered.slice(0, 24), onOpen: actions.onOpen }));
    }

    if (route.section === 'discover') {
      main.append(DiscoverPage({ items: filtered, onOpen: actions.onOpen }));
    }

    if (route.section === 'view') {
      main.append(ViewPage({
        item: state.currentItem,
        onBack: () => router.navigate('#/home'),
        onTagSelect: actions.onTagSelect
      }));
    }

    shell.append(Sidebar({ activeSection: route.section, onNavigate: actions.onNavigate }), main);

    root.innerHTML = '';
    root.append(shell);
  }

  function mount() {
    loadContent().then(() => {
      store.subscribe(() => render());
      router.start();
    });
  }

  return { mount };
}
