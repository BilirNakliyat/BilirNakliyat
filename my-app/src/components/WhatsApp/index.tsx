"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "./style.module.css";

interface WhatsAppProps {
  phoneNumber: string;
}

export default function WhatsApp({ phoneNumber }: WhatsAppProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isIconOpen, setIsIconOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIconOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      "Merhaba, size nasıl yardımcı olabilirim?" // Mesaj içeriği
    )}`;
    window.open(whatsappUrl, "_blank"); // Yeni sekmede WhatsApp açılır
  };

  return (
    <div className={styles.whatsappContainer}>
      {isOpen && (
        <div className={styles.whatsappPopup}>
          <div className={styles.whatsappPopupHeader}>
            <span className={styles.headerText}>WhatsApp Destek</span>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.whatsappClose}
            >
              <IoClose size={20} />
            </button>
          </div>
          <div className={styles.whatsappPopupBody}>
            <p className={styles.whatsappMessage}>
              Merhaba! Bize ulaşmak için butona tıklayabilirsiniz.
            </p>
            {/* <div className={styles.contactInfo}>
            <span className={styles.phoneLabel}>Hızlı Destek İçin:</span>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              WhatsApp&apos;tan Bize Ulaşın
            </a>
          </div> */}
          </div>
        </div>
      )}
      <button
        onClick={handleClick} // Tıklama ile WhatsApp'a yönlendirme
        className={`${styles.whatsappButton} ${
          isIconOpen ? styles.show : styles.hide
        }`}
        // onMouseEnter={() => setIsOpen(true)} 
        // onMouseLeave={() => setIsOpen(false)} 
      >
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
}
