const navItems = [
  { label: 'Лента', route: '#/home' },
  { label: 'Обзор', route: '#/discover' }
];

export function Sidebar({ activeSection, onNavigate }) {
  const aside = document.createElement('aside');
  aside.className = 'sidebar';
  const list = navItems
    .map((item) => {
      const section = item.route.replace('#/', '');
      const active = section === activeSection ? 'is-active' : '';
      return `<button class="nav-link ${active}" data-route="${item.route}">${item.label}</button>`;
    })
    .join('');

  aside.innerHTML = `<nav class="side-nav">${list}</nav>`;
  aside.querySelectorAll('.nav-link').forEach((button) => {
    button.addEventListener('click', () => onNavigate(button.dataset.route));
  });
  return aside;
}
