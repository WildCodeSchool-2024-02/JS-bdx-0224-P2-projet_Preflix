import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { TypeProvider } from "./contexts/CategoryContext";

function App() {
  return (
    <>
      <TypeProvider>
        <NavBar />
      </TypeProvider>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
