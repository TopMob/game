import { pages } from './state.js';
import { createHomePage } from './pages/homePage.js';
import { createSimplePage } from './pages/simplePage.js';

export function renderPage(state) {
  if (state.page === pages.home) {
    return createHomePage({ history: state.history });
  }

  if (state.page === pages.account) {
    return createSimplePage({
      title: 'Аккаунт',
      lines: ['Профиль пользователя', 'Недавние действия', 'Подписки и избранное']
    });
  }

  if (state.page === pages.saved) {
    return createSimplePage({
      title: 'Сохранённые посты',
      lines: ['Подборка: cyberpunk street', 'Подборка: retro wave', 'Подборка: atomic style']
    });
  }

  return createSimplePage({
    title: 'Настройки',
    lines: ['Тема: Cyber Retro', 'Вид карточек: Compact', 'Язык интерфейса: Русский']
  });
}
