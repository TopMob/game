import { ContentCard } from './ContentCard.js';

export function ContentGrid({ items, onOpen }) {
  const wrap = document.createElement('section');
  wrap.className = 'content-grid';

  if (items.length === 0) {
    wrap.innerHTML = '<div class="empty-state">Ничего не найдено. Измени запрос или фильтры.</div>';
    return wrap;
  }

  items.forEach((item) => {
    wrap.append(ContentCard(item, onOpen));
  });

  return wrap;
}
