import React from "react";
import styles from "./projects.module.css";
import classnames from "classnames";
import Timeline from "./timeline/timeline";

function ProjectsComp() {
  return (
    <div className={styles.projects}>
      <head>
        <title>Shuvamk. : Projects</title>
      </head>
      <Timeline />

      <img src="/assets/ideas.png" height={400} className={styles.rightImage} />
    </div>
  );
}

export default ProjectsComp;
