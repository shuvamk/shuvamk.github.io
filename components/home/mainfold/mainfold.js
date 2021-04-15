import React from "react";
import Blogs from "./blogs/blogs";
import Info from "./info/info";
import styles from "./mainfold.module.css";

function Mainfiold() {
  return (
    <div className={styles.mainfold}>
      <Info />
      <Blogs />
    </div>
  );
}

export default Mainfiold;
