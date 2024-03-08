import React from "react";
import styles from "./Gallery.module.css";
import GalleryBanner from "../assets/Gallery.png";

const Gallery = () => {
  return (
    <>
      <div className={styles.Gallery}>
        <div className={styles.g_banner}>
          <div className={styles.gb_title}>
            <span>Beauty</span>
            <p>Album.</p>
          </div>
          <div className={styles.gb_img}>
            <img src={GalleryBanner} alt="" />
            <p></p>
            {/* <span className={ruthie.className}>Elegance in Excellence</span> */}
            <span>Elegance in Excellence</span>
          </div>
          <div className={styles.gb_grad}></div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
