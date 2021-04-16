import React, { useState } from "react";
import Footer from "./footer/footer";
import Header from "../common/header/header";
import Mobile from "../common/header/navbar/mobile/mobile";
import classnames from "classnames";
import styles from "./home.module.css";
import Mainfiold from "./mainfold/mainfold";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classnames(styles.container)}>
      <head>
        <title>Shuvamk.</title>
      </head>
      <Mainfiold />
      <Footer />
    </div>
  );
}

export default Home;
