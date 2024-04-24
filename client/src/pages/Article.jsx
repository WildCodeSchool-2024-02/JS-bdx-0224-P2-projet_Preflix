import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBack from "../components/ArrowBack";
import "../Styles/Article.css";

function Article() {
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const [details, setDetails] = useState([]);
  const [displayProvider, setDisplayProvider] = useState([]);
  const [displaySuggestions, setDisplaySuggestions] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, options)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((err) => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, options)
      .then((response) => response.json())
      .then((data) => setDisplayProvider(data))
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=fr-FR&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => setDisplaySuggestions(data))
      .catch((err) => console.error(err));
  }, [apiToken, id]);

  return (
    <>
      <ArrowBack />
      <section>
        <picture>
          {details.belongs_to_collection && (
            <img
              src={`https://image.tmdb.org/t/p/original${details.belongs_to_collection.backdrop_path}`}
              alt=""
            />
          )}
        </picture>
        <section className="descriptionSection">
          <h1>
            {details.title} - <span>{details.tagline}</span>
          </h1>
          <article className="descriptionThirdArticle">
            <h2>Synopsys</h2>
            <p>{details.overview}</p>
          </article>
          <article className="descriptionFirstArticle">
            <p>Durée : {Math.round(details.runtime / 60)}h</p>
            <p>Date de publication : {details.release_date}</p>
          </article>
          <article className="descriptionSecondArticle">
            <p>Note : {details.vote_average} / 10</p>
            <p>Nombre d'avis : {details.vote_count}</p>
          </article>
          <article className="descriptionWatchProvider">
            <p>Regarder sur :</p>
            {displayProvider.results && displayProvider.results.FR ? (
              <a href={displayProvider.results.FR.link}>Regarder sur CA</a>
            ) : (
              <p>Aucune plateforme française ne propose votre film</p>
            )}
          </article>
          <p>Vous pourriez apprécié :</p>
        </section>
        <section className="moviesContainer">
          {displaySuggestions.results &&
          displaySuggestions.results.length > 0 ? (
            displaySuggestions.results.map((item) => (
              <article key={item.id} className="articleMovies">
                <Link to={`/media/${item.id}`}>
                  <picture>
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                      alt={item.title}
                      className="posterMovie"
                    />
                  </picture>
                </Link>
              </article>
            ))
          ) : (
            <p>Rien d'intéressant</p>
          )}
        </section>
      </section>
    </>
  );
}

export default Article;
