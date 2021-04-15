import React, { useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Mobile from "./header/navbar/mobile/mobile";
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
      <Header toggle={toggle} />
      <Mainfiold />
      <Footer />
    </div>
  );
}

export default Home;
