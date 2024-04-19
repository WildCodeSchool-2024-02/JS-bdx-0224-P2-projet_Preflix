import PropTypes from "prop-types";

function Btn({ label, fetchData, setData, apiToken, setIsVisible, isVisible }) {
  const handleClick = () => {
    setIsVisible(!isVisible);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };
    fetch(fetchData.url, options)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        {label}
      </button>
      {isVisible && (
        <section className="moviesContainer">
          {fetchData.data.map((item) => (
            <article key={item.id} className="articleMovies">
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
      )}
    </>
  );
}

Btn.propTypes = {
  label: PropTypes.string.isRequired,
  fetchData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    data: PropTypes.func.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
  apiToken: PropTypes.string.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Btn;
