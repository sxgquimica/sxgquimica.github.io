let currentSlide = 0;

function moveSlides(direction, slidesId) {
    const slides = document.getElementById(slidesId);
    const totalSlides = slides.children.length;

       currentSlide += direction;

    // Si el desplazamiento es hacia atrás
    if (currentSlide < 0) {
        currentSlide = totalSlides - 3; // Vuelve al final si estamos al principio
    } 
    // Si el desplazamiento es hacia adelante
    else if (currentSlide >= totalSlides - 2) { // 'totalSlides - 2' porque mostramos 3 imágenes
        currentSlide = 0; // Vuelve al principio si estamos al final
    }

    // Mueve el carrusel solo una imagen a la vez
    slides.style.transform = `translateX(-${currentSlide * 33.3}%)`; // 33.3% por cada imagen
}
