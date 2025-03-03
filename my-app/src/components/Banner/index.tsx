"use client"
import styles from "./styles.module.css";
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface BannerProps {
  title: string;
  src: string | string[];  // Tekil ya da dizi olarak görsel URL'leri
  alt: string | string[];  // Tekil ya da dizi olarak görsel açıklamaları
}

const Banner = ({ title, src, alt }: BannerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesSrc = Array.isArray(src) ? src : [src];  // Eğer tek bir görselse, onu diziye çevir
  const imagesAlt = Array.isArray(alt) ? alt : [alt];  // Eğer tek bir açıklama varsa, onu diziye çevir

  // Görsel geçişi için useEffect hook'u
  useEffect(() => {
    if (imagesSrc.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesSrc.length);
      }, 5000); // 5 saniyede bir görsel değişir

      return () => clearInterval(interval);
    }
  }, [imagesSrc.length]);

  return (
    <div className={styles.bannerContainer}>
      {/* Banner Arkaplan Görseli */}
      <div className={styles.banner}>
        <Image
          src={imagesSrc[currentImageIndex]}
          alt={imagesAlt[currentImageIndex]}
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>

        {/* Banner İçerik */}
        <div className={styles.textBox}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
