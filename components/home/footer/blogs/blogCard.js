import React from "react";
import styles from "./blogCard.module.css";

function BlogCard() {
  return (
    <div className={styles.blogCard}>
      <div className={styles.title}>This is Title</div>
      <div className={styles.description}>
        This is the body of the blog, consider it to be very big so that it can
        be ellipsed and I can create a good design for all muy blogs. This has
        nothing to do with apple and mango.
      </div>
      <div className={styles.taglist}>
        <div className={styles.tag}>Apple</div>
        <div className={styles.tag}>Apple</div>
        <div className={styles.tag}>Apple</div>
      </div>
    </div>
  );
}

export default BlogCard;
