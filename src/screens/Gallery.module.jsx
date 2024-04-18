import React, { useState } from "react";
import styles from "./Gallery.module.css";
import GalleryBanner from "../assets/Gallery.png";
import { useWindowWidth } from "@react-hook/window-size";
import { gallery } from "../content";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const width = useWindowWidth();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.Gallery}>
        {width > 700 ? (
          <div className={styles.g_banner}>
            <div className={styles.gb_title}>
              <div>
                <span>{t("BEAUTY")}</span>
                <p>{t("ALBUM")}</p>
              </div>
            </div>
            <div className={styles.gb_img}>
              <img src={GalleryBanner} alt="" />
              <p></p>
              <span>{t("EXC")}</span>
            </div>
            <div className={styles.gb_grad}></div>
          </div>
        ) : (
          <div className={styles.mg_banner}>
            <div className={styles.mgb_grad}></div>
            <div className={styles.mgb_img}>
              <span>{t("EXC")}</span>
              <p></p>
              <img src={GalleryBanner} alt="" />
            </div>
            <div className={styles.mgb_title}>
              <div>
                <span>{t("BEAUTY")}</span>
                <p>{t("ALBUM")}</p>
              </div>
            </div>
          </div>
        )}
        <section className={styles.g_album}>
          <div className={styles.g_nav}>
            {gallery.map((gal, index) => (
              <span
                onClick={() => setGalleryIndex(index)}
                className={index === galleryIndex ? styles.gna_title : ""}
              >
                {gal.name}
              </span>
            ))}
          </div>
          <div className={styles.g_photos}>
            {gallery[galleryIndex].photos.map((photo) => (
              <img src={photo} alt="" />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
