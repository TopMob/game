export function createSimplePage({ title, lines }) {
  const section = document.createElement('section');
  section.className = 'page';

  const pageTitle = document.createElement('h1');
  pageTitle.className = 'page-title';
  pageTitle.textContent = title;

  const box = document.createElement('div');
  box.className = 'page-box card-list';

  lines.forEach((line) => {
    const item = document.createElement('div');
    item.className = 'card';
    item.textContent = line;
    box.append(item);
  });

  section.append(pageTitle, box);
  return section;
}
