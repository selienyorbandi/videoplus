import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import searchIco from "../../assets/images/search.png";

import styles from "./styles.module.css";

function SearchBar() {
  const [currentKeyword, setCurrentKeyword] = useState(" ");
  const navigate = useNavigate();

  const handleChange = e => {
    setCurrentKeyword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/busqueda/${currentKeyword}`);
    document.getElementById("search").reset();
  };
  
  return (
    <form className={styles.SearchBar} onSubmit={handleSubmit} id="search">
      <input
        type="text"
        placeholder="Buscar..."
        className={styles.SearchBar__inputField}
        onChange={handleChange}
      />
      <Button element={<img src={searchIco} alt="Buscar" width="23" height="23"/> } right/>
    </form>
  );
}

export default SearchBar;
