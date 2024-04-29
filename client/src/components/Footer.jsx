import "../Styles/Footer.css";
import logoTmdb from "../assets/images/logo-tmdb.svg"

function Footer() {
  return (
    <footer>
      <img
        className="logoTmdb"
        src={logoTmdb}
        alt="TMDB logo"
      />
      <p>PREFLIX © 2024</p>
      <a href="https://www.themoviedb.org/terms-of-use">
        Conditions d'utilisation
      </a>
      <p>-</p>
      <a href="https://www.themoviedb.org/privacy-policy">
        Politique de confidentialité
      </a>
    </footer>
  );
}

export default Footer;
