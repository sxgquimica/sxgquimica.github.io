// Carrusel.js

// Crea un objeto para almacenar el índice actual de cada carrusel
let currentIndex = {
    'slides1': 0,
    'slides2': 0,
    'slides3': 0,
    'slides4': 0
};

// Función para actualizar las imágenes mostradas en el carrusel
function updateSlides(slideshowId) {
    const slides = document.querySelectorAll(`#${slideshowId} img`);
    const totalSlides = slides.length;
    let start = currentIndex[slideshowId];
    let end = start + 3;

    // Oculta todas las imágenes
    slides.forEach(slide => slide.style.display = 'none');
    
    // Muestra las 3 imágenes correspondientes
    for (let i = start; i < end; i++) {
        const index = i % totalSlides; // El operador módulo crea un bucle continuo
        slides[index].style.display = 'block';
    }
}

// Función para mover las imágenes dentro de cada carrusel
function moveSlides(direction, slideshowId) {
    const slides = document.querySelectorAll(`#${slideshowId} img`);
    const totalSlides = slides.length;

    // Actualiza el índice actual según la dirección
    if (direction === 1) {
        // Movimiento hacia la derecha: avanzar una posición
        currentIndex[slideshowId]++;
    } else if (direction === -1) {
        // Movimiento hacia la izquierda: retroceder una posición
        currentIndex[slideshowId]--;
    }

    // Usamos el operador módulo para hacer que el carrusel sea cíclico
    if (currentIndex[slideshowId] < 0) {
        currentIndex[slideshowId] = totalSlides - 3; // Cuando llega al principio, vuelve al final
    } else if (currentIndex[slideshowId] + 3 > totalSlides) {
        currentIndex[slideshowId] = 0; // Cuando llega al final, vuelve al principio
    }

    // Muestra las nuevas imágenes
    updateSlides(slideshowId);
}

// Inicializa la visualización de las imágenes al cargar la página
window.onload = () => {
    updateSlides('slides1');
    updateSlides('slides2');
    updateSlides('slides3');
    updateSlides('slides4');
};
