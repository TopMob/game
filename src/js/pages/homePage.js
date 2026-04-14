import { createPosterCard } from '../components/posterCard.js';

export function createHomePage({ history, collections }) {
  const section = document.createElement('section');
  section.className = 'page';

  const heroButton = document.createElement('button');
  heroButton.type = 'button';
  heroButton.className = 'btn hero-action';
  heroButton.textContent = 'Rule34';

  const filterRow = document.createElement('div');
  filterRow.className = 'filter-row';

  collections.forEach((item) => {
    const card = createPosterCard({
      title: item.title,
      subtitle: item.subtitle,
      ratio: 'tall',
      onClick: () => {
        const target = section.querySelector(`#jump-${item.key}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
    filterRow.append(card);
  });

  const jumpBoard = document.createElement('div');
  jumpBoard.className = 'jump-board';

  collections.forEach((item) => {
    const panel = document.createElement('article');
    panel.className = 'jump-panel';
    panel.id = `jump-${item.key}`;

    const title = document.createElement('h3');
    title.className = 'jump-panel__title';
    title.textContent = item.jumpTitle;

    const text = document.createElement('p');
    text.className = 'jump-panel__text';
    text.textContent = item.jumpText;

    panel.append(title, text);
    jumpBoard.append(panel);
  });

  const historyBox = document.createElement('div');
  historyBox.className = 'page-box history';

  const title = document.createElement('h2');
  title.className = 'history__title';
  title.textContent = 'History';

  historyBox.append(title);

  history.forEach((line) => {
    const entry = document.createElement('p');
    entry.className = 'history__entry';
    entry.textContent = line;
    historyBox.append(entry);
  });

  section.append(heroButton, filterRow, jumpBoard, historyBox);
  return section;
}
