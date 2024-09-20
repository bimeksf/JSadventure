const buttons = document.querySelectorAll(".btn");

const counter = document.getElementById("text");

let valueCounter = 0;

buttons.forEach(function (element) {
  console.log(element);
  element.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      valueCounter--;
    }
    if (styles.contains("reset")) {
      valueCounter = 0;
    }
    if (styles.contains("increase")) {
      valueCounter++;
    }

    counter.textContent = valueCounter;
  });
});
