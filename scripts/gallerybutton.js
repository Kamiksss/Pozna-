var displayed = 1;
const imgQuantity = 3;

galleryNext = () => {
  myImage = document.getElementById("galleryIMG");
  myImage.src = `../img/index/${displayed + 1}.png`;
  displayed += 1;
  if (displayed > imgQuantity) {
    myImage.src = "../img/index/1.png";
    displayed = 1;
  }
};

galleryPrev = () => {
  myImage = document.getElementById("galleryIMG");
  myImage.src = `../img/index/${displayed - 1}.png`;
  displayed -= 1;
  if (displayed < 1) {
    myImage.src = `../img/index/${imgQuantity}.png`;
    displayed = imgQuantity;
  }
};
