import Box from "@/components/Box";
import styles from "./styles.module.css";

export default function Kurumsal() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box}>
          <Box title="Hakkımızda" src="/photos/photo-1.jpg" width={300} height={400} href="/hakkimizda" />
        </div>
        <div className={styles.box}>
          <Box title="Vizyonumuz" src="/photos/photo-3.jpg" width={300} height={400} href="/vizyonumuz" />
        </div>
        <div className={styles.box}>
          <Box title="Misyonumuz" src="/photo.jpg" width={300} height={400} href="/misyonumuz" />
        </div>
      </div>
    </div>
  );
}
