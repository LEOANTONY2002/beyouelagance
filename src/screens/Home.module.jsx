import * as React from "react";
import Nav from "../components/Nav.module";
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
import Experience from "../assets/Experience.png";
import { services } from "../content";
import Footer from "../components/Footer.module";
import { useWindowWidth } from "@react-hook/window-size";

const Home = () => {
  const [serviceIndex, setServiceIndex] = React.useState(0);
  const width = useWindowWidth();
  console.log(styles);

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
              {/* <span className={ruthie.className}>we make you feel</span> */}
              <span>we make you feel</span>
              <h3>ELAGANT</h3>
            </span>
            <h1>Fall in Love with Your Reflection</h1>
            <button>Book Now</button>
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
            Your <span>All-in-One</span> Sanctuary for Beauty and Serenity.
          </h1>
          <div className={styles.ht_cards}>
            <div>
              <img src={Bride} alt="" />
              <span>Bridal</span>
            </div>
            <div>
              <img src={Face} alt="" />
              <span>Face</span>
            </div>
            <div>
              <img src={Hair} alt="" />
              <span>Hair</span>
            </div>
            <div>
              <img src={Nail} alt="" />
              <span>Nail</span>
            </div>
            <div>
              <img src={Spa} alt="" />
              <span>Spa</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.h_service}>
        <div className={styles.hs_title}>
          <span>Beauty in Full Bloom</span>
          <h1>OUR SERVICES</h1>
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
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.h_exp}>
        <div className={styles.he_content}>
          <h1>
            <span>20+ </span>years of experience
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in{" "}
          </p>
          <button>About Us</button>
        </div>
        <img src={Experience} alt="" />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
