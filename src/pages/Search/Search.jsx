import { useParams } from "react-router-dom";
import useFetch from "hooks/useFetch";
import { API_SEARCH } from "config/APIconfig";

import MovieList from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";

import styles from "../styles.module.css";

function Search() {
  const { query } = useParams("query");
  const { data, isLoading } = useFetch(`${API_SEARCH}${query}`, true);
  
  return(
    <div className={styles.Container}>
      <h1>{query.toLocaleUpperCase()}</h1>
      {isLoading && <Loader/>}
      {data && <MovieList movies={data.filter(i => i.media_type !== "person")}/>}
      {data && !data.length && <p>No se han encontrado resultados</p>}
    </div>
  );
}

export default Search;