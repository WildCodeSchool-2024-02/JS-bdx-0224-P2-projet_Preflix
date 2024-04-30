import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import logoTmdb from "../assets/images/logo-tmdb.svg";

function Footer() {
  return (
    <footer>
      <img className="logoTmdb" src={logoTmdb} alt="TMDB logo" />
      <p>PREFLIX © 2024</p>
      <Link to="/terms-of-use" className="Terms-of-use">
        Conditions d'utilisation - Politique de confidentialité
      </Link>
    </footer>
  );
}

export default Footer;
