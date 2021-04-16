import React from "react";
import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";
import styles from "./header.module.css";

function Header({ toggle }) {
  return (
    <div className={styles.header}>
      <Logo />
      <Navbar toggle={toggle} />
    </div>
  );
}

export default Header;
