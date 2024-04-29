import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryBtn from "../components/CategoryBtn";
import { TypeProvider } from "../contexts/CategoryContext";
import Banner from "../components/Banner";
import "../Styles/Home.css";
import "../Styles/Banner.css";

function Home() {
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const [isVisible, setIsVisible] = useState(false);
  const [newMovies, setNewMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [popular, setPopular] = useState([]);

  const showNextPop = () => {
    const firstpop = popular[0];
    const arrpop = [...popular];
    arrpop.push(firstpop);
    arrpop.shift();
    setPopular(arrpop);
  };

  const showPrevPop = () => {
    const lastpop = popular[popular.length - 1];
    const arrpop = [...popular];
    arrpop.unshift(lastpop);
    arrpop.pop();
    setPopular(arrpop);
  };

  const showNextNew = () => {
    const firstnew = newMovies[0];
    const arrnew = [...newMovies];
    arrnew.push(firstnew);
    arrnew.shift();
    setNewMovies(arrnew);
  };

  const showPrevNew = () => {
    const lastnew = newMovies[newMovies.length - 1];
    const arrnew = [...newMovies];
    arrnew.unshift(lastnew);
    arrnew.pop();
    setNewMovies(arrnew);
  };

  const showNextPopMov = () => {
    const firstPopMov = popularMovies[0];
    const arrPopMov = [...popularMovies];
    arrPopMov.push(firstPopMov);
    arrPopMov.shift();
    setPopularMovies(arrPopMov);
  };

  const showPrevPopMov = () => {
    const firstPopMov = popularMovies[popularMovies.length - 1];
    const arrPopMov = [...popularMovies];
    arrPopMov.unshift(firstPopMov);
    arrPopMov.pop();
    setPopularMovies(arrPopMov);
  };

  const showNextPopSer = () => {
    const firstPopSer = popularSeries[0];
    const arrPopSer = [...popularSeries];
    arrPopSer.push(firstPopSer);
    arrPopSer.shift();
    setPopularSeries(arrPopSer);
  };

  const showPrevPopSer = () => {
    const firstPopSer = popularSeries[popularSeries.length - 1];
    const arrPopSer = [...popularSeries];
    arrPopSer.unshift(firstPopSer);
    arrPopSer.pop();
    setPopularSeries(arrPopSer);
  };

  const getTypeFromUrl = (movie) =>
    movie.media_type || (movie.original_title ? "movie" : "tv");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch((err) => console.error(err));

    fetch('https://api.themoviedb.org/3/trending/all/day?language=fr-FR', options)

      .then((response) => response.json())
      .then((data) => setNewMovies(data.results))
      .catch((err) => console.error(err));


    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=fr-FR",
      options
    )
      .then((response) => response.json())
      .then((data) => setPopularSeries(data.results))
      .catch((err) => console.error(err));


    fetch(
      "https://api.themoviedb.org/3/trending/all/week?language=fr-FR",
      options
    )
      .then((response) => response.json())
      .then((data) => setPopular(data.results))
      .catch((err) => console.error(err));
  }, [apiToken]);

  return (
    <>
      <section className="firstSection">
        <Banner />
      </section>
      <section className="mobileOnly">
        <Link to="/movies">
          <button className="buttonFilter" type="button">
            FILMS
          </button>
        </Link>
        <Link to="/series">
          <button className="buttonFilter" type="button">
            SERIES
          </button>
        </Link>
        <TypeProvider>
          <CategoryBtn
            label="CATEGORIES"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        </TypeProvider>
      </section>
      <section>
        <h2 className="containerTitle">Populaire sur Preflix</h2>
        <section
          className="moviesContainer"
          style={{ translate: `${-100 * popular}%` }}
        >
          <section className="moviesContainer">
            {popular &&
              popular.map((movie) => (
                <article key={movie.id} className="articleMovies">
                  <Link to={`/media/${movie.media_type}/${movie.id}`}>
                    <figure>
                      <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title}
                        className="posterMovie"
                      />
                    </figure>
                  </Link>
                </article>
              ))}
          </section>
          <button
            className="buttonRight"
            type="button"
            onClick={() => showNextPop()}
          >
            <img
              className="arrow"
              src="./src/assets/images/arrowright.png"
              alt="arrow right"
            />
          </button>
          <button
            className="buttonLeft"
            type="button"
            onClick={() => showPrevPop()}
          >
            <img
              className="arrow"
              src="./src/assets/images/arrowleft.png"
              alt="arrow left"
            />
          </button>
        </section>
      </section>

      <section className="container2">
        <h2 className="containerTitle titleDark">Nouveautés</h2>
        <section
          className="moviesContainer container2"
          style={{ translate: `${-100 * newMovies}%` }}
        >
          <section className="moviesContainer container2">
            {newMovies &&
              newMovies.map((newMovie) => (
                <article key={newMovie.id} className="articleMovies">
                  <Link
                    to={`/media/${newMovie.media_type === "tv" ? "tv" : "movie"}/${newMovie.id}`}
                  >
                    <figure>
                      <img
                        src={`https://image.tmdb.org/t/p/original${newMovie.poster_path}`}
                        alt={newMovie.title}
                        className="posterMovie"
                      />
                    </figure>
                  </Link>
                </article>
              ))}
          </section>
          <button
            className="buttonRight"
            type="button"
            onClick={() => showNextNew()}
          >
            <img
              className="arrow"
              src="./src/assets/images/arrowright.png"
              alt="arrow right"
            />
          </button>
          <button
            className="buttonLeft"
            type="button"
            onClick={() => showPrevNew()}
          >
            <img
              className="arrow"
              src="./src/assets/images/arrowleft.png"
              alt="arrow left"
            />
          </button>
        </section>
        </section>
        <section>
          <h2 className="containerTitle">Séries du moment</h2>
          <section
            className="moviesContainer"
            style={{ translate: `${-100 * popularSeries}%` }}
          >
            <section className="moviesContainer">
              {popularSeries &&
                popularSeries.map((movie) => (
                  <article key={movie.id} className="articleMovies">
                    <Link to={`/media/${movie.media_type}/${movie.id}`}>
                      <figure>
                        <img
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          alt={movie.title}
                          className="posterMovie"
                        />
                      </figure>
                    </Link>
                  </article>
                ))}
            </section>
            <button
              className="buttonRight"
              type="button"
              onClick={() => showNextPopSer()}
            >
              <img
                className="arrow"
                src="./src/assets/images/arrowright.png"
                alt="arrow right"
              />
            </button>
            <button
              className="buttonLeft"
              type="button"
              onClick={() => showPrevPopSer()}
            >
              <img
                className="arrow"
                src="./src/assets/images/arrowleft.png"
                alt="arrow left"
              />
            </button>
          </section>
        </section>
        <section>
          <h2 className="containerTitle">Films du moment</h2>
          <section
            className="moviesContainer"
            style={{ translate: `${-100 * popularMovies}%` }}
          >
            <section className="moviesContainer">
              {popularMovies &&
                popularMovies.map((newMovie) => (
                  <article key={newMovie.id} className="articleMovies">
                    <Link
                      to={`/media/${getTypeFromUrl(newMovie)}/${newMovie.id}`}
                    >
                      <figure>
                        <img
                          src={`https://image.tmdb.org/t/p/original${newMovie.poster_path}`}
                          alt={newMovie.title}
                          className="posterMovie"
                        />
                      </figure>
                    </Link>
                  </article>
                ))}
            </section>
            <button
              className="buttonRight"
              type="button"
              onClick={() => showNextPopMov()}
            >
              <img
                className="arrow"
                src="./src/assets/images/arrowright.png"
                alt="arrow right"
              />
            </button>
            <button
              className="buttonLeft"
              type="button"
              onClick={() => showPrevPopMov()}
            >
              <img
                className="arrow"
                src="./src/assets/images/arrowleft.png"
                alt="arrow left"
              />
            </button>
          </section>
        </section>
      
    </>
  );
}

export default Home;
