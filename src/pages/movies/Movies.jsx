import MovieList from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { API_POPULAR_MOVIES } from "config/APIconfig";

import styles from "../styles.module.css";

function Movies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!movies) {
      fetch(API_POPULAR_MOVIES)
        .then((res) => res.json())
        .then((movies) => {
          setMovies(movies.results);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className={styles.Container}>
      <h1>PELÍCULAS POPULARES</h1>
      {movies ? <MovieList movies={movies} med_type="movie"/> : <></>}
    </div>
  );
}

export default Movies;
