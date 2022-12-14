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
      searchMovies(search.trim(), type);
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
        label="Введите название"
        id="fullWidth"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value.replace(/ +/g, ' '))}
        onKeyDown={handleKey}
      />
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="ALL"
            control={<Radio />}
            label="Все"
            onChange={handleFilter}
            checked={type === "ALL"}
          />
          <FormControlLabel
            value="FILM"
            control={<Radio />}
            label="Фильмы"
            onChange={handleFilter}
            checked={type === "FILM"}
          />
          <FormControlLabel
            value="TV_SERIES"
            control={<Radio />}
            label="Сериалы"
            data-type="TV_SERIES"
            onChange={handleFilter}
            checked={type === "TV_SERIES"}
          />
          <FormControlLabel
            value="MINI_SERIES"
            control={<Radio />}
            label="Мини сериалы"
            data-type="MINI_SERIES"
            onChange={handleFilter}
            checked={type === "MINI_SERIES"}
          />
          <FormControlLabel
            value="TV_SHOW"
            control={<Radio />}
            label="Тв шоу"
            data-type="TV_SHOW"
            onChange={handleFilter}
            checked={type === "TV_SHOW"}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Search;
