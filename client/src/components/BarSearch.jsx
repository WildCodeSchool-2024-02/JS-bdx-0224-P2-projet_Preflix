import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/BarSearch.css";

function BarSearch({ fetchData, setData, apiToken }) {
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
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    if (value.trim() !== "") {
      getMovie(`${fetchData.url}=${value}`);
    } else {
      setData([]);
    }
  };

  return (
    <>
      <form className="form-search">
        <label htmlFor="search">Films, séries, ...</label>
        <img
          src="../src/assets/images/icons-chercherblack.svg"
          alt="icone de loupe"
          className="icon-loop"
        />
        <input
          name="search"
          id="search"
          type="search"
          placeholder="Rechercher"
          onChange={handleChange}
        />
      </form>
      <h1 className="title-results">Résultats de "{searchValue}"</h1>
      <section className="search-results">
        {fetchData.data.map((item) => (
          <article key={item.id}>
            <Link to={`/media/${item.media_type}/${item.id}`}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
                <figcaption>
                  {item.title} {item.name}
                </figcaption>
              </figure>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}

BarSearch.propTypes = {
  fetchData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    data: PropTypes.func.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
  apiToken: PropTypes.string.isRequired,
};

export default BarSearch;
