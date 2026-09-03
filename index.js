const movieWrapper = document.querySelector(".movie")

async function getMovies(searchTerm) {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=75b38caf&s=${searchTerm}`
    );
    const data = await response.json();
    console.log(data.Search)
    movieWrapper.innerHTML = data.Search.map((movie) => {
        return `<div class='movie'>
        <img src='${movie.Poster}' alt="Poster" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button>Learn more</button>
        </div>`
    })
}


function onSearchChange(event) {
    console.log(event.target.value); 
    getMovies(event.target.value);
}