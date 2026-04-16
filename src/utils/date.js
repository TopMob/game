const DAY_MS = 1000 * 60 * 60 * 24;

export function toDateKey(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

export function daysUntil(targetDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - today.getTime()) / DAY_MS);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}

export function eachDateUntil(deadline) {
  const list = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  const end = new Date(deadline);
  end.setHours(0, 0, 0, 0);

  while (cursor <= end) {
    list.push(toDateKey(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return list;
}
