import React from "react";
import styles from "./blogs.module.css";

function Blogs() {
  return (
    <div className={styles.blogs}>
      <div className={styles.header}>This is header</div>
      <div className={styles.body}>This is body</div>
      <div className={styles.footer}>This is footer</div>
    </div>
  );
}

export default Blogs;
