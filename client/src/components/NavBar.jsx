import { Link, useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";


function NavBar() {

  const location = useLocation();

  const getIconHome = () => {
    switch (location.pathname) {
      case '/':
        return 'iconsaccueilyellow.svg';
        default :
        return 'icons-accueil.svg';
      }
    };

    const getIconSearch = () => {
      switch (location.pathname) {
        case '/search':
          return 'icons-search-yellow.svg';
          default :
          return 'icons-chercher.svg';
        }
      };

    const getIconCredits = () => {
      switch (location.pathname) {
        case '/credits':
          return 'heart-hand-shake-yellow.svg';
          default :
          return 'heart-hand-shake.svg';
        }
      };
    
  return (
    <nav className="nav">
      <img
        className="logo"
        src="../src/assets/images/logo.svg"
        alt="logo preflix"
      />
      <ul className="navList">
        <li>
          <Link className="linkName" to="/">
            <img
              className="navIcon"
              src={`../src/assets/images/${getIconHome()}`}
              alt="Accueil"
            />
            <h2 className="titleNav">Accueil</h2>
          </Link>
        </li>
        <li>
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
            <h2 className="titleNav">Crédits</h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <h2>Séries</h2>
        </li>
        <li className="navDesktop titleNav">
          <h2>Films</h2>
        </li>
        <li className="navDesktop titleNav">
          <Link className="linkName" to="category">
            <h2>Catégories</h2>
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
