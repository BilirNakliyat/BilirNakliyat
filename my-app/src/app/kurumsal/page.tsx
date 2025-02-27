import Box from "@/components/Box";
import styles from "./styles.module.css";

export default function Kurumsal() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Box
          title="Hakkımızda"
          src="/photo.jpg"
          width={300}
          height={400}
          href="/hakkimizda"
        />
      </div>
      <div className={styles.box}>
        <Box
          title="Vizyonumuz"
          src="/photo.jpg"
          width={300}
          height={400}
          href="/vizyonumuz"
        />
      </div>
      <div className={styles.box}>
        <Box
          title="Misyonumuz"
          src="/photo.jpg"
          width={300}
          height={400}
          href="/misyonumuz"
        />
      </div>
    </div>
  );
}
