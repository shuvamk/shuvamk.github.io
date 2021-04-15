import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

import styles from "./home.module.css";
import Mainfiold from "./mainfold/mainfold";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Mainfiold />
      <Footer />
    </div>
  );
}

export default Home;
