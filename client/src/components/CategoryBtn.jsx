import PropTypes from "prop-types";
import "../Styles/CategoryBtn.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CategoryContext } from "../contexts/CategoryContext";


function CategoryBtn({ label, isVisible, setIsVisible  }) {

  const { types } = useContext(CategoryContext);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button type="button" onClick={handleClick} className="buttonFilter">
        {label}
      </button>
      {isVisible && 
        <ul className="ul-category">
        <Link to="/">
        <p className="closing-cross">X</p>
      </Link>
          {types.map((type) => (
            <Link to={{pathname:`/category/${type.name}`}} key={type.name}>
              <li className="li-category">{type.name.charAt(0).toUpperCase()}{type.name.substring(1)}</li>
            </Link>
          ))}
        </ul>
      }
    </>
  );
}

CategoryBtn.propTypes = {
  label: PropTypes.string.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default CategoryBtn;
