import { useState } from "react";
import ArrowBack from "../components/ArrowBack";
import "../Styles/Btn.css"

function Movies() {

  const apiToken = import.meta.env.VITE_API_TOKEN;
  
  const [movies, setMovies] = useState([]);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc', options)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
    

  return (
      <>
      <ArrowBack />
      <h2 className="title-movies">FILMS</h2>
        <section className="section-movies">
          {movies.map((item) => (
            <article key={item.id}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="posterMovie"
                />
              </figure>
            </article>
          ))}
        </section>
  </>
  );

}

export default Movies;
