"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

interface BannerProps {
  title: string;
  src: string | string[];
  alt: string | string[];
}

const Banner = ({ title, src, alt }: BannerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesSrc = Array.isArray(src) ? src : [src];
  const imagesAlt = Array.isArray(alt) ? alt : [alt];

  useEffect(() => {
    if (imagesSrc.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesSrc.length);
      }, 5000); // 5 saniyede bir değişim

      return () => clearInterval(interval);
    }
  }, [imagesSrc.length]);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        {imagesSrc.map((image, index) => (
          <div
            key={index}
            className={`${styles.imageWrapper} ${
              index === currentImageIndex ? styles.active : ""
            }`}
          >
            <Image
              src={image}
              alt={imagesAlt[index]}
              layout="fill"
              objectFit="cover"
              className={styles.backgroundImage}
            />
          </div>
        ))}
        <div className={styles.overlay}></div>
        <div className={styles.textBox}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
