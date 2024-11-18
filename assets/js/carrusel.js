let currentSlide = 0;

function moveSlides(direction, slidesId) {
    const slides = document.getElementById(slidesId);
    const totalSlides = slides.children.length;

    currentSlide += direction;

   // Controlar el desplazamiento para que se mantenga dentro de los límites
    if (currentSlide < 0) {
        currentSlide = totalSlides - 3;  // Volver al final si estamos al principio
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;  // Volver al principio si estamos al final
    }
    
    // Mueve el carrusel solo una imagen a la vez
    slides.style.transform = `translateX(-${currentSlide * 33.3}%)`; // 33.3% por imagen
}
