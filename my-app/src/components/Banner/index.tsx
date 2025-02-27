import styles from "./styles.module.css";
import Image from 'next/image';

interface BannerProps {
  title: string;
  src: string;
  alt: string;
}

const Banner = ({ title, src, alt }: BannerProps) => {
  return (
    <div className={styles.bannerContainer}>
      {/* Banner Arkaplan Görseli */}
      <div className={styles.banner}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" className={styles.backgroundImage} />

        <div className={styles.overlay}></div>

        {/* Banner İçerik */}
        <div className={styles.textBox}>
          <h1 className={styles.title}>{title}</h1> 
          {/* YAZI TIPI VE GUZELLIGI DUZENLENEBILIR */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
