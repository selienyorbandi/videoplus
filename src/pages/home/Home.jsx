import useFetch from "hooks/useFetch";
import { API_TRENDING } from "config/APIconfig";

import MovieList from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";

import styles from "../styles.module.css";
import Paginator from "components/Paginator/Paginator";

function Home() {
  const { data, isLoading, totalPages } = useFetch(API_TRENDING, true);
  
  return (
    <div className={styles.Container}>
      <h1>LO MÁS POPULAR</h1>
      {isLoading && <Loader />}
      {data && <MovieList movies={data} />}
      <div className={styles.Container__Pagination}>
        <Paginator totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Home;
