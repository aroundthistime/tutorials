import React from "react";
import Header from "./partials/Header/Header";
import Footer from "./partials/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <h3 className={styles.title}>Practice CSS Module</h3>
        <h5 className={styles.subtitle}>with CRA</h5>
        <span className={styles.content}>
          이 웹페이지는 CSS Module 사용법을 연습하기 위해 구현하였습니다. 하하
        </span>
      </main>
      <Footer />
    </div>
  );
}

export default App;
