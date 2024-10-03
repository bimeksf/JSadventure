const lope = document.getElementById("loupe");
const input = document.querySelector(".text");

lope.addEventListener("click", function (event) {
  if (input.style.display === "none") {
    input.style.display = "block";
  } else {
    input.style.display = "none";
  }
});
