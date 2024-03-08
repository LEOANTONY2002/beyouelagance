import React from "react";
import styles from "./Footer.module.css";
import Title from "../assets/title.png";
import Fb from "../assets/Fb.png";
import Insta from "../assets/Insta.png";
import Whatsapp from "../assets/Whatsapp.png";
import FooterEllipse from "../assets/FooterEllipse.png";
import FooterEllipseM from "../assets/FooterEllipseM.png";
import FooterEllipse2M from "../assets/FooterEllipse2M.png";
import { useWindowWidth } from "@react-hook/window-size";
import { Link } from "react-router-dom";

const Footer = () => {
  const width = useWindowWidth();

  return (
    <div className={styles.Footer}>
      {width < 700 && <img src={FooterEllipse2M} alt="" />}
      <div className={styles.f_left}>
        <img src={Title} alt="" />
      </div>
      <div className={styles.f_main}>
        {width > 700 ? (
          <img src={FooterEllipse} alt="" />
        ) : (
          <img src={FooterEllipseM} alt="" />
        )}
        <div className={styles.f_social}>
          <img
            style={width < 700 ? { marginTop: "80px" } : { marginLeft: "70px" }}
            src={Fb}
            alt=""
          />
          <img
            style={
              width < 700 ? { marginTop: "-40px" } : { marginLeft: "-20px" }
            }
            src={Insta}
            alt=""
          />
          <img
            style={width < 700 ? { marginTop: "80px" } : { marginLeft: "70px" }}
            src={Whatsapp}
            alt=""
          />
        </div>
        <div className={styles.f_links}>
          <div className={styles.f_link}>
            <h2>COMPANY</h2>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Gallery</Link>
            <Link href={"/"}>About Us</Link>
          </div>
          <div className={styles.f_link}>
            <h2>CONTACT</h2>
            <span>+33 6 47 00 49 49</span>
            <h6>beyouelegance2017@gmail.com</h6>
            <p>29 Avenue du Centre, Montigny-le-Bretonneux, France</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
