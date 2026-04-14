export const state = {
  page: 'home',
  sidebarOpen: false,
  history: [
    '14:35 14.04.2026 random, score>25, -ai_generated',
    '12:10 13.04.2026 top, score>40, artist:senju',
    '08:42 13.04.2026 created, tag:cyberpunk_city'
  ],
  homeCollections: [
    { key: 'top', title: 'Top' },
    { key: 'trand', title: 'Trand' },
    { key: 'created', title: 'Created' }
  ],
  savedPosts: [
    { title: 'Neon rooftop', tags: 'city, night, cyan' },
    { title: 'Lab hallway', tags: 'atomic, retro, glow' },
    { title: 'Street rain', tags: 'cyberpunk, wet, chrome' },
    { title: 'Signal room', tags: 'monitor, amber, old-tech' },
    { title: 'Metro station', tags: 'urban, red, lowlight' },
    { title: 'Control panel', tags: 'ui, data, dark' }
  ],
  settings: [
    { name: 'Изображений на странице', value: '48', hint: '24 / 48 / 72' },
    { name: 'Качество изображений', value: 'Average', hint: 'Low / Average / Original' }
  ]
};

export const pages = {
  home: 'home',
  account: 'account',
  saved: 'saved',
  settings: 'settings'
};
