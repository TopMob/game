export function formatDate(dateString) {
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(new Date(dateString));
}

export function uniqueTags(items) {
  return [...new Set(items.flatMap((item) => item.tags))].sort((a, b) => a.localeCompare(b));
}

export function applyFilters(items, state) {
  const query = state.query.trim().toLowerCase();
  const tags = state.activeTags;
  const sorted = [...items];

  const filtered = sorted.filter((item) => {
    const matchesQuery = !query || `${item.title} ${item.tags.join(' ')}`.toLowerCase().includes(query);
    const matchesTags = tags.length === 0 || tags.every((tag) => item.tags.includes(tag));
    return matchesQuery && matchesTags;
  });

  if (state.sortBy === 'latest') {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  if (state.sortBy === 'top') {
    filtered.sort((a, b) => b.score - a.score);
  }

  if (state.sortBy === 'alpha') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filtered;
}
