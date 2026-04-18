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

const themesCatalog = [
    {
        id: 'atomic-heart-retro',
        name: 'Atomic Heart Retro',
        family: 'Советский футуризм',
        mood: 'ретро-индустриализм',
        contrast: 'средний',
        description: 'Утопический индустриализм 50-х: металл, дерево и агит-эстетика.',
        tokens: { ...base, bg: '#F4F1EA', bgGradient: 'linear-gradient(180deg,#F4F1EA 0%,#EDE6D5 100%)', surface: '#E3DCC8', text: '#2B2523', accent: '#A62A2A', accentAlt: '#5C6B64', borderColor: '#2B2523', chip: 'rgba(92,107,100,0.18)', buttonText: '#F4F1EA', radius: '18px', borderWidth: '2px', font: "'Courier Prime', monospace", shadow: '5px 5px 0 rgba(43,37,35,0.35)', effect: 'atomic-retro' }
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
        tokens: { ...base, bg: '#FFB6C1', bgGradient: 'linear-gradient(180deg,#FFB6C1 0%,#8A2BE2 70%,#4F0C8A 100%)', surface: '#8A2BE2', text: '#00FFFF', accent: '#FF00FF', accentAlt: '#7FFF00', borderColor: '#00FFFF', chip: 'rgba(127,255,0,0.18)', buttonText: '#2B004A', radius: '0px', borderStyle: 'solid', borderWidth: '2px', font: "'Press Start 2P', cursive", textScale: '0.84', shadow: '6px 6px 0 #FF00FF', effect: 'grid' }
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
    },

    {
        id: 'frozen-carbon',
        name: 'Frozen Carbon',
        family: 'Materiality',
        mood: 'технический матовый',
        contrast: 'средний',
        description: 'Плетение карбона, объемный пластик и холодный инженерный характер.',
        tokens: { ...base, bg: '#121316', bgGradient: 'repeating-linear-gradient(45deg,#121316 0 8px,#1B1D22 8px 16px)', surface: '#1C1F24', text: '#E1E4EA', accent: '#5F6C7B', accentAlt: '#2E343E', borderColor: '#2E343E', chip: 'rgba(95,108,123,0.2)', buttonText: '#F6F8FC', radius: '10px', effect: 'carbon' }
    },
    {
        id: 'polished-marble',
        name: 'Polished Marble',
        family: 'Materiality',
        mood: 'античная роскошь',
        contrast: 'средний',
        description: 'Светлый мрамор с прожилками, золотые разделители и тяжелые тени.',
        tokens: { ...base, bg: '#F8F8F6', bgGradient: 'linear-gradient(135deg,#F8F8F6 0%,#ECEBE9 100%)', surface: '#FFFFFF', text: '#2A2A2A', accent: '#B98A3D', accentAlt: '#8B8B8B', borderColor: '#B98A3D', chip: 'rgba(185,138,61,0.18)', buttonText: '#1D1710', radius: '12px', font: "'Playfair Display', serif", shadow: '0 20px 38px rgba(0,0,0,0.25)', effect: 'marble' }
    },
    {
        id: 'liquid-mercury',
        name: 'Liquid Mercury',
        family: 'Materiality',
        mood: 'хромированный футуризм',
        contrast: 'высокий',
        description: 'Холодный металл, зеркальный блеск и округлые 50% формы.',
        tokens: { ...base, bg: '#9FA5AE', bgGradient: 'linear-gradient(160deg,#C2C8D0 0%,#8E949C 60%,#BFC6CF 100%)', surface: 'rgba(245,248,252,0.35)', text: '#111318', accent: '#ECEFF4', accentAlt: '#6F7680', borderColor: '#DCE1E8', chip: 'rgba(255,255,255,0.35)', buttonText: '#1E2229', radius: '50px', effect: 'mercury', surfaceOverlay: 'blur(5px)' }
    },
    {
        id: 'recycled-plastic',
        name: 'Recycled Plastic',
        family: 'Materiality',
        mood: 'эко-фанк',
        contrast: 'средний',
        description: 'Светлая масса с цветными вкраплениями и зернистой фактурой.',
        tokens: { ...base, bg: '#E6E7E2', bgGradient: 'linear-gradient(180deg,#E6E7E2 0%,#D8D9D4 100%)', surface: '#F2F3EF', text: '#25302A', accent: '#3E9E7A', accentAlt: '#D97841', borderColor: '#88948B', chip: 'rgba(62,158,122,0.18)', buttonText: '#F2F8F4', radius: '20px', effect: 'plastic' }
    },
    {
        id: 'velvet-night',
        name: 'Velvet Night',
        family: 'Materiality',
        mood: 'мягкая тьма',
        contrast: 'средний',
        description: 'Бархатный синий, светопоглощающий фон и приглушённый свет.',
        tokens: { ...base, bg: '#1B1330', bgGradient: 'radial-gradient(circle at 20% 10%,#2C1E4A 0%,#1B1330 65%)', surface: '#261B3F', text: '#E9E5F5', accent: '#7D5FB2', accentAlt: '#3B2A63', borderColor: '#3B2A63', chip: 'rgba(125,95,178,0.2)', buttonText: '#F5F2FF', radius: '18px', shadow: '0 20px 36px rgba(0,0,0,0.42)', effect: 'velvet' }
    },
    {
        id: 'slasher-80s',
        name: 'Slasher 80s',
        family: 'Pop-Culture',
        mood: 'vhs horror',
        contrast: 'очень высокий',
        description: 'Кровавый красный на черном, VHS-помехи и тревожная атмосфера.',
        tokens: { ...base, bg: '#090707', bgGradient: 'linear-gradient(180deg,#090707 0%,#130808 100%)', surface: '#1A0B0B', text: '#F3D6D6', accent: '#D1001F', accentAlt: '#5C0D13', borderColor: '#D1001F', chip: 'rgba(209,0,31,0.22)', buttonText: '#FFECEC', font: "'Courier Prime', monospace", effect: 'vhs' }
    },
    {
        id: 'fallout-pip-boy',
        name: 'Fallout Pip-Boy',
        family: 'Pop-Culture',
        mood: 'rad-crt',
        contrast: 'высокий',
        description: 'Монохромный ламповый зеленый интерфейс с сеткой сканирования.',
        tokens: { ...base, bg: '#061005', bgGradient: 'linear-gradient(180deg,#061005 0%,#0B140A 100%)', surface: '#0D1E0D', text: '#7BFF6F', accent: '#42D94B', accentAlt: '#1C6F22', borderColor: '#1C6F22', chip: 'rgba(66,217,75,0.18)', buttonText: '#021A04', font: "'Fira Code', monospace", effect: 'pipboy' }
    },
    {
        id: 'dune-arrakis',
        name: 'Dune Arrakis',
        family: 'Pop-Culture',
        mood: 'песчаный брутализм',
        contrast: 'высокий',
        description: 'Песок и жара: оранжево-бежевые грани с резкими углами.',
        tokens: { ...base, bg: '#2D1C0E', bgGradient: 'linear-gradient(180deg,#2D1C0E 0%,#6A3D13 100%)', surface: '#A56B2E', text: '#F6DEC2', accent: '#E3842E', accentAlt: '#2A1307', borderColor: '#2A1307', chip: 'rgba(246,222,194,0.18)', buttonText: '#2D1203', radius: '4px', effect: 'dune' }
    },
    {
        id: 'biohazard',
        name: 'Biohazard',
        family: 'Pop-Culture',
        mood: 'danger zone',
        contrast: 'очень высокий',
        description: 'Черно-желтый карантинный сигнал с предупреждающими полосами.',
        tokens: { ...base, bg: '#0A0A0A', bgGradient: 'linear-gradient(180deg,#0A0A0A 0%,#1A1A1A 100%)', surface: '#181818', text: '#FFF9CF', accent: '#FFD600', accentAlt: '#4D4200', borderColor: '#FFD600', chip: 'rgba(255,214,0,0.2)', buttonText: '#261F00', radius: '6px', borderWidth: '2px', effect: 'biohazard' }
    },
    {
        id: 'tron-legacy',
        name: 'Tron Legacy',
        family: 'Pop-Culture',
        mood: 'neon grid',
        contrast: 'высокий',
        description: 'Темная сетка и неоновые голубые контуры в режиме outline-only.',
        tokens: { ...base, bg: '#080E1A', bgGradient: 'linear-gradient(180deg,#080E1A 0%,#060A11 100%)', surface: 'transparent', text: '#C9ECFF', accent: '#00B8FF', accentAlt: '#0077A6', borderColor: '#00B8FF', chip: 'rgba(0,184,255,0.16)', buttonText: '#00192A', shadow: '0 0 14px rgba(0,184,255,0.35)', effect: 'tron' }
    },
    {
        id: 'blueprint-cyanotype',
        name: 'Blueprint Cyanotype',
        family: 'Art & History',
        mood: 'чертежный',
        contrast: 'высокий',
        description: 'Синька с осями, сеткой и легким рукописным ощущением.',
        tokens: { ...base, bg: '#0A2A63', bgGradient: 'linear-gradient(180deg,#0A2A63 0%,#123E8A 100%)', surface: '#0F377B', text: '#F3FAFF', accent: '#FFFFFF', accentAlt: '#7CB7FF', borderColor: '#FFFFFF', chip: 'rgba(255,255,255,0.18)', buttonText: '#0A2A63', font: "'Fira Code', monospace", effect: 'cyanotype' }
    },
    {
        id: 'bauhaus-original',
        name: 'Bauhaus Original',
        family: 'Art & History',
        mood: 'геометрический модернизм',
        contrast: 'высокий',
        description: 'Белая база с чистыми первичными цветами и базовыми формами.',
        tokens: { ...base, bg: '#FFFFFF', bgGradient: 'none', surface: '#FFFFFF', text: '#111111', accent: '#E63946', accentAlt: '#1D4ED8', borderColor: '#111111', chip: 'rgba(245,196,0,0.25)', buttonText: '#FFFFFF', radius: '0px', shadow: 'none', effect: 'bauhaus' }
    },
    {
        id: 'ukiyo-e',
        name: 'Ukiyo-e',
        family: 'Art & History',
        mood: 'японская гравюра',
        contrast: 'средний',
        description: 'Морская волна, бумага и красный акцент в стиле старых оттисков.',
        tokens: { ...base, bg: '#E8DDC9', bgGradient: 'linear-gradient(180deg,#E8DDC9 0%,#DCCFB8 100%)', surface: '#F5EBD9', text: '#223A53', accent: '#B13A2A', accentAlt: '#3D6B88', borderColor: '#3D6B88', chip: 'rgba(177,58,42,0.18)', buttonText: '#FFF7EE', font: "'Playfair Display', serif", effect: 'ukiyoe' }
    },
    {
        id: 'art-deco',
        name: 'Art Deco',
        family: 'Art & History',
        mood: 'gatsby luxe',
        contrast: 'высокий',
        description: 'Черно-золотая элегантность с геометрическим паттерном деко.',
        tokens: { ...base, bg: '#0B0A0A', bgGradient: 'linear-gradient(180deg,#0B0A0A 0%,#151212 100%)', surface: '#171414', text: '#F3E4BC', accent: '#D4AF37', accentAlt: '#6E5520', borderColor: '#D4AF37', chip: 'rgba(212,175,55,0.18)', buttonText: '#2A1D06', font: "'Playfair Display', serif", effect: 'deco' }
    },
    {
        id: 'soviet-constructivism',
        name: 'Soviet Constructivism',
        family: 'Art & History',
        mood: 'агитплакат',
        contrast: 'очень высокий',
        description: 'Диагонали, рубленые формы и агрессивный красно-черный контраст.',
        tokens: { ...base, bg: '#F5EBDD', bgGradient: 'linear-gradient(180deg,#F5EBDD 0%,#E7D8C2 100%)', surface: '#FAF1E4', text: '#121212', accent: '#C1121F', accentAlt: '#000000', borderColor: '#000000', chip: 'rgba(193,18,31,0.2)', buttonText: '#FFFFFF', radius: '0px', borderWidth: '3px', font: "'Manrope', sans-serif", effect: 'construct' }
    },
    {
        id: 'infrared',
        name: 'Infrared',
        family: 'Experimental',
        mood: 'тепловизор',
        contrast: 'высокий',
        description: 'Тепловые пятна от синего к красному и жёлтому без жёстких контуров.',
        tokens: { ...base, bg: '#16052F', bgGradient: 'linear-gradient(120deg,#16052F 0%,#1D4ED8 25%,#E11D48 60%,#FDE047 100%)', surface: 'rgba(0,0,0,0.25)', text: '#FFF8E2', accent: '#FDE047', accentAlt: '#E11D48', borderColor: '#FDE047', chip: 'rgba(253,224,71,0.22)', buttonText: '#2B1000', effect: 'infrared', surfaceOverlay: 'blur(3px)' }
    },
    {
        id: 'negative-space',
        name: 'Negative Space',
        family: 'Experimental',
        mood: 'оптическая инверсия',
        contrast: 'очень высокий',
        description: 'Черный фон и белый контент с инверсией внутри внутренних блоков.',
        tokens: { ...base, bg: '#0A0A0A', bgGradient: 'none', surface: '#FFFFFF', text: '#FFFFFF', accent: '#FFFFFF', accentAlt: '#000000', borderColor: '#FFFFFF', chip: 'rgba(255,255,255,0.2)', buttonText: '#000000', effect: 'negative', shadow: 'none' }
    },
    {
        id: 'ascii-art',
        name: 'ASCII Art',
        family: 'Experimental',
        mood: 'терминальная графика',
        contrast: 'высокий',
        description: 'Интерфейс из символов и моноширинной ритмики.',
        tokens: { ...base, bg: '#101010', bgGradient: 'none', surface: '#181818', text: '#E7E7E7', accent: '#9AE66E', accentAlt: '#4F7D3A', borderColor: '#9AE66E', chip: 'rgba(154,230,110,0.2)', buttonText: '#10220B', font: "'Fira Code', monospace", effect: 'ascii' }
    },
    {
        id: 'origami',
        name: 'Origami',
        family: 'Experimental',
        mood: 'бумажная пластика',
        contrast: 'средний',
        description: 'Складки, острые углы и теневые плоскости бумажных модулей.',
        tokens: { ...base, bg: '#F4F6F8', bgGradient: 'linear-gradient(180deg,#F4F6F8 0%,#E8EDF2 100%)', surface: '#FFFFFF', text: '#1F2933', accent: '#5D7FA3', accentAlt: '#BBC7D6', borderColor: '#5D7FA3', chip: 'rgba(93,127,163,0.17)', buttonText: '#F8FCFF', radius: '4px', effect: 'origami' }
    },
    {
        id: 'underwater-abyss',
        name: 'Underwater Abyss',
        family: 'Experimental',
        mood: 'темная глубина',
        contrast: 'низкий',
        description: 'Почти черная бездна, где элементы проявляются при наведении.',
        tokens: { ...base, bg: '#020A14', bgGradient: 'radial-gradient(circle at center,#062143 0%,#020A14 70%)', surface: 'rgba(8,24,46,0.52)', text: '#BEE6FF', accent: '#5FC5FF', accentAlt: '#10395D', borderColor: '#245C84', chip: 'rgba(95,197,255,0.15)', buttonText: '#042744', effect: 'abyss', surfaceOverlay: 'blur(8px)' }
    },
    {
        id: 'neural-link',
        name: 'Neural Link',
        family: 'Future UI',
        mood: 'биотех',
        contrast: 'средний',
        description: 'Нейронные линии, мягкая пульсация и серо-розовый биотех.',
        tokens: { ...base, bg: '#E3E5E8', bgGradient: 'linear-gradient(180deg,#E3E5E8 0%,#D5D8DE 100%)', surface: '#F3F4F6', text: '#33343B', accent: '#E75D8C', accentAlt: '#8B93A5', borderColor: '#8B93A5', chip: 'rgba(231,93,140,0.18)', buttonText: '#FFF3F8', effect: 'neural' }
    },
    {
        id: 'star-trek-lcars',
        name: 'Star Trek LCARS',
        family: 'Future UI',
        mood: 'олдскульный sci-fi',
        contrast: 'высокий',
        description: 'Яркие модульные блоки LCARS с характерными скруглениями.',
        tokens: { ...base, bg: '#0D0D1F', bgGradient: 'none', surface: '#13132B', text: '#F4E8D2', accent: '#F6A04D', accentAlt: '#8E6CC7', borderColor: '#F6A04D', chip: 'rgba(142,108,199,0.24)', buttonText: '#2B1400', radius: '28px', shadow: 'none', effect: 'lcars' }
    },
    {
        id: 'hologram-blue',
        name: 'Hologram Blue',
        family: 'Future UI',
        mood: 'цифровой фантом',
        contrast: 'средний',
        description: 'Полупрозрачный голубой интерфейс со строчным мерцанием.',
        tokens: { ...base, bg: '#06192E', bgGradient: 'linear-gradient(180deg,#06192E 0%,#0B3C6F 100%)', surface: 'rgba(118,198,255,0.14)', text: '#DDF4FF', accent: '#7CD7FF', accentAlt: '#2B83B8', borderColor: '#7CD7FF', chip: 'rgba(124,215,255,0.18)', buttonText: '#00263E', effect: 'hologram', surfaceOverlay: 'blur(4px)' }
    },
    {
        id: 'nanotech',
        name: 'Nanotech',
        family: 'Future UI',
        mood: 'жидкая тьма',
        contrast: 'средний',
        description: 'Глянцевый черный с текучими ртутными переходами состояний.',
        tokens: { ...base, bg: '#050505', bgGradient: 'linear-gradient(140deg,#050505 0%,#131313 50%,#080808 100%)', surface: '#121212', text: '#D8D8D8', accent: '#7A7A7A', accentAlt: '#2B2B2B', borderColor: '#3C3C3C', chip: 'rgba(122,122,122,0.18)', buttonText: '#F0F0F0', radius: '22px', effect: 'nanotech' }
    },
    {
        id: 'white-room',
        name: 'White Room',
        family: 'Future UI',
        mood: 'стерильная матрица',
        contrast: 'низкий',
        description: 'Абсолютно белая среда с тонкими серыми контурами и dissolve-появлением.',
        tokens: { ...base, bg: '#FFFFFF', bgGradient: 'none', surface: '#FFFFFF', text: '#80858E', accent: '#A2A7AF', accentAlt: '#D0D3D8', borderColor: '#D0D3D8', chip: 'rgba(162,167,175,0.2)', buttonText: '#5A5F67', shadow: '0 8px 20px rgba(140,145,153,0.18)', effect: 'whiteroom' }
    },
    {
        id: 'old-newspaper',
        name: 'Old Newspaper',
        family: 'Mix',
        mood: 'историческая типографика',
        contrast: 'средний',
        description: 'Желтая бумага, колонная верстка и гравюрный характер.',
        tokens: { ...base, bg: '#EEDFB8', bgGradient: 'linear-gradient(180deg,#EEDFB8 0%,#DEC990 100%)', surface: '#F5E9C8', text: '#2D2418', accent: '#4B3A27', accentAlt: '#8A6D45', borderColor: '#4B3A27', chip: 'rgba(75,58,39,0.16)', buttonText: '#FFF8EA', font: "'Playfair Display', serif", effect: 'newspaper' }
    },
    {
        id: 'chalkboard',
        name: 'Chalkboard',
        family: 'Mix',
        mood: 'школьная доска',
        contrast: 'средний',
        description: 'Темный шифер с меловыми линиями и потертостями.',
        tokens: { ...base, bg: '#13291F', bgGradient: 'linear-gradient(180deg,#13291F 0%,#0E1F18 100%)', surface: '#1D3A2D', text: '#F3F7F2', accent: '#E8F0E6', accentAlt: '#8FC0A9', borderColor: '#8FC0A9', chip: 'rgba(232,240,230,0.2)', buttonText: '#0F2018', font: "'Courier Prime', monospace", effect: 'chalk' }
    },
    {
        id: 'lego-brick',
        name: 'Lego Brick',
        family: 'Mix',
        mood: 'игровой конструктор',
        contrast: 'высокий',
        description: 'Яркие чистые цвета, блочная геометрия и характерные пупырышки.',
        tokens: { ...base, bg: '#F7F7F7', bgGradient: 'none', surface: '#FFFFFF', text: '#1A1A1A', accent: '#E63946', accentAlt: '#1D4ED8', borderColor: '#F5C400', chip: 'rgba(29,78,216,0.16)', buttonText: '#FFFFFF', radius: '12px', borderWidth: '3px', effect: 'lego' }
    },
    {
        id: 'luxury-yacht',
        name: 'Luxury Yacht',
        family: 'Mix',
        mood: 'тик и сталь',
        contrast: 'средний',
        description: 'Темное дерево, металлические акценты и палубные горизонтали.',
        tokens: { ...base, bg: '#1F1712', bgGradient: 'linear-gradient(180deg,#1F1712 0%,#2C211A 100%)', surface: '#3B2B21', text: '#E8DED3', accent: '#BFC7D1', accentAlt: '#8B5E3C', borderColor: '#BFC7D1', chip: 'rgba(191,199,209,0.2)', buttonText: '#1C130D', font: "'Playfair Display', serif", effect: 'yacht' }
    },
    {
        id: 'post-apocalyptic',
        name: 'Post-Apocalyptic',
        family: 'Mix',
        mood: 'rust & dirt',
        contrast: 'высокий',
        description: 'Ржавчина, пыль и поврежденные поверхности с цифровыми артефактами.',
        tokens: { ...base, bg: '#2A1F1A', bgGradient: 'linear-gradient(180deg,#2A1F1A 0%,#1A1411 100%)', surface: '#3B2C25', text: '#E2D2BE', accent: '#A34E2C', accentAlt: '#6B3C2A', borderColor: '#A34E2C', chip: 'rgba(163,78,44,0.2)', buttonText: '#F6E8D9', effect: 'wasteland' }
    },
    {
        id: 'neuro-glitch',
        name: 'Neuro Glitch',
        family: 'Digital Chaos',
        mood: 'кибернетический сбой',
        contrast: 'очень высокий',
        description: 'Плотный интерфейс с микрошрифтами и глитч-эффектами.',
        tokens: { ...base, bg: '#050508', bgGradient: 'linear-gradient(45deg, #050508, #1a0b1c)', surface: '#0d0812', text: '#00ffcc', accent: '#ff0055', accentAlt: '#7700ff', borderColor: '#ff0055', chip: 'rgba(255,0,85,0.2)', buttonText: '#ffffff', radius: '2px', borderWidth: '3px', borderStyle: 'dashed', font: "'Fira Code', monospace", textScale: '0.85', cardPadding: '0.8rem', shadow: '8px 8px 0 rgba(255,0,85,0.4)', effect: 'neuro-glitch' }
    },
    {
        id: 'royal-folio',
        name: 'Royal Folio',
        family: 'Editorial',
        mood: 'воздушная классика',
        contrast: 'высокий',
        description: 'Много воздуха, крупная антиква и тончайшие линии.',
        tokens: { ...base, bg: '#faf8f5', bgGradient: 'none', surface: '#ffffff', text: '#111111', accent: '#8b0000', accentAlt: '#d4af37', borderColor: '#d4af37', chip: 'rgba(212,175,55,0.1)', buttonText: '#ffffff', radius: '0px', borderWidth: '1px', borderStyle: 'solid', font: "'Playfair Display', serif", textScale: '1.2', cardPadding: '3.5rem', shadow: '0 30px 60px rgba(0,0,0,0.05)', effect: 'royal-folio' }
    },
    {
        id: 'brutal-cardboard',
        name: 'Brutal Cardboard',
        family: 'Raw Web',
        mood: 'индустриальный картон',
        contrast: 'очень высокий',
        description: 'Массивные блоки, теплые тона и гипертрофированные рамки.',
        tokens: { ...base, bg: '#d9c8b4', bgGradient: 'none', surface: '#c4b299', text: '#1a1a1a', accent: '#e63946', accentAlt: '#1d3557', borderColor: '#1a1a1a', chip: 'rgba(26,26,26,0.1)', buttonText: '#ffffff', radius: '0px', borderWidth: '6px', borderStyle: 'solid', font: "'Inter', sans-serif", textScale: '1.1', cardPadding: '1.5rem', shadow: '12px 12px 0 #1a1a1a', effect: 'brutal-box', transition: 'none' }
    },
    {
        id: 'aero-glass',
        name: 'Aero Glass',
        family: 'Glassmorphism',
        mood: 'невесомость',
        contrast: 'низкий',
        description: 'Экстремальное скругление, размытие и пастельные блики.',
        tokens: { ...base, bg: '#e0eaf5', bgGradient: 'radial-gradient(circle at 0% 0%, #ffffff, #e0eaf5 70%)', surface: 'rgba(255,255,255,0.4)', text: '#2c3e50', accent: '#3498db', accentAlt: '#9b59b6', borderColor: 'rgba(255,255,255,0.8)', chip: 'rgba(255,255,255,0.5)', buttonText: '#ffffff', radius: '48px', borderWidth: '2px', borderStyle: 'solid', font: "'Manrope', sans-serif", textScale: '0.95', cardPadding: '2.5rem', shadow: '0 20px 40px rgba(52,152,219,0.15)', effect: 'aero-glass', surfaceOverlay: 'blur(20px)' }
    },
    {
        id: 'cyber-terminal',
        name: 'Cyber Terminal',
        family: 'Hacker Style',
        mood: 'интерфейс корабля',
        contrast: 'высокий',
        description: 'Микротекст, неоновые обводки без заливки, техно-шрифт.',
        tokens: { ...base, bg: '#020202', bgGradient: 'none', surface: 'transparent', text: '#00e5ff', accent: '#ff003c', accentAlt: '#00e5ff', borderColor: '#00e5ff', chip: 'rgba(0,229,255,0.1)', buttonText: '#020202', radius: '8px', borderWidth: '1px', borderStyle: 'solid', font: "'Orbitron', sans-serif", textScale: '0.8', cardPadding: '1.2rem', shadow: 'inset 0 0 10px rgba(0,229,255,0.2), 0 0 10px rgba(0,229,255,0.2)', effect: 'cyber-terminal' }
    },

];

