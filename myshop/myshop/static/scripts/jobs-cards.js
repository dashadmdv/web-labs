document.addEventListener('DOMContentLoaded', function() {
    function applyParallax(card) {
        const onMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const cardRect = card.getBoundingClientRect();
            const cardX = cardRect.left + cardRect.width / 2;
            const cardY = cardRect.top + cardRect.height / 2;
            const deltaX = (mouseX - cardX) / 20;
            const deltaY = (mouseY - cardY) / 20;

            card.style.setProperty("--posx", `${50 + deltaX / 2}%`);
            card.style.setProperty("--posy", `${50 + deltaY / 2}%`);
            card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        };

        card.addEventListener('mousemove', onMouseMove);

        card.onmouseleave = () => {
            card.removeEventListener('mousemove', onMouseMove);
            card.style.animation = 'reset-card 1s ease';
            card.addEventListener("animationend", e=>{
              card.style.animation = 'unset';
              card.style.setProperty("--posx", "50%");
              card.style.setProperty("--posy", "50%");
              card.style.transform = 'translate(0, 0)';
            }, {
              once: true
            });
        };
    }

    function cardsAnimationMain() {
        const cards = document.querySelectorAll('.article');
        cards.forEach((card) => {
            card.addEventListener('mouseenter', () => applyParallax(card));
        });
    }

    cardsAnimationMain();
});


