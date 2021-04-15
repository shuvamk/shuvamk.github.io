import React from "react";
import styles from "./blogCard.module.css";

function BlogCard({ blog }) {
  console.log(blog.tags);
  return (
    <div className={styles.blogCard}>
      <div className={styles.title}>{blog.title}</div>
      <div className={styles.description}>{blog.description}</div>
      <div className={styles.taglist}>
        {blog.tags.map((tag) => {
          return <div className={styles.tag}>{tag}</div>;
        })}
      </div>
    </div>
  );
}

export default BlogCard;
