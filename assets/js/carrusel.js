function moveSlides(direction, carouselId) {
    // Obtener el carrusel correspondiente
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelector('.slides');
    const slideCount = slides.children.length;

    // Asegurarse de que las imágenes están cargadas
    const slideWidth = slides.children[0]?.offsetWidth || 0;
    if (!slideWidth) {
        console.error('Error: Las imágenes no están cargadas correctamente.');
        return;
    }

    const currentTransform = Math.abs(parseInt(slides.style.transform?.match(/-?\d+/)?.[0]) || 0);

    // Calcular el número de imágenes visibles dinámicamente
    const visibleSlides = Math.floor(carousel.offsetWidth / slideWidth);

    // Calcular el nuevo índice
    let newTransform = currentTransform + direction * slideWidth;

    // Limitar el desplazamiento dentro del rango permitido
    if (newTransform < 0) {
        newTransform = 0;
    }
    if (newTransform > (slideCount - visibleSlides) * slideWidth) {
        newTransform = (slideCount - visibleSlides) * slideWidth;
    }

    // Aplicar el nuevo desplazamiento
    slides.style.transform = `translateX(-${newTransform}px)`;
}
