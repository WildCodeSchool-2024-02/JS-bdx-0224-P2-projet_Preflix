import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <img
        className="logoTmdb"
        src="../src/assets/images/logo-tmdb.svg"
        alt="TMDB logo"
      />
      <p>PREFLIX © 2024</p>
      <Link to="/terms-of-use">
        <p>Conditions d'utilisation - Politique de confidentialité</p>
      </Link>
    </footer>
  );
}

export default Footer;
