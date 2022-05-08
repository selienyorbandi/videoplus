import MovieList from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { API_POPULAR_TV_SHOW } from "config/APIconfig";

import styles from "../styles.module.css";

function Series(){
  const [tvShow, setTvShow] = useState([]);
        
  useEffect(() => {
    fetch(API_POPULAR_TV_SHOW)
      .then((res) => res.json())
      .then((tv) => {
        setTvShow(tv.results);
      });
  }, []);
  return(
    <div className={styles.Container}>
      <h1>SERIES MÁS POPULARES</h1>
      <MovieList movies={tvShow} med_type="tv"/>
    </div>
  );
}

export default Series;