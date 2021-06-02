let body = document.querySelector("body");
let IMG_NUMBER = 3;


function paintImage(imgNumber) {
  let image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`
  image.classList.add('bgImage');
  body.prepend(image);
  image.addEventListener("loadend", handImgLoad);

}

function genRandom() {
  let number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  let randomNumber = genRandom();
  paintImage(randomNumber)
}

init();