export function TagChip(tag, onClick) {
  const chip = document.createElement('button');
  chip.className = 'tag-chip';
  chip.type = 'button';
  chip.textContent = `#${tag}`;
  chip.addEventListener('click', () => onClick(tag));
  return chip;
}
