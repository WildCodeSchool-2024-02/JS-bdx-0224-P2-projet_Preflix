import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import CategoryBtn from "../components/CategoryBtn";

function Category({ isVisible, setIsVisible }) {
  return (
    <>
      <Outlet />
      <CategoryBtn
        label="Category"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  );
}

Category.propTypes = {
  fetchData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    data: PropTypes.func.isRequired,
  }).isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Category;
