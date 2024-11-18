function moveSlides(direction, carouselId) {
    // Obtener el carrusel correspondiente
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelector('.slides');
    const slideCount = slides.children.length;

    // Calcular el ancho de cada imagen basado en el ancho del contenedor
    const carouselWidth = carousel.offsetWidth;  // Ancho del contenedor
    const imagesToShow = 3; // Número de imágenes visibles
    const slideWidth = carouselWidth / imagesToShow;

    const currentTransform = Math.abs(parseInt(slides.style.transform.replace('translateX(', '').replace('px)', '')) || 0);

    // Calcular el nuevo índice
    let newTransform = currentTransform + direction * slideWidth;

    // Limitar la cantidad de desplazamiento para que no se salga del rango de las imágenes
    if (newTransform < 0) {
        newTransform = 0;
    }
    if (newTransform > (slideCount - imagesToShow) * slideWidth) {
        newTransform = (slideCount - imagesToShow) * slideWidth;
    }

    // Aplicar el nuevo desplazamiento
    slides.style.transform = `translateX(-${newTransform}px)`;
}
