import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../components/ArrowBack";
import "../Styles/Btn.css";

function Series() {
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);
  const [series4, setSeries4] = useState([]);
  const [series5, setSeries5] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    const getSeries = (page, setSeries) => {
      fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setSeries(data.results))
        .catch((err) => console.error(err));
    };

    getSeries(1, setSeries1);
    getSeries(2, setSeries2);
    getSeries(3, setSeries3);
    getSeries(4, setSeries4);
    getSeries(5, setSeries5);
  }, [apiToken]);

  return (
    <>
      <ArrowBack />
      <h2 className="title-movies">SERIES</h2>
      <section className="section-movies">
        {series1.map((item) => (
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

        {series2.map((item) => (
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

        {series3.map((item) => (
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

        {series4.map((item) => (
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

        {series5.map((item) => (
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
