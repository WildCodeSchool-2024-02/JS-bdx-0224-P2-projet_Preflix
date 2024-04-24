import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

function NavBar() {
  const location = useLocation();
  const selectedUrl = location.pathname;

  return (
    <nav className="nav">
      <Link className="linkName" to="/">
        <img
          className="logoFull"
          src="../src/assets/images/Logofull.svg"
          alt="Accueil"
        />
      </Link>
      <ul className="navList">
        <li>
          <Link to="/">
            <img
              className="navIcon"
              src={
                selectedUrl === "/"
                  ? "../src/assets/images/iconsaccueilyellow.svg"
                  : "../src/assets/images/icons-accueil.svg"
              }
              alt="Accueil"
            />
          </Link>
          <Link className="isMobile" to="/">
            <h2 className={selectedUrl === "/" ? "yellow" : "titleNav"}>
              Accueil
            </h2>
          </Link>
        </li>
        <li className="none">
          <Link to="/search">
            <img
              className="navIcon"
              src={
                selectedUrl === "/search"
                  ? "../src/assets/images/icons-search-yellow.svg"
                  : "../src/assets/images/icons-chercher.svg"
              }
              alt="Rechercher"
            />
          </Link>
        </li>
        <li>
          <Link to="/credits">
            <img
              className="navIcon"
              src={
                selectedUrl === "/credits"
                  ? "../src/assets/images/heart-hand-shake-yellow.svg"
                  : "../src/assets/images/heart-hand-shake.svg"
              }
              alt="Crédits"
            />
          </Link>
          <Link className="isMobile" to="/credits">
            <h2 className={selectedUrl === "/credits" ? "yellow" : "titleNav"}>
              Crédits
            </h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <Link to="/category/series">
            <h2
              className={
                selectedUrl === "/category/series" ? "yellow" : "titleNav"
              }
            >
              Séries
            </h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <Link to="/category/movies">
            <h2
              className={
                selectedUrl === "/category/movies" ? "yellow" : "titleNav"
              }
            >
              Films
            </h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <Link to="/category">
            <h2 className={selectedUrl === "/category" ? "yellow" : "titleNav"}>
              Catégories
            </h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
