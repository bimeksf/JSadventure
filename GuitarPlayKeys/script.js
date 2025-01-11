const buttons = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");

const title = document.querySelector(".title");

function stopPlay() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    title.classList.add("hide");
    stopPlay();
    audios[index].play();
    btn.classList.toggle("active");
  });
});

document.addEventListener("keydown", (e) => {
  const indexes = {
    a: 0,
    b: 1,
    c: 2,
  };

  const index = indexes[e.key];
  if (index !== undefined) {
    title.classList.add("hide");
    stopPlay();
    audios[index].play();
    buttons[index].classList.toggle("active");
  }
});
