import { themes, defaultThemeId } from './themes.js';

const themeSelect = document.getElementById('themeSelect');
const titleNode = document.getElementById('themeTitle');
const descriptionNode = document.getElementById('themeDescription');
const tagsNode = document.getElementById('themeTags');

const themeMap = new Map(themes.map((theme) => [theme.id, theme]));
const savedTheme = localStorage.getItem('selectedTheme');
const initialTheme = themeMap.has(savedTheme) ? savedTheme : defaultThemeId;

function renderOptions() {
    const options = themes
        .map((theme) => `<option value="${theme.id}">${theme.name}</option>`)
        .join('');
    themeSelect.innerHTML = options;
}

function renderThemeDetails(themeId) {
    const theme = themeMap.get(themeId) || themeMap.get(defaultThemeId);
    titleNode.textContent = `Демонстрация: ${theme.name}`;
    descriptionNode.textContent = theme.note;
    tagsNode.innerHTML = `
        <span class="chip">Настроение: ${theme.mood}</span>
        <span class="chip">Контраст: ${theme.contrast}</span>
    `;
}

function applyTheme(themeId) {
    document.documentElement.setAttribute('data-theme', themeId);
    themeSelect.value = themeId;
    localStorage.setItem('selectedTheme', themeId);
    renderThemeDetails(themeId);
}

renderOptions();
applyTheme(initialTheme);

themeSelect.addEventListener('change', (event) => {
    applyTheme(event.target.value);
});
