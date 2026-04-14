import { themes, defaultThemeId } from './themes.js';
import { applyTheme, normalizeThemeList } from './theme-engine.js';

const themeSelect = document.getElementById('themeSelect');
const randomThemeButton = document.getElementById('randomTheme');
const titleNode = document.getElementById('themeTitle');
const descriptionNode = document.getElementById('themeDescription');
const tagsNode = document.getElementById('themeTags');

const themeList = normalizeThemeList(themes);
const themeMap = new Map(themeList.map((theme) => [theme.id, theme]));
const preferred = localStorage.getItem('selectedTheme');
const initialId = themeMap.has(preferred) ? preferred : defaultThemeId;

function buildSelectOptions() {
    themeSelect.innerHTML = themeList
        .map((theme) => `<option value="${theme.id}">${theme.name}</option>`)
        .join('');
}

function renderThemeMeta(theme) {
    titleNode.textContent = theme.name;
    descriptionNode.textContent = theme.description;
    tagsNode.innerHTML = `
        <span class="chip">Семейство: ${theme.family}</span>
        <span class="chip">Настроение: ${theme.mood}</span>
        <span class="chip">Контраст: ${theme.contrast}</span>
    `;
}

function activateTheme(themeId) {
    const theme = themeMap.get(themeId) || themeMap.get(defaultThemeId);
    applyTheme(theme);
    themeSelect.value = theme.id;
    localStorage.setItem('selectedTheme', theme.id);
    renderThemeMeta(theme);
}

function pickRandomTheme(currentId) {
    const pool = themeList.filter((theme) => theme.id !== currentId);
    const index = Math.floor(Math.random() * pool.length);
    return pool[index]?.id || currentId;
}

buildSelectOptions();
activateTheme(initialId);

themeSelect.addEventListener('change', (event) => {
    activateTheme(event.target.value);
});

randomThemeButton.addEventListener('click', () => {
    const randomId = pickRandomTheme(themeSelect.value);
    activateTheme(randomId);
});
