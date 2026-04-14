export function createPosterCard({ title, subtitle = '', ratio = 'square', onClick }) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `poster-card poster-card--${ratio}`;

  const poster = document.createElement('span');
  poster.className = 'poster-card__art';

  const meta = document.createElement('span');
  meta.className = 'poster-card__meta';

  const name = document.createElement('strong');
  name.className = 'poster-card__title';
  name.textContent = title;

  meta.append(name);

  if (subtitle) {
    const text = document.createElement('span');
    text.className = 'poster-card__subtitle';
    text.textContent = subtitle;
    meta.append(text);
  }

  button.append(poster, meta);

  if (onClick) {
    button.addEventListener('click', onClick);
  }

  return button;
}