export const themes = Object.freeze(themesCatalog.map((theme) => ({
    ...theme,
    tokens: { ...theme.tokens }
})));

export const themeTokenLegend = Object.freeze({
    bg: 'Основной цвет фона приложения',
    bgGradient: 'Градиент фона (или none)',
    surface: 'Цвет карточек/поверхностей',
    text: 'Основной цвет текста',
    accent: 'Главный акцент и CTA',
    accentAlt: 'Вторичный акцент',
    borderColor: 'Базовый цвет границ',
    borderWidth: 'Толщина границ',
    borderStyle: 'Стиль границ',
    radius: 'Базовое скругление компонентов',
    shadow: 'Тень карточек/контролов',
    effect: 'Спец-эффект темы (glow, glass, grid и т.д.)'
});

export const themesByFamily = Object.freeze(
    themes.reduce((acc, theme) => {
        if (!acc[theme.family]) {
            acc[theme.family] = [];
        }
        acc[theme.family].push(theme);
        return acc;
    }, {})
);

export const themeDocs = Object.freeze(
    themes.map((theme) => ({
        id: theme.id,
        name: theme.name,
        family: theme.family,
        mood: theme.mood,
        contrast: theme.contrast,
        description: theme.description,
        colors: {
            bg: theme.tokens.bg,
            surface: theme.tokens.surface,
            text: theme.tokens.text,
            accent: theme.tokens.accent,
            accentAlt: theme.tokens.accentAlt
        },
        radius: theme.tokens.radius,
        border: `${theme.tokens.borderWidth} ${theme.tokens.borderStyle} ${theme.tokens.borderColor}`,
        effect: theme.tokens.effect || 'none'
    }))
);

export const defaultThemeId = 'atomic-heart-retro';
