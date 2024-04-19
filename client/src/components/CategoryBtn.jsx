import PropTypes from "prop-types";
import "../Styles/CategoryBtn.css";

function CategoryBtn({ label, isVisible, setIsVisible }) {
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const types = [
    "Action",
    "Animation",
    "Comédie",
    "Crime",
    "Documentaire",
    "Drame",
    "Familial",
    "Fantastique",
    "Guerre",
    "Histoire",
    "Horreur",
    "Kids",
    "Musique",
    "Mystère",
    "News",
    "Reality",
    "Romance",
    "Science-Fiction",
    "Soap",
    "Talk",
    "Téléfilm",
    "Thriller",
    "Western",
  ];

  return (
    <>
      <button type="button" onClick={handleClick}>
        {label.toUpperCase()}
      </button>
      {isVisible && (
        <ul className="ul-category">
          {types.map((type) => (
            <li className="li-category" key={type}>
              {type}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

CategoryBtn.propTypes = {
  label: PropTypes.string.isRequired,
  fetchData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    data: PropTypes.func.isRequired,
  }).isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default CategoryBtn;
