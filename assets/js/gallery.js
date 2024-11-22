var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

// Función para abrir la imagen en el modal
function openFullImg(pic){
    fullImgBox.style.display = "flex";  // Muestra el modal
    fullImg.src = pic;  // Establece la imagen en el modal
    fullImg.alt = pic.alt;  // Establece el texto alternativo (alt) de la imagen
}

// Función para cerrar el modal
function closeFullImg(){
    fullImgBox.style.display = "none";  // Oculta el modal
}

// Función para ocultar una imagen específica
function hideImg(pic){
    pic.style.display = "none";
}

// Aquí ya no necesitas crear un contenedor de imágenes dinámicamente
(async () => {
    // Busca todas las imágenes dentro de los divs con clase 'slides'
    const images = document.querySelectorAll('.slides img');
  
    // Recorre todas las imágenes y asigna el evento para abrir el modal
    images.forEach(image => {
        image.addEventListener('click', function() {
            openFullImg(image.src);
        });
    });
})();

// Asegúrate de asociar las imágenes de la galería estática con la función openFullImg
document.querySelectorAll('.gallery-container img').forEach(img => {
    img.setAttribute("onclick", "openFullImg(this.src)");  // Asocia el evento de cada imagen
});
