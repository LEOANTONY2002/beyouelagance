import React from "react";
import styles from "./Gallery.module.css";
import GalleryBanner from "../assets/Gallery.png";
import { useWindowWidth } from "@react-hook/window-size";

const Gallery = () => {
  const width = useWindowWidth();

  return (
    <>
      <div className={styles.Gallery}>
        {width > 700 ? (
          <div className={styles.g_banner}>
            <div className={styles.gb_title}>
              <div>
                <span>Beauty</span>
                <p>Album.</p>
              </div>
            </div>
            <div className={styles.gb_img}>
              <img src={GalleryBanner} alt="" />
              <p></p>
              <span>Elegance in Excellence</span>
            </div>
            <div className={styles.gb_grad}></div>
          </div>
        ) : (
          <div className={styles.mg_banner}>
            <div className={styles.mgb_grad}></div>
            <div className={styles.mgb_img}>
              <span>Elegance in Excellence</span>
              <p></p>
              <img src={GalleryBanner} alt="" />
            </div>
            <div className={styles.mgb_title}>
              <div>
                <span>Beauty</span>
                <p>Album.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
