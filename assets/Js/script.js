// FIXED CANVAS
class HeartCanvas {
    constructor() {
        this.canvas = document.getElementById('heartCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize(); this.init();
    }
    resize() { this.canvas.width = window.innerWidth; this.canvas.height = window.innerHeight; }
    init() { window.addEventListener('resize', () => this.resize()); this.animate(); }
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        requestAnimationFrame(() => this.animate());
    }
}
new HeartCanvas();

// HEARTS
function createHeart() {
    const heart = document.createElement('div');
    const hearts = ['💖','💕','💗','💓','💞','💝','🌸','🌺','✨'];
    heart.className = 'heart';
    heart.innerHTML = hearts[Math.floor(Math.random()*9)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 12 + 16) + 'px';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 200);

// PROGRESS BAR
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((scrollTop / docHeight) * 100, 100);
    document.querySelector('.scroll-progress').style.width = progress + '%';
});

// 🔥 PERFECT CORNY EXPLOSION
function cornyExplosion() {
    // 1. MASSIVE CIRCULAR EXPLOSION
    for(let i = 0; i < 80; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            const emojis = ['💖','💕','💗','🩷','🌹','✨','💫','🌟','😂','🥰','💥','🎉'];
            particle.innerHTML = emojis[Math.floor(Math.random() * 12)];
            
            const angle = (Math.PI * 2 * i) / 80;
            const velocity = 250 + Math.random() * 350;
            const endX = Math.cos(angle) * velocity;
            const endY = Math.sin(angle) * velocity;
            const rotation = 360 + Math.random() * 720;
            const duration = 1 + Math.random() * 0.8;
            const size = 20 + Math.random() * 30;
            
            particle.style.cssText = `
                position: fixed; left: 50%; top: 50%;
                font-size: ${size}px; line-height: 1;
                pointer-events: none; z-index: 10000;
                transform: translate(-50%, -50%);
                animation: explodeParticle${i} ${duration}s ease-out forwards;
                filter: drop-shadow(0 0 15px rgba(255,107,157,0.9));
            `;
            
            const style = document.createElement('style');
            style.id = `explode${i}`;
            style.textContent = `
                @keyframes explodeParticle${i} {
                    0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 1; }
                    20% { transform: translate(-50%, -50%) scale(1.3) rotate(90deg); opacity: 1; }
                    100% { transform: translate(${endX}px, ${endY}px) scale(0) rotate(${rotation}deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
                const styleEl = document.getElementById(`explode${i}`);
                if (styleEl) styleEl.remove();
            }, duration * 1000 + 500);
            
        }, i * 10);
    }
    
    // 2. SCREEN SHAKE
    document.body.style.setProperty('--shake', 'shake 0.6s cubic-bezier(.36,.07,.19,.97)');
    
    // 3. CORNY MESSAGE
    setTimeout(() => {
        const message = document.createElement('div');
        message.innerHTML = 'Corny mo ah levi, BALIW! 💕';
        message.style.cssText = `
            position: fixed; left: 50%; top: 45%; transform: translate(-50%, 0);
            font-family: 'Dancing Script', cursive; font-size: clamp(3rem, 8vw, 5rem); font-weight: 700;
            background: linear-gradient(45deg, #ff4757, #ff6b9d, #ffd93d, #ff9ff3); background-size: 400% 400%;
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
            text-align: center; text-shadow: 0 0 30px rgba(255,107,157,0.6); z-index: 10001; pointer-events: none;
            animation: cornyBounce 2s cubic-bezier(0.68, -0.55, 0.265, 1.55), textGlow 2s ease-in-out infinite alternate;
        `;
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 3000);
    }, 500);
    
    setTimeout(() => document.body.style.removeProperty('--shake'), 600);
}

// STATIC ANIMATIONS (run once)
(function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translate(0); }
            10%, 30%, 50%, 70%, 90% { transform: translate(-5px, 2px); }
            20%, 40%, 60%, 80% { transform: translate(5px, -1px); }
        }
        @keyframes cornyBounce {
            0% { transform: translate(-50%, 0) scale(0) rotate(-20deg); opacity: 0; }
            50% { transform: translate(-50%, -20px) scale(1.2) rotate(5deg); opacity: 1; }
            70% { transform: translate(-50%, -10px) scale(1.1) rotate(-3deg); }
            100% { transform: translate(-50%, 0) scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes textGlow {
            from { filter: drop-shadow(0 0 20px rgba(255,107,157,0.5)); }
            to { filter: drop-shadow(0 0 40px rgba(255,107,157,0.9)); }
        }
        body { animation: var(--shake, none); }
    `;
    document.head.appendChild(style);
})();

// ================== HUGOT ENGINE ==================
const feed = document.getElementById("hugot-feed");

const hugots = [
    { text: "Rosas ka ba? Kasi kahit may tinik ka, gusto pa rin kitang hawakan.", emoji: "🌹" },
    { text: "Fine dining ka ba? Kasi gusto kitang i-reserve… exclusively.", emoji: "🍽️" },
    { text: "WiFi ka ba? Kasi kahit di kita nakikita, ramdam kita.", emoji: "📶" },
    { text: "Spotify ka ba? Kasi ikaw na yung daily mix ko.", emoji: "🎵" },
    { text: "Google Maps ka ba? Kasi naliligaw ako… pero sayo ko gustong mapunta.", emoji: "🗺️" },
    { text: "Notification ka ba? Kasi ikaw yung hinihintay ko kahit walang dahilan.", emoji: "🔔" },
    { text: "Gulong ka ba? Kasi sa 'yo umiikot ang mundo ko, at ikaw ang gusto kong makasama hanggang sa dulo.", emoji: "🛞" },
    { text: "Time ka ba? Kasi bumabalik ako sayo.", emoji: "⏰" },
    { text: "Cloud storage ka ba? Kasi gusto kitang i-keep.", emoji: "☁️" },
    { text: "Password ka ba? Kasi ikaw lang gusto kong tandaan.", emoji: "🔐" },
    { text: "Update ka ba? Kasi kulang araw ko pag wala ka.", emoji: "📲" },
    { text: "Bookmark ka ba? Kasi babalikan kita.", emoji: "🔖" },
    { text: "Playlist ka ba? Kasi ikaw mood ko.", emoji: "🎧" },
    { text: "Lens ka ba? Kasi ikaw focus ko.", emoji: "📸" },
    { text: "Parallel universe ka ba? Kasi ibang version ako pag kasama ka.", emoji: "🌌" },
    { text: "Scroll ka ba? Kasi hindi kita matigilan.", emoji: "📱" },
    { text: "Reels ka ba? Kasi paulit-ulit kitang papanoorin sa nakakatamis mong mga ngiti.", emoji: "🎬" },
    { text: "For You Page ka ba? Kasi ikaw lang gusto kong makita.", emoji: "⭐" },
    { text: "Comment section ka ba? Kasi gusto kong mag-stay.", emoji: "💬" },
    { text: "Mute ka ba? Kasi kahit tahimik ka, ramdam kita.", emoji: "🤫" },
    { text: "Typing ka ba? Kasi hinihintay kita kahit wala pang sinasabi.", emoji: "✍️" },
    { text: "Seen ka ba? Kasi kahit masakit, sayo pa rin ako.", emoji: "👀" },
    { text: "Draft ka ba? Kasi hindi kita masend pero ikaw iniisip ko.", emoji: "📝" },
    { text: "Late night scroll ka ba? Kasi ikaw dahilan bakit gising ako.", emoji: "🌙" },
    { text: "Story ka ba? Kasi ayokong mag-expire ka.", emoji: "⏳" },
    { text: "Tadhana ka ba? Kasi bumabalik ako sayo.", emoji: "🌠" },
    { text: "Pahinga ka ba? Kasi sayo ako kumakalma.", emoji: "😌" },
    { text: "Signal ka ba? Kasi ikaw hinahanap ko.", emoji: "📶" },
    { text: "Home ka ba? Kasi sayo umuuwi ang puso ko.", emoji: "🏠" },
    { text: "Consistency ka ba? Kasi ikaw hinahanap ko.", emoji: "🔁" },
    { text: "Right timing ka ba? Kasi dumating ka ng tama.", emoji: "⌛" },
    { text: "Closure ka ba? Kasi ikaw sapat na.", emoji: "🔚" },
    { text: "Peace ka ba? Kasi tahimik mundo ko sayo.", emoji: "🕊️" },
    { text: "Busy ka ba? Kasi gusto kitang istorbohin araw-araw.", emoji: "⚡" },
    { text: "Puso ka ba? Kasi gustong gusto kitang aalagaan", emoji: "🩷" },
    { text: "Choice ka ba? Kasi pipiliin kita.", emoji: "✔️" },
    { text: "Risk ka ba? Kasi susugal ako sayo.", emoji: "🎲" },
    { text: "Habit ka ba? Kasi di ko kayang itigil.", emoji: "🔄" },
    { text: "Secret ka ba? Kasi gusto kitang itago.", emoji: "🤐" },
    { text: "Kalapastangan ang hindi ka ibigin, kalokohan ang hindi ka isipin.", emoji: "💭" },
    { text: "Ikaw ba ang pahinga? Kasi sa'yo lang ako humihinto.", emoji: "😌" },
    { text: "Singsing ka ba? Kasi bagay ka sa daliri ko, pero mas bagay ka sa buhay ko.", emoji: "💍" },
    { text: "Hindi ka laro… ikaw yung sineseryoso ko.", emoji: "🎯" },
    { text: "Kung may uulitin man ako, ikaw na 'yon, at ang ating matatamis na oras.", emoji: "🔁" },
    { text: "Hindi ka pampalipas oras… ikaw yung gusto kong paglaanan ng oras.", emoji: "⏳" },
    { text: "Sa dami ng pwede, ikaw pa rin yung pinipili.", emoji: "❤️" },
    { text: "Hindi ka option… ikaw yung desisyon.", emoji: "✔️" },
    { text: "Hindi ka type… ikaw yung standard.", emoji: "✨" },
    { text: "Hindi kita hinahanap… pero sayo ako napunta.", emoji: "❤️" },
    { text: "Hindi ko planong ma-fall… pero nandito ka.", emoji: "💘" },
    { text: "Ang dali mong kausap… ang hirap mong iwasan.", emoji: "😶‍🌫️" },
    { text: "Hindi ka perfect… pero ayoko nang maghanap.", emoji: "💖" },

    { text: "Kulang ba ang tulog mo? Kasi puyat ka na sa kakaisip ko, puyat pa ako sa kakatitig sa 'yo.", emoji: "😴" },
    { text: "Camera ka ba? Kasi tuwing nakikita kita, napapangiti ako.", emoji: "📸" },
    { text: "Google ka ba? Kasi nasa 'yo na ang lahat ng hinahanap ko.", emoji: "🔍" },
    { text: "Magsasaka ka ba? Kasi ang galing mong mag-tanim... ng pag-ibig sa puso ko.", emoji: "🌾" },
    { text: "Pustiso ka ba? Kasi I can't smile without you.", emoji: "🦷" },
    { text: "Kape ka ba? Kasi pinapakaba mo ang dibdib ko.", emoji: "☕" },
    { text: "Parang Gravity ka yata. Kasi kahit anong gawin ko, nahuhulog pa rin ako sa 'yo.", emoji: "🪐" },
    { text: "Geometry ba ang favorite subject mo? Kasi kahit saang angle kita tingnan, ang ganda mo.", emoji: "📐" },

    { text: "Ampalaya ka ba? Kasi kahit anong pait ang ibigay mo, ikaw pa rin ang pampalusog ng puso ko.", emoji: "🥒" },
    { text: "Crayola ka ba? Kasi binibigyan mo ng kulay ang mundo ko.", emoji: "🖍️" },
    { text: "Chicharon ka ba? Kasi ang ingay na nga ng puso ko, nadudurog pa dahil sa 'yo.", emoji: "🥓" },
    { text: "Para kang Exam. Kasi hindi pa kita nasisimulan, gusto na kitang iuwi sa bahay at itodo ang focus sa 'yo.", emoji: "📚" },
    { text: "History subject ka ba? Kasi paulit-ulit ka sa isip ko.", emoji: "📖" },
    { text: "Calculus ka ba? Kasi kahit mahirap kang intindihin, handa akong mag-solve ng paraan makuha lang kita.", emoji: "📈" },
    { text: "Maling-mali talaga ang Map na 'to. Kasi sabi dito, 'You are here,' pero bakit wala ka sa tabi ko?", emoji: "🗺️" },
    { text: "Marunong ka bang lumangoy? Kasi baka malunod ka sa pagmamahal ko.", emoji: "🏊" },
    { text: "Keyboard ka ba? Kasi type kita.", emoji: "⌨️" },
    { text: "Wi-Fi ka ba? Kasi nararamdaman ko ang connection nating dalawa.", emoji: "📶" },
    { text: "Low battery ka ba? Kasi kailangan mo na ng charge... ng pagmamahal ko.", emoji: "🔋" },
    { text: "Mamatay akong naka ngiti, kapag ikaw ang nasa aking tabi.", emoji: "⚰️" },
    { text: "Ikaw lang yung what if na gusto kong ituloy.", emoji: "💭" },
    { text: "Sa dami ng tao… sayo ako naging totoo.", emoji: "🫶" },
    { text: "Hindi ka lang crush… ikaw ay ang aking pahinga.", emoji: "🌷" },
    { text: "Future ka ba? Kasi ang hirap isipin ng bukas kung wala ka.", emoji: "💫" },
    { text: "Are you my Ballerina Cappuccina as I'm your Cappucino Assasino?", emoji: "☕" },
    { text: "Number ka ba? Kasi ikaw, at ang mismo mong pangalan, ay gusto kong tawagan ng walang hanggang", emoji: "📞" }
];

function createCard() {
    const item = hugots[Math.floor(Math.random() * hugots.length)];
    const card = document.createElement("div");
    card.className = "hugot-card variant-" + (Math.floor(Math.random() * 4) + 1);
    if (Math.random() > 0.7) card.classList.add("large");

    card.innerHTML = `
        <div class="hugot-image">${item.emoji}</div>
        <div class="hugot-line">"${item.text}"</div>
    `;
    feed.appendChild(card);
}

// Load initial cards
for (let i = 0; i < 12; i++) createCard();

// Infinite scroll
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        for (let i = 0; i < 6; i++) createCard();
    }
});

console.log("🚀 Endless Hugot + Corny Explosion READY! 💥😂💕");