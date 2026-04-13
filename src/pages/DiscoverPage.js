import { ContentGrid } from '../components/ContentGrid.js';

export function DiscoverPage({ items, onOpen }) {
  const page = document.createElement('section');
  page.className = 'page';
  page.innerHTML = `
    <div class="page-head">
      <h2>Обзор коллекции</h2>
      <p>Фильтруй по типу, тегам и сортировке для быстрого доступа.</p>
    </div>
  `;
  page.append(ContentGrid({ items, onOpen }));
  return page;
}
