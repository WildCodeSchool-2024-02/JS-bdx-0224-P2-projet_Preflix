import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import Btn from "../components/Btn";
import Category from "./Category";

function Home() {
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const urlDiscoverSeries =
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
  const urlDiscoverMovies =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc";

  // const urlSearch =
  //   "https://api.themoviedb.org/3/search/multi?language=fr-FR&query";

  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  // const [currentSearch, setCurrentSearch] = useState([]);
  const [isSeriesVisible, setIsSeriesVisible] = useState(false);
  const [isMoviesVisible, setIsMoviesVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [popularMovies, setPopularMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=fr-Fr",
      options
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=7",
      options
    )
      .then((response) => response.json())
      .then((data) => setNewMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="firstSection">
        <Link to="/">
          <picture>
            <img
              src="src/assets/images/logo.svg"
              alt="Preflix's logo"
              className="logoTest"
            />
          </picture>
        </Link>
        <picture>
          <img
            src="src/assets/images/backgroundHome.jpg"
            alt="Cover a movie"
            className="test"
          />
        </picture>
      </section>
      <section>
        <Btn
          label="Séries"
          fetchData={{ url: urlDiscoverSeries, data: series }}
          setData={setSeries}
          apiToken={apiToken}
          setIsVisible={setIsSeriesVisible}
          isVisible={isSeriesVisible}
        />
        <Btn
          label="Films"
          fetchData={{ url: urlDiscoverMovies, data: movies }}
          setData={setMovies}
          apiToken={apiToken}
          setIsVisible={setIsMoviesVisible}
          isVisible={isMoviesVisible}
        />
        <Category isVisible={isVisible} setIsVisible={setIsVisible} />
      </section>
      <section>
        <h2>Populaire sur Preflix</h2>
        <section className="moviesContainer">
          {popularMovies.map((movie) => (
            <article key={movie.name} className="articleMovies">
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  className="posterMovie"
                />
              </figure>
            </article>
          ))}
        </section>
      </section>
      <section>
        <h2>Les nouveautés</h2>
        <section className="moviesContainer">
          {newMovies.map((newMovie) => (
            <article key={newMovie.name} className="articleMovies">
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${newMovie.poster_path}`}
                  alt={newMovie.title}
                  className="posterMovie"
                />
              </figure>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}

export default Home;
