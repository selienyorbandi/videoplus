import styles from "./styles.module.css";

function Button({element, size, onClick, right}) {
  const btnSize = "Button"+size;
  return(
    <button className={`${styles.Button} ${styles[btnSize]} ${right && styles.Button__Elem_rg}`} onClick={onClick}>
      <span className={styles.Button__Elem}>{element}</span>
    </button>
  );
}

export default Button;