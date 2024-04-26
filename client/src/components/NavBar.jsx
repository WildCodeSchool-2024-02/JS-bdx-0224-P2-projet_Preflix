import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { useContext, useState } from "react";
import { CategoryContext } from "../contexts/CategoryContext";
import imgCredit from "../assets/images/heart-hand-shake.svg";
import imgCreditYellow from "../assets/images/heart-hand-shake-yellow.svg";
import imgHome from "../assets/images/icons-accueil.svg";
import imgHomeYellow from "../assets/images/iconsaccueilyellow.svg";
import imgSearch from "../assets/images/icons-chercher.svg"
import imgSearchYellow from "../assets/images/icons-search-yellow.svg"

function NavBar() {
  const location = useLocation();
  const selectedUrl = location.pathname;
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  const { types } = useContext(CategoryContext);

  const credits = (url) => (selectedUrl === url ? imgCreditYellow : imgCredit);
  const home = (url) => (selectedUrl === url ? imgHomeYellow : imgHome);
  const search = (url) => (selectedUrl === url ? imgSearchYellow : imgSearch);

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
              src={home("/")} 
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
              src= {search("/search")}
              alt="Rechercher"
            />
          </Link>
        </li>
        <li className="none">
          <Link to="/credits">
            <img className="navIcon" src={credits("/credits")} alt="Crédits" />
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
        <MenuTrigger className="boxScroll">
            <Button className="buttonCategory" onClick={handleClick} aria-label="Menu">
              <h2 className={click ? "nameCategory" : ""}>Catégories ▼</h2>
            </Button>
            <Popover>
              <Menu className="scrollingMenu" onAction={Link}>
                {types.map((type) => (
                  <MenuItem
                  aria-label="category"
                  className="category"
                  key={type.name}
                  >
                    <Link
                      to={`/category/${type.name}`}
                      key={type.name}
                      className="genderCategory"
                      aria-label={type.name}
                    >
                      {type.name.charAt(0).toUpperCase()}
                      {type.name.substring(1)}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Popover>
          </MenuTrigger>
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