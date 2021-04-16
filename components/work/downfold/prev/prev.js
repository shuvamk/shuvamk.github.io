import React from "react";
import styles from "./prev.module.css";

function Prev() {
  const tech = ["ReactJS", "Javascript", "mustacheJS"];
  return (
    <div className={styles.prev}>
      <div className={styles.role}>Frontend Developer Intern</div>
      <div className={styles.comp}>
        at <span className={styles.compName}>HackerEarth</span>
      </div>
      <div className={styles.joined}>
        Joined in <span className={styles.date}>January 2021</span>
      </div>
      <div className={styles.description}>
        <div className={styles.descLine}>
          <img src="/assets/next.png" width={20} /> Building the community
          facing platform for more than 5 million developers.
        </div>
        <div className={styles.descLine}>
          <img src="/assets/next.png" width={20} /> Working on shifting existing
          codebase from Django to ReactJS and NextJS.
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

export default Prev;
