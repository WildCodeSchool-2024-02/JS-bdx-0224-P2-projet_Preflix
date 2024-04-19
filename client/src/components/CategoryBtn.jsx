// import { useState } from "react";
import PropTypes from "prop-types";
import "./CategoryBtn.css";

function CategoryBtn({ label, isVisible, setIsVisible }) {
  // const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: `Bearer ${apiToken}`
  //     }
  //   };

  // const [listMovies, setListMovies] = useState([]);
  // const [listSeries, setListSeries] = useState([]);

  // const mergeTables = listMovies.concat(listSeries);
  // const sortTables = mergeTables.sort((a, b) => a.name.localeCompare(b.name));

  // const sendMovies = (url) => {
  //       fetch(url, options)
  //         .then(response => response.json())
  //         .then(data => setListMovies(data.genres))
  //         .catch(err => console.error(err));
  //     }

  // const sendSeries = (url) => {
  //       fetch(url, options)
  //         .then(response => response.json())
  //         .then(data => setListSeries(data.genres))
  //         .catch(err => console.error(err));
  //       }

  const handleClick = () => {
    setIsVisible(!isVisible);
    // sendMovies("https://api.themoviedb.org/3/genre/movie/list?language=fr");
    // sendSeries("https://api.themoviedb.org/3/genre/tv/list?language=fr")
  };

  // CATEGORIES DE FILMS ET DE SERIES
  // pour la liste des catégories on peut peut-être garder les infos de movie
  // pour l'affichage des films on peut peut-être dire : si le nom pour les series === le nom pour les movies, alors on affiche à la fois les series et les movies ?
  // quand on clique de nouveau sur le bouton il faut rembobiner le menu
  // UTILISER UN "SET" pour faire le tri

  const types = [
    "Action",
    "Animation",
    "Comédie",
    "Crime",
    "Documentaire",
    "Drame",
    "Familial",
    "Fantastique",
    "Guerre",
    "Histoire",
    "Horreur",
    "Kids",
    "Musique",
    "Mystère",
    "News",
    "Reality",
    "Romance",
    "Science-Fiction",
    "Soap",
    "Talk",
    "Téléfilm",
    "Thriller",
    "Western",
  ];

  return (
    // <form id="form-category">
    <>
      <button type="button" onClick={handleClick}>
        {label.toUpperCase()}
      </button>
      {isVisible && (
        <ul className="ul-category">
          {types.map((type) => (
            <li className="li-category" key={type}>
              {type}
            </li>
          ))}
        </ul>
      )}
    </>
    // </form>
  );
}

CategoryBtn.propTypes = {
  label: PropTypes.string.isRequired,
  fetchData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    data: PropTypes.func.isRequired,
  }).isRequired,
  // apiToken: PropTypes.string.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default CategoryBtn;
