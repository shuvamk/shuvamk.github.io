import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.hello}>Hello There, I am </span>
        <span className={styles.name}>Shuvam Kumar.</span>
        <span className={styles.subName}>
          I love experimenting with the web
        </span>
      </div>
    </div>
  );
}

export default Home;
