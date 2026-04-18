export const variableMap = {
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

export const signatureVariableOrder = [
    '--signature-angle',
    '--signature-grain-angle',
    '--signature-stripe-size',
    '--signature-glow-size',
    '--signature-pattern-drift',
    '--signature-opacity'
];

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

function resolveSignatureVariables(theme) {
    const hash = Math.abs(hashThemeId(theme.id));
    const stripeAngle = 15 + (hash % 150);
    const grainAngle = 5 + (hash % 80);
    const stripeSize = 8 + (hash % 14);
    const glowSize = 8 + (hash % 18);
    const patternDrift = 12 + (hash % 28);
    const contrastWeight = parseContrastWeight(theme.contrast);

    return {
        '--signature-angle': `${stripeAngle}deg`,
        '--signature-grain-angle': `${grainAngle}deg`,
        '--signature-stripe-size': `${stripeSize}px`,
        '--signature-glow-size': `${glowSize}px`,
        '--signature-pattern-drift': `${patternDrift}px`,
        '--signature-opacity': contrastWeight.toFixed(2)
    };
}

export function getThemeCssVariables(theme) {
    const variables = {};

    Object.entries(variableMap).forEach(([tokenKey, cssVar]) => {
        const value = theme.tokens[tokenKey];
        if (value !== undefined) {
            variables[cssVar] = value;
        }
    });

    const signatureVariables = resolveSignatureVariables(theme);
    signatureVariableOrder.forEach((key) => {
        variables[key] = signatureVariables[key];
    });

    return variables;
}

export function buildThemeCssRootBlock(theme) {
    const variables = getThemeCssVariables(theme);
    const lines = Object.entries(variables).map(([key, value]) => `    ${key}: ${value};`);
    return [':root {', ...lines, '}'].join('\n');
}

export function applyTheme(theme) {
    const root = document.documentElement;
    const variables = getThemeCssVariables(theme);
    Object.entries(variables).forEach(([cssVar, value]) => {
        root.style.setProperty(cssVar, value);
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
