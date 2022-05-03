import { useEffect, useState } from "react";

import { API_MOVIES_GENRE, API_TV_GENRE } from "config/APIconfig";

import styles from "./styles.module.css";

//todo Llevar estas peticiones a la PAGE

function GenreList({genreType}){
  const [genres, setGenres] = useState([]);
    
  useEffect(() => {
    fetch(genreType === "movie" ? API_MOVIES_GENRE: API_TV_GENRE)
      .then((res) => res.json())
      .then((genre) => {
        setGenres(genre.genres);
      });
  }, [genreType]);

  return(
    <ul className={styles.GenreList}>
      {   genres.map(genre => {
        const {id,name } = genre;
        return( 
          <li key={id}>
            {name}
          </li>
        );
      })}
    </ul>
        
  );
}

export default GenreList;