const heading = document.querySelectorAll(".heading");

const a = document.querySelectorAll(".text");

/** indexing each heading so it will show correct text after click */

heading.forEach((element, index) => {
  element.addEventListener("click", function (event) {
    a[index].classList.toggle("hide");
  });
});
