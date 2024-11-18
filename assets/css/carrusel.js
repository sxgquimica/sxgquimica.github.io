let currentSlide = 0;

function moveSlides(direction, slidesId) {
    const slides = document.getElementById(slidesId);
    const totalSlides = slides.children.length;

    currentSlide += direction;

    // Controlar el desplazamiento para que se mantenga dentro de los límites
    if (currentSlide < 0) {
        currentSlide = Math.floor(totalSlides / 3) - 1; // Vuelve al final si estamos al principio
    } else if (currentSlide >= Math.floor(totalSlides / 3)) {
        currentSlide = 0; // Vuelve al principio si estamos al final
    }

    // Mueve el carrusel solo una imagen a la vez
    slides.style.transform = `translateX(-${currentSlide * 33.3}%)`; // 33.3% por imagen
}
