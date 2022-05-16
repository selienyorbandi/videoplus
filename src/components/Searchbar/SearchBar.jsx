import Button from "components/Button/Button";

import searchIco from "../../assets/images/search.png";
import styles from "./styles.module.css";

function SearchBar() {
  return (
    <form className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Buscar..."
        className={styles.SearchBar__inputField}
      />
      <Button element={<img src={searchIco} alt="Buscar" width="23" height="23"/> } right/>
    </form>
  );
}

export default SearchBar;
