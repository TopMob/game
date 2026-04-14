export function renderLab(root) {
    root.innerHTML = `
        <section class="bento hero span-2x2">
            <div class="meta-row">
                <strong id="themeCounter"></strong>
            </div>
            <h2 id="themeTitle"></h2>
            <p id="themeDescription"></p>
            <div class="chips" id="themeTags"></div>
            <div class="button-row">
                <button class="action-btn" type="button">Primary Action</button>
                <button class="secondary-btn" type="button">Secondary Action</button>
                <button class="ghost-btn" type="button">Ghost Action</button>
            </div>
            <div class="state-row">
                <button class="badge-btn" type="button">Inbox <span>12</span></button>
                <button class="icon-btn" type="button">▶ Play Theme</button>
                <button class="action-btn" type="button" disabled>Disabled</button>
            </div>
        </section>

        <section class="bento form span-1x2">
            <h3>Kitchen Sink: Forms</h3>
            <input class="sample-input" type="text" placeholder="Введите текст для проверки поля">
            <label class="check-item"><input type="checkbox" checked><span>Custom Checkbox</span></label>
            <label class="check-item"><input type="radio" name="density" checked><span>Radio Compact</span></label>
            <label class="check-item"><input type="radio" name="density"><span>Radio Comfortable</span></label>
            <label class="switch-item"><input id="labSwitch" type="checkbox" checked><span class="switch-ui"></span><span>Toggle / Switch</span></label>
            <label class="range-item">Range-slider<input id="rangeControl" type="range" min="0" max="100" value="70"></label>
            <div class="focus-demo" tabindex="0">Focus test: нажми Tab</div>
        </section>

        <section class="bento status span-1x1">
            <h3>Status</h3>
            <div class="skeleton"></div>
            <div class="progress-wrap">
                <span id="rangeValue">Прогресс: 70%</span>
                <div class="progress-bar"><i id="progressFill" style="width:70%"></i></div>
            </div>
            <div class="chips">
                <span class="chip">Live</span>
                <span class="chip">Preview</span>
                <span class="chip">QA</span>
            </div>
        </section>

        <section class="bento layering span-1x1 hover-card" id="hoverCard">
            <h3>Layering & Elevation</h3>
            <p>Карточка реагирует на hover, проверяя тени, контуры и глубину.</p>
            <div class="dropdown-wrap">
                <button id="dropdownTrigger" class="secondary-btn" type="button">Dropdown</button>
                <div id="dropdownMenu" class="dropdown-menu">
                    <button type="button">Open settings</button>
                    <button type="button">Duplicate style</button>
                    <button type="button">Export snapshot</button>
                </div>
            </div>
        </section>

        <section class="bento media span-1x1">
            <h3>Media Test</h3>
            <div class="media-image"></div>
            <p>Проверка фильтрации изображения под выбранную тему.</p>
        </section>

        <section class="bento music span-1x1">
            <h3>Music Player</h3>
            <div class="music-player">
                <div class="album-art"></div>
                <div>
                    <strong>Night Synthesis</strong>
                    <p>Theme Lab Artist</p>
                    <div class="player-controls">
                        <button type="button">⏮</button>
                        <button type="button">⏯</button>
                        <button type="button">⏭</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="bento chart span-1x1">
            <h3>Analytics Chart</h3>
            <svg viewBox="0 0 280 120" class="chart-svg" aria-label="chart">
                <polyline points="0,95 45,68 90,74 135,45 180,58 225,34 280,48" />
                <circle cx="45" cy="68" r="3"></circle>
                <circle cx="135" cy="45" r="3"></circle>
                <circle cx="225" cy="34" r="3"></circle>
            </svg>
            <div class="legend">
                <span><i></i> Conversion</span>
                <span><i></i> Trend</span>
            </div>
        </section>

        <section class="bento chat span-1x1">
            <h3>Chat Bubble</h3>
            <div class="chat-thread">
                <div class="bubble user">Мне нравится эта тема?</div>
                <div class="bubble system">Проверь контраст, кнопки и читабельность на всех блоках.</div>
            </div>
        </section>

        <section class="bento typo span-2x1">
            <h3>Типографическая матрица</h3>
            <div class="type-grid">
                <h1>H1 Заголовок</h1>
                <h2>H2 Заголовок</h2>
                <h3>H3 Заголовок</h3>
                <h4>H4 Заголовок</h4>
                <h5>H5 Заголовок</h5>
                <h6>H6 Заголовок</h6>
            </div>
            <p class="type-text">Параграф с <strong>жирным</strong>, <em>курсивом</em> и <code>кодом</code> для проверки читаемости в выбранной теме.</p>
        </section>
    `;
}

export function initLabInteractions() {
    const dropdownTrigger = document.getElementById('dropdownTrigger');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const rangeControl = document.getElementById('rangeControl');
    const rangeValue = document.getElementById('rangeValue');
    const progressFill = document.getElementById('progressFill');

    dropdownTrigger.addEventListener('click', () => {
        dropdownMenu.classList.toggle('is-open');
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown-wrap')) {
            dropdownMenu.classList.remove('is-open');
        }
    });

    rangeControl.addEventListener('input', () => {
        const value = rangeControl.value;
        rangeValue.textContent = `Прогресс: ${value}%`;
        progressFill.style.width = `${value}%`;
    });
}
