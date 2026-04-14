export function createAccountPage({ account }) {
  const section = document.createElement('section');
  section.className = 'page';

  const pageTitle = document.createElement('h1');
  pageTitle.className = 'page-title';
  pageTitle.textContent = 'Аккаунт';

  const profileBox = document.createElement('div');
  profileBox.className = 'page-box card-list';

  const username = document.createElement('div');
  username.className = 'card';
  username.textContent = `Пользователь: ${account.username}`;

  const status = document.createElement('div');
  status.className = 'card';
  status.textContent = `Статус: ${account.status}`;

  profileBox.append(username, status);

  const statsBox = document.createElement('div');
  statsBox.className = 'page-box card-list';

  const statsTitle = document.createElement('h2');
  statsTitle.className = 'history__title';
  statsTitle.textContent = 'Статистика';

  statsBox.append(statsTitle);

  account.stats.forEach((line) => {
    const item = document.createElement('div');
    item.className = 'card';
    item.textContent = line;
    statsBox.append(item);
  });

  const activityBox = document.createElement('div');
  activityBox.className = 'page-box card-list';

  const activityTitle = document.createElement('h2');
  activityTitle.className = 'history__title';
  activityTitle.textContent = 'Последняя активность';

  activityBox.append(activityTitle);

  account.activity.forEach((line) => {
    const item = document.createElement('div');
    item.className = 'card';
    item.textContent = line;
    activityBox.append(item);
  });

  section.append(pageTitle, profileBox, statsBox, activityBox);
  return section;
}
