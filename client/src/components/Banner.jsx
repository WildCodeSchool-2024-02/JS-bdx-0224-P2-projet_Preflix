import "./Banner.css";
import { useState } from "react";

const moviesList = [
  {
    imgSrc: "./src/assets/images/dune2.jpg",
  },
  {
    imgSrc: "./src/assets/images/kungfupanda2.jpg",
  },
];

function Banner() {
  const [moviesIndex, setMoviesIndex] = useState(0);
  const movie = moviesList[moviesIndex];

  function showNextImg() {
    setMoviesIndex((index) =>
      index === moviesList.length - 1 ? 0 : index + 1
    );
  }

  function showPrevImg() {
    setMoviesIndex((index) =>
      index === 0 ? moviesList.length - 1 : index - 1
    );
  }

  return (
      <figure className="containerMovies">
        <article>
          <img src={movie.imgSrc} alt={movie.name} />
          <button className="buttonPlus" type="button" onClick={showNextImg}>
            Plus
          </button>
          <button className="buttonMoins" type="button" onClick={showPrevImg}>
            Moins
          </button>
        </article>
      </figure>
  );
}
export default Banner;
