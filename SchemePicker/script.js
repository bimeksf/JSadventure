let color = document.getElementById("color");
let palet = document.querySelector(".palet");
const colorSelect = document.getElementById("colors");

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault()
  const colorCode = color.value.slice(1);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorSelect.value}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      
      let a = data.colors;
      
      palet.innerHTML=""

      for (let color of a) {
        palet.innerHTML += `
      <div class="paletColors"  style="width: 100px; height: 100px; border: 1px solid black; background: ${color.hex.value}"></div>
      <p>${color.hex.value}</p>
      
      `;
      }
      console.log(a[0].hex.value);
    });
});
