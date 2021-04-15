import React from "react";
import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
