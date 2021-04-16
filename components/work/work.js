import React from "react";
import Header from "../common/header/header";
import Footer from "../home/footer/footer";
import Mainfiold from "../home/mainfold/mainfold";
import Downfold from "./downfold/downfold";
import Upfold from "./upfold/upfold";
import styles from "./work.module.css";

function WorkComp() {
  return (
    <div className={styles.container}>
      <head>
        <title>Shuvamk. : Work</title>
      </head>
      <Upfold />
      <Downfold />
    </div>
  );
}

export default WorkComp;
