let myTable = document.getElementById("tabule");
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  /** getting data from form  */
  const formData = new FormData(myForm);

  let item = formData.get("name");
  let date = formData.get("datum");
  let anout = formData.get("amount");
  /**inserting rows and cells */
  let row = myTable.insertRow(1);
  let cell1 = row.insertCell(0);
  cell1.textContent = item;
  let cell2 = row.insertCell(1);
  cell2.textContent = date;
  let cell3 = row.insertCell(2);
  cell3.textContent = anout;
  let cell4 = row.insertCell(3);
  /**delete btn */
  cell4.innerHTML = `<button type="button" class="delete">x</button>`;
  myForm.reset();

  let btnDEL = cell4.querySelector(".delete");
  btnDEL.addEventListener("click", function (event) {
    row.remove();
  });
});
