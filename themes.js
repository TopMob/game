const base = {
    radius: '14px',
    borderWidth: '1px',
    borderStyle: 'solid',
    font: "'Inter', sans-serif",
    textScale: '1',
    shadow: '0 14px 34px rgba(0,0,0,0.2)',
    cardPadding: '2rem',
    effect: 'none',
    surfaceOverlay: 'none'
};

export const themes = [
    {
        id: 'atomic-heart-retro',
        name: 'Atomic Heart Retro',
        family: 'Советский футуризм',
        mood: 'ретро-индустриализм',
        contrast: 'средний',
        description: 'Утопический индустриализм 50-х: металл, дерево и агит-эстетика.',
        tokens: { ...base, bg: '#F4F1EA', bgGradient: 'linear-gradient(180deg,#F4F1EA 0%,#EDE6D5 100%)', surface: '#E3DCC8', text: '#2B2523', accent: '#A62A2A', accentAlt: '#5C6B64', borderColor: '#2B2523', chip: 'rgba(92,107,100,0.18)', buttonText: '#F4F1EA', radius: '18px', borderWidth: '2px', font: "'Courier Prime', monospace", shadow: '5px 5px 0 rgba(43,37,35,0.35)' }
    },
    {
        id: 'cyberpunk-neon',
        name: 'Cyberpunk Neon',
        family: 'Night City',
        mood: 'агрессивный хай-тек',
        contrast: 'очень высокий',
        description: 'Неон, острые формы и максимальный контраст ночного мегаполиса.',
        tokens: { ...base, bg: '#0D0D0D', bgGradient: 'radial-gradient(circle at 20% 20%,#251047 0%,#0D0D0D 40%,#060606 100%)', surface: '#1A1A1A', text: '#E0E0E0', accent: '#FCE205', accentAlt: '#FF007F', borderColor: '#FCE205', chip: 'rgba(0,243,255,0.16)', buttonText: '#111111', radius: '0px', borderWidth: '2px', font: "'Orbitron', sans-serif", shadow: '4px 4px 0 #00F3FF', effect: 'glow' }
    },
    {
        id: 'aurora-glass',
        name: 'Aurora Glass',
        family: 'Glassmorphism',
        mood: 'премиальная лёгкость',
        contrast: 'средний',
        description: 'Полупрозрачное стекло, мягкая глубина и современный premium-вид.',
        tokens: { ...base, bg: '#0F172A', bgGradient: 'radial-gradient(circle at top left,#273B84 0%,#0F172A 55%,#060B18 100%)', surface: 'rgba(255,255,255,0.05)', text: '#F8FAFC', accent: '#8B5CF6', accentAlt: '#C4B5FD', borderColor: 'rgba(255,255,255,0.24)', chip: 'rgba(255,255,255,0.14)', buttonText: '#FFFFFF', radius: '22px', borderWidth: '1px', shadow: '0 12px 35px rgba(0,0,0,0.3)', effect: 'glass', surfaceOverlay: 'blur(10px)' }
    },
    {
        id: 'vaporwave-80s',
        name: 'Vaporwave 80s',
        family: 'Retro-Digital',
        mood: 'ностальгия и глянец',
        contrast: 'высокий',
        description: 'Пиксели, неоновая бирюза и градиенты раннего интернета.',
        tokens: { ...base, bg: '#FFB6C1', bgGradient: 'linear-gradient(180deg,#FFB6C1 0%,#8A2BE2 70%,#4F0C8A 100%)', surface: '#8A2BE2', text: '#00FFFF', accent: '#FF00FF', accentAlt: '#7FFF00', borderColor: '#00FFFF', chip: 'rgba(127,255,0,0.18)', buttonText: '#2B004A', radius: '0px', borderStyle: 'dashed', borderWidth: '3px', font: "'Press Start 2P', cursive", textScale: '0.84', shadow: '6px 6px 0 #FF00FF', effect: 'grid' }
    },
    {
        id: 'forest-fog',
        name: 'Forest Fog',
        family: 'Organic Matte',
        mood: 'визуальный отдых',
        contrast: 'низкий',
        description: 'Матовые натуральные оттенки с широкими отступами и мягкой глубиной.',
        tokens: { ...base, bg: '#2D3632', bgGradient: 'linear-gradient(180deg,#34403A 0%,#2D3632 100%)', surface: '#3E4A44', text: '#C2C9C5', accent: '#8DA399', accentAlt: '#D4A373', borderColor: '#5B6B63', chip: 'rgba(212,163,115,0.16)', buttonText: '#1E2421', radius: '18px', cardPadding: '2.4rem', shadow: '0 18px 30px rgba(0,0,0,0.2)' }
    },
    {
        id: 'sunset-miami',
        name: 'Sunset Miami',
        family: 'Synthwave',
        mood: 'вечернее побережье',
        contrast: 'высокий',
        description: 'Горячий закат, световые полосы и сильные акцентные блики.',
        tokens: { ...base, bg: '#240b36', bgGradient: 'linear-gradient(180deg,#240b36 0%,#c31432 100%)', surface: '#c31432', text: '#FFFFFF', accent: '#ED8F03', accentAlt: '#FF3CAC', borderColor: 'rgba(255,255,255,0.25)', chip: 'rgba(255,60,172,0.2)', buttonText: '#2A0820', radius: '16px', shadow: '0 16px 35px rgba(0,0,0,0.3)', effect: 'sunlines' }
    },
    {
        id: 'midnight-terminal',
        name: 'Midnight Terminal',
        family: 'Hacker Style',
        mood: 'CRT терминал',
        contrast: 'высокий',
        description: 'Чёрный фон, матричный зелёный, мерцание и монопространство.',
        tokens: { ...base, bg: '#050505', bgGradient: 'linear-gradient(180deg,#050505 0%,#0A0A0A 100%)', surface: '#0A0A0A', text: '#00FF41', accent: '#008F11', accentAlt: '#00FF41', borderColor: '#008F11', chip: 'rgba(0,255,65,0.16)', buttonText: '#001E08', radius: '2px', font: "'Fira Code', monospace", shadow: '0 0 16px rgba(0,255,65,0.25)', effect: 'scanline' }
    },
    {
        id: 'paper-ink',
        name: 'Paper & Ink',
        family: 'Editorial',
        mood: 'дорогая полиграфия',
        contrast: 'высокий',
        description: 'Чистая типографика, без градиентов и без декоративных теней.',
        tokens: { ...base, bg: '#F9F7F2', bgGradient: 'none', surface: '#FFFFFF', text: '#1A1A1B', accent: '#3D5A80', accentAlt: '#1A1A1B', borderColor: '#1A1A1B', chip: 'rgba(61,90,128,0.12)', buttonText: '#FFFFFF', radius: '4px', font: "'Playfair Display', serif", shadow: 'none' }
    },
    {
        id: 'luxury-gold',
        name: 'Luxury Gold',
        family: 'Premium Dark',
        mood: 'элегантность',
        contrast: 'высокий',
        description: 'Тёмная роскошь, тонкие линии и золотой металлический акцент.',
        tokens: { ...base, bg: '#0A0A0A', bgGradient: 'radial-gradient(circle at top,#1F1A12 0%,#0A0A0A 60%)', surface: '#161616', text: '#E5E5E5', accent: '#D4AF37', accentAlt: '#8C6A11', borderColor: '#D4AF37', chip: 'rgba(212,175,55,0.18)', buttonText: '#1B1304', radius: '12px', font: "'Playfair Display', serif", shadow: '0 12px 34px rgba(0,0,0,0.4)', effect: 'gold' }
    },
    {
        id: 'ice-minimal',
        name: 'Ice Minimal',
        family: 'Arctic Tech',
        mood: 'стерильная ясность',
        contrast: 'низкий',
        description: 'Тонкие линии и холодный светлый спектр будущего интерфейса.',
        tokens: { ...base, bg: '#F0F4F8', bgGradient: 'linear-gradient(180deg,#F0F4F8 0%,#E4EDF6 100%)', surface: '#D9E2EC', text: '#334E68', accent: '#62B1F6', accentAlt: '#BCCCDC', borderColor: '#BCCCDC', chip: 'rgba(98,177,246,0.16)', buttonText: '#0F3150', radius: '12px', borderWidth: '0.5px', shadow: '0 10px 28px rgba(101,130,158,0.2)' }
    },
    {
        id: 'toxic-lime',
        name: 'Toxic Lime',
        family: 'Hardcore Gaming',
        mood: 'экстрим',
        contrast: 'очень высокий',
        description: 'Warning-эстетика, рейв-контраст и агрессивный лаймовый свет.',
        tokens: { ...base, bg: '#121212', bgGradient: 'linear-gradient(180deg,#121212 0%,#0B0B0B 100%)', surface: '#1E1E1E', text: '#FFFFFF', accent: '#CCFF00', accentAlt: '#333333', borderColor: '#CCFF00', chip: 'rgba(204,255,0,0.16)', buttonText: '#243300', radius: '6px', borderWidth: '2px', font: "'Orbitron', sans-serif", shadow: '0 0 18px rgba(204,255,0,0.4)', effect: 'hazard' }
    },
    {
        id: 'deep-ocean',
        name: 'Deep Ocean',
        family: 'Aquatic Calm',
        mood: 'глубина и баланс',
        contrast: 'средний',
        description: 'Сине-океанические переходы, округлые формы и спокойный ритм.',
        tokens: { ...base, bg: '#021024', bgGradient: 'radial-gradient(circle at 40% 10%,#052659 0%,#021024 75%)', surface: '#052659', text: '#C1E8FF', accent: '#7DA1C4', accentAlt: '#5483B3', borderColor: '#5483B3', chip: 'rgba(125,161,196,0.2)', buttonText: '#021A2E', radius: '22px', shadow: '0 18px 36px rgba(1,10,22,0.45)' }
    },
    {
        id: 'neumorphism-soft-ui',
        name: 'Neumorphism',
        family: 'Soft UI',
        mood: 'мягкий объём',
        contrast: 'низкий',
        description: 'Одинаковый фон и карточки, объём формируется двойными тенями.',
        tokens: { ...base, bg: '#E0E5EC', bgGradient: 'none', surface: '#E0E5EC', text: '#3A4A61', accent: '#7A8CA8', accentAlt: '#A3B1C6', borderColor: 'transparent', chip: 'rgba(163,177,198,0.24)', buttonText: '#F7FBFF', radius: '20px', borderWidth: '0px', shadow: '-8px -8px 16px #ffffff, 8px 8px 16px #a3b1c6', effect: 'neu' }
    },
    {
        id: 'brutalism-raw-web',
        name: 'Brutalism',
        family: 'Raw Web',
        mood: 'радикальная честность',
        contrast: 'очень высокий',
        description: 'Толстые чёрные рамки, жёлтые плашки и нулевая декоративность.',
        tokens: { ...base, bg: '#FFFFFF', bgGradient: 'none', surface: '#FFFF00', text: '#000000', accent: '#000000', accentAlt: '#FFFF00', borderColor: '#000000', chip: 'rgba(0,0,0,0.12)', buttonText: '#FFFF00', radius: '0px', borderWidth: '4px', font: "system-ui, sans-serif", shadow: '8px 8px 0 #000000', effect: 'brutal', transition: 'none' }
    },
    {
        id: 'swiss-design',
        name: 'Swiss Design',
        family: 'Bauhaus',
        mood: 'строгая сетка',
        contrast: 'высокий',
        description: 'Сетка, асимметрия и первичные акценты красного и синего.',
        tokens: { ...base, bg: '#FFFFFF', bgGradient: 'none', surface: '#FFFFFF', text: '#000000', accent: '#E63946', accentAlt: '#457B9D', borderColor: '#000000', chip: 'rgba(69,123,157,0.16)', buttonText: '#FFFFFF', radius: '0px', shadow: 'none', borderWidth: '2px', font: "'Manrope', sans-serif", effect: 'swiss' }
    },
    {
        id: 'claymorphism-friendly-ui',
        name: 'Claymorphism',
        family: 'Friendly UI',
        mood: 'мягкая пластика',
        contrast: 'средний',
        description: 'Глиняные формы с мягкими тенями и сильным скруглением.',
        tokens: { ...base, bg: '#A2D2FF', bgGradient: 'linear-gradient(180deg,#A2D2FF 0%,#FFC8DD 100%)', surface: '#BDE0FE', text: '#FFFFFF', accent: '#FFC8DD', accentAlt: '#FFAFCC', borderColor: 'rgba(255,255,255,0.4)', chip: 'rgba(255,255,255,0.22)', buttonText: '#6D4D72', radius: '40px', borderWidth: '1px', shadow: '0 20px 30px rgba(76,113,163,0.35)', effect: 'clay' }
    },
    {
        id: 'solarpunk-eco-future',
        name: 'Solarpunk',
        family: 'Eco-Future',
        mood: 'оптимистичное завтра',
        contrast: 'средний',
        description: 'Органические формы, солнечные акценты и зелёная энергия.',
        tokens: { ...base, bg: '#F8F7EF', bgGradient: 'radial-gradient(circle at 15% 15%,#FFF2BF 0%,#F8F7EF 45%,#E9F5DE 100%)', surface: 'rgba(255,255,255,0.74)', text: '#1F2A1E', accent: '#55A630', accentAlt: '#FFB703', borderColor: 'rgba(85,166,48,0.42)', chip: 'rgba(255,183,3,0.2)', buttonText: '#1E2A0C', radius: '28px', shadow: '0 16px 28px rgba(85,166,48,0.2)', effect: 'blob', surfaceOverlay: 'blur(5px)' }
    },
    {
        id: 'steampunk-victorian-tech',
        name: 'Steampunk',
        family: 'Victorian Tech',
        mood: 'медь и механика',
        contrast: 'высокий',
        description: 'Металлические оттенки, бумажная основа и викторианская глубина.',
        tokens: { ...base, bg: '#3E2723', bgGradient: 'linear-gradient(180deg,#4F342E 0%,#2C1E1B 100%)', surface: '#5D4037', text: '#F6E8C7', accent: '#B87333', accentAlt: '#D4AF37', borderColor: '#D4AF37', chip: 'rgba(212,175,55,0.2)', buttonText: '#2C1A09', radius: '10px', font: "'Playfair Display', serif", shadow: '0 14px 30px rgba(0,0,0,0.35)', effect: 'rivets' }
    },
    {
        id: 'manga-sketch',
        name: 'Manga Sketch',
        family: 'Halftone',
        mood: 'черно-белый комикс',
        contrast: 'высокий',
        description: 'Полутона и резкие контуры как страница японской манги.',
        tokens: { ...base, bg: '#FFFFFF', bgGradient: 'none', surface: '#FFFFFF', text: '#111111', accent: '#000000', accentAlt: '#777777', borderColor: '#000000', chip: 'rgba(0,0,0,0.08)', buttonText: '#FFFFFF', radius: '28px', borderWidth: '2px', font: "'Inter', sans-serif", shadow: '6px 6px 0 #000000', effect: 'halftone' }
    },
    {
        id: 'blueprint-engineer-draft',
        name: 'Blueprint',
        family: 'Engineer Draft',
        mood: 'техническая точность',
        contrast: 'высокий',
        description: 'Синька, линейная сетка и тонкие белые контуры чертежа.',
        tokens: { ...base, bg: '#0047AB', bgGradient: 'linear-gradient(180deg,#0047AB 0%,#00378B 100%)', surface: '#0A4FAF', text: '#EAF4FF', accent: '#BFE1FF', accentAlt: '#77B5FF', borderColor: '#EAF4FF', chip: 'rgba(234,244,255,0.16)', buttonText: '#00336B', radius: '8px', borderWidth: '1px', font: "'Fira Code', monospace", shadow: '0 12px 30px rgba(0,27,78,0.4)', effect: 'blueprint' }
    },
    {
        id: 'glitch-core',
        name: 'Glitch Core',
        family: 'Digital Chaos',
        mood: 'контролируемый сбой',
        contrast: 'очень высокий',
        description: 'RGB-сдвиг, разрывы и ощущение перегруженного цифрового сигнала.',
        tokens: { ...base, bg: '#101015', bgGradient: 'linear-gradient(180deg,#101015 0%,#09090E 100%)', surface: '#171722', text: '#F2F2F5', accent: '#00F6FF', accentAlt: '#FF004D', borderColor: '#2C2C44', chip: 'rgba(0,246,255,0.16)', buttonText: '#070717', radius: '8px', borderWidth: '1px', font: "'Orbitron', sans-serif", shadow: '0 12px 28px rgba(0,0,0,0.4)', effect: 'glitch' }
    },
    {
        id: 'nordic-noir',
        name: 'Nordic Noir',
        family: 'Scandinavian Dark',
        mood: 'холодная меланхолия',
        contrast: 'высокий',
        description: 'Острые углы, тонкие шрифты, воздух и глубокий винный акцент.',
        tokens: { ...base, bg: '#121212', bgGradient: 'none', surface: '#1A1A1A', text: '#E5E5E5', accent: '#641212', accentAlt: '#9A3A3A', borderColor: '#2E2E2E', chip: 'rgba(100,18,18,0.2)', buttonText: '#F6EDED', radius: '0px', shadow: 'none', cardPadding: '2.8rem', font: "'Manrope', sans-serif" }
    },
    {
        id: 'pop-art',
        name: 'Pop Art',
        family: 'Lichtenstein',
        mood: 'взрывной CMYK',
        contrast: 'очень высокий',
        description: 'Яркие заливки, жирные линии и динамика постеров 60-х.',
        tokens: { ...base, bg: '#00B7FF', bgGradient: 'linear-gradient(135deg,#00B7FF 0%,#FF00A8 50%,#FFF200 100%)', surface: '#FFFFFF', text: '#000000', accent: '#FF00A8', accentAlt: '#FFF200', borderColor: '#000000', chip: 'rgba(255,242,0,0.2)', buttonText: '#FFFFFF', radius: '0px', borderWidth: '4px', shadow: '6px 6px 0 #000000', effect: 'dots' }
    },
    {
        id: 'medieval-parchment',
        name: 'Medieval Parchment',
        family: 'RPG UI',
        mood: 'древний манускрипт',
        contrast: 'средний',
        description: 'Пергамент, готическая атмосфера и печати в стиле старых хроник.',
        tokens: { ...base, bg: '#704214', bgGradient: 'linear-gradient(180deg,#8B5A2B 0%,#704214 100%)', surface: '#F5F5DC', text: '#3B2A1A', accent: '#8B0000', accentAlt: '#C19A6B', borderColor: '#3B2A1A', chip: 'rgba(112,66,20,0.14)', buttonText: '#F9EBDD', radius: '14px', font: "'Playfair Display', serif", shadow: '0 10px 20px rgba(59,42,26,0.3)', effect: 'parchment' }
    },
    {
        id: 'space-hud',
        name: 'Space HUD',
        family: 'Sci-Fi Interface',
        mood: 'кокпит пилота',
        contrast: 'высокий',
        description: 'Тонкие рамки, скан-линии и светящиеся технические маркеры.',
        tokens: { ...base, bg: '#0B1221', bgGradient: 'radial-gradient(circle at 70% 20%,#13294A 0%,#0B1221 60%,#070B14 100%)', surface: '#111C34', text: '#D7ECFF', accent: '#FF8C00', accentAlt: '#00E7FF', borderColor: '#2C4E79', chip: 'rgba(0,231,255,0.16)', buttonText: '#211100', radius: '6px', borderWidth: '1px', font: "'Orbitron', sans-serif", shadow: '0 12px 28px rgba(4,10,21,0.45)', effect: 'hud' }
    },
    {
        id: 'web-90s',
        name: '90s Web',
        family: 'Geocities',
        mood: 'ранний интернет',
        contrast: 'средний',
        description: 'Outset-рамки, классические кнопки и ностальгия браузеров 1998.',
        tokens: { ...base, bg: '#C0C0C0', bgGradient: 'none', surface: '#D9D9D9', text: '#000000', accent: '#0000EE', accentAlt: '#551A8B', borderColor: '#808080', chip: 'rgba(0,0,0,0.1)', buttonText: '#FFFFFF', radius: '2px', borderStyle: 'outset', borderWidth: '2px', font: "'Times New Roman', serif", shadow: '2px 2px 0 rgba(0,0,0,0.25)', effect: 'classic' }
    },
    {
        id: 'liquid-organic',
        name: 'Liquid Organic',
        family: 'Fluid',
        mood: 'капли и течение',
        contrast: 'средний',
        description: 'Плавающие градиенты и жидкие формы без жёстких углов.',
        tokens: { ...base, bg: '#4FACFE', bgGradient: 'linear-gradient(135deg,#4FACFE 0%,#00F2FE 100%)', surface: 'rgba(255,255,255,0.22)', text: '#05273F', accent: '#0066FF', accentAlt: '#00C6FF', borderColor: 'rgba(255,255,255,0.45)', chip: 'rgba(255,255,255,0.2)', buttonText: '#E8F9FF', radius: '36px', shadow: '0 20px 34px rgba(0,76,120,0.25)', effect: 'liquid', surfaceOverlay: 'blur(6px)' }
    },
    {
        id: 'dark-academia',
        name: 'Dark Academia',
        family: 'Тайная библиотека',
        mood: 'интеллектуальная готика',
        contrast: 'средний',
        description: 'Старое дерево, двойные рамки и типографика классических изданий.',
        tokens: { ...base, bg: '#1C1917', bgGradient: 'linear-gradient(180deg,#1C1917 0%,#141110 100%)', surface: '#292524', text: '#D6D3D1', accent: '#78350F', accentAlt: '#44403C', borderColor: '#44403C', chip: 'rgba(120,53,15,0.24)', buttonText: '#F3E4DB', radius: '8px', borderWidth: '3px', font: "'Playfair Display', serif", shadow: '0 12px 24px rgba(0,0,0,0.4)', effect: 'double-border' }
    },
    {
        id: 'holographic-iridescence',
        name: 'Holographic Iridescence',
        family: 'Жемчужный софт-тек',
        mood: 'радужный футуризм',
        contrast: 'средний',
        description: 'Перламутровые поверхности и переливающиеся акцентные градиенты.',
        tokens: { ...base, bg: '#F8FAFC', bgGradient: 'linear-gradient(140deg,#F8FAFC 0%,#EEF4FF 100%)', surface: 'rgba(255,255,255,0.8)', text: '#1E293B', accent: '#EE82EE', accentAlt: '#40E0D0', borderColor: 'rgba(199,210,254,0.8)', chip: 'rgba(224,231,255,0.8)', buttonText: '#1E293B', radius: '16px', shadow: '0 10px 30px rgba(199,210,254,0.5)', effect: 'holo', surfaceOverlay: 'blur(4px)' }
    },
    {
        id: 'raygun-gothic',
        name: 'Raygun Gothic',
        family: 'Ретро-футуризм 60-х',
        mood: 'атомный оптимизм',
        contrast: 'средний',
        description: 'Хром, коралл и формы эпохи «будущего из прошлого».',
        tokens: { ...base, bg: '#2D5A27', bgGradient: 'radial-gradient(circle at 30% 20%,#4F7D47 0%,#2D5A27 65%)', surface: '#E2E8F0', text: '#1A202C', accent: '#FB923C', accentAlt: '#CBD5E1', borderColor: '#718096', chip: 'rgba(251,146,60,0.2)', buttonText: '#2B1A0D', radius: '26px', font: "'Manrope', sans-serif", shadow: '0 14px 26px rgba(10,24,9,0.35)', effect: 'raygun' }
    }
];

export const defaultThemeId = 'atomic-heart-retro';
