const searchInput = document.querySelector(".searchInput");
const searchBTN = document.querySelector(".searchBTN");
const movies = document.querySelector(".movies-wrapper");

searchInput.addEventListener("input", async (e) => {
  let searchName = e.target.value.trim();
  if (!searchName) {
    movies.innerHTML = "";
    return;
  }

  try {
    const searchUrl = await fetch(
      `https://www.omdbapi.com/?s=${searchName}&apikey=30641abd`
    );

    const searchData = await searchUrl.json();

    if (searchData.Response === "True") {
      movies.innerHTML = "";
      console.log(searchData.Search);

      for (let movie of searchData.Search) {
        const url = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=30641abd`
        );

        const data = await url.json();

        movies.innerHTML += `
          <div class="movie">
          <img src=${data.Poster} alt="">
          
          <div class="movie-text">
          <h2>${data.Title}<span class="starts"><i class="fa-solid fa-star"></i>${data.imdbRating}</span></h2>
          <p >
          <span>${data.Runtime}</span>   
          <span>${data.Genre}</span>
          
          <a class="addBtn" data-imdbid='${data.imdbID}'><i class="fa-solid fa-plus"></i></a>
                        <span >Watchlist</span>
              </p>
              <a href=""></a>
              <p>${data.Plot}</p>
              
              
              <hr>
              </div>
              </div>
              `;

        // data-movie=${JSON.stringify(movie)} because I can have all the Info about that movie when I click on it

        document.querySelectorAll(".addBtn").forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            const imdbID = e.currentTarget.dataset.imdbid;

            try {
              // getting other movies by their ids
              const url = await fetch(
                `https://www.omdbapi.com/?i=${imdbID}&apikey=30641abd`
              );

              const movieData = await url.json();


              const savedMovies = JSON.parse(localStorage.getItem("savedMovies"))

              const isAlreadySaved = savedMovies.some((m) => m.imdbID === movieData.imdbID)
              
              if(isAlreadySaved){
                console.log("movie is already in list ")
              }
              
              else {
                saveToLocalStorage(movieData);
                console.log("Movie added:", movieData);
              }
            } catch (error) {
              console.error("someting wrond", error);
            }
          });
        });
      }
    } else {
      movies.innerHTML = `<p>No movies found.</p>`;
    }
  } catch (error) {
    console.error("movie not found", error);
    movies.innerHTML = `<p>Error fetching movies. Please try again later.</p>`;
  }
});

function saveToLocalStorage(movie) {
  console.log("Saving to local storage:", movie); // Debugging output

  // getting movies or empty array
  const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];

  // if movie is not in the watchlist it will push it to that list
  if (!savedMovies.find((m) => m.imdbID === movie.imdbID)) {
    savedMovies.push(movie);
  }

  // saving movies that are click
  localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
}
