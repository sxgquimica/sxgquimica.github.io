var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

// import * as img from 'images/galeria/path_to_img.ext';
// let n_img = 5;
// for (var i = 1; i <= n_img; i++) {
//     document.getElementById("img-container").innerHTML+=(`<img src="images/galeria/img${i}.jpg" onclick="openFullImg(this.src)" alt="img${i}">`);
// }

var dir = "images/galeria";
var fileExtension = ".jpg";
var imgContainerHTML = document.getElementById("img-container").innerHTML;
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .png file names in the page
        $(data).find("a:contains(" + fileExtension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            imgContainerHTML.append("<img src='" + dir + filename + "' onclick='openFullImg(this.src)'>");
        });
    }
});