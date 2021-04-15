import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <img src="/assets/github.png" height={60} width={60} />
      <img src="/assets/linkedin.png" height={60} width={60} />
      <img src="/assets/medium.png" height={60} width={60} />
      <img src="/assets/instagram.png" height={60} width={60} />
      <img src="/assets/gmail.png" height={60} width={60} />
    </div>
  );
}

export default Contact;
