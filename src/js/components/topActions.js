import { pages } from '../state.js';

export function createTopActions({ onMenuToggle, onHome }) {
  const wrapper = document.createElement('div');
  wrapper.className = 'top-actions';

  const menu = document.createElement('button');
  menu.type = 'button';
  menu.className = 'btn btn--menu top-actions__menu';
  menu.setAttribute('aria-label', 'Открыть меню');
  menu.addEventListener('click', onMenuToggle);

  const home = document.createElement('button');
  home.type = 'button';
  home.className = 'btn btn--home top-actions__home';
  home.dataset.page = pages.home;
  home.setAttribute('aria-label', 'Вернуться домой');
  home.addEventListener('click', onHome);

  wrapper.append(menu, home);
  return wrapper;
}
