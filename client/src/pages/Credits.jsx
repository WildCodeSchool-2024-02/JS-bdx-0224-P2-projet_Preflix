import "../Styles/Credits.css";
import ArrowBack from "../components/ArrowBack";

function Credits() {
  return (
    <>
      <ArrowBack />
      <section className="creditsSection">
        <figure className="logo-tmdb">
          <img src="../src/assets/images/logo-tmdb.svg" alt="TMDB logo" />
        </figure>
        <p>PREFLIX a été fait avec amour par :</p>
        <p className="nameYellow">Alice, Adrien, Sylvain et Axel</p>
        <p>
          Ce site Web utilise TMDB et les API TMDB mais n'est pas approuvé,
          certifié ou autrement approuvé par TMDB.
        </p>
      </section>
    </>
  );
}

export default Credits;
