import React from "react";
import Blogs from "../footer/blogs/blogs";
import MeImage from "./3dimage/3dimage";

import Info from "./info/info";
import styles from "./mainfold.module.css";

function Mainfiold() {
  return (
    <div className={styles.mainfold}>
      <Info />
      <MeImage />
    </div>
  );
}

export default Mainfiold;
