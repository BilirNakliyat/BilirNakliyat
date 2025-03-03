import React from "react";
import styles from "./styles.module.css";

interface MainContentProps {
  title: string;
  htmlContent: string;
  bg: string;  // Arka plan resmi URL'si
}

const MainContent = ({ title, htmlContent, bg }: MainContentProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.imgBox}>
            {/* bg stilini style içinde uyguluyoruz */}
            <div style={{ backgroundImage: `url(${bg})` }} className={styles.img}></div>
        </div>
        <div className={styles.contentBox}>
            <div className={styles.textBox}>
                <h2 className={styles.h}>{title}</h2>
                <div className={styles.p} dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
