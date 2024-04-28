import { Link } from "react-router-dom";
import ImgArrow from "../assets/images/icons-fleche-retour.svg"
import "../Styles/Home.css"

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
       src="../src/assets/images/logo.svg"
       alt="logo retour vers l'accueil"
     />
     </Link>
     </section>
  );
}

export default ArrowBack;
