import { Link } from "react-router-dom";
import ImgArrow from "../assets/images/icons-fleche-retour.svg"

function ArrowBack() {
  return (
    <Link to="/">
      <img
        src={ImgArrow}
        alt="bouton retour vers l'accueil"
        className="icon-return-homepage"
      />
    </Link>
  );
}

export default ArrowBack;
