let authors = [
  {
    name: "sam smith",
    position: "web dev",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis debitisime aliquid neque sint veritatis asperiores corrupti. Fugit, dolores.",
  },

  {
    name: "faa smvafith",
    position: "backend",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pe aliquid neque sint veritatis asperiores corrupti. Fugit, dolores.",
  },

  {
    name: " gaab",
    position: "frontende",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis debitis aliquam corporis ullam autem, reprehenderit, facere est esse sequi tempore laborum maxime aliquid neque sint veritatis asperiores corrupti. Fugit, dolores.",
  },
];

const autor = document.getElementById("name");
const position = document.querySelector(".position");
const text = document.querySelector(".text");

let btnBack = document.querySelector(".back");
let btnForward = document.querySelector(".forward");

let curretIndex = 0;

// default name when page load//
window.document.addEventListener("DOMContentLoaded", function () {
  changingText(curretIndex);
});

function changingText(user) {
  let index = authors[user];

  autor.textContent = index.nameCh;
  position.textContent = index.position;
  text.textContent = index.text;
}

btnBack.addEventListener("click", function () {
  curretIndex--;
  if (curretIndex > authors.length - 1) {
    curretIndex = 0;
  }
  changingText(curretIndex);
});

btnForward.addEventListener("click", function () {
  curretIndex++;
  if (curretIndex < 0) {
    curretIndex = authors.length - 1;
  }

  changingText(curretIndex);
});
