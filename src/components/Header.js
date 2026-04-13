export function Header({ onSearch, query }) {
  const header = document.createElement('header');
  header.className = 'topbar';
  header.innerHTML = `
    <div class="brand-wrap">
      <h1 class="brand">NEON VAULT</h1>
      <p class="brand-sub">Media Nexus</p>
    </div>
    <label class="search-wrap">
      <input class="search-input" type="search" placeholder="Поиск по названию, автору, тегам" value="${query}" />
    </label>
  `;
  const input = header.querySelector('.search-input');
  input.addEventListener('input', (event) => onSearch(event.target.value));
  return header;
}
