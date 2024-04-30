import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBack from "../components/ArrowBack";
import { CategoryContext } from "../contexts/CategoryContext";
import "../Styles/Category.css";
import "../Styles/Home.css";

function Category() {
  const { types } = useContext(CategoryContext);

  const { categoryList } = useParams();
  const categoryName = categoryList;

  const selectedCategoryId = types
    .filter((type) => type.name.toLowerCase() === categoryName)
    .flatMap((selection) => selection.id)
    .join("|");

  const [movieInfos1, setMovieInfos1] = useState([]);
  const [movieInfos2, setMovieInfos2] = useState([]);
  const [movieInfos3, setMovieInfos3] = useState([]);
  const [serieInfos1, setSerieInfos1] = useState([]);
  const [serieInfos2, setSerieInfos2] = useState([]);
  const [serieInfos3, setSerieInfos3] = useState([]);

  const apiToken = import.meta.env.VITE_API_TOKEN;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  useEffect(() => {
    const fetchMovies = (page, setMovies) => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=fr-FR&page=${page}&with_genres=${selectedCategoryId}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((err) => console.error(err));
    };

    const fetchSeries = (page, setSerieInfos) => {
      fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=fr-FR&page=${page}&with_genres=${selectedCategoryId}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setSerieInfos(data.results))
        .catch((err) => console.error(err));
    };

    fetchMovies(1, setMovieInfos1);
    fetchMovies(2, setMovieInfos2);
    fetchMovies(3, setMovieInfos3);
    fetchSeries(1, setSerieInfos1);
    fetchSeries(2, setSerieInfos2);
    fetchSeries(3, setSerieInfos3);
  }, [apiToken]);

  return (
    <>
      <ArrowBack />

      <h2 className="title-category">{categoryName.toUpperCase()}</h2>
      <section className="section-category">
        {movieInfos1.map(
          (movie) =>
            movie.poster_path &&
            movie.genre_ids.some((genreId) =>
              selectedCategoryId.includes(genreId)
            ) && (
              <article key={movie.id}>
                <Link to={`/media/movie/${movie.id}`}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <figcaption>
                      {movie.title} {movie.name}
                    </figcaption>
                  </figure>
                </Link>
              </article>
            )
        )}

        {serieInfos1.map(
          (serie) =>
            serie.poster_path &&
            serie.genre_ids.some((genreId) =>
              selectedCategoryId.includes(genreId)
            ) && (
              <article key={serie.id}>
                <Link to={`/media/tv/${serie.id}`}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.title}
                    />
                    <figcaption>
                      {serie.title} {serie.name}
                    </figcaption>
                  </figure>
                </Link>
              </article>
            )
        )}

        {movieInfos2.map(
          (movie) =>
            movie.poster_path &&
            movie.genre_ids.some((genreId) =>
              selectedCategoryId.includes(genreId)
            ) && (
              <article key={movie.id}>
                <Link to={`/media/movie/${movie.id}`}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <figcaption>
                      {movie.title} {movie.name}
                    </figcaption>
                  </figure>
                </Link>
              </article>
            )
        )}

        {serieInfos2.map(
          (serie) =>
            serie.poster_path &&
            serie.genre_ids.some((genreId) =>
              selectedCategoryId.includes(genreId)
            ) && (
              <article key={serie.id}>
                <Link to={`/media/tv/${serie.id}`}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.title}
                    />
                    <figcaption>
                      {serie.title} {serie.name}
                    </figcaption>
                  </figure>
                </Link>
              </article>
            )
        )}

        {movieInfos3.map(
          (movie) =>
            movie.poster_path &&
            movie.genre_ids.some((genreId) =>
              selectedCategoryId.includes(genreId)
            ) && (
              <article key={movie.id}>
                <Link to={`/media/movie/${movie.id}`}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <figcaption>
                      {movie.title} {movie.name}
                    </figcaption>
                  </figure>
                </Link>
              </article>
            )
        )}

        {serieInfos3.map(
          (serie) =>
            serie.poster_path &&
            serie.genre_ids.some((genreId) =>
              selectedCategoryId.includes(genreId)
            ) && (
              <article key={serie.id}>
                <Link to={`/media/tv/${serie.id}`}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.title}
                    />
                    <figcaption>
                      {serie.title} {serie.name}
                    </figcaption>
                  </figure>
                </Link>
              </article>
            )
        )}
      </section>
    </>
  );
}

export default Category;
