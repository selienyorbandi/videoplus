import { useLocation, useParams } from "react-router-dom";

import { API_URL, LANGUAGE } from "config/APIconfig";

import MovieDetailBanner from "components/MovieDetailBanner/MovieDetailBanner";
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";

import styles from "./styles.module.css";
import useFetch from "hooks/useFetch";

function MovieDetail() {
  const { id } = useParams("id");
  const fetchType = useLocation().pathname[1];

  const movieFetch = `${API_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
  const tvShowFetch = `${API_URL}tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
  const movieRecommendations = `${API_URL}movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
  const tvShowRecommendations = `${API_URL}tv/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
  const videoFetch = `${API_URL}${
    fetchType === "m" ? "movie" : "tv"
  }/${id}/videos?api_key=${
    process.env.REACT_APP_API_KEY
  }&language=${LANGUAGE}&official`;

  const {
    data: movie,
    isLoading: isLoadingMovie,
    errorMovie,
  } = useFetch(fetchType === "m" ? movieFetch : tvShowFetch, false);
  const {
    data: recommendations,
    isLoading: isLoadingRecomm,
    errorRecomm,
  } = useFetch(
    fetchType === "m" ? movieRecommendations : tvShowRecommendations,
    true
  );
  const {
    data: video,
    isLoading: isLoadingVideo,
    errorVideo,
  } = useFetch(videoFetch, true);
  
  return (
    <div className={styles.Container}>
      {!(isLoadingMovie || isLoadingRecomm || isLoadingVideo) ? (
        <>
          {movie && !errorMovie && <MovieDetailBanner movieEl={movie} />}
          {video && video.length && !errorVideo && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube-nocookie.com/embed/${video[0].key}`}
              title={video[0].name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {recommendations && !errorRecomm && recommendations.length && (
            <>
              <div className={styles.MovieDetail__recommendations}>
                <h1>Recomendaciones</h1>
                <MovieList
                  movies={recommendations}
                  med_type={fetchType === "m" ? "movie" : "tv"}
                />
              </div>
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
      {!movie && errorMovie  && (
        <div className={styles.Error}>
          <h1>Lo sentimos :( </h1>
          <p>
            Hubo un problema en los servidores, intentalo nuevamente más tarde
          </p>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
