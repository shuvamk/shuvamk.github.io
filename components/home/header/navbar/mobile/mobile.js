import React from "react";
import styles from "./mobile.module.css";

function Mobile({ toggle }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/assets/cross.png" height={50} width={50} onClick={toggle} />
      </div>
      <div className={styles.options}>
        <div className={styles.navItem}>
          <g-emoji
            class="g-emoji"
            alias="wave"
            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
          >
            💻
          </g-emoji>
          <span> </span>
          Work
        </div>
        <div className={styles.navItem}>
          <g-emoji
            class="g-emoji"
            alias="wave"
            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
          >
            🚀
          </g-emoji>
          <span> </span>Projects
        </div>
        <div className={styles.navItem}>
          <g-emoji
            class="g-emoji"
            alias="wave"
            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
          >
            📝
          </g-emoji>
          <span> </span>Blog
        </div>
        <div className={styles.navItem}>
          <g-emoji
            class="g-emoji"
            alias="wave"
            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
          >
            🦸
          </g-emoji>
          <span> </span>Me
        </div>
      </div>
    </div>
  );
}

export default Mobile;
