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

  const router = createRouter({
    onRouteChange: async (route) => {
      if (route.section === 'view' && route.id) {
        const item = await repository.getMediaById(route.id);
        store.setState({ currentItem: item });
      }
      render(route);
    }
  });

  async function bootstrap() {
    store.setState({ loading: true });
    const content = await repository.getMedia();
    store.setState({ content, loading: false });
  }

  function bindActions() {
    return {
      onSearch: (query) => store.setState({ query }),
      onTagToggle: (tag) => {
        const { activeTags } = store.getState();
        const next = activeTags.includes(tag) ? activeTags.filter((item) => item !== tag) : [...activeTags, tag];
        store.setState({ activeTags: next });
      },
      onTagSelect: (tag) => {
        store.setState({ activeTags: [tag] });
        router.navigate('#/discover');
      },
      onTypeChange: (mediaType) => store.setState({ mediaType }),
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
      Header({ onSearch: actions.onSearch, query: state.query }),
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
    bootstrap().then(() => {
      store.subscribe(() => render());
      router.start();
    });
  }

  return { mount };
}
