import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { API_MOVIES_GENRE, API_TV_GENRE } from "config/APIconfig";

import styles from "./styles.module.css";

function GenreList({genreType}){
  const [genres, setGenres] = useState([]);
  const {id : idParam} = useParams("id");
    
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
          <Link to={`/generos/${genreType === "movie" ? "m" : "s"}/${genre.id}`} key={id}>
            <li key={id} className={`${id === parseInt(idParam) ? styles.GenreList__Active : ""}`}>
              {name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default GenreList;