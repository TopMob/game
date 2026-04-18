import { themes, themesByFamily, defaultThemeId } from './themes.js';
import { applyTheme, normalizeThemeList, buildThemeCssRootBlock } from './theme-engine.js';
import { renderLab, initLabInteractions } from './lab.js';

const labGrid = document.getElementById('labGrid');
const randomThemeButton = document.getElementById('randomTheme');
const exportCssButton = document.getElementById('exportCss');
const themePicker = document.getElementById('themePicker');
const themePickerToggle = document.getElementById('themePickerToggle');
const themePickerLabel = document.getElementById('themePickerLabel');
const themePickerPanel = document.getElementById('themePickerPanel');
const themePickerList = document.getElementById('themePickerList');
const themeFilterBar = document.getElementById('themeFilterBar');
const toastNode = document.querySelector('aside.toast');

renderLab(labGrid);
initLabInteractions();

const titleNode = document.getElementById('themeTitle');
const descriptionNode = document.getElementById('themeDescription');
const tagsNode = document.getElementById('themeTags');
const counterNode = document.getElementById('themeCounter');

const themeList = normalizeThemeList(themes);
const themeMap = new Map(themeList.map((theme) => [theme.id, theme]));
const preferred = localStorage.getItem('selectedTheme');
const initialId = themeMap.has(preferred) ? preferred : defaultThemeId;

let activeThemeId = initialId;
let activeFilter = 'all';
let toastTimer = 0;
let unusedThemePool = [];

if (themeList.length !== 60) {
    throw new Error(`Ожидается 60 тем, найдено: ${themeList.length}`);
}

function resetUnusedThemePool() {
    unusedThemePool = themeList.map((theme) => theme.id);
}

function isHighContrast(theme) {
    return theme.contrast === 'высокий' || theme.contrast === 'очень высокий';
}

function hexToRgb(hexColor) {
    const hex = hexColor.replace('#', '');
    if (hex.length === 3) {
        return {
            r: Number.parseInt(`${hex[0]}${hex[0]}`, 16),
            g: Number.parseInt(`${hex[1]}${hex[1]}`, 16),
            b: Number.parseInt(`${hex[2]}${hex[2]}`, 16)
        };
    }
    if (hex.length === 6) {
        return {
            r: Number.parseInt(hex.slice(0, 2), 16),
            g: Number.parseInt(hex.slice(2, 4), 16),
            b: Number.parseInt(hex.slice(4, 6), 16)
        };
    }
    return { r: 127, g: 127, b: 127 };
}

function relativeLuminance({ r, g, b }) {
    const channel = (value) => {
        const normalized = value / 255;
        return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function isLightTheme(theme) {
    const luminance = relativeLuminance(hexToRgb(theme.tokens.bg));
    return luminance >= 0.54;
}

function matchesFilter(theme, filterId) {
    if (filterId === 'light') {
        return isLightTheme(theme);
    }
    if (filterId === 'dark') {
        return !isLightTheme(theme);
    }
    if (filterId === 'contrast') {
        return isHighContrast(theme);
    }
    return true;
}

function renderThemeMeta(theme) {
    const index = themeList.findIndex((entry) => entry.id === theme.id);
    counterNode.textContent = `Тема ${index + 1} из ${themeList.length}`;
    titleNode.textContent = theme.name;
    descriptionNode.textContent = theme.description;
    tagsNode.innerHTML = `
        <span class="chip">Семейство: ${theme.family}</span>
        <span class="chip">Настроение: ${theme.mood}</span>
        <span class="chip">Контраст: ${theme.contrast}</span>
    `;
}

function updatePickerLabel(theme) {
    const index = themeList.findIndex((entry) => entry.id === theme.id);
    themePickerLabel.textContent = `${index + 1}. ${theme.name}`;
}

function activateTheme(themeId) {
    const theme = themeMap.get(themeId) || themeMap.get(defaultThemeId);
    activeThemeId = theme.id;
    applyTheme(theme);
    localStorage.setItem('selectedTheme', theme.id);
    renderThemeMeta(theme);
    updatePickerLabel(theme);
    renderThemePickerList();
}

function showToast(title, message) {
    const titleNode = toastNode.querySelector('strong');
    const messageNode = toastNode.querySelector('span');
    titleNode.textContent = title;
    messageNode.textContent = message;
    toastNode.classList.remove('is-hidden');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
        toastNode.classList.add('is-hidden');
    }, 3000);
}

