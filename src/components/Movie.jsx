import * as React from "react";
import styles from "../styles/movie.module.css";
import { uid } from "react-uid";

export default function Movie(props) {
  const {
    nameRu,
    year,
    posterUrlPreview,
    ratingKinopoisk = "N/A",
    ratingImdb = "N/A",
    genres,
    countries,
  } = props;

  return (
    <div className={styles.card}>
      <img src={posterUrlPreview} alt={nameRu} />
      <div className={styles.info}>
        <div>
          <div className={styles.name_movie}>{nameRu}</div>
          <div>{year} год</div>
          <div className={styles.country}>
            {countries.map((el) => {
              return <span key={uid(el)}>{el.country}</span>;
            })}
          </div>
        </div>
        <div>
          <div className={styles.rating}>
            IMDB - <span>{ratingImdb}</span> / Кинопоиск -{" "}
            <span>{ratingKinopoisk}</span>
          </div>
          <div className={styles.genre}>
            {genres.map((el) => {
              return <span key={uid(el)}>{el.genre}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
