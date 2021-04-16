import React from "react";
import Current from "./current/current";
import styles from "./upfold.module.css";

function Upfold() {
  return (
    <div className={styles.upfold}>
      <img src="/assets/work.png" height={300} width={400} />
      <Current />
    </div>
  );
}

export default Upfold;
