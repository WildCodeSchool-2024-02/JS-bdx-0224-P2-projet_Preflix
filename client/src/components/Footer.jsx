import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <img
        className="logoTmdb"
        src="../src/assets/images/logo-tmdb.svg"
        alt="TMDB logo"
      />
      <p className="p_Footer">PREFLIX © 2024</p>
      <p className="p_Footer">
        Conditions d'utilisation - Politique de confidentialité
      </p>
    </footer>
  );
}

export default Footer;
