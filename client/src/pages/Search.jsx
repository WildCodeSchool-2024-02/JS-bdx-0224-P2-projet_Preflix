import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BarSearch from "../components/BarSearch";
import ArrowBack from "../components/ArrowBack";
import "../Styles/Search.css";

function Search() {
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const urlSearch =
    "https://api.themoviedb.org/3/search/multi?language=fr-FR&query";

  const [currentSearch, setCurrentSearch] = useState([]);
  const [trendingMovies1, setTrendingMovies1] = useState([]);
  const [trendingMovies2, setTrendingMovies2] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const [searchValue, setSearchValue] = useState("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  const getMovie = (url) => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setCurrentSearch(data.results))
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    if (value.trim() !== "") {
      getMovie(`${urlSearch}=${value}`);
      setIsVisible(false);
    } else {
      setCurrentSearch([]);
      setIsVisible(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const getTrendingMovies = (page, setTrendingMovies) => {
      fetch(
        `https://api.themoviedb.org/3/trending/all/day?language=fr-FR&page=${page}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setTrendingMovies(data.results))
        .catch((err) => console.error(err));
    };

    getTrendingMovies(1, setTrendingMovies1);
    getTrendingMovies(2, setTrendingMovies2);
  }, [apiToken]);

  return (
    <>
      <ArrowBack />
      <BarSearch
        fetchData={{ url: urlSearch, data: currentSearch }}
        setData={setCurrentSearch}
        apiToken={apiToken}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchValue={searchValue}
      />
      <section className="section-popular-search">
        {isVisible &&
          trendingMovies1.map((item) => (
            <article key={item.id}>
              <Link to={`/media/movie/${item.id}`}>
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
        {isVisible &&
          trendingMovies2.map((item) => (
            <article key={item.id}>
              <Link to={`/media/movie/${item.id}`}>
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

export default Search;
