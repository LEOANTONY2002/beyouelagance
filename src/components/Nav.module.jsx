import React, { useState } from "react";
import styles from "./Nav.module.css";
import Logo from "../assets/logo.png";
import Menu from "../assets/Menu.png";
import Close from "../assets/Close.png";
import { useWindowWidth } from "@react-hook/window-size";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const router = useLocation();
  const path = router.pathname;
  const style = { color: "#FF00E6", fontWeight: "bold" };
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);

  return (
    <>
      {width > 700 ? (
        <div className={styles.Nav}>
          <img src={Logo} alt="" />
          <div>
            <Link to={"/"} style={path === "/" ? style : {}}>
              Home
            </Link>
            <Link to={"/gallery"} style={path === "/gallery" ? style : {}}>
              Gallery
            </Link>
            <Link to={"/about"} style={path === "/about" ? style : {}}>
              About
            </Link>
            <Link to={"/contact"} style={path === "/contact" ? style : {}}>
              Contact
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.Nav}>
            <img src={Logo} alt="" />
            <img onClick={() => setOpen(true)} src={Menu} />
          </div>
          {open && (
            <div className={styles.mNav}>
              <div id={styles.n_tab0} className={styles.n_tab}>
                <img onClick={() => setOpen(false)} src={Close} />
              </div>
              <div>
                <div id={styles.n_tab1} className={styles.n_tab}>
                  <Link
                    to={"/"}
                    onClick={() => setOpen(false)}
                    style={path === "/" ? style : {}}
                  >
                    Home
                  </Link>
                </div>
                <div id={styles.n_tab2} className={styles.n_tab}>
                  <Link
                    to={"/gallery"}
                    onClick={() => setOpen(false)}
                    style={path === "/gallery" ? style : {}}
                  >
                    Gallery
                  </Link>
                </div>
                <div id={styles.n_tab3} className={styles.n_tab}>
                  <Link
                    to={"/about"}
                    onClick={() => setOpen(false)}
                    style={path === "/about" ? style : {}}
                  >
                    About
                  </Link>
                </div>
                <div
                  id={styles.n_tab4}
                  onClick={() => setOpen(false)}
                  className={styles.n_tab}
                >
                  <Link
                    to={"/contact"}
                    onClick={() => setOpen(false)}
                    style={path === "/contact" ? style : {}}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Nav;
