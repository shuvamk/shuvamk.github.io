import React from "react";
import BlogCard from "./blogCard";
import styles from "./blogs.module.css";

function Blogs() {
  return (
    <div className={styles.blogs}>
      <div className={styles.header}>
        <span className={styles.blogTitle}>Blogs</span>
      </div>
      <div className={styles.body}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <div className={styles.footer}>
        <button className={styles.allButton}>
          <span className={styles.buttonTitle}>See all</span>
        </button>
      </div>
    </div>
  );
}

export default Blogs;
