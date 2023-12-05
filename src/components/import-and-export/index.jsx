import { Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

const ImportAndExport = (props) => {
  return (
    <div className={styles['import-export-wrap']}>
      <div className={styles["import-wrap"]}>
        <i className={`${styles['icon']} ${styles['import-icon']}`}></i>
        <Typography className={styles["import-text"]} variant="h6">
          Import
        </Typography>
      </div>
      <div className={styles["import-wrap"]}>
        <i className={`${styles['icon']} ${styles['export-icon']}`}></i>
        <Typography className={styles["import-text"]} variant="h6">
          Export
        </Typography>
      </div>
    </div>
  );
};

export default ImportAndExport;
