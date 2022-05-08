import { API_IMG_PREFIX } from "config/APIconfig";

import Rating from "components/Rating/Rating";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

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
      <li className={styles.Movie}>
        <div className="">
          <img src={`${API_IMG_PREFIX}${poster_path}`} alt={name? name: title} className={styles.Movie__poster}/>
        </div>
        <Rating score={vote_average}/>
        <h3 className={styles.Movie__title}>{name? name: title }</h3>
      </li>
    </Link>
  );
}

export default Movie;