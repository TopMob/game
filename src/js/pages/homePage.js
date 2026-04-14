import { createPosterCard } from '../components/posterCard.js';

export function createHomePage({ history, collections, onOpenPosts }) {
  const section = document.createElement('section');
  section.className = 'page';

  const heroButton = document.createElement('button');
  heroButton.type = 'button';
  heroButton.className = 'btn hero-action';
  heroButton.textContent = 'Rule34';
  heroButton.addEventListener('click', () => {
    onOpenPosts({ sort: 'created', scoreMin: 50 });
  });

  const filterRow = document.createElement('div');
  filterRow.className = 'filter-row';

  collections.forEach((item) => {
    const stack = document.createElement('div');
    stack.className = 'home-filter';

    const label = document.createElement('button');
    label.type = 'button';
    label.className = 'btn home-filter__label';
    label.textContent = item.title;
    label.addEventListener('click', () => {
      onOpenPosts({ sort: item.sort, scoreMin: item.scoreMin });
    });

    const card = createPosterCard({
      title: item.title,
      ratio: 'tall',
      onClick: () => {
        onOpenPosts({ sort: item.sort, scoreMin: item.scoreMin });
      }
    });

    stack.append(label, card);
    filterRow.append(stack);
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
