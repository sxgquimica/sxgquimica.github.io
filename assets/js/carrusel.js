function moveSlides(direction, carouselId) {
    // Obtener el carrusel correspondiente
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelector('.slides');
    const slideCount = slides.children.length;
    const slideWidth = slides.children[0].offsetWidth; // Obtener el ancho de cada imagen
    const currentTransform = Math.abs(parseInt(slides.style.transform.replace('translateX(', '').replace('px)', '')) || 0);

    // Calcular el nuevo índice
    let newTransform = currentTransform + direction * slideWidth;

    // Limitar la cantidad de desplazamiento para que no se salga del rango de las imágenes
    if (newTransform < 0) {
        newTransform = 0;
    }
    if (newTransform > (slideCount - 3) * slideWidth) { // Si hay más de 3 imágenes, limitar el desplazamiento
        newTransform = (slideCount - 3) * slideWidth;
    }

    // Aplicar el nuevo desplazamiento
    slides.style.transform = `translateX(-${newTransform}px)`;
}
