import "./Banner.css";
import { useState } from "react";

const moviesList = [
  {
    imgSrc: "./src/assets/images/dune2.jpg",
    name: "Dune 2",
    id: 1,
  },
  {
    imgSrc: "./src/assets/images/kungfupanda2.jpg",
    name: "Kung Fu Panda 4",
    id: 2,
  },
  {
    imgSrc: "./src/assets/images/ltm.jpg",
    name: "Les 3 Mousquetaires",
    id: 3,
  },
];

function Banner() {
  const [moviesIndex, setMoviesIndex] = useState(0);

  function showNextImg() {
    setMoviesIndex((item) =>
      item === moviesList.length - 1 ? 0 : item + 1
    );
  }

  function showPrevImg() {
    setMoviesIndex((item) =>
      item === 0 ? moviesList.length - 1 : item - 1
    );
  }

  return (
    <section className="containerMovies">
      <figure className="imgMovie">
        {moviesList.map((movie) => (
          <img
            src={movie.imgSrc}
            alt={movie.name}
            key={movie.name}
            style={{ translate: `${-100 * moviesIndex}%` }}
          />
        ))}
      </figure>
      <button className="buttonRight" type="button" onClick={showNextImg}>
        <img
          className="arrow"
          src="./src/assets/images/right-arrow.png"
          alt="arrow right"
        />
      </button>
      <button className="buttonLeft" type="button" onClick={showPrevImg}>
        <img
          className="arrow"
          src="./src/assets/images/left-arrow.png"
          alt="arrow left"
        />
      </button>
      <article className="containerDotButton">
        {moviesList.map((movie, index) => (
          <button
            type="button"
            className={index === moviesIndex ? "dotButton on" : "dotButton off"}
            onClick={() => setMoviesIndex(index)}
            key={movie.name}
          >
            {index}
          </button>
        ))}
      </article>
    </section>
  );
}
export default Banner;
