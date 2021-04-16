import React from "react";
import { currentCompany } from "../../../../data/work/workData";
import styles from "./current.module.css";

function Current() {
  const company = currentCompany;
  const tech = ["NextJS", "ReactJS", "Javascript", "Git", "CSS", "HTML5"];
  return (
    <div className={styles.current}>
      <div className={styles.role}>
        {company.position} <span className={styles.emoji}>🖥️</span>
      </div>
      <div className={styles.comp}>
        at <span className={styles.compName}>{company.name}</span>
      </div>
      <div className={styles.joined}>
        Joined in <span className={styles.date}>{company.joined}</span>
      </div>
      <div className={styles.description}>
        {company.desc.map((line) => {
          return (
            <div className={styles.descLine}>
              <img src="/assets/next.png" width={30} /> {line}
            </div>
          );
        })}
      </div>
      <div className={styles.techTag}>
        {company.tags.map((tag) => {
          return <div className={styles.tag}>{tag}</div>;
        })}
      </div>
    </div>
  );
}

export default Current;
