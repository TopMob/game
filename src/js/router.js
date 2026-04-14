import { pages } from './state.js';
import { createHomePage } from './pages/homePage.js';
import { createSavedPage } from './pages/savedPage.js';
import { createSettingsPage } from './pages/settingsPage.js';
import { createAccountPage } from './pages/accountPage.js';

export function renderPage(state) {
  if (state.page === pages.home) {
    return createHomePage({
      history: state.history,
      collections: state.homeCollections,
      todayPicks: state.todayPicks
    });
  }

  if (state.page === pages.account) {
    return createAccountPage({ account: state.account });
  }

  if (state.page === pages.saved) {
    return createSavedPage({ posts: state.savedPosts });
  }

  return createSettingsPage({ options: state.settings });
}
