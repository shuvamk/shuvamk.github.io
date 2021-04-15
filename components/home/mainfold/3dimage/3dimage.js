import React from "react";
import styles from "./3dimage.module.css";

function MeImage() {
  return (
    <div className={styles.image}>
      <img src="/assets/me.png" height={400} width={400} />
    </div>
  );
}

export default MeImage;
