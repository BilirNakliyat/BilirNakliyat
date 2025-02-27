// components/InfoBox.tsx
import styles from "./styles.module.css";

type InfoBoxProps = {
  content: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ content }) => {
  return (
    <section className={styles.container}>
      <p className={styles.text}>{content}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.callButton}>HEMEN ARA 📞</button>
      </div>
    </section>
  );
};

export default InfoBox;
