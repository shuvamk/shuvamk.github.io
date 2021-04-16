import React from "react";
import styles from "./current.module.css";

function Current() {
  const tech = ["NextJS", "ReactJS", "Javascript", "Git", "CSS", "HTML5"];
  return (
    <div className={styles.current}>
      <div className={styles.role}>
        Frontend Developer <span className={styles.emoji}>🖥️</span>
      </div>
      <div className={styles.comp}>
        at <span className={styles.compName}>HackerEarth</span>
      </div>
      <div className={styles.joined}>
        Joined in <span className={styles.date}>January 2021</span>
      </div>
      <div className={styles.description}>
        <div className={styles.descLine}>
          <img src="/assets/next.png" width={30} /> Building the community
          facing platform for more than 5 million developers.
        </div>
        <div className={styles.descLine}>
          <img src="/assets/next.png" width={30} /> Working on shifting existing
          codebase from Django to ReactJS and NextJS.
        </div>
        <div className={styles.descLine}>
          <img src="/assets/next.png" width={30} /> Creating server-side
          applications to enhance the speed and overall usability of community
          product.
        </div>
      </div>
      <div className={styles.techTag}>
        {tech.map((tag) => {
          return <div className={styles.tag}>{tag}</div>;
        })}
      </div>
    </div>
  );
}

export default Current;
