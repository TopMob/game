import { createPosterCard } from '../components/posterCard.js';

export function createHomePage({ history, collections, todayPicks }) {
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
      ratio: 'tall'
    });
    filterRow.append(card);
  });

  const picksBox = document.createElement('div');
  picksBox.className = 'page-box card-list';

  const picksTitle = document.createElement('h2');
  picksTitle.className = 'history__title';
  picksTitle.textContent = 'Today picks';

  picksBox.append(picksTitle);

  todayPicks.forEach((pick) => {
    const item = document.createElement('div');
    item.className = 'card';
    item.textContent = pick;
    picksBox.append(item);
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

  section.append(heroButton, filterRow, picksBox, historyBox);
  return section;
}
