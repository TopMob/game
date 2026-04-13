# Neon Vault + Supabase + Gelbooru

## Рекомендуемая структура проекта

```text
.
├── index.html
├── .env.example
├── styles/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── themes.css
│   └── responsive.css
├── src/
│   ├── app/
│   │   └── App.js
│   ├── components/
│   │   ├── ContentCard.js
│   │   ├── ContentGrid.js
│   │   ├── FilterPanel.js
│   │   ├── Header.js
│   │   ├── MediaViewer.js
│   │   ├── Sidebar.js
│   │   └── TagChip.js
│   ├── config/
│   │   ├── app.config.js
│   │   ├── app.config.example.js
│   │   └── runtime.js
│   ├── core/
│   │   └── router.js
│   ├── data/
│   │   └── mockContent.js
│   ├── pages/
│   │   ├── DiscoverPage.js
│   │   ├── HomePage.js
│   │   └── ViewPage.js
│   ├── services/
│   │   ├── apiClient.js
│   │   ├── normalizer.js
│   │   ├── repository.js
│   │   └── providers/
│   │       ├── LocalProvider.js
│   │       └── SupabaseProvider.js
│   ├── state/
│   │   └── store.js
│   ├── utils/
│   │   └── format.js
│   └── main.js
└── supabase/
    ├── config.toml
    └── functions/
        ├── _shared/
        │   └── gelbooru.ts
        └── gelbooru-proxy/
            └── index.ts
```

## Локальный запуск

### 1) Запусти Supabase

```bash
supabase start
supabase functions serve gelbooru-proxy --no-verify-jwt
```

### 2) Подними фронт

```bash
python3 -m http.server 5500
```

Открой `http://127.0.0.1:5500`.

## Где хранить URL и ключи

Настройка фронта хранится в `src/config/app.config.js`.

Пример для cloud-проекта:

```js
window.__APP_CONFIG__ = {
  supabaseUrl: 'https://YOUR_PROJECT_REF.supabase.co',
  supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY',
  functionsBase: 'https://YOUR_PROJECT_REF.supabase.co/functions/v1'
};
```

## Как фронт обращается к Edge Function

Фронт отправляет POST на `${functionsBase}/gelbooru-proxy` с `action`:

- `searchPosts`
- `getPostById`
- `searchTags`

## Быстрая проверка работы

1. Открой сайт и убедись, что карточки загрузились из Gelbooru.
2. Введи тег в поиск, проверь обновление сетки.
3. Нажми на подсказку тега, проверь фильтрацию.
4. Открой карточку, проверь страницу просмотра.
5. Перейди по ссылке `Открыть оригинал`.

## Готовые fetch-запросы

```js
await fetch('http://127.0.0.1:54321/functions/v1/gelbooru-proxy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ action: 'searchPosts', query: 'neon city', tags: ['night'], limit: 24, page: 0 })
});
```

```js
await fetch('http://127.0.0.1:54321/functions/v1/gelbooru-proxy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ action: 'getPostById', id: '123456' })
});
```

```js
await fetch('http://127.0.0.1:54321/functions/v1/gelbooru-proxy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ action: 'searchTags', term: 'cyber', limit: 8 })
});
```
