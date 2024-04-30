import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../components/ArrowBack";
import "../Styles/Btn.css";

function Movies() {
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);
  const [movies4, setMovies4] = useState([]);
  const [movies5, setMovies5] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    const getMovies = (page, setMovies) => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${page}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((err) => console.error(err));
    };

    getMovies(1, setMovies1);
    getMovies(2, setMovies2);
    getMovies(3, setMovies3);
    getMovies(4, setMovies4);
    getMovies(5, setMovies5);
  }, [apiToken]);

  return (
    <>
      <ArrowBack />
      <h2 className="title-movies">FILMS</h2>
      <section className="section-movies">
        {movies1.map((item) => (
          <article key={item.id}>
            <Link to={`/media/movie/${item.id}`}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="posterMovie"
                />
              </figure>
            </Link>
          </article>
        ))}

        {movies2.map((item) => (
          <article key={item.id}>
            <Link to={`/media/movie/${item.id}`}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="posterMovie"
                />
              </figure>
            </Link>
          </article>
        ))}

        {movies3.map((item) => (
          <article key={item.id}>
            <Link to={`/media/movie/${item.id}`}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="posterMovie"
                />
              </figure>
            </Link>
          </article>
        ))}

        {movies4.map((item) => (
          <article key={item.id}>
            <Link to={`/media/movie/${item.id}`}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="posterMovie"
                />
              </figure>
            </Link>
          </article>
        ))}

        {movies5.map((item) => (
          <article key={item.id}>
            <Link to={`/media/movie/${item.id}`}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="posterMovie"
                />
              </figure>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}

export default Movies;
