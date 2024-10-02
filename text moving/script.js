const text = document.getElementById("text");
const speedOriginal = document.getElementById("speed");
const addText = "testing text";

let idletter = 1;

let delay = 500 / speedOriginal.value;

function printText() {
  text.textContent = addText.slice(0, idletter);
  idletter++;

if(idletter>addText.length){
  idletter =1;
}

/** deleying  text */
  setTimeout(printText, delay);
}

printText();



speedOriginal.addEventListener("input", function(event){
   delay = 500/event.target.value 
  
  
})