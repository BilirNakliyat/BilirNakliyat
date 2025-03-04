"use client";

import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "./styles.module.css";

interface PhoneButtonProps {
  phoneNumber: string;
}

export default function PhoneButton({ phoneNumber }: PhoneButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isIconOpen, setIsIconOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIconOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`; // Telefonu aramaya yönlendirir
  };

  return (
    <div className={styles.phoneContainer}>
      {isOpen && (
        <div className={styles.phonePopup}>
          <div className={styles.phonePopupHeader}>
            {/* <span className={styles.headerText}>Telefon Desteği</span> */}
            <button
              onClick={() => setIsOpen(false)}
              className={styles.phoneClose}
            >
              <IoClose size={20} />
            </button>
          </div>
         
        </div>
      )}
      <button
        onClick={handleClick}
        className={`${styles.phoneButton} ${isIconOpen ? styles.show : styles.hide}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <FaPhone size={26} />
      </button>
    </div>
  );
}
