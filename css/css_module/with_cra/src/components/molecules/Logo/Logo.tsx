import React from "react";
import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.Logo}>
    <img
      src="data:image/png;base64,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"
      alt="logo"
      className={styles["logo-image"]}
    />
    <p className={styles.text}>Facebook</p>
  </div>
);

export default Logo;
