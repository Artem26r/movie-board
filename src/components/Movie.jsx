import * as React from "react";
import styles from "../styles/movie.module.css";

export default function Movie(props) {
  const { nameRu, year, kinopoiskId, posterUrlPreview, type } = props;

  return (
    <div className={styles.card}>
      <img src={posterUrlPreview} alt={nameRu} />
      <div className={styles.info}>
        <div className={styles.name_movie}>{nameRu}</div>
        <div>{year}</div>
        {/* <div>{kinopoiskId}</div> */}
        <div>{type}</div>
      </div>
    </div>
  );
}
