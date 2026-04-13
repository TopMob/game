export function FilterPanel({ tags, activeTags, mediaType, sortBy, onTagToggle, onTypeChange, onSortChange }) {
  const panel = document.createElement('section');
  panel.className = 'filter-panel';

  panel.innerHTML = `
    <div class="filter-row">
      <label class="control-label">Тип</label>
      <select class="select-control" name="mediaType">
        <option value="all" ${mediaType === 'all' ? 'selected' : ''}>Все</option>
        <option value="image" ${mediaType === 'image' ? 'selected' : ''}>Изображения</option>
        <option value="video" ${mediaType === 'video' ? 'selected' : ''}>Видео</option>
        <option value="gif" ${mediaType === 'gif' ? 'selected' : ''}>GIF</option>
      </select>
    </div>
    <div class="filter-row">
      <label class="control-label">Сортировка</label>
      <select class="select-control" name="sortBy">
        <option value="latest" ${sortBy === 'latest' ? 'selected' : ''}>Сначала новые</option>
        <option value="top" ${sortBy === 'top' ? 'selected' : ''}>По рейтингу</option>
        <option value="alpha" ${sortBy === 'alpha' ? 'selected' : ''}>По алфавиту</option>
      </select>
    </div>
    <div class="tag-zone"></div>
  `;

  panel.querySelector('[name="mediaType"]').addEventListener('change', (event) => onTypeChange(event.target.value));
  panel.querySelector('[name="sortBy"]').addEventListener('change', (event) => onSortChange(event.target.value));

  const tagZone = panel.querySelector('.tag-zone');
  tags.forEach((tag) => {
    const button = document.createElement('button');
    button.className = `tag-chip ${activeTags.includes(tag) ? 'is-active' : ''}`;
    button.type = 'button';
    button.textContent = `#${tag}`;
    button.addEventListener('click', () => onTagToggle(tag));
    tagZone.append(button);
  });

  return panel;
}
