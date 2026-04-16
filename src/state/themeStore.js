const STORAGE_KEY = 'smart-deadline-theme';
const THEMES = ['neu', 'glitch'];

export function createThemeStore() {
  let theme = loadTheme();

  function loadTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(stored) ? stored : 'neu';
  }

  function saveTheme(nextTheme) {
    localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return {
    get() {
      return theme;
    },
    getAvailableThemes() {
      return [...THEMES];
    },
    set(nextTheme) {
      if (!THEMES.includes(nextTheme)) {
        return theme;
      }
      theme = nextTheme;
      saveTheme(theme);
      return theme;
    }
  };
}
