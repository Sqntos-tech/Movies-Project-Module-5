const movieWrapper = document.querySelector(".movie")
const nameWrapper = document.querySelector(".searchName")

async function getMovies(searchTerm) {
    movieWrapper.classList.add("movie__loading")
    const response = await fetch(
        `https://www.omdbapi.com/?apikey=75b38caf&s=${searchTerm}`
    );
    nameWrapper.innerHTML = searchTerm
    const data = await response.json();
    movieWrapper.classList.remove("movie__loading")
    console.log(data.Search)
    movieWrapper.innerHTML = data.Search.map((movie) => {
        return `<div class='movie'>
        <img src='${movie.Poster}' class="movie__img" alt="Poster" />
        <h2 class="movie__title">${movie.Title}</h2>
        <h4 class="movie__year">${movie.Year}</h4>
        <button class="movie__btn">Learn more</button>
        </div>`
    }) .slice(0, 6).join("")
}

function onSearchChange(event) {
    console.log(event.target.value); 
    getMovies(event.target.value);
}