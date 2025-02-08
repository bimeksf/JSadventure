const name = document.querySelector("#name");
const email = document.querySelector("#email");
const gitHub = document.querySelector("#gitHub");
const btn = document.querySelector(".btn-form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.checkValidity() && email.checkValidity() && gitHub.checkValidity()) {
    renderHtml(name.value, email.value, gitHub.value);
  } else {
    [name, email, gitHub].forEach((element) => {
      if (!element.checkValidity()) {
        element.style.outline = "3px solid red";
      } else {
        element.style.outline = "";
      }
    });
  }
});

function renderHtml(name, email, git) {
  const wrapper = document.querySelector(".wrapper");
  const main = document.querySelector("main");
  wrapper.innerHTML = "";
  wrapper.innerHTML = ` <h1 class="title">Congrats, ${name}! Your ticket is ready.</h1>
<p class="sub-title">
We've emailde your ticket to ${email} and will send updates in the run up the event.
</p>`;
  main.innerHTML = "";
  main.innerHTML = `  
<div class="ticket-wrapper">
<div class="date-wrapper">
  <img src="images/logo-full.svg" alt="" class="date-logo" />
  <p class="date-text">Jan 31, 2025 / Austin, TX</p>
</div>

<div class="user-wrapper">
  <img src="images/image-avatar.jpg" alt="" class="user" />
  <div class="user-info-wrapper">
    <p class="name">${name}</p>
    <div class="git-wrapper">
      <img src="images/icon-github.svg" alt="" />
      <span>${git}</span>
    </div>
  </div>
</div>
</div>
`;
}
