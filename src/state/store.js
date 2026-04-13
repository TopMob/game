const initialState = {
  content: [],
  query: '',
  activeTags: [],
  mediaType: 'all',
  sortBy: 'latest',
  currentItem: null,
  loading: false
};

export function createStore() {
  let state = structuredClone(initialState);
  const listeners = new Set();

  function getState() {
    return state;
  }

  function setState(partial) {
    state = { ...state, ...partial };
    listeners.forEach((listener) => listener(state));
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return { getState, setState, subscribe };
}