function setPickerOpenState(isOpen) {
    if (isOpen) {
        themePickerPanel.hidden = false;
        themePickerPanel.classList.add('is-open');
        themePickerToggle.setAttribute('aria-expanded', 'true');
        themePicker.classList.add('is-open');
        return;
    }
    themePickerPanel.classList.remove('is-open');
    themePickerPanel.hidden = true;
    themePickerToggle.setAttribute('aria-expanded', 'false');
    themePicker.classList.remove('is-open');
}

function buildThemeCard(theme) {
    const isActive = theme.id === activeThemeId;
    return `
        <button type="button" class="theme-card${isActive ? ' is-active' : ''}" data-theme-id="${theme.id}">
            <span class="theme-card-name">${theme.name}</span>
            <span class="theme-card-swatches" aria-hidden="true">
                <i class="swatch" style="--swatch:${theme.tokens.bg};"></i>
                <i class="swatch" style="--swatch:${theme.tokens.surface};"></i>
                <i class="swatch" style="--swatch:${theme.tokens.accent};"></i>
            </span>
        </button>
    `;
}

function renderThemePickerList() {
    const familyEntries = Object.entries(themesByFamily)
        .map(([family, familyThemes]) => {
            const visibleThemes = familyThemes
                .filter((theme) => matchesFilter(theme, activeFilter))
                .map(buildThemeCard)
                .join('');

            if (!visibleThemes) {
                return '';
            }

            return `
                <section class="theme-family-block">
                    <h3>${family}</h3>
                    <div class="theme-cards-grid">
                        ${visibleThemes}
                    </div>
                </section>
            `;
        })
        .join('');

    themePickerList.innerHTML = familyEntries || '<p class="theme-picker-empty">Нет тем для выбранного фильтра.</p>';
}

function setFilter(filterId) {
    activeFilter = filterId;
    themeFilterBar.querySelectorAll('.filter-chip').forEach((node) => {
        node.classList.toggle('is-active', node.dataset.filter === filterId);
    });
    renderThemePickerList();
}

function drawRandomThemeFromPool() {
    if (unusedThemePool.length === 0) {
        resetUnusedThemePool();
    }
    if (unusedThemePool.length === 0) {
        return activeThemeId;
    }
    const index = Math.floor(Math.random() * unusedThemePool.length);
    const [themeId] = unusedThemePool.splice(index, 1);
    return themeId;
}

function handleManualThemeSelect(themeId) {
    resetUnusedThemePool();
    activateTheme(themeId);
    setPickerOpenState(false);
}

async function exportActiveThemeCss() {
    const theme = themeMap.get(activeThemeId);
    if (!theme) {
        return;
    }
    const cssRootBlock = buildThemeCssRootBlock(theme);
    await navigator.clipboard.writeText(cssRootBlock);
    showToast('CSS экспортирован', 'Токены темы скопированы в буфер обмена.');
}

activateTheme(initialId);
resetUnusedThemePool();
setFilter('all');

randomThemeButton.addEventListener('click', () => {
    const randomId = drawRandomThemeFromPool();
    activateTheme(randomId);
});

exportCssButton.addEventListener('click', async () => {
    try {
        await exportActiveThemeCss();
    } catch (error) {
        showToast('Ошибка экспорта', 'Не удалось скопировать CSS в буфер обмена.');
    }
});

themePickerToggle.addEventListener('click', () => {
    const isOpen = themePickerToggle.getAttribute('aria-expanded') === 'true';
    setPickerOpenState(!isOpen);
});

themeFilterBar.addEventListener('click', (event) => {
    const target = event.target.closest('.filter-chip');
    if (!target) {
        return;
    }
    setFilter(target.dataset.filter || 'all');
});

themePickerList.addEventListener('click', (event) => {
    const button = event.target.closest('.theme-card');
    if (!button) {
        return;
    }
    const selectedThemeId = button.dataset.themeId;
    if (!selectedThemeId) {
        return;
    }
    handleManualThemeSelect(selectedThemeId);
});

document.addEventListener('click', (event) => {
    if (!themePicker.contains(event.target)) {
        setPickerOpenState(false);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setPickerOpenState(false);
    }
});
