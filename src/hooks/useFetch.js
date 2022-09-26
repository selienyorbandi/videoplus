import { useState, useEffect } from "react";
import usePagination from "./usePagination";

function useFetch(url, insideResults = false) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const { currentPage } = usePagination(totalPages);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let response = await fetch(`${url}&page=${currentPage}`);

        if (response.ok) {
          let result = await response.json();
          setIsLoading(false);
          setData(insideResults ? result.results : result);
          setTotalPages(result.total_pages < 20 ? result.total_pages : 20);
          setError(false);
        } else {
          setIsLoading(false);
          setError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };
    getData(url);
  }, [url, insideResults, currentPage]);

  return { data, isLoading, error, totalPages };
}

export default useFetch;
