import React from "react";
import styles from "./Service.module.css";
import ServiceBanner from "../assets/Service.png";

const Service = () => {
  return (
    <div className={styles.Service}>
      <div
        style={{ backgroundImage: `url(${ServiceBanner})` }}
        className={styles.s_banner}
      >
        <p></p>
        <div className={styles.sb_title}>
          <div>
            <h2>Elagant</h2>
            <h1>Service.</h1>
            <span>Live your best life</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
