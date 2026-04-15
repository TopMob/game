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

function hashThemeId(themeId) {
    return [...themeId].reduce((acc, char) => ((acc << 5) - acc) + char.charCodeAt(0), 0);
}

function parseContrastWeight(contrast) {
    switch (contrast) {
        case 'очень высокий':
            return 0.42;
        case 'высокий':
            return 0.34;
        case 'средний':
            return 0.26;
        case 'низкий':
            return 0.18;
        default:
            return 0.24;
    }
}

function applySignatureVariables(root, theme) {
    const hash = Math.abs(hashThemeId(theme.id));
    const stripeAngle = 15 + (hash % 150);
    const grainAngle = 5 + (hash % 80);
    const stripeSize = 8 + (hash % 14);
    const glowSize = 8 + (hash % 18);
    const patternDrift = 12 + (hash % 28);
    const contrastWeight = parseContrastWeight(theme.contrast);

    root.style.setProperty('--signature-angle', `${stripeAngle}deg`);
    root.style.setProperty('--signature-grain-angle', `${grainAngle}deg`);
    root.style.setProperty('--signature-stripe-size', `${stripeSize}px`);
    root.style.setProperty('--signature-glow-size', `${glowSize}px`);
    root.style.setProperty('--signature-pattern-drift', `${patternDrift}px`);
    root.style.setProperty('--signature-opacity', contrastWeight.toFixed(2));
}

export function applyTheme(theme) {
    const root = document.documentElement;
    Object.entries(variableMap).forEach(([tokenKey, cssVar]) => {
        const value = theme.tokens[tokenKey];
        if (value !== undefined) {
            root.style.setProperty(cssVar, value);
        }
    });
    applySignatureVariables(root, theme);
    root.setAttribute('data-theme-id', theme.id);
    root.setAttribute('data-effect', theme.tokens.effect || 'none');
}

export function normalizeThemeList(themeList) {
    return themeList.map((theme) => ({
        ...theme,
        searchable: `${theme.name} ${theme.family} ${theme.mood}`.toLowerCase()
    }));
}
