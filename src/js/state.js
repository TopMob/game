export const state = {
  page: 'home',
  sidebarOpen: false,
  history: [
    '14:35 14.04.2026 random, score>25, -ai_generated',
    '12:10 13.04.2026 top, score>40, artist:senju',
    '08:42 13.04.2026 created, tag:cyberpunk_city'
  ],
  homeCollections: [
    {
      key: 'top',
      title: 'Top',
      subtitle: 'Лучшее за день',
      jumpTitle: 'Top feed',
      jumpText: 'Подборка с наивысшим рейтингом и стабильным quality-score.'
    },
    {
      key: 'trand',
      title: 'Trand',
      subtitle: 'Горячее сейчас',
      jumpTitle: 'Trand feed',
      jumpText: 'Самые активные запросы и быстрорастущие посты за последние часы.'
    },
    {
      key: 'created',
      title: 'Created',
      subtitle: 'Свежее',
      jumpTitle: 'Created feed',
      jumpText: 'Новые публикации по времени добавления и релевантности тегов.'
    }
  ],
  savedPosts: [
    { title: 'Neon rooftop', tags: 'city, night, cyan', ratio: 'tall' },
    { title: 'Lab hallway', tags: 'atomic, retro, glow', ratio: 'wide' },
    { title: 'Street rain', tags: 'cyberpunk, wet, chrome', ratio: 'square' },
    { title: 'Signal room', tags: 'monitor, amber, old-tech', ratio: 'tall' },
    { title: 'Metro station', tags: 'urban, red, lowlight', ratio: 'wide' },
    { title: 'Control panel', tags: 'ui, data, dark', ratio: 'square' }
  ],
  settings: [
    { name: 'Изображений на странице', value: '48', hint: '24 / 48 / 72' },
    { name: 'Качество изображений', value: 'Average', hint: 'Low / Average / Original' },
    { name: 'Сортировка по умолчанию', value: 'Top', hint: 'Top / Trand / Created' },
    { name: 'Безопасный фильтр', value: 'Custom', hint: 'Off / Soft / Custom' },
    { name: 'Предзагрузка превью', value: 'Включена', hint: 'Экономит время при скролле' }
  ]
};

export const pages = {
  home: 'home',
  account: 'account',
  saved: 'saved',
  settings: 'settings'
};
