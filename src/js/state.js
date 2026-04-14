export const state = {
  page: 'home',
  sidebarOpen: false,
  history: [
    '14:35 14.04.2026 random, score>25, -ai_generated',
    '13:02 14.04.2026 top, score>45, -animated',
    '11:40 14.04.2026 created, source:pixiv, rating:safe',
    '22:13 13.04.2026 random, order:hot, -watermark'
  ],
  homeCollections: [
    { key: 'top', title: 'Top', sort: 'score', scoreMin: 0 },
    { key: 'random', title: 'Random', sort: 'random', scoreMin: 0 },
    { key: 'created', title: 'Created', sort: 'created', scoreMin: 0 }
  ],
  posts: [
    { id: 1098, title: 'Night district', tags: 'city, neon, anime', score: 184, image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?w=900&auto=format&fit=crop' },
    { id: 1072, title: 'Retro station', tags: 'station, glow, cyber', score: 92, image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=900&auto=format&fit=crop' },
    { id: 1033, title: 'Skyline signal', tags: 'skyline, lights, purple', score: 61, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&auto=format&fit=crop' }
  ],
  savedPosts: [
    { title: 'Neon rooftop', tags: 'city, night, cyan' },
    { title: 'Lab hallway', tags: 'atomic, retro, glow' },
    { title: 'Street rain', tags: 'cyberpunk, wet, chrome' },
    { title: 'Signal room', tags: 'monitor, amber, old-tech' }
  ],
  hiddenPosts: [],
  account: {
    username: 'topmob_user',
    status: 'Online',
    stats: ['Сохранено постов: 238', 'Подписок на теги: 12', 'Последний вход: 14.04.2026 14:31'],
    activity: ['Добавлен в избранное: Neon rooftop', 'Открыт поиск: random + score>35', 'Изменено качество: Average']
  },
  settings: [
    { name: 'Изображений на странице', value: '48', hint: '24 / 48 / 72' },
    { name: 'Качество изображений', value: 'Average', hint: 'Low / Average / Original' },
    { name: 'Формат ленты', value: 'Grid', hint: 'Grid / Compact' },
    { name: 'Язык интерфейса', value: 'Русский', hint: 'Русский / English' }
  ],
  postFilters: {
    open: false,
    applied: { query: '', sort: 'score', scoreMin: 0 },
    draft: { query: '', sort: 'score', scoreMin: 0 }
  }
};

export const pages = {
  home: 'home',
  account: 'account',
  saved: 'saved',
  hidden: 'hidden',
  settings: 'settings',
  posts: 'posts'
};
