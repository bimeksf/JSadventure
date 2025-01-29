const filterBtn = document.querySelector(".nav-filter");
const popUp = document.querySelector(".pop-up");


const hearthBtm = document.querySelectorAll(".card-hearth")

hearthBtm.forEach(btn=>{
  btn.addEventListener("click", e=>{
    
    e.currentTarget.classList.toggle("fa-solid")


  })
}
  
  
  
  
)





filterBtn.addEventListener("click", (e) => {
  if (popUp.style.clipPath === "circle(0% at 100% 0%)") {
    popUp.style.clipPath = "circle(100% at 50% 50%)";
  } else {
    popUp.style.clipPath = "circle(0% at 100% 0%)";
  }
});

document.addEventListener("mouseup", (e) => {
  if (
    popUp.style.clipPath === "circle(100% at 50% 50%)" &&
    !popUp.contains(e.target) &&
    e.target !== filterBtn
  ) {
    popUp.style.clipPath = "circle(0% at 100% 0%)";
  }
});

/// api call

async function carDetails(value) {
  try {
    const url = `https://api.api-ninjas.com/v1/cars?make=${value}`;
    const apiKey = "1RKaw/J3O82zwufmuldHRQ==9dOKJBDonJaT6uM3";
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
    });

    if (!response.ok) {
      throw new Error(`http error staus: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error("something went wrong" + err);
  }
}

const searchValues = document.querySelector(".nav-search");
const carsCards = document.querySelector(".item-card-wrapper");

searchValues.addEventListener("input", async (e) => {
  const searchValue = e.currentTarget.value.trim();

  const cars = await carDetails(searchValue);

  if (cars) {
    carsCards.innerHTML = "";

    cars.map(({ make, model, fuel_type, transmission, year }, index) => {
      console.log(`Index for car ${make} ${model}:`, index);

      carsCards.innerHTML += `
        <div class="item-card-wrapper">
          <a class="card-name">${make + " " + model}</a>
          <p class="card-description">Fuel type: ${fuel_type} Transmission: ${transmission}</p>
          <div class="card-footer-wrapper">
            <p class="card-year">${year}</p>
            <i class="fa-regular fa-heart fa-lg card-hearth" data-index="${index}"></i> <!-- Atribut data-index -->
          </div>
        </div>
      `;

      const heartBtn = carsCards.querySelectorAll(
        `.card-hearth[data-index="${index}"]`
      );
      heartBtn.forEach(btn=>{btn.addEventListener("click", (e) => {
        const index = e.currentTarget.getAttribute("data-index");
        const car = cars[index];

        if (!car) {
          console.error("Car not found at index:", index);
          return;
        }

        console.log("Saving car:", car);
        localstorageSave(car);
      })})
    });
  } else {
    carsCards.innerHTML = `<p> no found</p>`;
  }





});

function localstorageSave(carsList) {
  // Zkontroluj data v carsList
  console.log("Cars list to save:", carsList);

  let allCars = JSON.parse(localStorage.getItem("cars")) || [];

  // Kontrola existence modelu a make
  if (!carsList.make || !carsList.model) {
    console.error("Invalid car data:", carsList);
    return; // Pokud nejsou platné údaje, neukládej je
  }

  // Kontrola, jestli auto již není v LocalStorage
  if (
    !allCars.find(
      (car) => car.make === carsList.make && car.model === carsList.model
    )
  ) {
    allCars.push(carsList);
    localStorage.setItem("cars", JSON.stringify(allCars)); // Uložení do localStorage
  }
}
