import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function usePagination(totalPages) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = totalPages < 20 ? totalPages : 20;

  const getPageFromQuery = () => {
    if (searchParams.get("page")) {
      return parseInt(searchParams.get("page"));
    } else {
      return 1;
    }
  };

  const prevPage = () => {
    if (parseInt(currentPage) > 1) {
      setCurrentPage(currentPage - 1);
      setSearchParams({ page: (currentPage - 1).toString() });
    }
  };

  const nextPage = () => {
    if (parseInt(currentPage) < 19) {
      setCurrentPage(currentPage + 1);
      setSearchParams({ page: (currentPage + 1).toString() });
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
  };

  const goToFirst = () => {
    setCurrentPage(1);
    setSearchParams({ page: "1" });
  };

  const goToLast = () => {
    setCurrentPage(maxPages);
    setSearchParams({ page: maxPages.toString() });
  };

  useEffect(() => {
    setCurrentPage(getPageFromQuery());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return {
    currentPage,
    getPageFromQuery,
    prevPage,
    nextPage,
    goToPage,
    goToFirst,
    goToLast,
  };
}
export default usePagination;
