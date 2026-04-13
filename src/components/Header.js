export function Header({ onSearch, query, tagSuggestions, onPickSuggestion }) {
  const header = document.createElement('header');
  header.className = 'topbar';
  header.innerHTML = `
    <div class="brand-wrap">
      <h1 class="brand">NEON VAULT</h1>
      <p class="brand-sub">Media Nexus</p>
    </div>
    <div class="search-wrap">
      <label>
        <input class="search-input" type="search" placeholder="Поиск по тегам" value="${query}" />
      </label>
      <div class="suggestions"></div>
    </div>
  `;
  const input = header.querySelector('.search-input');
  input.addEventListener('input', (event) => onSearch(event.target.value));

  const suggestions = header.querySelector('.suggestions');
  tagSuggestions.forEach((tag) => {
    const button = document.createElement('button');
    button.className = 'tag-chip';
    button.type = 'button';
    button.textContent = `#${tag.name}`;
    button.addEventListener('click', () => onPickSuggestion(tag.name));
    suggestions.append(button);
  });

  return header;
}
