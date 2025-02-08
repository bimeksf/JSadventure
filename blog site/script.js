
window.addEventListener("resize", () => {
  const navigace = document.querySelector(".navigace");
  const hamburger = document.querySelector(".hamburger");
  const hereParagpraph = document.querySelector(".heroParagraph");

  if (window.innerWidth > 560) {
    navigace.classList.remove("hide");
    hereParagpraph.classList.remove("hide");
    hamburger.classList.add("hide");

  } else {
    hamburger.classList.remove("hide");
    navigace.classList.add("hide");
    hereParagpraph.classList.add("hide");
  }
});




document.querySelector(".hamburger").addEventListener("click", (e) => {
  document.querySelector(".navigace").classList.toggle("hide");
});

document.querySelector(".more").addEventListener("click", (e)=>{
  e.target.textContent="View Less"
  document.querySelector(".reveal-section").classList.toggle("hide")


})