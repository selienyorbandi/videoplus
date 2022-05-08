import Movie from "components/Movie/Movie";

import styles from "./styles.module.css";

function MovieList({movies, med_type}){
  return(
    <ul className={styles.Movie__list}>
      {movies.map( trendingMovie => {
        const {name, title, overview, poster_path, vote_average, id, media_type} = trendingMovie;
        return <Movie name={name} title={title} overview={overview} poster_path={poster_path} vote_average={vote_average} key={id} id={id} media_type={media_type || med_type}/>;
      })
      }          
    </ul>
  );
}

export default MovieList;