import { createPosterCard } from '../components/posterCard.js';

export function createSavedPage({ posts }) {
  const section = document.createElement('section');
  section.className = 'page';

  const pageTitle = document.createElement('h1');
  pageTitle.className = 'page-title';
  pageTitle.textContent = 'Сохранённые посты';

  const grid = document.createElement('div');
  grid.className = 'poster-grid';

  posts.forEach((post) => {
    const card = createPosterCard({
      title: post.title,
      subtitle: post.tags,
      ratio: post.ratio
    });
    grid.append(card);
  });

  section.append(pageTitle, grid);
  return section;
}
