const backColor = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function randomColor() {
  return Math.floor(Math.random() * backColor.length);
}

function pozadi() {
  const index = randomColor();

  return backColor[index];
}

function zmena() {
  let a = pozadi();

  let b = document.querySelector("body");
  b.style.background = a;
}

const tlacitko = document.querySelector("#bttn");
tlacitko.addEventListener("click", function (element) {
  element.preventDefault();
  zmena();
  let barva = pozadi();
  let p = document.querySelector(".Hex");
  p.textContent = barva;
});
