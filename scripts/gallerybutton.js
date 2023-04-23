var displayed = 1;
const imgQuantity = 35;

galleryNext = () => {
  myImage = document.getElementById("galleryIMG");
  myImage.src = `../img/gallery/gallery(${displayed + 1}).jpg`;
  displayed += 1;
  if (displayed > imgQuantity) {
    myImage.src = "../img/gallery/gallery(1).jpg";
    displayed = 1;
  }
  console.log(displayed);
};

galleryPrev = () => {
  myImage = document.getElementById("galleryIMG");
  myImage.src = `../img/gallery/gallery(${displayed - 1}).jpg`;
  displayed -= 1;
  if (displayed < 1) {
    myImage.src = `../img/gallery/gallery(${imgQuantity}).jpg`;
    displayed = imgQuantity;
  }
};
