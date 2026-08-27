document.addEventListener('DOMContentLoaded', () => {

    // 1. Generador de Partículas de Luz Cyberpunk
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posicionamiento e intervalos aleatorios
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 8 + 4}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Alternar colores neón en las partículas
        if (Math.random() > 0.5) {
            particle.style.background = 'var(--magenta-neon)';
            particle.style.boxShadow = '0 0 8px var(--magenta-neon)';
        }

        particlesContainer.appendChild(particle);
    }

    // 2. Efecto Parallax / Tilt 3D en Tarjetas al pasar el cursor
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });

});
