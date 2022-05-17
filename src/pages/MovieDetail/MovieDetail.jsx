import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { API_URL, LANGUAGE } from "config/APIconfig";

import MovieDetailBanner from "components/MovieDetailBanner/MovieDetailBanner";
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";

import styles from "./styles.module.css";

function MovieDetail() {
  const [movie, setMovie] = useState({});
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams("id");

  const movieFetch = `${API_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
  const tvShowFetch = `${API_URL}tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;

  const movieRecommendations = `${API_URL}movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
  const tvShowRecommendations = `${API_URL}tv/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;

  const [videos, setVideos] = useState(null);

  const fetchType = useLocation().pathname[1];

  useEffect(() => {
    setIsLoading(true);
    fetch(fetchType === "m" ? movieFetch : tvShowFetch)
      .then((res) => res.json())
      .then((result) => {
        setMovie(result);
      })
      .catch(err => console.log(err));
      
    fetch(fetchType === "m" ? movieRecommendations : tvShowRecommendations)
      .then(res => res.json())
      .then(result => {
        let recomm = [];
        for (let i = 0; i < 5; i++) {
          if (i < result.results.length) {
            recomm.push(result.results[i]);
          }
        }
        setRecommendations(recomm.length === 5 ? recomm : []); 
      })
      .finally(()=> setIsLoading(false));
    fetch(`${API_URL}${fetchType === "m" ? "movie" : "tv"}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}&official`)
      .then(res => res.json())
      .then(result => setVideos(result.results[0]));
  }, [fetchType, movieFetch, movieRecommendations, tvShowFetch, tvShowRecommendations,id]);

  return (
    <div className={styles.Container}>
      {isLoading ? <Loader/> : 
        <>
          <MovieDetailBanner movieEl={movie}/>
          {videos &&<iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${videos.key}`} title={videos.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
          <div className={styles.MovieDetail__recommendations}>
            {recommendations.length ? <h1>Recomendaciones</h1> : <></>}
            <MovieList movies={recommendations} med_type={fetchType === "m" ? "movie" : "tv"}/>
          </div>
        </> }
    </div>
  );
}

export default MovieDetail;