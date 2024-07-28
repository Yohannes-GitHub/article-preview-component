const shareDiv = document.getElementById("share-div");
const writerDiv = document.getElementById("writer-div");
const shareIconDiv = document.getElementById("share-icon-div");
const shareIcon = document.getElementById("share-icon");

shareIconDiv.addEventListener("click", () => {
  shareIconDiv.classList.toggle("share-icon-div-colored");
  shareIcon.classList.toggle("share-icon-colored");
  shareDiv.classList.toggle("hidden");

  if (window.innerWidth < 992) {
    writerDiv.classList.toggle("hidden");

    if (window.innerWidth < 575) {
      if (writerDiv.classList.length === 1) shareIconDiv.style.bottom = "23px";
      else shareIconDiv.style.bottom = "16px";
    } else {
      if (writerDiv.classList.length === 1) shareIconDiv.style.bottom = "27px";
      else shareIconDiv.style.bottom = "17px";
    }
  }
});

window.onresize = function () {
  if (window.innerWidth >= 992) {
    writerDiv.classList.remove("hidden");
    shareIconDiv.style.bottom = "34px";
  } else {
    if (window.innerWidth >= 575) {
      if (shareDiv.classList.length === 1) {
        writerDiv.classList.add("hidden");
        shareIconDiv.style.bottom = "17px";
      } else shareIconDiv.style.bottom = "27px";
    } else {
      if (shareDiv.classList.length === 1) shareIconDiv.style.bottom = "16px";
      else shareIconDiv.style.bottom = "23px";
    }
  }
};
