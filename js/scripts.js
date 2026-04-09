// ====================== ДАННЫЕ НОВЕЛЛ ======================
const novellas = [
    { 
        num: "I", 
        title: "Под городом", 
        tagline: "…кто-то помнит, кем он был",
        image: "novella-01.jpg"
    },
    { 
        num: "II", 
        title: "Река несёт", 
        tagline: "не только воду. Река несёт намерение",
        image: "novella-02.jpg"
    },
    { 
        num: "III", 
        title: "Семь ночей", 
        tagline: "Семь грехов. Двери заперты",
        image: "novella-03.jpg"
    },
    { 
        num: "IV", 
        title: "Зверь внутри", 
        tagline: "не враг. Зверь внутри — вопрос",
        image: "novella-04.jpg"
    },
    { 
        num: "V", 
        title: "Тринадцатая невеста", 
        tagline: "Двенадцать умерли. Тринадцатая — откажется",
        image: "novella-05.jpg"
    },
    { 
        num: "VI", 
        title: "Карнавал", 
        tagline: "дарит радость. Карнавал забирает радость",
        image: "novella-06.jpg"
    },
    { 
        num: "VII", 
        title: "Стена", 
        tagline: "Стоит. За стеной — ничего. Буквально",
        image: "novella-07.jpg"
    },
    { 
        num: "VIII", 
        title: "История клана", 
        tagline: "— ложь. Правда — под ногами",
        image: "novella-08.jpg"
    },
    { 
        num: "IX", 
        title: "Охотники стали дичью", 
        tagline: "",
        image: "novella-09.jpg"
    },
    { 
        num: "X", 
        title: "Последняя охота", 
        tagline: "На самих себя",
        image: "novella-10.jpg"
    }
];

// ====================== РЕНДЕР КАРТОЧЕК НОВЕЛЛ ======================
function renderNovellas() {
    const grid = document.getElementById('novella-grid');
    
    grid.innerHTML = novellas.map(n => `
        <div class="novella-card">
            <img src="assets/images/novellas/${n.image}" 
                 alt="Новелла ${n.num}" 
                 loading="lazy">
            <h3>${n.num}. ${n.title}</h3>
            <p class="tagline">${n.tagline}</p>
            <a href="https://t.me/DorhadasBot" class="btn btn-primary" style="width: 90%; margin: 15px auto; display: block; text-align: center;">
                Читать начало
            </a>
        </div>
    `).join('');
}
// ====================== ДАННЫЕ ОХОТНИКОВ ======================
const hunters = [
    {
        name: "Марвор",
        role: "Охотник за Душами",
        quote: "Я — охотник. Не дипломат. Но каждый монстр был жертвой.",
        image: "marvor.jpg"
    },
    {
        name: "Сивра",
        role: "Призрачный Клинок",
        quote: "Понять — прежде чем убить. Это — не слабость.",
        image: "sivra.jpg"
    },
    {
        name: "Кессаг",
        role: "Железный Щит",
        quote: "Мёртвые не разговаривают. Но умирающие — очень разговорчивы.",
        image: "kessag.jpg"
    },
    {
        name: "Бренног",
        role: "Человек с дополнениями",
        quote: "Я — человек. С дополнениями.",
        image: "brennog.jpg"
    },
    {
        name: "Этайн",
        role: "Ведьма Пепла",
        quote: "Правда — моё оружие. Даже если она убивает.",
        image: "etain.jpg"
    }
];

// ====================== РЕНДЕР КАРТОЧЕК ОХОТНИКОВ ======================
function renderHunters() {
    const grid = document.getElementById('hunters-grid');
    
    grid.innerHTML = hunters.map(h => `
        <div class="hunter-card">
            <div class="hunter-inner">
                <!-- Лицевая сторона -->
                <div class="front">
                    <img src="assets/images/hunters/${h.image}" 
                         alt="${h.name}" 
                         loading="lazy">
                    <div class="hunter-info">
                        <h3>${h.name}</h3>
                        <p>${h.role}</p>
                    </div>
                </div>
                
                <!-- Обратная сторона -->
                <div class="back">
                    <p class="quote">«${h.quote}»</p>
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