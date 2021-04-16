import React from "react";
import TinderCard from "react-tinder-card";
import { blogData } from "../../../../data/blogs/blogData";
import BlogCard from "./blogCard";
import styles from "./blogs.module.css";

function Blogs() {
  const blogList = blogData;
  const outOfFrame = (name) => {
    console.log(name + "left the screne");
  };
  return (
    <div className={styles.blogs}>
      <div className={styles.header}>
        <span className={styles.blogTitle}>Blogs</span>
      </div>
      <div className={styles.body}>
        {blogList.map((blog, id) => {
          if (id > 2) return null;
          return <BlogCard blog={blog} />;
        })}
      </div>
      <div className={styles.bodyMobile}>
        <BlogCard blog={blogList[0]} />
      </div>

      <div className={styles.footer}>
        <button className={styles.allButton}>
          <span className={styles.buttonTitle}>
            See all
            <img
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
