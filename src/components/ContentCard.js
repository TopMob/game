import { formatDate } from '../utils/format.js';

export function ContentCard(item, onOpen) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <button class="card-hitbox" type="button">
      <img class="card-preview" src="${item.preview}" alt="${item.title}" loading="lazy" />
      <div class="card-overlay">
        <span class="card-type">${item.mediaType.toUpperCase()}</span>
        <span class="card-score">★ ${item.score}</span>
      </div>
      <div class="card-meta">
        <h3>${item.title}</h3>
        <p>${item.creator}</p>
        <time>${formatDate(item.postedAt)}</time>
      </div>
    </button>
  `;
  card.querySelector('.card-hitbox').addEventListener('click', () => onOpen(item.id));
  return card;
}
