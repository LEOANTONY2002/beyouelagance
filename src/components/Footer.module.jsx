import React from "react";
import styles from "./Footer.module.css";
import Title from "../assets/title.png";
import Fb from "../assets/Fb.png";
import Insta from "../assets/Insta.png";
import Whatsapp from "../assets/Whatsapp.png";
import EllipseFooter from "../assets/EllipseFooter.png";
import EllipseFooterM from "../assets/EllipseFooterM.png";
import FooterEllipse2M from "../assets/FooterEllipse2M.png";
import Location from "../assets/Location.png";
import { useWindowWidth } from "@react-hook/window-size";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services } from "../services";

const Footer = () => {
  const width = useWindowWidth();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
    setTimeout(() => {
     const contactSection = document.getElementById("map");
     if (contactSection) {
       contactSection.scrollIntoView({ behavior: "smooth" });
     }
   }, 100);
  } 

  const navigateToService = (id) => {
    navigate("/service");
    setTimeout(() => {
     const contactSection = document.getElementById(id);
     if (contactSection) {
       contactSection.scrollIntoView({ behavior: "smooth" });
     }
   }, 100);
  } 

  return (
    <div className={styles.Footer}>
      {width < 700 && <img src={FooterEllipse2M} alt="" />}
      <div className={styles.f_left}>
        <img src={Title} alt="" />
      </div>
      <div className={styles.f_main}>
        <div className={styles.fm_soc}>
          {width > 700 ? (
            <img src={EllipseFooter} alt="" />
          ) : (
            <img src={EllipseFooterM} alt="" />
          )}
          <div className={styles.f_social}>
            <img
            className={styles.sc}
              style={
                width < 700 ? { marginTop: "80px" } : { marginLeft: "70px" }
              }
              src={Fb}
              alt=""
              onClick={ () =>
                window.open('https://www.facebook.com/beyouelegance.fr/?locale=fr_FR', '_blank')}/>
            <img
            className={styles.sc}
              style={
                width < 700 ? { marginTop: "-40px" } : { marginLeft: "-20px" }
              }
              src={Insta}
              onClick={ () =>
                window.open('https://www.instagram.com/beyouelegance/?hl=en&img_index=1', '_blank')}
              
              alt=""
            />
            <img
            className={styles.sc}
              style={
                width < 700 ? { marginTop: "80px" } : { marginLeft: "70px" }
              }
              src={Whatsapp}
              alt=""
            />
          </div>
        </div>
        <div className={styles.f_links}>
          <div>
            <div className={styles.f_link}>
              <h2>QUICK LINKS</h2>
              <Link href={"/"} onClick={(e)=>{e.preventDefault();navigate('/'); window.scrollTo({top:0,behavior:'smooth'})}} >Home</Link>
              <Link href={"/gallery"} onClick={(e)=>{e.preventDefault();navigate('/gallery');window.scrollTo({top:0,behavior:'smooth'})}}>Gallery</Link>
              <Link href={"/about"} onClick={(e)=>{e.preventDefault();navigate('/about');window.scrollTo({top:0,behavior:'smooth'})}}>About Us</Link>
              <Link href={"/contact"} onClick={(e)=>{e.preventDefault();navigate('/contact');window.scrollTo({top:0,behavior:'smooth'})}}>Contact Us</Link>
            </div>
            <div className={styles.f_link}>
              <h2>OUR SERVICES</h2>
              {services.map(ser =>
                <Link key={ser.service} href={""} onClick={(e) =>{
                    e.preventDefault();
                    navigateToService(ser.service)
                }}  >{ser.service}</Link>
                )}
              
            </div>
            <div className={styles.f_link}>
              <h2>CONTACT</h2>
              <span>+33 6 47 00 49 49</span>
              <h6 style={{ wordWrap: "break-word" }}>
                beyouelegance2017@gmail.com
              </h6>
              <div className={styles.sc} onClick={navigateToContact}>
                <img src={Location} alt="" />
                <p>Store Locator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
