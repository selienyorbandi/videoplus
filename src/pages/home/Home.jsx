import MovieList from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { API_TRENDING } from "config/APIconfig";

import styles from "../styles.module.css";
import Loader from "components/Loader/Loader";

function Home() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(API_TRENDING)
      .then((res) => res.json())
      .then((trendingMovie) => {
        setTrending(trendingMovie.results);
      })
      .catch(err => console.log(err))
      .finally(()=> setIsLoading(false));
  }, []);

  return (
    <div className={styles.Container}>
      <h2>LO MÁS POPULAR</h2>
      {isLoading ? <Loader/> : <MovieList movies={trending}/>}
    </div>
  );
}

export default Home;
