import { useState } from "react";
import "./App.css";
import ButtonMovies from "./components/ButtonMovies";

function App() {
  const [movies, setMovies] = useState([]);

  return <ButtonMovies labelMovies="Movies" movies={movies} setMovies={setMovies} />
    
  
}

export default App;
