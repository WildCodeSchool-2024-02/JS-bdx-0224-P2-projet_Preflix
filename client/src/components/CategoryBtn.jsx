import PropTypes from "prop-types";
import "../Styles/CategoryBtn.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CategoryContext } from "../contexts/CategoryContext";

function CategoryBtn({ label, isVisible, setIsVisible }) {
  const { types } = useContext(CategoryContext);

  const [isBackHome, setIsBackHome] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleCross = () => {
    setIsBackHome(!isBackHome);
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button className="buttonFilter" type="button" onClick={handleClick}>
        {label}
      </button>
      {isVisible && (
        <ul className="ul-category">
          <button
            type="button"
            className="button-closing"
            onClick={handleCross}
          >
            <img
              src="../src/assets/images/cross.svg"
              alt="closing button to return back to homepage"
              className="closing-cross"
            />
          </button>
          {types.map((type) => (
            <Link to={{ pathname: `/category/${type.name}` }} key={type.name}>
              <li className="li-category">
              {type.name.charAt(0).toUpperCase()}
                {type.name.substring(1)} 
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

CategoryBtn.propTypes = {
  label: PropTypes.string.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default CategoryBtn;
