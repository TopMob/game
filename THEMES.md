# Каталог тем

Ниже полный набор из 30 тем для демонстрации и выбора.

| № | ID | Название | Семейство | Ключевая идея |
|---|---|---|---|---|
| 1 | `atomic-heart-retro` | Atomic Heart Retro | Советский футуризм | Утопический индустриализм 50-х, бумага + металл + кумач. |
| 2 | `cyberpunk-neon` | Cyberpunk Neon | Night City | Агрессивный неон и высокий контраст. |
| 3 | `aurora-glass` | Aurora Glass | Glassmorphism | Матовое стекло и мягкая глубина. |
| 4 | `vaporwave-80s` | Vaporwave 80s | Retro-Digital | Пиксельный ретро-интернет и кислотные градиенты. |
| 5 | `forest-fog` | Forest Fog | Organic Matte | Спокойные природные матовые оттенки. |
| 6 | `sunset-miami` | Sunset Miami | Synthwave | Закатные линии и ночной неон. |
| 7 | `midnight-terminal` | Midnight Terminal | Hacker Style | CRT-терминал и матричный зелёный. |
| 8 | `paper-ink` | Paper & Ink | Editorial | Чистая полиграфика и типографика. |
| 9 | `luxury-gold` | Luxury Gold | Premium Dark | Тёмная роскошь с золотом. |
| 10 | `ice-minimal` | Ice Minimal | Arctic Tech | Стерильный холодный минимализм. |
| 11 | `toxic-lime` | Toxic Lime | Hardcore Gaming | Warning-эстетика и токсичный лайм. |
| 12 | `deep-ocean` | Deep Ocean | Aquatic Calm | Морская глубина и плавные формы. |
| 13 | `neumorphism-soft-ui` | Neumorphism | Soft UI | Объём через светлую и тёмную тени. |
| 14 | `brutalism-raw-web` | Brutalism | Raw Web | Грубые рамки, ноль сглаживания. |
| 15 | `swiss-design` | Swiss Design | Bauhaus | Строгая сетка и первичные акценты. |
| 16 | `claymorphism-friendly-ui` | Claymorphism | Friendly UI | Мягкие «глиняные» формы. |
| 17 | `solarpunk-eco-future` | Solarpunk | Eco-Future | Органика, зелень и солнечная энергия. |
| 18 | `steampunk-victorian-tech` | Steampunk | Victorian Tech | Медь, латунь и механика. |
| 19 | `manga-sketch` | Manga Sketch | Halftone | Черно-белая комиксная страница. |
| 20 | `blueprint-engineer-draft` | Blueprint | Engineer Draft | Синька и сетка чертежа. |
| 21 | `glitch-core` | Glitch Core | Digital Chaos | RGB-сдвиг и эффект помех. |
| 22 | `nordic-noir` | Nordic Noir | Scandinavian Dark | Холодная минималистичная меланхолия. |
| 23 | `pop-art` | Pop Art | Lichtenstein | Яркий CMYK и жирные контуры. |
| 24 | `medieval-parchment` | Medieval Parchment | RPG UI | Пергамент и готический настрой. |
| 25 | `space-hud` | Space HUD | Sci-Fi Interface | Кокпитный интерфейс со скан-акцентами. |
| 26 | `web-90s` | 90s Web | Geocities | Outset-кнопки и ностальгия браузеров 90-х. |
| 27 | `liquid-organic` | Liquid Organic | Fluid | Жидкие формы и водные градиенты. |
| 28 | `dark-academia` | Dark Academia | Тайная библиотека | Мрачная классика университетских архивов. |
| 29 | `holographic-iridescence` | Holographic Iridescence | Жемчужный софт-тек | Радужные переливы и перламутр. |
| 30 | `raygun-gothic` | Raygun Gothic | Ретро-футуризм 60-х | Хром и атомные формы старого будущего. |

## Как расширять систему

1. Добавь новый объект в `themes.js` в массив `themes`.
2. Определи обязательные поля: `id`, `name`, `family`, `mood`, `contrast`, `description`, `tokens`.
3. Если нужен особый визуальный эффект, укажи `tokens.effect` и добавь правило в `style.css` по селектору `[data-effect='...']`.
4. Тема автоматически появится в списке выбора и в карточке метаданных, без правок в `index.html`.
