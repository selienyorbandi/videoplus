import { API_IMG_PREFIX } from "config/APIconfig";

import Rating from "components/Rating/Rating";

import styles from "./styles.module.css";

function Movie({name, title, overview, poster_path, vote_average}) {
    return (
        <li className={styles.Movie}>
            <div className="">
                <img src={`${API_IMG_PREFIX}${poster_path}`} alt={name? name: title} className={styles.Movie__poster}/>
            </div>
            <Rating score={vote_average}/>
            <h3 className={styles.Movie__title}>{name? name: title }</h3>
        </li>
    );
}


export default Movie;