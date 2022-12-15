import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

class Search extends React.Component {
  state = {
    search: "",
    type: "ALL",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.value }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <TextField
          fullWidth
          label="fullWidth"
          id="fullWidth"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="TV_SERIES"
              control={<Radio />}
              label="Сериалы"
              data-type="TV_SERIES"
              onChange={this.handleFilter}
              checked={this.state.type === "TV_SERIES"}
            />
            <FormControlLabel
              value="FILM"
              control={<Radio />}
              label="Фильмы"
              onChange={this.handleFilter}
              checked={this.state.type === "FILM"}
            />
            <FormControlLabel
              value="ALL"
              control={<Radio />}
              label="Все"
              onChange={this.handleFilter}
              checked={this.state.type === "ALL"}
            />
            {/* <FormControlLabel value="other" control={<Radio />} label="Other" datatype="FILM"/> */}
          </RadioGroup>
        </FormControl>
      </>
    );
  }
}

export default Search;
