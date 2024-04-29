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
