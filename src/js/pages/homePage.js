export function createHomePage({ history }) {
  const section = document.createElement('section');
  section.className = 'page';

  const heroButton = document.createElement('button');
  heroButton.type = 'button';
  heroButton.className = 'btn hero-action';
  heroButton.textContent = 'Rule34';

  const filterRow = document.createElement('div');
  filterRow.className = 'filter-row';

  ['Top', 'Trand', 'Created'].forEach((item) => {
    const filterButton = document.createElement('button');
    filterButton.type = 'button';
    filterButton.className = 'btn btn--filter';
    filterButton.textContent = item;
    filterRow.append(filterButton);
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

  section.append(heroButton, filterRow, historyBox);
  return section;
}
