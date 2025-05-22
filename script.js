document.addEventListener('DOMContentLoaded', function() {
    const loveBombBtn = document.getElementById('loveBomb');
    const explosionZone = document.getElementById('explosionZone');
    const container = document.querySelector('.container');
    
    // Make floating elements move randomly
    const floatingElements = document.querySelectorAll('.floating-heart, .floating-star, .floating-kiss, .floating-ring');
    
    floatingElements.forEach(el => {
        animateFloating(el);
    });
    
    function animateFloating(element) {
        const duration = 15 + Math.random() * 15;
        const delay = Math.random() * 5;
        
        element.style.animation = `floating ${duration}s infinite ${delay}s linear`;
        
        // Random initial position
        element.style.left = `${Math.random() * 90}%`;
        element.style.top = `${Math.random() * 90}%`;
    }
    
    loveBombBtn.addEventListener('click', function() {
        explosionZone.innerHTML = '';
        container.classList.add('explosion-active');
        createExplosion();
        
        // Button animation
        this.classList.add('active');
        setTimeout(() => {
            this.classList.remove('active');
        }, 300);
        
        setTimeout(() => {
            container.classList.remove('explosion-active');
        }, 8000);
    });
    
    // Tambahkan efek ketika tombol IG diklik
document.querySelectorAll('.ig-link a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Efek visual saat diklik
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // Opsional: Track klik (jika menggunakan analytics)
        console.log('Instagram link clicked');
    });
});
    
    function createExplosion() {
        const heartCount = 700;
        
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                createHeart(i % 5 === 0);
            }, Math.random() * 9000);
        }
    }
    
    function createHeart(isBig = false) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        
        if (isBig) {
            heart.style.fontSize = '42px';
            heart.style.animationDuration = '25s';
            heart.style.textShadow = '0 0 20px rgba(255, 45, 149, 0.9)';
        } else {
            heart.style.fontSize = `${24 + Math.random() * 20}px`;
            heart.style.animationDuration = `${8 + Math.random() * 6}s`;
        }
        
        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * Math.max(window.innerWidth, window.innerHeight);
        const endX = distance * Math.cos(angle);
        const endY = distance * Math.sin(angle);
        
        heart.style.setProperty('--random-x', `${endX}px`);
        heart.style.setProperty('--random-y', `${endY}px`);
        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;
        heart.style.setProperty('--delay', `${Math.random() * 2}s`);
        
        const rotation = Math.random() * 360;
        heart.style.transform = `rotate(${rotation}deg)`;
        
        explosionZone.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, isBig ? 15000 : 12000);
    }
    
    // Additional random animations
    setInterval(() => {
        floatingElements.forEach(el => {
            el.style.transform = `rotate(${Math.random() * 360}deg)`;
        });
    }, 3000);
});