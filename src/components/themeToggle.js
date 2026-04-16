const THEME_TITLES = {
  neu: 'Neumorphism',
  glitch: 'Glitch Core'
};

export function renderThemeToggle(container, { currentTheme, options, onChange }) {
  container.innerHTML = `
    <div class="theme-toggle">
      <span class="label">Тема</span>
      <select class="select" id="theme-select"></select>
    </div>
  `;

  const select = container.querySelector('#theme-select');
  select.innerHTML = options
    .map((theme) => `<option value="${theme}">${THEME_TITLES[theme] || theme}</option>`)
    .join('');
  select.value = currentTheme;

  select.addEventListener('change', () => {
    onChange(select.value);
  });
}
