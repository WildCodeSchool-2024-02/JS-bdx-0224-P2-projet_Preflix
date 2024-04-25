import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
} from "react-aria-components";
import { useContext, useState } from "react";
import { CategoryContext } from "../contexts/CategoryContext";

function NavBar() {
  const location = useLocation();
  const selectedUrl = location.pathname;
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  const { types } = useContext(CategoryContext);

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
          <Select className="boxScroll">
            <Button className="buttonCategory" onClick={handleClick}>
              <h2 className={click ? "nameCategory" : ""}>Catégories ▼</h2>
            </Button>
            <Popover>
              <ListBox className="scrollingMenu">
                {types.map((type) => (
                  <ListBoxItem
                    aria-label="category"
                    className="category"
                    key={type}
                  >
                    <Link
                      to={{ pathname: `/category/${type.name}` }}
                      key={type.name}
                      className="genderCategory"
                    >
                      {type.name.charAt(0).toUpperCase()}
                      {type.name.substring(1)}
                    </Link>
                  </ListBoxItem>
                ))}
              </ListBox>
            </Popover>
          </Select>
        </li>
        <li className="isMobile">
          <Link className="isMobile" to="/credits">
            <h2 className={selectedUrl === "/credits" ? "yellow" : "titleNav"}>
              Crédits
            </h2>
          </Link>
        </li>
        <li className="isMobile">
          <Link to="/search">
            <img
              className="searchDesktop"
              src={
                selectedUrl === "/search"
                  ? "../src/assets/images/icons-search-yellow.svg"
                  : "../src/assets/images/icons-chercher.svg"
              }
              alt="Rechercher"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
