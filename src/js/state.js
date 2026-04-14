export const state = {
  page: 'home',
  sidebarOpen: false,
  history: [
    '14:35 14.04.2026 random, score>25, -ai_generated',
    '13:02 14.04.2026 top, score>45, -animated',
    '11:40 14.04.2026 created, source:pixiv, rating:safe',
    '22:13 13.04.2026 trand, order:hot, -watermark'
  ],
  homeCollections: [
    { key: 'top', title: 'Top' },
    { key: 'trand', title: 'Trand' },
    { key: 'created', title: 'Created' }
  ],
  todayPicks: [
    'Cyber district skyline',
    'Atomic corridor lights',
    'Retro terminal room',
    'Night market holo signs'
  ],
  savedPosts: [
    { title: 'Neon rooftop', tags: 'city, night, cyan' },
    { title: 'Lab hallway', tags: 'atomic, retro, glow' },
    { title: 'Street rain', tags: 'cyberpunk, wet, chrome' },
    { title: 'Signal room', tags: 'monitor, amber, old-tech' },
    { title: 'Metro station', tags: 'urban, red, lowlight' },
    { title: 'Control panel', tags: 'ui, data, dark' },
    { title: 'Industrial alley', tags: 'fog, steel, amber' },
    { title: 'Synthwave highway', tags: 'sunset, grid, retro' }
  ],
  account: {
    username: 'topmob_user',
    status: 'Online',
    stats: [
      'Сохранено постов: 238',
      'Подписок на теги: 12',
      'Последний вход: 14.04.2026 14:31'
    ],
    activity: [
      'Добавлен в избранное: Neon rooftop',
      'Открыт поиск: trand + score>35',
      'Изменено качество: Average'
    ]
  },
  settings: [
    { name: 'Изображений на странице', value: '48', hint: '24 / 48 / 72' },
    { name: 'Качество изображений', value: 'Average', hint: 'Low / Average / Original' },
    { name: 'Формат ленты', value: 'Grid', hint: 'Grid / Compact' },
    { name: 'Язык интерфейса', value: 'Русский', hint: 'Русский / English' }
  ]
};

export const pages = {
  home: 'home',
  account: 'account',
  saved: 'saved',
  settings: 'settings'
};
