import {
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const Search = (props) => {
  const [showSearchCompany, setShowSearchCompany] = useState(false);
  const handleClick = () => {
    setShowSearchCompany((show) => !show);
  };
  return (
    <div className={styles["search-wrap"]}>
      <TextField
        className={styles["search-input"]}
        size="small"
        id="outlined-basic"
        variant="outlined"
        onFocus={handleClick}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
              <InputLabel>
                {showSearchCompany ? "" : "Search Company"}
              </InputLabel>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
