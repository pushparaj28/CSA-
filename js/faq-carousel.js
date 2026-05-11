document.addEventListener('DOMContentLoaded', () => {
    const stage = document.querySelector('.orbit-stage');
    const cards = document.querySelectorAll('.faq-card-orbit');
    const dotsContainer = document.querySelector('.orbit-nav');
    
    if (!stage || cards.length === 0) return;

    let currentIndex = 0;
    let autoPlayInterval;
    let isDragging = false;
    let startX = 0;
    let rotationAngle = 0;
    const itemsCount = cards.length;
    const circleRadius = window.innerWidth > 768 ? 450 : 300;

    // Create nav dots
    cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `orbit-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToIndex(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.orbit-dot');

    function updateCards() {
        const angleStep = (Math.PI * 2) / itemsCount;
        
        cards.forEach((card, i) => {
            // Calculate position on the circle based on current rotation
            const relativeIndex = (i - currentIndex + itemsCount) % itemsCount;
            const angle = relativeIndex * angleStep;
            
            // Adjust angle to focus the active card in front (PI/2)
            const x = Math.sin(angle) * circleRadius;
            const z = Math.cos(angle) * circleRadius - circleRadius;
            
            // Calculate scale, opacity, and rotation
            const distance = Math.cos(angle); // 1 at front, -1 at back
            const activeThreshold = 0.95;
            
            const scale = 0.5 + (distance + 1) * 0.25; // 0.5 to 1.0
            const opacity = 0.2 + (distance + 1) * 0.4; // 0.2 to 1.0
            const blur = (1 - (distance + 1) / 2) * 10;
            const rotateY = -Math.sin(angle) * 30; // Tilt based on position

            card.style.transform = `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`;
            card.style.opacity = opacity;
            card.style.filter = `blur(${blur}px)`;
            card.style.zIndex = Math.round((distance + 1) * 100);

            if (relativeIndex === 0) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function goToIndex(index) {
        currentIndex = (index + itemsCount) % itemsCount;
        updateCards();
        resetAutoPlay();
    }

    function next() {
        currentIndex = (currentIndex + 1) % itemsCount;
        updateCards();
    }

    // Drag handling
    stage.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', stopDrag);
    
    stage.addEventListener('touchstart', (e) => startDrag(e.touches[0]));
    window.addEventListener('touchmove', (e) => drag(e.touches[0]));
    window.addEventListener('touchend', stopDrag);

    function startDrag(e) {
        isDragging = true;
        startX = e.clientX;
        resetAutoPlay();
    }

    function drag(e) {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        if (Math.abs(deltaX) > 100) {
            if (deltaX > 0) goToIndex(currentIndex - 1);
            else goToIndex(currentIndex + 1);
            stopDrag();
        }
    }

    function stopDrag() {
        isDragging = false;
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(next, 2000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Initialize
    updateCards();
    startAutoPlay();

    // Responsive adjustment
    window.addEventListener('resize', () => {
        updateCards();
    });
});
