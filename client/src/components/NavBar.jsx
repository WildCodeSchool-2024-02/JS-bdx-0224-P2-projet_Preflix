import { Link, useLocation } from "react-router-dom";
import "../Navbar.css";

function NavBar() {
  const location = useLocation();
  const selectedUrl = location.pathname;

  // const getIconHome = () => {
  //   switch (location.pathname) {
  //     case "/":
  //       return "iconsaccueilyellow.svg";
  //     default:
  //       return "icons-accueil.svg";
  //   }
  // };

  // const getIconSearch = () => {
  //   switch (location.pathname) {
  //     case "/search":
  //       return "icons-search-yellow.svg";
  //     default:
  //       return "icons-chercher.svg";
  //   }
  // };

  // const getIconCredits = () => {
  //   switch (location.pathname) {
  //     case "/credits":
  //       return "heart-hand-shake-yellow.svg";
  //     default:
  //       return "heart-hand-shake.svg";
  //   }
  // };
  // const getTitleColor = () => {
  //   switch (location.pathname) {
  //     case "/":
  //       return "yellow";
  //     case "/category":
  //       return "titleNav";
  //     case "/credits":
  //       return "titleNav";
  //     case "/category/series":
  //       return "titleNav";
  //     case "/category/movies":
  //       return "titleNav";
  //     default:
  //       return "yellow";
  //   }
  // };

  return (
    <nav className="nav">
      <Link className="linkName" to="/">
        <img
          className="logo"
          src="../src/assets/images/logo.svg"
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
