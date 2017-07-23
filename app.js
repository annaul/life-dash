// var fullScreen = document.getElementById("fullScreen");
//
// fullScreen.addEventListener("click", function() {
//   document.body.requestFullscreen();
// }, false);

function imageClicked() {
  var images = document.querySelectorAll("img");
  var curIndex = 0;

  for (var i = 0; i < images.length; i++) {
    if (images[i].style.display !== "none") {
      curIndex = i;
      break;
    }
  }
  if (curIndex >= images.length - 1) {
    return;
  }

  images[curIndex].style.display = "none";
  images[curIndex + 1].style.display = "block";
}

window.onload = function() {
  var images = document.querySelectorAll("img");

  for (var i = 0; i < images.length; i++) {
    images[i].onclick = imageClicked;
  }
}
