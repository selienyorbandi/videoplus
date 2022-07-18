import styles from "../styles.module.css";

function Notfound(){
  return(
    <div className={styles.Container}>
      <h1>Error 404</h1>
      <p>La página a la que ha ingresado no existe</p> 
    </div>   
  );
}

export default Notfound;