import React from "react";
import styles from "./About.module.css";
import { useWindowWidth } from "@react-hook/window-size";
import hairM from "../assets/HairM.png";
import AboutBanner from "../assets/About.png";
import AboutM from "../assets/AboutM.png";

const About = () => {
  const width = useWindowWidth();

  return (
    <div className={styles.About}>
      <div className={styles.a_banner}>
        {width > 600 ? (
          <div className={styles.ab_left}>
            <img src={hairM} alt="" />
            <div></div>
          </div>
        ) : (
          <img src={AboutM} alt="" />
        )}
        <div className={styles.ab_title}>
          <div>
            <span>Meet our</span>
            <h1>Team.</h1>
            <p>Beauty refined, confidence defined</p>
          </div>
        </div>
        {width > 600 && (
          <div className={styles.ab_right}>
            <img src={AboutBanner} alt="" />
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
