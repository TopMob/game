const scoreValues = [0, 25, 50, 75, 100, 150, 200, 300, 400, 500, 750, 1000];

function sortPosts(posts, mode) {
  if (mode === 'created') {
    return [...posts].sort((a, b) => b.id - a.id);
  }
  if (mode === 'random') {
    return [...posts].sort(() => Math.random() - 0.5);
  }
  return [...posts].sort((a, b) => b.score - a.score);
}

function filterPosts(posts, filters) {
  const query = filters.query.trim().toLowerCase();
  return posts.filter((post) => {
    const byScore = post.score >= filters.scoreMin;
    const byQuery = !query || post.title.toLowerCase().includes(query) || post.tags.toLowerCase().includes(query);
    return byScore && byQuery;
  });
}

export function createPostsPage({ state, onOpenFilters, onDraftChange, onApplyFilters, onSavePost, onHidePost }) {
  const section = document.createElement('section');
  section.className = 'page';

  const header = document.createElement('div');
  header.className = 'posts-header';

  const searchButton = document.createElement('button');
  searchButton.type = 'button';
  searchButton.className = 'btn posts-search';
  searchButton.textContent = '⌕';
  searchButton.addEventListener('click', onOpenFilters);

  const headerTitle = document.createElement('h1');
  headerTitle.className = 'page-title';
  headerTitle.textContent = 'Посты';

  header.append(searchButton, headerTitle);

  const feed = document.createElement('div');
  feed.className = 'posts-feed';

  const sorted = sortPosts(state.posts, state.postFilters.applied.sort);
  const filtered = filterPosts(sorted, state.postFilters.applied);

  filtered.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'post-card';

    const image = document.createElement('img');
    image.className = 'post-card__image';
    image.src = post.image;
    image.alt = post.title;

    const info = document.createElement('div');
    info.className = 'post-card__info';

    const title = document.createElement('strong');
    title.textContent = `${post.title} · #${post.id}`;

    const meta = document.createElement('span');
    meta.className = 'post-card__meta';
    meta.textContent = `${post.tags} · score ${post.score}`;

    const actions = document.createElement('div');
    actions.className = 'post-actions';

    const download = document.createElement('button');
    download.type = 'button';
    download.className = 'btn post-actions__btn';
    download.textContent = '⬇';
    download.addEventListener('click', () => {
      window.open(post.image, '_blank', 'noopener,noreferrer');
    });

    const favorite = document.createElement('button');
    favorite.type = 'button';
    favorite.className = 'btn post-actions__btn';
    favorite.textContent = '★';
    favorite.addEventListener('click', () => onSavePost(post));

    const hide = document.createElement('button');
    hide.type = 'button';
    hide.className = 'btn post-actions__btn';
    hide.textContent = '◴';
    hide.addEventListener('click', () => onHidePost(post));

    const tags = document.createElement('button');
    tags.type = 'button';
    tags.className = 'btn post-actions__btn';
    tags.textContent = '#';

    actions.append(download, favorite, hide, tags);
    info.append(title, meta, actions);
    card.append(image, info);
    feed.append(card);
  });

  const drawer = document.createElement('aside');
  drawer.className = `filter-drawer${state.postFilters.open ? ' filter-drawer--open' : ''}`;

  const drawerTitle = document.createElement('h2');
  drawerTitle.className = 'history__title';
  drawerTitle.textContent = 'Фильтры';

  const searchInput = document.createElement('input');
  searchInput.className = 'filter-input';
  searchInput.placeholder = 'Поиск тегов';
  searchInput.value = state.postFilters.draft.query;
  searchInput.addEventListener('input', (event) => onDraftChange({ query: event.target.value }));

  const sortLabel = document.createElement('h3');
  sortLabel.className = 'filter-subtitle';
  sortLabel.textContent = 'Сортировка';

  const sortRow = document.createElement('div');
  sortRow.className = 'filter-row-buttons';

  ['score', 'created', 'random'].forEach((mode) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `btn filter-chip${state.postFilters.draft.sort === mode ? ' active' : ''}`;
    btn.textContent = mode;
    btn.addEventListener('click', () => onDraftChange({ sort: mode }));
    sortRow.append(btn);
  });

  const scoreLabel = document.createElement('h3');
  scoreLabel.className = 'filter-subtitle';
  scoreLabel.textContent = 'Очки';

  const scoreRow = document.createElement('div');
  scoreRow.className = 'filter-row-buttons';

  scoreValues.forEach((value) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `btn filter-chip${state.postFilters.draft.scoreMin === value ? ' active' : ''}`;
    btn.textContent = `${value}+`;
    btn.addEventListener('click', () => onDraftChange({ scoreMin: value }));
    scoreRow.append(btn);
  });

  const applyButton = document.createElement('button');
  applyButton.type = 'button';
  applyButton.className = 'btn filter-apply';
  applyButton.textContent = 'Сохранить';
  applyButton.addEventListener('click', onApplyFilters);

  drawer.append(drawerTitle, searchInput, sortLabel, sortRow, scoreLabel, scoreRow, applyButton);

  section.append(header, feed, drawer);
  return section;
}
