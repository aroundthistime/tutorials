import React from "react";
import Logo from "../../molecules/Logo/Logo";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.Header}>
    <Logo />
    <input className={styles.input} />
  </header>
);

export default Header;
