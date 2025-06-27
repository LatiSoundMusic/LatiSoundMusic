let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides ? slides.children.length : 0;

// Función para mover los slides
function moveSlide(direction) {
    if (!slides) return; // Evita errores si no hay carrusel
    slideIndex += direction;

    // Si se pasa al anterior del primero
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Si se pasa del último
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    updateSlidePosition();
}

// Actualiza la posición del slide
function updateSlidePosition() {
    if (slides) {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

// Movimiento automático cada 10 segundos
if (slides) {
    setInterval(() => {
        moveSlide(1);
    }, 10000);
}

// Permite que las funciones estén disponibles para HTML
window.moveSlide = moveSlide;

function scrollReel(direction) {
    const reel = document.querySelector('.reel-container');
    if (!reel) return; // Evita errores si no hay reel
    const scrollAmount = 320;
    const maxScroll = reel.scrollWidth - reel.clientWidth;
    
    let newScrollLeft = reel.scrollLeft + direction * scrollAmount;
    
    if (newScrollLeft < 0) {
        newScrollLeft = 0;
    } else if (newScrollLeft > maxScroll) {
        newScrollLeft = maxScroll;
    }
    
    reel.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
    });
}

function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');

if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}
if (closeMenu) {
    closeMenu.addEventListener('click', toggleMobileMenu);
}
