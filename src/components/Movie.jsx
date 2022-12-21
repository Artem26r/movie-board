import * as React from "react";
import styles from "../styles/movie.module.css";
import { uid } from "react-uid";

export default function Movie(props) {
  const {
    nameRu,
    nameOriginal,
    year,
    type,
    posterUrlPreview,
    ratingKinopoisk,
    ratingImdb,
    genres,
    countries,
  } = getCustomer() || props;

  function getCustomer() {
    return undefined
  }
  console.log(nameRu);
  const genreTranslation = (type) => {
    switch (type) {
      case 'FILM':
        return 'фильм'
        break;
      case 'TV_SERIES':
        return 'сериал'
        break;
      case 'MINI_SERIES':
        return 'мини сериал'
        break;
      case 'TV_SHOW':
        return 'шоу'
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.card}>
      <img src={posterUrlPreview} alt={nameRu === null ? nameOriginal : nameRu} />
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.name_movie}>{nameRu === null ? nameOriginal : nameRu}</div>
          <div>{year} год - <span>{genreTranslation(type)}</span></div>
          <div className={styles.country}>
            {countries.map((el) => {
              return <span key={uid(el)}>{el.country}</span>;
            })}
          </div>
        </div>
        <div>
          <div className={styles.rating}>
            IMDB - <span>{ratingImdb === null ? 'N/A' : ratingImdb}</span> / Кинопоиск -{" "}
            <span>{ratingKinopoisk === null ? 'N/A' : ratingKinopoisk}</span>
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
