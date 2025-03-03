import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

interface MainInfoBoxProps {
  title: string;
  content: string;
  href: string;
  src: string;
}

const MainInfoBox = ({title, content, href, src}: MainInfoBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={src} // Public klasörüne taşı veya değiştir
          alt="Evden Eve Nakliyat"
          width={500} // Gerekirse değiştir
          height={250} // Gerekirse değiştir
          className={styles.image}
        />
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.h2}>{title}</h2>
        <p className={styles.p}>
          {content}
        </p>
        <button className={styles.button}><Link href={href}>Devamını Oku ›</Link></button>
      </div>
    </div>
  );
};

export default MainInfoBox;
