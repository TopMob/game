import { pages } from '../state.js';

const items = [
  { label: 'Аккаунт', page: pages.account },
  { label: 'Сохранённые посты', page: pages.saved },
  { label: 'Настройки', page: pages.settings }
];

export function createSidebar({ state, onNavigate }) {
  const aside = document.createElement('aside');
  aside.className = `sidebar${state.sidebarOpen ? ' sidebar--open' : ''}`;

  const nav = document.createElement('nav');
  nav.className = 'sidebar-nav';

  items.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `btn btn--sidebar${state.page === item.page ? ' active' : ''}`;
    button.textContent = item.label;
    button.addEventListener('click', () => onNavigate(item.page));
    nav.append(button);
  });

  aside.append(nav);
  return aside;
}
