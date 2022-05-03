import Movie from "components/Movie/Movie";

import styles from "./styles.module.css";

function MovieList({movies}){
  return(
    <ul className={styles.Movie__list}>
      {movies.map( trendingMovie => {
        const {name, title, overview, poster_path, vote_average, id} = trendingMovie;
        return <Movie name={name} title={title} overview={overview} poster_path={poster_path} vote_average={vote_average} key={id}/>;
      })
      }          
    </ul>
  );
}

export default MovieList;