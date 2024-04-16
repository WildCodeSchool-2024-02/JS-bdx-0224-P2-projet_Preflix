import PropTypes from "prop-types";

function ButtonMovies({ labelMovies, movies, setMovies }) {
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const handleMovies = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  };

  return (
    <section>
      <button type="button" onClick={handleMovies}>
        {labelMovies}
      </button>
      <article>
        {movies.map((movie) => (
          <figure key={movie.title}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.tilte}
            />
            <figcaption>{movie.title}</figcaption>
          </figure>
        ))}
      </article>
    </section>
  );
}

ButtonMovies.defaultProps = {
  labelMovies: 'Default Label',
  movies: '',
  setMovies: () => {},
};

ButtonMovies.propTypes = {
  labelMovies: PropTypes.string,
  movies: PropTypes.string,
  setMovies: PropTypes.func,
};

export default ButtonMovies;
