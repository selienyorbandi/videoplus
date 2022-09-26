import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import useFetch from "hooks/useFetch";
import { API_DISCOVER_MOVIE, API_DISCOVER_TV } from "config/APIconfig";

import GenreList from "components/GenreList/GenreList";
import MovieList from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";

import styles from "../styles.module.css";
import ownStyles from "./styles.module.css";
import Paginator from "components/Paginator/Paginator";

function Genre(){
  const [genreTypeDisplay, setGenreTypeDisplay] = useState("movie");
  const {id} = useParams("id");
  const fetchType = useLocation().pathname[9];
  const {data: media, isLoading, totalPages } = useFetch(`${fetchType === "m" ? API_DISCOVER_MOVIE : API_DISCOVER_TV}&with_genres=${id}`, true);
  
  return(
    <div className={styles.Container}>
      <h1>GÉNEROS </h1>
      <span className={ownStyles.MediaTypeSelectors}>
        <Link to={"/generos/m/28"}><button className={`${genreTypeDisplay === "movie" ? ownStyles.BtnActive : " "}`} onClick={()=> setGenreTypeDisplay("movie")}>Películas</button></Link>
        <Link to={"/generos/s/10759"}><button className={`${genreTypeDisplay === "tv" ? ownStyles.BtnActive : " "}`} onClick={()=> setGenreTypeDisplay("tv")}>Series </button></Link>
      </span>
      <hr/>
      {isLoading && <Loader/>}
      {
        genreTypeDisplay === "movie"
          ?
          <>
            <div className={ownStyles.Container__main}>
              <GenreList genreType="movie"/>
              <hr/>
              {media && fetchType === "m" ? <MovieList movies={media} med_type="movie"/> : <></>}
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
              <GenreList genreType="tv"/>
              <hr/>
              {media && fetchType === "s" ? <MovieList movies={media} /> : <></>}
            </div>
          </>
          :
          <></>
      }
      <div className={styles.Container__Pagination}>
        <Paginator totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Genre;