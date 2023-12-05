import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import AddIcon from "@mui/icons-material/Add";

const Header = (props) => {
  return (
    <div className={styles['header']}>
      <Typography className={styles["title"]} variant="h5">
        Companies
      </Typography>
      <Button
        className={styles['button']}
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </div>
  );
};

export default Header;
