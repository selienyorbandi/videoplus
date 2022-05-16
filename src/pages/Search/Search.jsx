import { useEffect, useState } from "react";

import { API_SEARCH } from "config/APIconfig";

import MovieList from "components/MovieList/MovieList";

import styles from "../styles.module.css";
import { useParams } from "react-router-dom";

function Search() {
  const [media, setMedia] = useState([]);
  const { query } = useParams("query");
  
  useEffect(() => {
    fetch(`${API_SEARCH}${query}`)
      .then((res) => res.json())
      .then((media) => {
        setMedia(media.results.filter(med => med.media_type !== "person"));
      });
  }, [query]);
  
  return(
    <div className={styles.Container}>
      <h1>{query.toLocaleUpperCase()}</h1>
      {media.length ? <MovieList movies={media}/> : <><p>No se han encontrado resultados</p></> }
    </div>
  );
}

export default Search;
