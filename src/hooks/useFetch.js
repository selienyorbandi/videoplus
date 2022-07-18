import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let response = await fetch(url);

        if (response.ok) {
          let result = await response.json();
          setIsLoading(false);
          setData(result.results);
        } else {
          let err = new Error(response.statusText || "Unknown error");
          err.status = response.status || "00";
          throw err;
        }
      } catch (error) {
        setIsLoading(true);
        console.log(error);
      }
    };
    getData(url);
  }, [url]);

  return { data, isLoading };
}
export default useFetch;
