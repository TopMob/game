export function createHiddenPage({ posts }) {
  const section = document.createElement('section');
  section.className = 'page';

  const pageTitle = document.createElement('h1');
  pageTitle.className = 'page-title';
  pageTitle.textContent = 'Скрытые посты';

  const box = document.createElement('div');
  box.className = 'page-box card-list';

  if (posts.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'card';
    empty.textContent = 'Скрытых постов пока нет';
    box.append(empty);
  }

  posts.forEach((post) => {
    const item = document.createElement('div');
    item.className = 'card';
    item.textContent = `${post.title} · score ${post.score}`;
    box.append(item);
  });

  section.append(pageTitle, box);
  return section;
}
