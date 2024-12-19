
const movies = document.querySelector(".movies-wrapper");


let moviesList = (JSON.parse(localStorage.getItem("savedMovies")))

console.log(moviesList)

moviesList.map(movie=>{


  movies.innerHTML += `
  <div class="movie">
  <img src=${movie.Poster} alt="">
  
  <div class="movie-text">
  <h2>${
    movie.Title
  }<span class="starts"><i class="fa-solid fa-star"></i>${
    movie.imdbRating
  }</span></h2>
  <p >
  <span>${movie.Runtime}</span>   
  <span>${movie.Genre}</span>
  
  <a class="addBtn" data-imdbid='${movie.imdbID}'><i class="fa-solid fa-minus"></i></a>
                <span >Watchlist</span>
      </p>
      <a href=""></a>
      <p>${movie.Plot}</p>
      
      
      <hr>
      </div>
      </div>
      `;

  document.querySelectorAll(".addBtn").forEach((btn)=>{
    btn.addEventListener("click", e=>{

      const currentMovieID =  e.currentTarget.dataset.imdbid

   console.log("Removing movie:", currentMovieID);

   moviesList = moviesList.filter((movie) => movie.imdbID !== currentMovieID);

    localStorage.setItem("savedMovies", JSON.stringify(moviesList));
      
    e.currentTarget.closest(".movie").remove();


    console.log(moviesList)
    })


  })

    

})