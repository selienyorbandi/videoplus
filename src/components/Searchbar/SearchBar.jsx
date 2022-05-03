import Button from "components/Button/Button";

import styles from "./styles.module.css";

/* //todo SEARCH ICO */
function SearchBar() {
  return (
    <form className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Buscar..."
        className={styles.SearchBar__inputField}
      />
      <Button element={<img src="https://i.postimg.cc/cLsvTZCr/search.png" alt="Buscar"/>} right/>
    </form>
  );
}

export default SearchBar;
