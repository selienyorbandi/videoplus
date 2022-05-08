import MovieList from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { API_POPULAR_MOVIES } from "config/APIconfig";

import styles from "../styles.module.css";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_POPULAR_MOVIES)
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies.results);
      });
  }, []);

  return (
    <div className={styles.Container}>
      <h1>PELÍCULAS POPULARES</h1>
      <MovieList movies={movies} med_type="movie"/>
    </div>
  );
}

export default Movies;
