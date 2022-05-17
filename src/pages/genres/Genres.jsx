import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import GenreList from "components/GenreList/GenreList";
import MovieList from "components/MovieList/MovieList";

import { API_DISCOVER_MOVIE, API_DISCOVER_TV } from "config/APIconfig";

import styles from "../styles.module.css";
import ownStyles from "./styles.module.css";

function Genre(){
  const [media, setMedia] = useState([]);
  const [genreTypeDisplay, setGenreTypeDisplay] = useState(null);
  const {id} = useParams("id");
  const fetchType = useLocation().pathname[9];

  useEffect(() => {
    fetch(`${fetchType === "m" ? API_DISCOVER_MOVIE : API_DISCOVER_TV}&with_genres=${id}`)
      .then(res => res.json())
      .then(result => setMedia(result.results));
  }, [id, fetchType]);

  return(
    <div className={styles.Container}>
      <span className={ownStyles.MediaTypeSelectors}>
        <h1>GÉNEROS </h1>
        <button onClick={()=> setGenreTypeDisplay("movie")}>Películas {genreTypeDisplay === "movie" ? "◽" : ""}</button>
        <button onClick={()=> setGenreTypeDisplay("tv")}>Series {genreTypeDisplay === "tv" ? "◽" : ""}</button>
      </span>
      {
        genreTypeDisplay === "movie"
          ?
          <>
            <div className={ownStyles.Container__main}>
              <h2>Películas</h2>
              <GenreList genreType="movie"/>
              {media && fetchType === "m" ? <MovieList movies={media}/> : <></>}
            </div>
          </>
          :
          <></>
      }
      {
        genreTypeDisplay === "tv"
          ?
          <>
            <div className={ownStyles.Container__main}>
              <h2>Series y Shows de Televisión</h2>
              <GenreList genreType="tv"/>
              {media && fetchType === "s" ? <MovieList movies={media}/> : <></>}
            </div>
          </>
          :
          <></>
      }
    </div>
  );
}

export default Genre;