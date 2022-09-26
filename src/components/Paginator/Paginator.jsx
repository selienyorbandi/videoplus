import usePagination from "hooks/usePagination";

import skipLeft from "../../assets/svg/skip-left.svg";
import skipRight from "../../assets/svg/skip-right.svg";
import arrowLeft from "../../assets/svg/left-arrow.svg";
import arrowRight from "../../assets/svg/right-arrow.svg";

import styles from "./styles.module.css";

function Paginator({ totalPages }) {
  const { currentPage, prevPage, nextPage, goToPage, goToFirst, goToLast } =
    usePagination(totalPages);

  const pages = [];
  for (
    let i = parseInt(currentPage);
    i < parseInt(currentPage) + 3 && i <= 20;
    i++
  ) {
    pages.push(i);
  }

  return (
    <ul className={styles.Paginator}>
      <li onClick={goToFirst} key="firstpage">
        <img src={skipLeft} alt="Ir a la primera página" />
      </li>
      <li onClick={prevPage} key="prevpage">
        <img src={arrowLeft} alt="Ir a la página anterior" />
      </li>
      {pages.map((i) => {
        return (
          <li
            className={
              parseInt(currentPage) === i
                ? styles.Paginator__Active
                : styles.Paginator__Li
            }
            key={`page=${i}`}
            onClick={() => goToPage(i)}
          >
            {i}
          </li>
        );
      })}
      <li onClick={nextPage} key="nextpage">
        <img src={arrowRight} alt="Ir a la página siguiente" />
      </li>
      <li onClick={goToLast} key="lastpage">
        <img src={skipRight} alt="Ir a la última página" />
      </li>
    </ul>
  );
}

export default Paginator;
