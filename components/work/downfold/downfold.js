import React from "react";
import styles from "./downfold.module.css";
import Prev from "./prev/prev";

function Downfold() {
  return (
    // <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
    <div className={styles.downfold}>
      <div className={styles.header}>
        <span className={styles.prevText}>Previous Work</span>
      </div>
      <div className={styles.prevCard}>
        <Prev />
        <Prev />
      </div>
    </div>
    // </div>
  );
}

export default Downfold;
