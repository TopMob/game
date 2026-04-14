import { pages } from './state.js';
import { createHomePage } from './pages/homePage.js';
import { createSavedPage } from './pages/savedPage.js';
import { createSettingsPage } from './pages/settingsPage.js';
import { createAccountPage } from './pages/accountPage.js';
import { createPostsPage } from './pages/postsPage.js';
import { createHiddenPage } from './pages/hiddenPage.js';

export function renderPage(state, handlers) {
  if (state.page === pages.home) {
    return createHomePage({
      history: state.history,
      collections: state.homeCollections,
      onOpenPosts: handlers.onOpenPosts
    });
  }

  if (state.page === pages.account) {
    return createAccountPage({ account: state.account });
  }

  if (state.page === pages.saved) {
    return createSavedPage({ posts: state.savedPosts });
  }

  if (state.page === pages.hidden) {
    return createHiddenPage({ posts: state.hiddenPosts });
  }

  if (state.page === pages.posts) {
    return createPostsPage({
      state,
      onOpenFilters: handlers.onOpenFilters,
      onDraftChange: handlers.onDraftChange,
      onApplyFilters: handlers.onApplyFilters,
      onSavePost: handlers.onSavePost,
      onHidePost: handlers.onHidePost
    });
  }

  return createSettingsPage({ options: state.settings });
}
