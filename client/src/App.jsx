import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Btn from "./components/Btn";
import SearchBar from "./components/SearchBar";

function App() {
  
   const apiToken = import.meta.env.VITE_API_TOKEN;
  const urlDiscoverSeries =
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
  const urlDiscoverMovies =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc";

  const urlSearch =
    "https://api.themoviedb.org/3/search/multi?language=fr-FR&query";

  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [currentSearch, setCurrentSearch] = useState([]);
  const [isSeriesVisible, setIsSeriesVisible] = useState(false);
  const [isMoviesVisible, setIsMoviesVisible] = useState(false);
  
  return (
    <main>
      <Outlet />
      <SearchBar
        fetchData={{ url: urlSearch, data: currentSearch }}
        setData={setCurrentSearch}
        apiToken={apiToken}
      />
      <Btn
        label="Séries"
        fetchData={{ url: urlDiscoverSeries, data: series }}
        setData={setSeries}
        apiToken={apiToken}
        setIsVisible={setIsSeriesVisible}
        isVisible={isSeriesVisible}
      />
      <Btn
        label="Films"
        fetchData={{ url: urlDiscoverMovies, data: movies }}
        setData={setMovies}
        apiToken={apiToken}
        setIsVisible={setIsMoviesVisible}
        isVisible={isMoviesVisible}
      />
    </main>
  );
}

export default App;
