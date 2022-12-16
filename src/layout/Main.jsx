import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import { Movies } from "../components/Movies";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
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
      .then((data) => this.setState({ movies: data.items, loading: false }))
      .catch((err) => console.log(err));
  }

  searchMovies = (str, type = "ALL") => {
    this.setState({ loading: true });
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
      .then((data) => this.setState({ movies: data.items, loading: false }))
      .catch((err) => console.log(err));
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Search searchMovies={this.searchMovies} />
          {loading ? (
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          ) : (
            <Movies movies={movies} />
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default Main;
