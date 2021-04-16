import React from "react";
import styles from "./timeline.module.css";
import classnames from "classnames";
import { projectData } from "../../../data/projects/projects";

function Timeline() {
  const proj = projectData;
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        {proj.map((project) => {
          return (
            <div
              className={classnames(styles.timeline_container, styles.primary)}
            >
              <div className={styles.timeline_icon}>
                <i className="far fa-grin-wink"></i>
              </div>
              <div className={styles.timeline_body}>
                <div className={styles.top}>
                  <img
                    src={
                      project.image
                        ? `/assets/${project.image}`
                        : `/assets/project.png`
                    }
                    className={styles.displayImage}
                  />
                  <div className={styles.topRight}>
                    <div className={styles.title}>{project.name}</div>
                    <div className={styles.tags}>
                      {project.tags.map((tag) => {
                        return <div className={styles.tag}>{tag}</div>;
                      })}
                    </div>
                    <img
                      src="/assets/github.png"
                      className={styles.github}
                      height={60}
                      width={60}
                    />
                  </div>
                </div>
                <div className={styles.bottom}>{project.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
