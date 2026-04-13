import { formatDate } from '../utils/format.js';
import { TagChip } from './TagChip.js';

export function MediaViewer({ item, onTagSelect }) {
  const viewer = document.createElement('section');
  viewer.className = 'viewer';

  const visual = document.createElement('div');
  visual.className = 'viewer-media';
  visual.innerHTML = `<img src="${item.sampleUrl || item.fileUrl}" alt="${item.title}" />`;

  const details = document.createElement('div');
  details.className = 'viewer-details';
  details.innerHTML = `
    <h2>${item.title}</h2>
    <p class="viewer-creator">Источник: ${item.source}</p>
    <p class="viewer-description">Размер: ${item.width}×${item.height}</p>
    <div class="viewer-stats">
      <span>Тип: media</span>
      <span>Рейтинг: ${item.rating}</span>
      <span>Score: ${item.score}</span>
      <span>Дата: ${formatDate(item.createdAt)}</span>
    </div>
    <a class="source-link" href="${item.fileUrl}" target="_blank" rel="noreferrer">Открыть оригинал</a>
    <div class="viewer-tags"></div>
  `;

  const tagWrap = details.querySelector('.viewer-tags');
  item.tags.forEach((tag) => {
    const chip = TagChip(tag, onTagSelect);
    tagWrap.append(chip);
  });

  viewer.append(visual, details);
  return viewer;
}
