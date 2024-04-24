import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
} from "react-aria-components";

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
        <li className="none">
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
        </li>
        <li className="navDesktop titleNav">
          <Link to="/series">
            <h2 className={selectedUrl === "/series" ? "yellow" : "titleNav"}>
              Séries
            </h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <Link to="/movies">
            <h2 className={selectedUrl === "/movies" ? "yellow" : "titleNav"}>
              Films
            </h2>
          </Link>
        </li>
        <li className="navDesktop titleNav">
          <Select>
            <Button className="buttonCategory">
              <h2>Catégories</h2>
              <span aria-hidden="true" className="arrowDown">
                ▼
              </span>
            </Button>
            <Popover>
              <ListBox className="scrollingMenu">
                <ListBoxItem className="category">Cat</ListBoxItem>
                <ListBoxItem className="category">Dog</ListBoxItem>
                <ListBoxItem className="category">Kangaroo</ListBoxItem>
              </ListBox>
            </Popover>
          </Select>
        </li>
        <li>
          <Link className="isMobile" to="/credits">
            <h2 className={selectedUrl === "/credits" ? "yellow" : "titleNav"}>
              Crédits
            </h2>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <img
              src="./src/assets/images/icons-chercher.svg"
              alt="Search's icon"
              className={selectedUrl === "/search" ? "selected" : ""}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
