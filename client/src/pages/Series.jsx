import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../components/ArrowBack";
import "../Styles/Btn.css";

function Series() {
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const [series, setSeries] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => setSeries(data.results))
      .catch((err) => console.error(err));
  }, [apiToken]);

  return (
    <>
      <ArrowBack />
      <h2 className="title-movies">SERIES</h2>
      <section className="section-movies">
        {series.map((item) => (
          <article key={item.id}>
            <Link to={`/media/tv/${item.id}`}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="posterMovie"
                />
              </figure>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}

export default Series;
