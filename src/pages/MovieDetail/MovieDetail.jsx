import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { API_URL, LANGUAGE } from "config/APIconfig";

import MovieDetailBanner from "components/MovieDetailBanner/MovieDetailBanner";
import Loader from "components/Loader/Loader";

import styles from "../styles.module.css";

function MovieDetail() {
  const [movie, setMovie] = useState({}); 
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams("id");

  const movieFetch = `${API_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
  const tvShowFetch = `${API_URL}tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
  const fetchType = useLocation().pathname[1];

  useEffect(() => {
    setIsLoading(true);
    fetch(fetchType === "m" ? movieFetch : tvShowFetch)
      .then((res) => res.json())
      .then((result) => {
        setMovie(result);
      })
      .catch(err => console.log(err))
      .finally(()=> setIsLoading(false));
  }, [fetchType, movieFetch, tvShowFetch]);

  return (
    <div>
      {isLoading ? <Loader/> : 
        <>
          <MovieDetailBanner movieEl={movie}/>
        </> }
    </div>
  );
}

export default MovieDetail;