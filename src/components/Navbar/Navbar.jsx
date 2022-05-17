import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import SearchBar from "components/Searchbar/SearchBar";
import MenuIco from "./MenuIco/MenuIco";

import logo from "../../assets/images/logo.png";

import styles from "./styles.module.css";

/* //todo isActive class */
function Navbar(){

  const [isOpen, setIsOpen] = useState(false);
  const navMenuRef = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && navMenuRef.current && !navMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });
  
  return (
    <div className={styles.NavBar__bg} ref={navMenuRef}>
      <nav className={styles.NavBar}>
        <Link to="/"><img src={logo} alt="Videoplus logo" className={styles.NavBar__logoImg} width="225" height="70"/></Link>
        <ul className={`${styles.NavBar__navlist} ${isOpen ? styles.NavBar__navlist__open : styles.NavBar__navlist__closed}`}>
          <li><NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Inicio</NavLink></li>
          <li><NavLink to="/peliculas" className={({isActive}) => (isActive ? "active" : "")}>Películas</NavLink></li>
          <li><NavLink to="/series" className={({isActive}) => (isActive ? "active" : "")}>Series</NavLink></li>
          <li><NavLink to="/generos" className={({ isActive }) => isActive ? "active" : ""}>Géneros</NavLink></li>
          <div><SearchBar/></div>
        </ul>
        <div className={styles.NavBar__searchBar}><SearchBar/></div>
        <div onClick={handleClick}> <MenuIco isOpen={isOpen}/></div>
      </nav>
    </div>
  );
}

export default Navbar;