import { ContentGrid } from '../components/ContentGrid.js';

export function HomePage({ items, onOpen }) {
  const page = document.createElement('section');
  page.className = 'page';
  page.innerHTML = `
    <div class="page-head">
      <h2>Лента контента</h2>
      <p>Актуальные материалы в едином потоке.</p>
    </div>
  `;
  page.append(ContentGrid({ items, onOpen }));
  return page;
}
