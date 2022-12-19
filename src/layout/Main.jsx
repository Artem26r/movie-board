import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Movies } from "../components/Movies";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "ALL") => {
    setLoading(true);
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/?keyword=${str}&order=RATING&${
        type !== "ALL" ? `type=${type}` : ""
      }`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/?keyword=наруто&order=RATING",
      {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{pt: '5rem'}}>
          <Search searchMovies={searchMovies} />
        {loading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Movies movies={movies} />
        )}
      </Container>
    </React.Fragment>
  );
};

export default Main;
