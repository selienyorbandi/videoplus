import useFetch from "hooks/useFetch";
import { API_TRENDING } from "config/APIconfig";

import MovieList from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";

import styles from "../styles.module.css";

function Home() {
  const { data, isLoading } = useFetch(API_TRENDING, true);
  
  return (
    <div className={styles.Container}>
      <h1>LO MÁS POPULAR</h1>
      {isLoading && <Loader />}
      {data && <MovieList movies={data} />}
    </div>
  );
}

export default Home;
