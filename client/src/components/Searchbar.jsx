import { useState } from "react";

function SearchBar() {
  const [movies, setMovies] = useState([]);
  const apiToken = import.meta.env.VITE_TOKEN_API;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  const getMovie = (url) => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    getMovie(
      `https://api.themoviedb.org/3/search/multi?language=fr-FR&query=${searchValue}`
    );
  };

  return (
    <>
      <label htmlFor="search">Rechercher</label>
      <input
        name="search"
        id="search"
        type="search"
        placeholder="Rechercher"
        onChange={handleChange}
      />
      <section className="resultatTest">
        {movies.map((movie) => (
          <article key={movie.id}>
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <figcaption>
                {movie.title} {movie.name}
              </figcaption>
            </figure>
          </article>
        ))}
      </section>
    </>
  );
}

export default SearchBar;
