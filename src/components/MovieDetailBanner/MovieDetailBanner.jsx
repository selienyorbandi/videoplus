import { API_IMG_PREFIX, API_IMG_PREFIX__HD } from "config/APIconfig";
import { categoryMap } from "services/categoryMap";

import Rating from "components/Rating/Rating";

import posterDefault from "../../assets/images/poster_default.jpg";
import styles from "./styles.module.css";

function MovieDetailBanner ({movieEl = null}) {
  const {title, name, tagline, budget  ,overview , revenue , production_companies , poster_path , backdrop_path , release_date , runtime , vote_average , genres , episode_run_time , first_air_date , number_of_seasons , number_of_episodes  } = movieEl;
  const isMovie = title !== undefined; /*  Movie has title, tv show has name */
  
  return (
    movieEl.hasOwnProperty("title") || movieEl.hasOwnProperty("name") ? 
      <div className={styles.MovieDetail}>
        <div id="backdrop" className={styles.MovieDetail__backdrop} style={{backgroundImage: `url(${API_IMG_PREFIX__HD}${backdrop_path})` }}>
          <div className={styles.MovieDetail__backdrop__filter}>
            <div className={styles.MovieDetail__mainCard}>
              <div className={styles.MovieDetail__mainCard__posterImg}>
                <img src={`${API_IMG_PREFIX}${poster_path}`} alt={title} onError={e => e.target.src = posterDefault}/>
                <div className={styles.Rating}><Rating score={vote_average}/></div>
              </div>
              <div className={styles.MovieDetail__mainCard__content}>
                <div className={styles.MovieDetail__mainCard__content__header}>
                  <span> {genres.map(genre => `${categoryMap(genre.name)} | `)} <span className={styles.MovieDetail__mainCard__content__header__mediatype}>{isMovie ? "Película" : "Serie"}</span> </span> 
                  <h1>{isMovie ? title.toUpperCase() : name.toUpperCase() }</h1> 
                  <h2>{tagline} </h2>
                  <p>{overview}</p>
                </div>
                <div className={styles.MovieDetail__mainCard__content__row}>
                  <div>
                    <h3>Lanzamiento</h3>
                    <p>{ isMovie ? release_date : first_air_date}</p>
                  </div>
                  <div>
                    <h3>{isMovie ? "Recaudación" : "Episodios"}</h3>
                    <p>{isMovie ? (revenue !== 0 ? Intl.NumberFormat("en-US", {style: "currency",currency: "USD", minimumFractionDigits: 0}).format(revenue) : "Sin informanción") :  number_of_episodes }</p>
                  </div>
                  <div>
                    <h3>{isMovie ? "Presupuesto" : "Temporadas"}</h3>
                    <p>{isMovie ? (revenue !== 0 ? Intl.NumberFormat("en-US", {style: "currency",currency: "USD", minimumFractionDigits: 0}).format(budget) : "Sin informanción") : number_of_seasons }</p>
                  </div>
                  <div>
                    <h3>Duración</h3>
                    <p>{ isMovie ? runtime : episode_run_time[0] } minutos</p>
                  </div>
                  <div>
                    <h3>Producción</h3>
                    <p>
                      {production_companies.length ? 
                        production_companies.map(company => {
                          return ` ${company.name} |`;
                        })
                        : "Sin información"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      : <></>
  );
}

export default MovieDetailBanner;