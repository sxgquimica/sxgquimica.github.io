let currentIndex = 0;  // Índice para rastrear la posición actual

function moveSlides(direction, slidesId) {
    const slides = document.getElementById(slidesId);  // Obtenemos el contenedor de imágenes
    const totalSlides = slides.children.length; // Número total de imágenes

    // Calculamos el ancho de una imagen para mover el contenedor
    const slideWidth = slides.children[0].offsetWidth;

    // Actualizamos el índice basado en la dirección
    currentIndex += direction;

    // Aseguramos que el índice esté dentro del rango válido (0 a totalSlides - 3)
    if (currentIndex < 0) {
        currentIndex = totalSlides - 3;
    } else if (currentIndex > totalSlides - 3) {
        currentIndex = 0;
    }

    // Desplazamos el contenedor de las imágenes
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
