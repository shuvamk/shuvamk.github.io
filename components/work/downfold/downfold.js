import React from "react";
import styles from "./downfold.module.css";
import Prev from "./prev/prev";

function Downfold() {
  return (
    <div className={styles.downfold}>
      <div>My previous Work</div>
      <div className={styles.prevCard}>
        <Prev />
        <Prev />
      </div>
    </div>
  );
}

export default Downfold;
