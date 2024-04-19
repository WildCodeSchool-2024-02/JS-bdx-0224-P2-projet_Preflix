import { Link } from "react-router-dom";

function ArrowBack() {
  return (
    <Link to="/">
      <img
        src="../src/assets/images/icons-fleche-retour.svg"
        alt="bouton retour vers l'accueil"
        className="icon-return-homepage"
      />{" "}
    </Link>
  );
}

export default ArrowBack;
