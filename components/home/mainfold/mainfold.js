import React from "react";
import Blogs from "../footer/blogs/blogs";
import MeImage from "./3dimage/3dimage";
import Contact from "./contact/contact";

import Info from "./info/info";
import styles from "./mainfold.module.css";

function Mainfiold() {
  return (
    <div className={styles.mainfold}>
      <div>
        <Info />
        <Contact />
      </div>
      <MeImage />
    </div>
  );
}

export default Mainfiold;
