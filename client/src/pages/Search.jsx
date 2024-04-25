import { useState } from "react";
import BarSearch from "../components/BarSearch";
import ArrowBack from "../components/ArrowBack";
import "../Styles/Search.css";

function Search() {
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const urlSearch =
    "https://api.themoviedb.org/3/search/multi?language=fr-FR&query";

  const [currentSearch, setCurrentSearch] = useState([]);

  return (
    <>
      <ArrowBack />
      <BarSearch
        fetchData={{ url: urlSearch, data: currentSearch }}
        setData={setCurrentSearch}
        apiToken={apiToken}
      />
    </>
  );
}

export default Search;
