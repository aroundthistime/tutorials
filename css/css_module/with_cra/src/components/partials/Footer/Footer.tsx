import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.text}>&copy;aroundthistime</p>
    <p className={styles.text}>created at 2022-04-23</p>
  </footer>
);

export default Footer;
