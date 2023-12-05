import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import DownloadIcon from "@mui/icons-material/Download";

const CardItem = (props) => {
    const { 
      image,
      title,
      description,
      downloads,
      width,
     } = props;

  return (
    <div>
      <Card className={styles["card-wrap"]}>
        <img
          className={styles["card-wrap__img"]}
          src={image}
          alt=""
          width={width}
        />
        <CardContent className={styles['card-content']}>
          <Typography className={styles['card-wrap__title']} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
        <div className={styles["actions-wrap"]}>
          <div className={styles["watch-wrap"]}>
            <WatchLaterIcon className={styles["icon"]} />
            <Typography className={styles["title"]} variant="h6">
              Updated 2hr ago
            </Typography>
          </div>
          <div className={styles["watch-wrap1"]}>
            <DownloadIcon className={styles["icon"]} />
            <Typography className={styles["title"]} variant="h6">
              {downloads} Downloads
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardItem;
