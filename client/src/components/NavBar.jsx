import { Link, useLocation } from "react-router-dom";
import "../Navbar.css";
import SearchBar from "./SearchBar";

function NavBar() {
  const location = useLocation();

  const getIconHome = () =>
    location.pathname === "/" ? "iconsaccueilyellow.svg" : "icons-accueil.svg";

  const getIconSearch = () =>
    location.pathname === "/search"
      ? "icons-search-yellow.svg"
      : "icons-chercher.svg";

  const getIconCredits = () =>
    location.pathname === "/credits"
      ? "heart-hand-shake-yellow.svg"
      : "heart-hand-shake.svg";

  const getTitleHomeColor = () =>
    location.pathname === "/" ? "yellow" : "var(--tertiary-color)";

  const getTitleCategoryColor = () =>
    location.pathname === "/category" ? "yellow" : "var(--tertiary-color)";

  const getTitleCreditsColor = () =>
    location.pathname === "/credits" ? "yellow" : "var(--tertiary-color)";

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
            <h2 className={`titleNav ${getTitleHomeColor()}`}>Accueil</h2>
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
            <h2 className={`titleNav ${getTitleCreditsColor()}`}>Crédits</h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <h2 className="titleNav">Séries</h2>
        </li>
        <li className="navDesktop titleNav">
          <h2 className="titleNav">Films</h2>
        </li>
        <li className="navDesktop titleNav">
          <Link className="linkName" to="category">
            <h2 className={`titleNav ${getTitleCategoryColor()}`}>
              Catégories
            </h2>
          </Link>
        </li>
      </ul>
      <form className="searchNavBar">
        <SearchBar />
      </form>
    </nav>
  );
}

export default NavBar;
