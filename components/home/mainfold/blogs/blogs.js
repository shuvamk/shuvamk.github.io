import React from "react";
import BlogCard from "./blogCard";
import styles from "./blogs.module.css";

function Blogs() {
  return (
    <div className={styles.blogs}>
      <div className={styles.header}>
        <span> This is header</span>

        <button>See all</button>
      </div>
      <div className={styles.body}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className={styles.footer}>This is footer</div>
    </div>
  );
}

export default Blogs;
