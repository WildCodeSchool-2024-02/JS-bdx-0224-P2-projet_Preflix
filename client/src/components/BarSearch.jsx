import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../Styles/BarSearch.css";

function BarSearch({ fetchData, handleChange, handleSubmit, searchValue }) {

  return (
    <>
      <form className="form-search" onSubmit={handleSubmit}>
        <label htmlFor="search">Rechercher un film ou une série</label>
        <img
          src="../src/assets/images/icons-chercherblack.svg"
          alt="icone de loupe"
          className="icon-loop"
        />
        <input
          name="search"
          id="search"
          type="search"
          placeholder="Rechercher un film, une série..."
          onChange={handleChange}
        />
      </form>
      <h1 className="title-results">Résultats de "{searchValue}"</h1>
      <section className="search-results">
        {fetchData.data.map((item) => (
           item.poster_path &&
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
    data: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default BarSearch;
