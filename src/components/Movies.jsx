import React from "react";
import styles from "../styles/movies.module.css";
import Movie from "./Movie";

export const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <div className={styles.movies}>
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.kinopoiskId} {...movie} />;
        })
      ) : (
        <h4>Ничего не найдено</h4>
      )}
    </div>
  );
};
