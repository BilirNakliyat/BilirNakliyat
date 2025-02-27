'use client'
import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Icon from "../Icon";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [childIsOpen, setChildIsOpen] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  const toggleChildMenu = (event: React.MouseEvent<HTMLAnchorElement>, menuId: string, href: string) => {
    if (window.innerWidth <= 768) {
      event.preventDefault();

      setChildIsOpen((prev) => {
        const isOpen = !prev[menuId];
        if (isOpen) {
          setTimeout(() => {
            setChildIsOpen((prev) => ({ ...prev, [menuId]: false }));
            router.push(href);
          }, 300); // Delay for animation
        }
        return { ...prev, [menuId]: isOpen };
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.headerMain} nav-dark`}>
      <div className={`${styles.headerInner} container`}>
        <div className={styles.logo}>
          <Link href="/" title="Bilir Nakliyat - Kurumsal Nakliye Hizmetleri" rel="home" legacyBehavior>
            <a>
              <Image
                width={200}
                height={50}
                src="/logo.png"
                className={styles.headerLogoDark}
                alt="Sel Nakliyat"
              />
            </a>
          </Link>
        </div>

        <div className={styles.mobileBars} onClick={toggleMenu}>
          <div className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}>
            <Icon name="bars" size="2rem" color="white" className={` ${isOpen ? styles.rotate : ""}`} />
          </div>
        </div>

        {isOpen && <div className={styles.menuOverlay} onClick={toggleMenu}></div>}

        <div className={`${styles.rightElements} ${isOpen ? styles.open : styles.close}`}>
          <div className={styles.mobileClose}>
            <div className={styles.closeIcon} onClick={toggleMenu}>
              <Icon name="times" size="2rem" color="white" />
            </div>
          </div>

          <ul className={styles.navMain}>
            <li className={styles.menuItem}>
              <Link href="/" className={styles.navTopLink}>
                Anasayfa
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/kurumsal" className={styles.navTopLink} onClick={(event) => toggleChildMenu(event, 'kurumsal', '/kurumsal')}>
                Kurumsal <Icon name="arrowDown" size="1.25rem" color="white" />
              </Link>
              <ul className={`${styles.subMenu} ${childIsOpen["kurumsal"] ? styles.show : ""}`}>
                <li><Link href="/hakkimizda" className={styles.a}>Hakkımızda</Link></li>
                <li><Link href="/misyonumuz" className={styles.a}>Misyonumuz</Link></li>
                <li><Link href="/vizyonumuz" className={styles.a}>Vizyonumuz</Link></li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link href="/hizmetlerimiz" className={styles.navTopLink} onClick={(event) => toggleChildMenu(event, 'hizmetlerimiz', '/hizmetlerimiz')}>
                Hizmetlerimiz <Icon name="arrowDown" size="1.25rem" color="white" />
              </Link>
              <ul className={`${styles.subMenu} ${childIsOpen["hizmetlerimiz"] ? styles.show : ""}`}>
                <li><Link href="/sehir-ici-nakliye" className={styles.a}>Şehir İçi Nakliye</Link></li>
                {/* <li><Link href="/sehirlerarasi-nakliye" className={styles.a}>Şehirlerarası Nakliye</Link></li> */}
                <li><Link href="/parca-esya-tasimaciligi" className={styles.a}>Parça Eşya Taşımacılığı</Link></li>
                <li><Link href="/evden-eve-nakliyat" className={styles.a}>Evden Eve Nakliyat</Link></li>
                <li><Link href="/hafriyat-tasimaciligi" className={styles.a}>Hafriyat Taşımacılığı</Link></li>
                <li><Link href="/ofis-buro-tasimaciligi" className={styles.a}>Ofis Büro Taşımacılığı</Link></li>
                <li><Link href="/parsiyel-yuk-tasimaciligi" className={styles.a}>Parsiyel Yük Taşımacılığı</Link></li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link href="/istanbul-nakliye" className={styles.navTopLink} onClick={(event) => toggleChildMenu(event, 'istanbul-nakliye', '/istanbul-nakliye')}>
                İstanbul Nakliye <Icon name="arrowDown" size="1.25rem" color="white" />
              </Link>
              <ul className={`${styles.subMenu} ${childIsOpen["istanbul-nakliye"] ? styles.show : ""}`}>
                <li><Link href="/sehir-ici-nakliye" className={styles.a}>Şehir İçi Nakliye</Link></li>
                {/* <li><Link href="/sehirlerarasi-nakliye" className={styles.a}>Şehirlerarası Nakliye</Link></li> */}
                <li><Link href="/parca-esya-tasimaciligi" className={styles.a}>Parça Eşya Taşımacılığı</Link></li>
                <li><Link href="/evden-eve-nakliyat" className={styles.a}>Evden Eve Nakliyat</Link></li>
                <li><Link href="/hafriyat-tasimaciligi" className={styles.a}>Hafriyat Taşımacılığı</Link></li>
                <li><Link href="/ofis-buro-tasimaciligi" className={styles.a}>Ofis Büro Taşımacılığı</Link></li>
                <li><Link href="/parsiyel-yuk-tasimaciligi" className={styles.a}>Parsiyel Yük Taşımacılığı</Link></li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link href="/sehirlerarasi-nakliye" className={styles.navTopLink} onClick={(event) => toggleChildMenu(event, 'sehirlerarasi-nakliye', '/sehirlerarasi-nakliye')}>
                Şehirlerarası Nakliye <Icon name="arrowDown" size="1.25rem" color="white" />
              </Link>
              <ul className={`${styles.subMenu} ${childIsOpen["sehirlerarasi-nakliye"] ? styles.show : ""}`}>
                <li><Link href="/sehir-ici-nakliye" className={styles.a}>Şehir İçi Nakliye</Link></li>
                {/* <li><Link href="/sehirlerarasi-nakliye" className={styles.a}>Şehirlerarası Nakliye</Link></li> */}
                <li><Link href="/parca-esya-tasimaciligi" className={styles.a}>Parça Eşya Taşımacılığı</Link></li>
                <li><Link href="/evden-eve-nakliyat" className={styles.a}>Evden Eve Nakliyat</Link></li>
                <li><Link href="/hafriyat-tasimaciligi" className={styles.a}>Hafriyat Taşımacılığı</Link></li>
                <li><Link href="/ofis-buro-tasimaciligi" className={styles.a}>Ofis Büro Taşımacılığı</Link></li>
                <li><Link href="/parsiyel-yuk-tasimaciligi" className={styles.a}>Parsiyel Yük Taşımacılığı</Link></li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link href="/resimler" className={styles.navTopLink}>
                Bizden Görüntüler
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/iletisim" className={styles.navTopLink}>
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
