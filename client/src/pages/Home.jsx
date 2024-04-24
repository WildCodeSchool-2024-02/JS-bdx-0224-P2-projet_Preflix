import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import CategoryBtn from "../components/CategoryBtn";
import { TypeProvider } from "../contexts/CategoryContext";
import Banner from "../components/Banner";

function Home() {
  const apiToken = import.meta.env.VITE_API_TOKEN;

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

      fetch(
        "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=7",
        options
      )
        .then((response) => response.json())
        .then((data) => setNewMovies(data.results))
        .catch((err) => console.error(err));
  }, [apiToken]);

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
        <Banner />
      </section>
      <section>
      <Link to='/movies'> 
      <button type="button" className="buttonFilter">FILMS</button>
      </Link>
      <Link to='/series'> 
      <button type="button" className="buttonFilter">SERIES</button>
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
        <h2>Populaire sur Preflix</h2>
        <section className="moviesContainer">
          {popularMovies.map((movie) => (
            <article key={movie.id} className="articleMovies">
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
            <article key={newMovie.id} className="articleMovies">
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
