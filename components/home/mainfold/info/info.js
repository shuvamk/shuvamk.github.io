import React from "react";
import styles from "./info.module.css";

function Info() {
  return (
    <div className={styles.info}>
      <span className={styles.hello}>
        Hello There{" "}
        <g-emoji
          class="g-emoji"
          alias="wave"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
        >
          👋
        </g-emoji>
        , I am{" "}
      </span>
      <span className={styles.name}>Shuvam Kumar.</span>
      <span className={styles.subName}>I love experimenting with the web.</span>
    </div>
  );
}

export default Info;
