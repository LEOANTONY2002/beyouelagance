import * as React from "react";
import styles from "./Home.module.css";
import EllipseHome from "../assets/EllipseHome.png";
import EllipseHomeM from "../assets/EllipseHomeM.png";
import Title from "../assets/title.png";
import BannerImg from "../assets/BannerImg.png";
import Types from "../assets/Types.png";
import Bride from "../assets/Bride.png";
import Face from "../assets/Face.png";
import Hair from "../assets/Hair.png";
import Nail from "../assets/Nail.png";
import Spa from "../assets/Spa.png";
import BrideM from "../assets/BrideM.png";
import FaceM from "../assets/FaceM.png";
import HairM from "../assets/HairM.png";
import NailM from "../assets/NailM.png";
import SpaM from "../assets/SpaM.png";
import Experience from "../assets/Experience.png";
import { useWindowWidth } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [serviceIndex, setServiceIndex] = React.useState(0);
  const width = useWindowWidth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
      title: t("BRIDAL_CARE"),
      photo: BrideM,
      content: t("BRIDAL_CARE_DESC"),
    },
    {
      title: t("FACE_CARE"),
      photo: FaceM,
      content: t("FACE_CARE_DESC"),
    },
    {
      title: t("HAIR_CARE"),
      photo: HairM,
      content: t("HAIR_CARE_DESC"),
    },
    {
      title: t("NAIL_CARE"),
      photo: NailM,
      content: t("NAIL_CARE_DESC"),
    },
    {
      title: t("SPA_CARE"),
      photo: SpaM,
      content: t("SPA_CARE_DESC"),
    },
  ];

  return (
    <div className={styles.Home}>
      <div className={styles.h_banner}>
        <div className={styles.hb_left}>
          {width <= 700 ? (
            <img className={styles.hb_ellipse} src={EllipseHomeM} alt="" />
          ) : (
            <img className={styles.hb_ellipse} src={EllipseHome} alt="" />
          )}
          <img className={styles.hb_img} src={BannerImg} alt="" />
          <div>
            <span>
              <span>{t("WE")}</span>
              <h3>{t("ELEGANT").toUpperCase()}</h3>
            </span>
            <h1>{t("FALL")}</h1>
            <button onClick={() => navigate("/contact")}>
              {t("CONTACT_US")}
            </button>
          </div>
        </div>
        <div className={styles.hb_right}>
          <img src={Title} alt="" />
        </div>
      </div>
      <section className={styles.h_types}>
        <img src={Types} alt="" />
        <div>
          <h1>
            {t("YOUR")} <span>{t("ONE_PLACE")}</span>
          </h1>
          <div className={styles.ht_cards}>
            <div
              style={{ backgroundImage: `url(${BrideM})` }}
              className={styles.ht_card}
            >
              <div></div>
              <span>{t("BRIDAL")}</span>
              <img src={Bride} alt="" />
            </div>
            <div
              style={{ backgroundImage: `url(${FaceM})` }}
              className={styles.ht_card}
            >
              <div></div>
              <span>{t("FACE")}</span>
              <img src={Face} alt="" />
            </div>
            <div
              style={{ backgroundImage: `url(${HairM})` }}
              className={styles.ht_card}
            >
              <div></div>
              <span>{t("HAIR")}</span>
              <img src={Hair} alt="" />
            </div>
            <div
              style={{ backgroundImage: `url(${NailM})` }}
              className={styles.ht_card}
            >
              <div></div>
              <span>{t("NAIL")}</span>
              <img src={Nail} alt="" />
            </div>
            <div
              style={{ backgroundImage: `url(${SpaM})` }}
              className={styles.ht_card}
            >
              <div></div>
              <span>{t("SPA")}</span>
              <img src={Spa} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.h_service}>
        <div className={styles.hs_title}>
          <span>{t("BEAUTY_BLOOM")}</span>
          <h1>{t("OUR_SERVICES")}</h1>
        </div>
        <div className={styles.hs_main}>
          <div className={styles.hs_nav}>
            <div></div>
            <section>
              {services.map((service, index) => (
                <img
                  onClick={() => setServiceIndex(index)}
                  src={service.photo}
                  style={
                    index !== serviceIndex && width > 700
                      ? { width: "60px", height: "60px" }
                      : index === serviceIndex && width > 700
                      ? { width: "90px", height: "90px" }
                      : index === serviceIndex && width <= 700
                      ? { width: "60px", height: "60px" }
                      : { width: "40px", height: "40px" }
                  }
                  alt=""
                />
              ))}
            </section>
          </div>
          <div className={styles.hs_content}>
            <div className={styles.hsc_img}>
              <div>
                <img src={services[serviceIndex].photo} alt="" />
              </div>
            </div>
            <p></p>
            <div className={styles.hsc_desc}>
              <h1>{services[serviceIndex].title}</h1>
              <p>{services[serviceIndex].content}</p>
              <button>{t("BOOK_NOW")}</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.h_exp}>
        <div className={styles.he_content}>
          <h1>
            <span>{t("20+")}</span>
            {t("EXP")}
          </h1>
          <p>{t("EXP_DESC")}</p>
          <button>{t("ABOUT_US")}</button>
        </div>
        <img src={Experience} alt="" />
      </section>
    </div>
  );
};

export default Home;
