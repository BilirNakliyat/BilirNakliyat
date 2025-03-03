// components/InfoBox.tsx
import styles from "./styles.module.css";

type InfoBoxProps = {
  content: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ content }) => {
  return (
    <section className={styles.container}>
      {/* HTML içeriğini doğru şekilde render etmek için dangerouslySetInnerHTML kullanıyoruz */}
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: content }} />

      <div className={styles.buttonContainer}>
        <button className={styles.callButton}>
          <a href="tel:05555555555">HEMEN ARA 📞</a>
        </button>
      </div>
    </section>
  );
};

export default InfoBox;
