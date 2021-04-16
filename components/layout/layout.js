import React from "react";
import Header from "../common/header/header";
import styles from "./layout.module.css";

function Layout(props) {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
