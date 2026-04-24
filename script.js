// API: http://www.omdbapi.com/?apikey=[yourkey]&
// API Key: a4bd795f
// http://www.omdbapi.com/?apikey=[a4bd795f]&

let searchTerm;

document.querySelector(".input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchMovies();
  }
});

const moviesContainer = document.querySelector(".movies-container");
async function fetchMovies() {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=a4bd795f&s=${searchTerm || "batman"}`
  );
  const { Search: movies } = await res.json();
  moviesContainer.innerHTML = movies
    .map((movie) => {
      return `
        <div class="movie">
          <figure>
            <img src="${movie.Poster}" alt="">
          </figure>
        <div>
          <h2>
            ${movie.Title}
          </h2>
          <p>${movie.Year}</p>
        </div>
      </div>
      `;
    })
    .join("");
}
fetchMovies();

function setSearchTerm(event) {
  searchTerm = event.target.value;
  fetchMovies();
}