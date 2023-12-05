import React from "react";
import CardItem from "../card-item";
import styles from "./styles.module.scss";
import dropBoxLogo from '../../assets/images/dropbox-img.svg.png';
import mediumCorporationLogo from '../../assets/images/mediumcorp-img.jpeg';
import slackLogo from '../../assets/images/slack-img.png';
import lyftLogo from '../../assets/images/lyft-logo.png';
import githubLogo from '../../assets/images/github-img.png';
import squarespaceLogo from '../../assets/images/squarespace-img.png'

const CardsWrap = () => {
  return (
    <div className={styles["card-wrap"]}>
      <CardItem
        image={dropBoxLogo}
        title="DropBox"
        description="Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud."
        downloads="598"
      />
      <CardItem
        image={mediumCorporationLogo}
        width='60px'
        title="Medium Corporation"
        description="Medium is an online publishing platform developed by Evan Williams, and launched in August 2022"
        downloads="625"
      />
      <CardItem
        image={slackLogo}
        title="Slack"
        description="Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield"
        downloads="857"
      />
       <CardItem
        image={lyftLogo}
        title="Lyft"
        description="Lyft is an on-demand transporation company based in San Francisco, California"
        downloads="406"
      />
       <CardItem
        image={githubLogo}
        width='60px'
        title="GitHub"
        description="GitHub is a web-based hosting service for version control of code using Git"
        downloads="835"
      />
      <CardItem
        image={squarespaceLogo}
        title="Squarespace"
        description="Squarespace provides software as a service for website building and hosting. Headquartered in NYC"
        downloads="835"
      />
    </div>
  );
};

export default CardsWrap;
