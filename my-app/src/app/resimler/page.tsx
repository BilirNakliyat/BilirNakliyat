import styles from "./styles.module.css";

export default function Resimler() {
  // 45 resim için diziyi oluşturuyoruz
  const images = Array.from({ length: 44 }, (_, index) => `/photos/photo-${index + 1}.jpg`);

  return (
    <div className={styles.gridContainer}>
      {images.map((src, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={src} alt={`Resim ${index + 1}`} className={styles.image} />
        </div>
      ))}
    </div>
  );
}
