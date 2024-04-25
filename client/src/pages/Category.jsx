import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArrowBack from "../components/ArrowBack";
import { CategoryContext } from "../contexts/CategoryContext";
import "../Styles/Category.css";

function Category() {
  const { types } = useContext(CategoryContext);

  const { categoryList } = useParams();
  const categoryName = categoryList;

  const selectedCategoryId = types
    .filter((type) => type.name === categoryName)
    .flatMap((selection) => selection.id)
    .join(",");

  const [movieInfos, setMovieInfos] = useState([]);
  const [serieInfos, setSerieInfos] = useState([]);

  const apiToken = import.meta.env.VITE_API_TOKEN;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  useEffect(() => {
    let page = 1;

    const fetchMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=fr-FR&page=${page}&with_genres=${selectedCategoryId}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setMovieInfos(data.results))
        .catch((err) => console.error(err));
    };

    const fetchSeries = () => {
      fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=fr-FR&page=${page}&with_genres=${selectedCategoryId}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setSerieInfos(data.results))
        .catch((err) => console.error(err));
    };

    for (page = 1; page <= 4; page += 1) {
      fetchMovies(page);
      fetchSeries(page);
    }
  }, [apiToken]);

  const movieCond = serieInfos.map((serie) => serie.poster_path);
  const serieCond = serieInfos.map((serie) => serie.poster_path);

  return (
    <>
      <ArrowBack />

      <h2 className="title-category">{categoryName.toUpperCase()}</h2>
      <section className="section-category">
        {movieCond !== null &&
          movieInfos.map(
            (movie) =>
              movie.genre_ids.some((genreId) =>
                selectedCategoryId.includes(genreId)
              ) && (
                <article key={movie.id}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <figcaption>
                      {movie.title} {movie.name}
                    </figcaption>
                  </figure>
                </article>
              )
          )}

        {serieCond !== null &&
          serieInfos.map(
            (serie) =>
              serie.genre_ids.some((genreId) =>
                selectedCategoryId.includes(genreId)
              ) && (
                <article key={serie.id}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.title}
                    />
                    <figcaption>
                      {serie.title} {serie.name}
                    </figcaption>
                  </figure>
                </article>
              )
          )}
      </section>
    </>
  );
}

export default Category;
