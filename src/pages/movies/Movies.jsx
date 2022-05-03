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
      <h2>PELÍCULAS POPULARES</h2>
      <MovieList movies={movies}/>
    </div>
  );
}

export default Movies;
