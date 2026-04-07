// Данные новелл
const novellas = [
    { num: "I",  title: "Под городом",          tagline: "…кто-то помнит, кем он был" },
    { num: "II", title: "Река несёт",           tagline: "не только воду. Река несёт намерение" },
    { num: "III",title: "Семь ночей",           tagline: "Семь грехов. Двери заперты" },
    { num: "IV", title: "Зверь внутри",         tagline: "не враг. Зверь внутри — вопрос" },
    { num: "V",  title: "Тринадцатая невеста", tagline: "Двенадцать умерли. Тринадцатая — откажется" },
    { num: "VI", title: "Карнавал",             tagline: "дарит радость. Карнавал забирает радость" },
    { num: "VII",title: "Стена",                tagline: "Стоит. За стеной — ничего. Буквально" },
    { num: "VIII",title: "История клана",       tagline: "— ложь. Правда — под ногами" },
    { num: "IX", title: "Охотники стали дичью", tagline: "" },
    { num: "X",  title: "Последняя охота",      tagline: "На самих себя" }
];

// Данные охотников
const hunters = [
    { name: "Марвор", role: "Охотник за Душами", quote: "Я — охотник. Не дипломат. Но каждый монстр был жертвой." },
    { name: "Сивра",  role: "Призрачный Клинок", quote: "Понять — прежде чем убить. Это — не слабость." },
    { name: "Кессаг", role: "Железный Щит",      quote: "Мёртвые не разговаривают. Но умирающие — очень разговорчивы." },
    { name: "Бренног",role: "Человек с дополнениями", quote: "Я — человек. С дополнениями." },
    { name: "Этайн",  role: "Ведьма Пепла",      quote: "Правда — моё оружие. Даже если она убивает." }
];

// Заполнение новелл
function renderNovellas() {
    const grid = document.getElementById('novella-grid');
    grid.innerHTML = novellas.map((n, i) => `
        <div class="novella-card">
            <img src="https://via.placeholder.com/300x400/1a0f0a/c9a84c?text=Новелла+${n.num}" alt="${n.title}">
            <h3>${n.num}. ${n.title}</h3>
            <p class="tagline">${n.tagline}</p>
            <a href="https://t.me/DorhadasBot" class="btn btn-primary" style="width: 90%; margin: 15px auto; display: block; text-align: center;">Читать начало</a>
        </div>
    `).join('');
}

// Заполнение охотников
function renderHunters() {
    const grid = document.getElementById('hunters-grid');
    grid.innerHTML = hunters.map(h => `
        <div class="hunter-card">
            <div class="hunter-inner">
                <div class="front">
                    <img src="https://via.placeholder.com/300x280/1a1a1a/8b0000?text=${h.name}" alt="${h.name}">
                    <div style="padding:15px; text-align:center;">
                        <h3>${h.name}</h3>
                        <p style="color:#c9a84c; font-size:0.95rem;">${h.role}</p>
                    </div>
                </div>
                <div class="back">
                    <p style="font-style:italic;">«${h.quote}»</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Заполнение цен (пример)
function renderPricing() {
    const grid = document.querySelector('.pricing-grid');
    grid.innerHTML = `
        <div class="price-card">
            <h3>Одна новелла</h3>
            <p style="font-size:2.5rem; margin:20px 0; color:var(--accent);">490 ₽</p>
            <ul style="text-align:left; margin:20px 0;">
                <li>PDF + EPUB</li>
                <li>Арт-галерея новеллы</li>
            </ul>
            <a href="https://t.me/DorhadasBot" class="btn btn-primary">Купить</a>
        </div>

        <div class="price-card recommended">
            <h3>Вся сага</h3>
            <p style="font-size:2.5rem; margin:20px 0; color:var(--accent);">2490 ₽</p>
            <p style="color:#c9a84c; margin-bottom:15px;">Скидка 30%</p>
            <ul style="text-align:left; margin:20px 0;">
                <li>Все 10 новелл</li>
                <li>Карта мира</li>
                <li>Бестиарий</li>
                <li>Мастер-файл</li>
            </ul>
            <a href="https://t.me/DorhadasBot" class="btn btn-primary">Купить</a>
        </div>

        <div class="price-card">
            <h3>Сага + Аудио</h3>
            <p style="font-size:2.5rem; margin:20px 0; color:var(--accent);">3490 ₽</p>
            <ul style="text-align:left; margin:20px 0;">
                <li>Всё из «Вся сага»</li>
                <li>Полная аудиоверсия</li>
                <li>Саундтреки</li>
            </ul>
            <a href="https://t.me/DorhadasBot" class="btn btn-primary">Купить</a>
        </div>
    `;
}

// Ambient sound
document.addEventListener('DOMContentLoaded', () => {
    renderNovellas();
    renderHunters();
    renderPricing();

    const audio = document.getElementById('ambient');
    const soundBtn = document.getElementById('sound-btn');

    let isPlaying = false;

    soundBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            soundBtn.textContent = '🔊 Включить атмосферу';
        } else {
            audio.play();
            soundBtn.textContent = '🔇 Выключить звук';
        }
        isPlaying = !isPlaying;
    });
});