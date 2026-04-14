import { pages } from './state.js';
import { createHomePage } from './pages/homePage.js';
import { createSimplePage } from './pages/simplePage.js';
import { createSavedPage } from './pages/savedPage.js';
import { createSettingsPage } from './pages/settingsPage.js';

export function renderPage(state) {
  if (state.page === pages.home) {
    return createHomePage({ history: state.history, collections: state.homeCollections });
  }

  if (state.page === pages.account) {
    return createSimplePage({
      title: 'Аккаунт',
      lines: ['Профиль пользователя', 'Недавние действия', 'Подписки и избранное']
    });
  }

  if (state.page === pages.saved) {
    return createSavedPage({ posts: state.savedPosts });
  }

  return createSettingsPage({ options: state.settings });
}
