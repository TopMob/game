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

  const historyAnchor = document.createElement('div');
  historyAnchor.id = 'history-anchor';

  collections.forEach((item) => {
    const card = createPosterCard({
      title: item.title,
      ratio: 'tall',
      onClick: () => {
        historyAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    filterRow.append(card);
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

  section.append(heroButton, filterRow, historyAnchor, historyBox);
  return section;
}
