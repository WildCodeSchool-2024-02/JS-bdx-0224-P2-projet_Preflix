import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <section className="nav">
      <img
        className="logo"
        src="../src/assets/images/logo.svg"
        alt="logo preflix"
      />
      <ul className="navList">
        <li>
          <img
            className="navIcon"
            src="../src/assets/images/icons-accueil.svg"
            alt="Accueil"
          />
          <h2 className="titleNav">Accueil</h2>
        </li>
        <li>
          <img
            className="navIcon"
            src="../src/assets/images/icons-chercher.svg"
            alt="Rechercher"
          />
        </li>
        <li>
          <img
            className="navIcon"
            src="../src/assets/images/heart-hand-shake.svg"
            alt="Crédits"
          />
          <h2 className="titleNav">Crédits</h2>
        </li>
        <li className="navDesktop titleNav">
          <h2>Séries</h2>
        </li>
        <li className="navDesktop titleNav">
          <h2>Films</h2>
        </li>
        <li className="navDesktop titleNav">
          <h2>Catégories</h2>
        </li>
      </ul>
      <form className="searchNavBar">
        <SearchBar />
      </form>
    </section>
  );
}

export default NavBar;
