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
      <h2>SERIES MÁS POPULARES</h2>
      <MovieList movies={tvShow}/>
    </div>
  );
}

export default Series;