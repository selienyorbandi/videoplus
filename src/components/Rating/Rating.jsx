import styles from "./styles.module.css";

function Rating({score}){

  const calculateRating = (score) => {
    if(score >= 0.1 && score <= 3.9){
      return "Rating--bad";  
    } else if (score >= 4 && score <= 5.9){
      return "Rating--notGood";
    } else if (score >= 6 && score <= 6.9){
      return "Rating--good";
    } else if (score >= 7 && score <= 7.9){
      return "Rating--veryGood";
    } else if (score >= 8 && score <= 10){
      return "Rating--excellent";
    } else {
      return "Rating--null";
    }
  };

  const ratingColor = calculateRating(score);
  return(
    <p className={`${styles.Rating} ${styles[ratingColor]}`}>{`${score.toFixed(1)}`}</p>
  );
}

export default Rating;