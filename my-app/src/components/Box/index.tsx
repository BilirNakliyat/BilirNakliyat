import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

interface BoxProps {
  title: string;
  src: string;
  width?: number;
  height?: number;
  href?:string;
}

function Box({ title, src, width, height, href = "/" }: BoxProps) {
  return (
    <div className={styles.box} style={{ width, height }}>
      <Link href={href}>
        <Image
          className={styles.img}
          src={src}
          alt="Ana Resim"
          width={200}
          height={300}
          objectFit="cover"
        />

        <div className={styles.overlay}>
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Box;
