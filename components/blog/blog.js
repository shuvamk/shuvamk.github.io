import React from "react";
import styles from "./blog.module.css";
import Leftfold from "./leftfold/leftfold";
import Rightfold from "./rightfold/rightfold";

function BlogComp() {
  return (
    <div className={styles.blog}>
      <head>
        <title>Shuvamk. : Blog</title>
      </head>
      <Leftfold />
      <Rightfold />
    </div>
  );
}

export default BlogComp;
