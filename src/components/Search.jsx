import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("ALL");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.value);
    searchMovies(search, e.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        label="fullWidth"
        id="fullWidth"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
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
            onChange={handleFilter}
            checked={type === "TV_SERIES"}
          />
          <FormControlLabel
            value="FILM"
            control={<Radio />}
            label="Фильмы"
            onChange={handleFilter}
            checked={type === "FILM"}
          />
          <FormControlLabel
            value="ALL"
            control={<Radio />}
            label="Все"
            onChange={handleFilter}
            checked={type === "ALL"}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Search;
