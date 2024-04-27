import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBack from "../components/ArrowBack";
import "../Styles/Article.css";

function Article() {
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const [details, setDetails] = useState([]);
  const [displayProvider, setDisplayProvider] = useState([]);
  const [displaySuggestions, setDisplaySuggestions] = useState([]);

  const { id, type } = useParams();

  const getTypeFromUrl = (movie) =>
    movie.media_type || (movie.original_title ? "movie" : "tv");

  useEffect(() => {
    window.scrollTo(0, 0);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/${type}/${id}?language=fr-FR`, options)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((err) => console.error(err));

    fetch(`https://api.themoviedb.org/3/${type}/${id}/watch/providers`, options)
      .then((response) => response.json())
      .then((data) => setDisplayProvider(data))
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/similar?language=fr-FR&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => setDisplaySuggestions(data))
      .catch((err) => console.error(err));
  }, [apiToken, type, id]);

  return (
    <>
      <ArrowBack />
      <section>
        <picture>
          {details.belongs_to_collection && type === "movie" ? (
            <img
              className="imgHorizontalDesktop"
              src={`https://image.tmdb.org/t/p/original${details.belongs_to_collection.backdrop_path}`}
              alt="Beautiful poster"
            />
          ) : (
            <img
              className="imgHorizontalDesktop"
              src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
              alt="Beautiful poster"
            />
          )}
        </picture>
        <section className="descriptionSection">
          <h1>{details && type === "movie" ? details.title : details.name}</h1>
          <article>
            {details && type === "movie" ? (
              <section className="descriptionPublicationTime">
                <p>Durée : {Math.round(details.runtime / 60)}h</p>
                <p>Date de publication : {details.release_date}</p>
              </section>
            ) : (
              <section className="descriptionPublicationSerie">
                <p>Nombre de saison : {details.number_of_seasons}</p>
                <p>Nombre d'épisodes : {details.number_of_episodes}</p>
                <p>Date de publication: {details.first_air_date}</p>
              </section>
            )}
            <article className="descriptionNameOverview">
              <h2 className="title synopsis">Synopsis</h2>
              <p className="synopsisText">{details.overview}</p>
            </article>
          </article>
          <article className="descriptionNotes">
            <p>Note : {Math.round(details.vote_average)} / 10</p>
            <p>Nombre d'avis : {details.vote_count}</p>
          </article>
          <article className="descriptionWatchProvider">
            <article className="descriptionWatchProvider_buy">
              <h2 className="title">Achat</h2>
              {displayProvider &&
              displayProvider.results &&
              displayProvider.results.FR &&
              displayProvider.results.FR.buy ? (
                <section className="providerSection">
                  {displayProvider.results ? (
                    <>
                      {displayProvider.results.FR.buy.map((item) => (
                        <article key={item.index} className="providerList">
                          <a href={displayProvider.results.FR.link}>
                            <img
                              className="providerImg"
                              src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                              alt="Providers"
                            />
                          </a>
                        </article>
                      ))}
                    </>
                  ) : null}
                </section>
              ) : (
                <p>Aucun site français pour l'acheter</p>
              )}
            </article>
            <article className="descriptionWatchProvider_flatrate">
              <h2 className="title">Forfait</h2>
              {displayProvider &&
              displayProvider.results &&
              displayProvider.results.FR &&
              displayProvider.results.FR.flatrate ? (
                <section className="providerSection">
                  {displayProvider.results ? (
                    <>
                      {displayProvider.results.FR.flatrate.map((item) => (
                        <article key={item.index} className="providerList">
                          <a href={displayProvider.results.FR.link}>
                            <img
                              className="providerImg"
                              src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                              alt="Providers"
                            />
                          </a>
                        </article>
                      ))}
                    </>
                  ) : null}
                </section>
              ) : (
                <p>
                  Aucun site français proposant un forfait pour votre recherche
                </p>
              )}
            </article>
            <article className="descriptionWatchProvider_free">
              <h2 className="title">Gratuitement</h2>
              {displayProvider &&
              displayProvider.results &&
              displayProvider.results.FR &&
              displayProvider.results.FR.free ? (
                <section className="providerSection">
                  {displayProvider.results ? (
                    <>
                      {displayProvider.results.FR.free.map((item) => (
                        <article key={item.index} className="providerList">
                          <a href={displayProvider.results.FR.link}>
                            <img
                              className="providerImg"
                              src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                              alt="Providers"
                            />
                          </a>
                        </article>
                      ))}
                    </>
                  ) : null}
                </section>
              ) : (
                <p>Aucun site français gratuit à disposition</p>
              )}
            </article>
            <article className="descriptionWatchProvider_rent">
              <h2 className="title">Location</h2>
              {displayProvider &&
              displayProvider.results &&
              displayProvider.results.FR &&
              displayProvider.results.FR.rent ? (
                <section className="providerSection">
                  {displayProvider.results ? (
                    <>
                      {displayProvider.results.FR.rent.map((item) => (
                        <article key={item.index} className="providerList">
                          <a href={displayProvider.results.FR.link}>
                            <img
                              className="providerImg"
                              src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                              alt="Providers"
                            />
                          </a>
                        </article>
                      ))}
                    </>
                  ) : null}
                </section>
              ) : (
                <p>Aucun site français de location à disposition</p>
              )}
            </article>
          </article>
        </section>
        <section className="container2">
          <h2 className="title titleDark">Suggestions</h2>
        </section>
        <section className="moviesContainer container2">
          {displaySuggestions.results &&
          displaySuggestions.results.length > 0 ? (
            displaySuggestions.results.map((item) => (
              <article key={item.id} className="articleMovies">
                <Link to={`/media/${getTypeFromUrl(item)}/${item.id}`}>
                  <picture>
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
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
