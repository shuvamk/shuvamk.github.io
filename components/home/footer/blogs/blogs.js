import React from "react";
import BlogCard from "./blogCard";
import styles from "./blogs.module.css";
import Image from "next/image";

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
          <span className={styles.buttonTitle}>
            See all
            <Image
              src="/assets/next.png"
              height="24"
              width="24"
              className={styles.nextIcon}
            />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Blogs;
