import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
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
      <div className={styles.mobileButton}>
        <img src="/assets/ham.png" height={50} width={50} />
      </div>
    </div>
  );
}

export default Navbar;
