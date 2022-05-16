import Movie from "components/Movie/Movie";

import styles from "./styles.module.css";

function MovieList({movies, med_type}){
  return(
    <ul className={styles.Movie__list}>
      {movies.map( eachMovie => {
        const {name, title, overview, poster_path, vote_average, id, media_type} = eachMovie;
        return <li key={id}><Movie name={name} title={title} overview={overview} poster_path={poster_path} vote_average={vote_average} key={id} id={id} media_type={media_type || med_type}/></li>;
      })
      }          
    </ul>
  );
}

export default MovieList;