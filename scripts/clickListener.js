var historia = document.querySelector("#historia");
var wspolczesnosc = document.querySelector("#wspolczesnosc");
var gwara = document.querySelector("#gwara");

var historiaPopup = document.querySelector("#historia-popup");
var wspolczesnoscPopup = document.querySelector("#wspolczesnosc-popup");
var gwaraPopup = document.querySelector(".gwaraPopup");

var closePopup = document.querySelectorAll(".closePopup");

historia.addEventListener("click", function () {
  historiaPopup.style.display = "block";
});

wspolczesnosc.addEventListener("click", function () {
  wspolczesnoscPopup.style.display = "block";
});

gwara.addEventListener("click", function () {
  gwaraPopup.style.display = "block";
});

for (var i = 0; i < closePopup.length; i++) {
  closePopup[i].addEventListener("click", function () {
    historiaPopup.style.display = "none";
    wspolczesnoscPopup.style.display = "none";
    gwaraPopup.style.display = "none";
  });
}
