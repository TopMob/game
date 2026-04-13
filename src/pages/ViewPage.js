import { MediaViewer } from '../components/MediaViewer.js';

export function ViewPage({ item, onBack, onTagSelect }) {
  const page = document.createElement('section');
  page.className = 'page';

  if (!item) {
    page.innerHTML = `
      <div class="page-head">
        <h2>Материал не найден</h2>
      </div>
      <button class="back-link" type="button">Вернуться в ленту</button>
    `;
    page.querySelector('.back-link').addEventListener('click', onBack);
    return page;
  }

  const head = document.createElement('div');
  head.className = 'page-head';
  head.innerHTML = '<button class="back-link" type="button">← Назад</button>';
  head.querySelector('.back-link').addEventListener('click', onBack);

  page.append(head, MediaViewer({ item, onTagSelect }));
  return page;
}
