import { Link } from "react-router-dom";

import { API_IMG_PREFIX } from "config/APIconfig";

import Rating from "components/Rating/Rating";

import posterDefault from "../../assets/images/poster_default.jpg";
import styles from "./styles.module.css";

function Movie({name, title, poster_path, vote_average, id, media_type}) {
  const isMovie = media_type === "movie";
  let link;

  if (isMovie) {
    link = `/m/${id}`;
  } else {
    link = `/s/${id}`;
  }

  return (
    <Link to={link} className={styles.MovieLink}>
      <div className={styles.Movie}>
        <div className={styles.Movie__posterCnt}>
          <img src={`${API_IMG_PREFIX}${poster_path}`} alt={name? name: title} className={styles.Movie__poster} onError={e=> e.target.src = posterDefault}/>
        </div>
        <Rating score={vote_average}/>
        <h2 className={styles.Movie__title}>{name? name: title }</h2>
      </div>
    </Link>
  );
}

export default Movie;