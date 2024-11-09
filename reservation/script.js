const dny = [
  "",
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
  "Sobota",
  "Neděle",
];

const time = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

// Výběr tabulky
const table = document.querySelector(".table-calendar");

// Vytvoření hlavičky tabulky
let headerRow = table.insertRow();
dny.forEach((day) => {
  let cell = document.createElement("th");
  cell.textContent = day;
  headerRow.appendChild(cell);
});

// Vytvoření řádků pro časové intervaly
time.forEach((t) => {
  let row = table.insertRow();
  let timeCell = row.insertCell();
  timeCell.textContent = t;
  for (let i = 1; i < dny.length; i++) {
    let cell = row.insertCell();
    cell.setAttribute("data-day", dny[i]);
    cell.setAttribute("data-time", t);
    cell.classList.add("table-cell");
  }
});

// Funkce pro vložení dat do buňky
function dataInsert(day, time, description) {
  const cell = document.querySelector(
    `[data-day="${day}"][data-time="${time}"]`
  );

  if (cell) {
    let capacity = 0; // kapacita specifická pro tuto buňku

    // Přidání HTML obsahu do buňky
    cell.innerHTML = `
    <div class="cell-wrap">
    <span class="label">Nogi</span>
    <span class="description">${description}</span>
    <button class="attend-class">
      <i class="fa-solid fa-check"></i>
    </button>
    <span class="capacityText">${capacity}/20</span>
  </div>
`;

    // Přidání event listeneru pro tlačítko
    const button = cell.querySelector(".attend-class");
    const capacitySpan = cell.querySelector(".capacityText");

    button.addEventListener("click", function () {
      
      capacity++; // Zvětšíme kapacitu

      if(capacity===20){
        capacitySpan.textContent="Full"
        button.classList.add("hide")
        capacitySpan.style.backgroundColor = "red";     
       }
      else{

        capacitySpan.textContent = `${capacity}/20`;
        button.classList.remove("hide")
      }
    });
  }
}

// Vloží testovací data
dataInsert("Pátek", "12:00", "test");
dataInsert("Sobota", "16:00", "test");
dataInsert("Pondělí", "15:00", "test");
dataInsert("Středa", "20:00", "test");
