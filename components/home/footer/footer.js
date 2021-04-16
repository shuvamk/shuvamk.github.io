import React from "react";
import Blogs from "./blogs/blogs";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <Blogs />
    </div>
  );
}

export default Footer;
