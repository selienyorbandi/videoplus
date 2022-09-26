import MovieList from "components/MovieList/MovieList";
import { API_POPULAR_TV_SHOW } from "config/APIconfig";

import styles from "../styles.module.css";
import useFetch from "hooks/useFetch";
import Loader from "components/Loader/Loader";
import Paginator from "components/Paginator/Paginator";

function Series() {
  const { data, isLoading, totalPages } = useFetch(API_POPULAR_TV_SHOW, true);

  return (
    <div className={styles.Container}>
      <h1>SERIES MÁS POPULARES</h1>
      {isLoading && <Loader />}
      {data && <MovieList movies={data} />}
      <div className={styles.Container__Pagination}>
        <Paginator totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Series;
