const HOME_ROUTE = '#/home';

export function createRouter({ onRouteChange }) {
  function parseRoute() {
    const hash = window.location.hash || HOME_ROUTE;
    const normalized = hash.startsWith('#') ? hash.slice(1) : hash;
    const parts = normalized.split('/').filter(Boolean);
    const [section = 'home', id = null] = parts;
    return { section, id };
  }

  function navigate(route) {
    if (window.location.hash === route) {
      onRouteChange(parseRoute());
      return;
    }
    window.location.hash = route;
  }

  function start() {
    window.addEventListener('hashchange', () => onRouteChange(parseRoute()));
    if (!window.location.hash) {
      navigate(HOME_ROUTE);
      return;
    }
    onRouteChange(parseRoute());
  }

  return { start, navigate, parseRoute };
}
