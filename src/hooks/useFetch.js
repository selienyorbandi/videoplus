import { useState, useEffect } from "react";

function useFetch(url, insideResults = false) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let response = await fetch(url);

        if (response.ok) {
          let result = await response.json();
          setIsLoading(false);
          setData(insideResults ? result.results : result);
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
  }, [url, insideResults]);

  return { data, isLoading, error };
}
export default useFetch;
