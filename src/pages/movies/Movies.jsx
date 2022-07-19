import useFetch from "hooks/useFetch";
import { API_POPULAR_MOVIES } from "config/APIconfig";

import MovieList from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";

import styles from "../styles.module.css";

function Movies() {
  const { data, isLoading } = useFetch(API_POPULAR_MOVIES, true);
   
  return (
    <div className={styles.Container}>
      <h1>PELÍCULAS POPULARES</h1>
      {isLoading && <Loader />}
      {data && <MovieList movies={data} med_type={"movie"} />}
    </div>
  );
  
}

export default Movies;
