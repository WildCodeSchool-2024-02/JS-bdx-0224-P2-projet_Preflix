import { Outlet } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
// import Btn from "./components/Btn";
// import BarSearch from "./components/BarSearch";

function App() {
  // const apiToken = import.meta.env.VITE_API_TOKEN;
  // const urlDiscoverSeries =
  //   "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
  // const urlDiscoverMovies =
  //   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc";

  // const urlSearch =
  //   "https://api.themoviedb.org/3/search/multi?language=fr-FR&query";

  // const [series, setSeries] = useState([]);
  // const [movies, setMovies] = useState([]);
  // const [currentSearch, setCurrentSearch] = useState([]);
  // const [isSeriesVisible, setIsSeriesVisible] = useState(false);
  // const [isMoviesVisible, setIsMoviesVisible] = useState(false);

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
        {/* <BarSearch
          fetchData={{ url: urlSearch, data: currentSearch }}
          setData={setCurrentSearch}
          apiToken={apiToken}
        /> */}
      </main>
    </>
  );
}

export default App;
