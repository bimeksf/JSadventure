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

function bgColor() {
  const index = randomColor();

  return backColor[index];
}

function changeColor() {
  let a = bgColor();

  let b = document.querySelector("body");
  b.style.background = a;
}

const btt = document.querySelector("#bttn");
btt.addEventListener("click", function (element) {
  element.preventDefault();
  changeColor();
  let color = bgColor();
  let p = document.querySelector(".Hex");
  p.textContent = color;
});
