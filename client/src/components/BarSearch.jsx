import PropTypes from "prop-types";
import { useState } from "react";

function SearchBar({ fetchData, setData, apiToken }) {
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
      <label htmlFor="search">Rechercher</label>
      <input
        name="search"
        id="search"
        type="search"
        placeholder="Films, séries, ..."
        onChange={handleChange}
      />
      <section className="search-results">
        <h1>Résultats de "{searchValue}"</h1>
        {fetchData.data.map((item) => (
          <article key={item.id}>
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
              <figcaption>
                {item.title} {item.name}
              </figcaption>
            </figure>
          </article>
        ))}
      </section>
    </>
  );
}

SearchBar.propTypes = {
  fetchData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    data: PropTypes.func.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
  apiToken: PropTypes.string.isRequired,
};

export default SearchBar;
