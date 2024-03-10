import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { useWindowWidth } from "@react-hook/window-size";
import hairM from "../assets/HairM.png";
import AboutBanner from "../assets/About.png";
import Video from "../assets/Video.mp4";
import Poster from "../assets/Poster.png";
import AboutM from "../assets/AboutM.png";
import Play from "../assets/Play.png";
import ExperienceAbout from "../assets/ExperienceAbout.png";

const About = () => {
  const width = useWindowWidth();
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef();
  const control = useRef();

  useEffect(() => {
    if (isPlaying) {
      play();
    }
  }, [isPlaying]);

  const play = () => {
    control.current.attributes.controls = true;
    video.current.play();
    control.current.style.display = "none";
  };

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
      <div className={styles.a_vid}>
        <div ref={control}>
          <div onClick={() => setIsPlaying(true)} className={styles.av_play}>
            <img src={Play} alt="" />
          </div>
        </div>
        <video ref={video} src={Video} poster={Poster}></video>
      </div>
      <div className={styles.a_exp}>
        <div>
          <h1>
            <span>Elegance</span> in Excellence
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in{" "}
          </p>
        </div>
        <img src={ExperienceAbout} alt="" />
      </div>
      <div className={styles.a_count}>
        <div>
          <h1>500+</h1>
          <span>happy clients</span>
        </div>
        <p></p>
        <div>
          <h1>10+</h1>
          <span>creative experts</span>
        </div>
        <p></p>
        <div>
          <h1>20+</h1>
          <span>years experience</span>
        </div>
      </div>
    </div>
  );
};

export default About;
