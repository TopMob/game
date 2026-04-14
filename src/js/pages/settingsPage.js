export function createSettingsPage({ options }) {
  const section = document.createElement('section');
  section.className = 'page';

  const pageTitle = document.createElement('h1');
  pageTitle.className = 'page-title';
  pageTitle.textContent = 'Настройки';

  const list = document.createElement('div');
  list.className = 'settings-list page-box';

  options.forEach((option) => {
    const row = document.createElement('div');
    row.className = 'settings-item';

    const name = document.createElement('strong');
    name.className = 'settings-item__name';
    name.textContent = option.name;

    const value = document.createElement('span');
    value.className = 'settings-item__value';
    value.textContent = option.value;

    const hint = document.createElement('span');
    hint.className = 'settings-item__hint';
    hint.textContent = option.hint;

    row.append(name, value, hint);
    list.append(row);
  });

  section.append(pageTitle, list);
  return section;
}
