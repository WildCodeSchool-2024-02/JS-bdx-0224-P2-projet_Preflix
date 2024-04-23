import { useState, useContext } from "react";
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
    .map((selection) => selection.id);

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

  fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((data) => setMovieInfos(data.results))
    .catch((err) => console.error(err));

  fetch(
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((data) => setSerieInfos(data.results))
    .catch((err) => console.error(err));

  return (
    <>
      <ArrowBack />
      <h2 className="title-category">{categoryName.toUpperCase()}</h2>
      <section className="section-category">
        {movieInfos.map(
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
        {serieInfos.map(
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
