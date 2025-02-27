import React from "react";
import styles from "./styles.module.css";

interface MainContentProps {
  title: string;
  p: string;
}

const MainContent = ({title, p}: MainContentProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.imgBox}>
            <div className={styles.img}></div>
        </div>
        <div className={styles.contentBox}>
            <div className={styles.textBox}>
                <h2 className={styles.h}>{title}</h2>
                <p className={styles.p}>{p}</p>
            </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
