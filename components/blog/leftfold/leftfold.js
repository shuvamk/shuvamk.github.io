import React from "react";
import styles from "./leftfold.module.css";
import { blogData } from "../../../data/blogs/blogData";

function Leftfold() {
  const blogs = blogData;
  return (
    <div className={styles.left}>
      <div className={styles.headline}>Recently Published</div>
      {blogs.map((blog) => {
        return (
          <div className={styles.blog}>
            <div className={styles.title}>{blog.title}</div>
            <div className={styles.date}>Written on: {blog.date}</div>
            <div className={styles.gist}>{blog.description}</div>
            <div className={styles.tags}>
              {blog.tags.map((tag) => {
                return <div className={styles.tag}>{tag}</div>;
              })}
            </div>
            <div className={styles.readMore}>
              Read More <img src="/assets/next.png" width={20} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Leftfold;
