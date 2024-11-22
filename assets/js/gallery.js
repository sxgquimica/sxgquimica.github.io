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

// Código para cargar las imágenes dinámicamente en el contenedor
(async () => {
    const img_container = document.getElementById("img-container");
    const caption_container = document.getElementById("full-img-description")
  
    for (let i = 1; i <= 20; i++) {
      // get file image
      const pic_name = `img${i}`;
      const pic_path = "images/galeria/" + pic_name + ".jpg";
      // const caption_path = "images/galeria/description" + pic_name + ".txt"
  
      const newImage = new Image();
      try {
        newImage.src = pic_path;
        // newImage.alt = pic_name;
        newImage.setAttribute("onclick", "openFullImg(this.src)")
        await new Promise((resolve, reject) => {
          newImage.onload = function() {
            resolve();
          }
          newImage.onerror = function() {
            reject();
          }
        });
      } catch(e) {
        // reject was called, break out of the loop:
        continue;
      }
      // var fileReader = new FileReader(); 
      // fileReader.onload = function (e) {
      //   newImage.alt = fileReader.result; 
      // } 
      // fileReader.readAsText(caption_path);
      // fetch(caption_path)
      //   .then(response => response.text())
      //   .then((data) => {
      //       newImage.alt = data
      // })
      img_container.appendChild(newImage);
    }
  })();
