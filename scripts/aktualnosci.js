window.onload = (event) => {
  const one = document.getElementById("aktualnosc1");
  const two = document.getElementById("aktualnosc2");
  const three = document.getElementById("aktualnosc3");
  const four = document.getElementById("aktualnosc4");
  const five = document.getElementById("aktualnosc5");
  const six = document.getElementById("aktualnosc6");

  one.addEventListener("click", () => {
    window.location.href =
      "https://www.poznan.pl/mim/info/news/weekend-w-poznaniu,202154.html";
  });
  two.addEventListener("click", () => {
    window.location.href =
      "https://www.poznan.pl/mim/info/news/trwa-naprawa-torowiska-na-skrzyzowaniu-bukowskiej-z-przybyszewskiego,202328.html";
  });
  three.addEventListener("click", () => {
    window.location.href =
      "https://www.poznan.pl/mim/info/news/centrum-szyfrow-enigma-z-nowym-eksponatem,202270.html";
  });
  four.addEventListener("click", () => {
    window.location.href =
      "https://www.poznan.pl/mim/info/news/zmiany-na-skrzyzowaniu-ul-hetmanskiej-i-dmowskiego,202272.html";
  });
  five.addEventListener("click", () => {
    window.location.href =
      "https://www.poznan.pl/mim/prezydent/news/spotkanie-prezydenta-z-mieszkancami-osiedla-lawica,202019.html";
  });
  six.addEventListener("click", () => {
    window.location.href =
      "https://www.poznan.pl/mim/info/news/poznanskie-dni-rodziny-2023-kazdy-moze-sie-wlaczyc,202223.html";
  });
};
