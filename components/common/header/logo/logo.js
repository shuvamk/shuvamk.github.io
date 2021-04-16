import Link from "next/link";
import React from "react";
import styles from "./logo.module.css";

function Logo() {
  return (
    <Link href="/">
      <a>
        <div className={styles.logo}>ShuvamK.</div>
      </a>
    </Link>
  );
}

export default Logo;
