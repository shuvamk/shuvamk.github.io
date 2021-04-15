import React from "react";
import Blogs from "../footer/blogs/blogs";

import Info from "./info/info";
import styles from "./mainfold.module.css";

function Mainfiold() {
  return (
    <div className={styles.mainfold}>
      <Info />
    </div>
  );
}

export default Mainfiold;
