import GenreList from "components/GenreList/GenreList";

import styles from "../styles.module.css";

function Genre(){
    
  return(
    <div className={styles.Container}>
      <h2>GÉNEROS</h2>
      <h3>Películas</h3>
      <GenreList genreType="movie"/>
      <h3>Series y Shows de Televisión</h3>
      <GenreList genreType="tv"/>
    </div>
  );
}

export default Genre;