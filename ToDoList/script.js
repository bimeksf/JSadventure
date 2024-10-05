const input = document.querySelector("#inputText");
const add = document.querySelector("#add");
const box = document.querySelector(".box");

add.addEventListener("click", function (event) {
  let text = input.value;
  if (text === "") {
    alert("Please Enter an Item");
  } else {
    /**creaint an item from input */
    let p = document.createElement("p");
    p.textContent = text;
    p.className = "item";

    document.querySelector(".list").appendChild(p);

    /**adding buttons to an Item */
    let btnDone = document.createElement("button");
    btnDone.innerHTML = `<i class="fa-solid fa-check"></i>`;
    btnDone.className = "done";
    /** adding line through when clicked */
    btnDone.addEventListener("click", function (e) {
      p.style.textDecoration = "line-through";
    });

    document.querySelector(".list").appendChild(btnDone);
    /**adding buttons to an Item */
    let btnDlt = document.createElement("button");
    btnDlt.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnDlt.className = "delete";
    /** deleting when clicked */
    btnDlt.addEventListener("click", function (e) {
      p.remove();
      btnDlt.remove();
      btnDone.remove();
    });

    if (text === "") {
      alert("Please eneter an Item");
    }

    document.querySelector(".list").appendChild(btnDlt);
  }

  /**clearing input */
  input.value = "";
});
