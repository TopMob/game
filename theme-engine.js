const variableMap = {
    bg: '--bg-color',
    bgGradient: '--bg-gradient',
    surface: '--surface-color',
    text: '--text-color',
    accent: '--accent-color',
    accentAlt: '--accent-alt',
    borderColor: '--border-color',
    borderWidth: '--border-width',
    borderStyle: '--border-style',
    radius: '--radius',
    font: '--font-main',
    shadow: '--shadow',
    chip: '--chip-bg',
    buttonText: '--btn-text',
    textScale: '--text-scale',
    cardPadding: '--card-padding',
    surfaceOverlay: '--surface-overlay',
    transition: '--ui-transition'
};

export function applyTheme(theme) {
    const root = document.documentElement;
    Object.entries(variableMap).forEach(([tokenKey, cssVar]) => {
        const value = theme.tokens[tokenKey];
        if (value !== undefined) {
            root.style.setProperty(cssVar, value);
        }
    });
    root.setAttribute('data-theme-id', theme.id);
    root.setAttribute('data-effect', theme.tokens.effect || 'none');
}

export function normalizeThemeList(themeList) {
    return themeList.map((theme) => ({
        ...theme,
        searchable: `${theme.name} ${theme.family} ${theme.mood}`.toLowerCase()
    }));
}
