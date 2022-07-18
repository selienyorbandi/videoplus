import MovieList from "components/MovieList/MovieList";
import { API_POPULAR_TV_SHOW } from "config/APIconfig";

import styles from "../styles.module.css";
import useFetch from "hooks/useFetch";
import Loader from "components/Loader/Loader";

function Series(){
  const { data, isLoading } = useFetch(API_POPULAR_TV_SHOW);
        
  return(
    <div className={styles.Container}>
      <h1>SERIES MÁS POPULARES</h1>
      {isLoading && <Loader />}
      {data && <MovieList movies={data} />}
    </div>
  );
}

export default Series;