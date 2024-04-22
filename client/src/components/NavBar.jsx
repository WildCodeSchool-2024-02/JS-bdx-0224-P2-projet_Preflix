import { Link, useLocation } from "react-router-dom";
import "../Navbar.css";

function NavBar() {
  const location = useLocation();

  const getIconHome = () => {
    switch (location.pathname) {
      case "/":
        return "iconsaccueilyellow.svg";
      default:
        return "icons-accueil.svg";
    }
  };

  const getIconSearch = () => {
    switch (location.pathname) {
      case "/search":
        return "icons-search-yellow.svg";
      default:
        return "icons-chercher.svg";
    }
  };

  const getIconCredits = () => {
    switch (location.pathname) {
      case "/credits":
        return "heart-hand-shake-yellow.svg";
      default:
        return "heart-hand-shake.svg";
    }
  };
  const getTitleColor = () => {
    switch (location.pathname) {
      case "":
        return "yellow";
      case "/category":
        return "yellow";
      case "/credits":
        return "yellow";
      case "/category/series":
        return "yellow";
      case "/category/movies":
        return "yellow";
      default:
        return "titleNav";
    }
  };

  return (
    <nav className="nav">
      <Link className="linkName" to="/">
        <img
          className="logo"
          src="../src/assets/images/logo.svg"
          alt="logo preflix"
        />
      </Link>
      <ul className="navList">
        <li>
          <Link className="linkName" to="/">
            <img
              className="navIcon"
              src={`../src/assets/images/${getIconHome()}`}
              alt="Accueil"
            />
            <h2 className={`titleNav ${getTitleColor()}`}>Accueil</h2>
          </Link>
        </li>
        <li className="none">
          <Link className="linkName linkSearch" to="/search">
            <img
              className="navIcon"
              src={`../src/assets/images/${getIconSearch()}`}
              alt="Rechercher"
            />
          </Link>
        </li>
        <li>
          <Link className="linkName" to="/credits">
            <img
              className="navIcon"
              src={`../src/assets/images/${getIconCredits()}`}
              alt="Crédits"
            />
            <h2 className={`titleNav ${getTitleColor()}`}>Crédits</h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <Link className="linkName" to="/category/series">
            <h2 className={`titleNav ${getTitleColor()}`}>Séries</h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <Link className="linkName" to="/category/movies">
            <h2 className={`titleNav ${getTitleColor()}`}>Films</h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <Link className="linkName" to="category">
            <h2 className={`titleNav ${getTitleColor()}`}>Catégories</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
