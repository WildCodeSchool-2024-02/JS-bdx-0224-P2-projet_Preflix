import { Link } from "react-router-dom";
import ImgArrow from "../assets/images/icons-fleche-retour.svg";
import logoImg from "../assets/images/logo.svg"
import "../Styles/Home.css";

function ArrowBack() {
  return (
    <section className="section-back-homepage">
      <Link to="/">
        <img
          src={ImgArrow}
          alt="bouton retour vers l'accueil"
          className="icon-return-homepage"
        />
      </Link>
      <Link to="/">
        <img
          className="logo-return-homepage"
          src={logoImg}
          alt="logo retour vers l'accueil"
        />
      </Link>
    </section>
  );
}

export default ArrowBack;
