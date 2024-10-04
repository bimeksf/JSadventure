const result = document.querySelector(".user-list");
const input = document.querySelector(".input-filter");
const userList = [];

getdata();

input.addEventListener("input", function (event) {
  dataFilter(event.target.value);
});

async function getdata() {
  try {
    const allUsers = await fetch("https://randomuser.me/api?results=50");
    const data = await allUsers.json();

    console.log(data);
    //*clear data*//
    result.innerHTML = "";

    const users = data.results;

    users.forEach(function (user) {
      const li = document.createElement("li");

      li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
          <h3>${user.name.first} ${user.name.last}</h3>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `;

      result.appendChild(li);
      userList.push(li);
    });
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
}

function dataFilter(text) {
    userList.forEach(function (user) {
      if (user.textContent.toLowerCase().includes(text.toLowerCase())) {
        user.classList.remove("hide");
      } else {
        user.classList.add("hide");
      }
    });
  }
  
