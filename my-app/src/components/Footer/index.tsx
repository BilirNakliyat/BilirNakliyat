"use client";
import React from "react";
import Link from "next/link";
import Icon from "../Icon";
import styles from "./styles.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerRow}>
          <div className={styles.footerColq}>
            {/* <h3> */}
            <Image
              src="/logo.svg"
              alt="Bilir Nakliyat Logo"
              width={320}
              height={0}
            />
            {/* </h3> */}
            <ul className={styles.footerContact}>
              <li>
                Şahintepe Mahallesi Aşıkveysel Caddesi <br /> 2243 Sokak No:16{" "}
              </li>
              {/* <li>İstanbul Cad. No: 260 34555</li> */}
              <li>BAŞAKŞEHİR/İSTANBUL</li>
              <li>
                <a href="mailto:bilirnakliyatsirketi@gmail.com">
                  bilirnakliyatsirketi@gmail.com
                </a>
                {/* maili ayarlamak gerek */}
              </li>
              <li>0531 747 39 90</li>
              <li>0505 675 26 70</li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3>ÇÖZÜMLER</h3>
            <ul>
              <li>
                <a href="/hizmetlerimiz">Taşımacılık Hizmetleri</a>
              </li>
              <li>
                <a href="/hizmetlerimiz">Lojistik Hizmetleri</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3>SEKTÖRLER</h3>
            <ul>
              <li>
                <a href="#">E-Ticaret</a>
              </li>
              <li>
                <a href="#">Tekstil</a>
              </li>
              <li>
                <a href="#">Otomotiv</a>
              </li>
              <li>
                <a href="#">Perakende</a>
              </li>
              {/* <li>
                <a href="#">Kozmetik</a>
              </li> */}
              <li>
                <a href="#">Elektronik</a>
              </li>
              {/* <li>
                <a href="#">Sağlık</a>
              </li> */}
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3>İNOVASYON</h3>
            <ul>
              <li>
                <a href="#">B4B4C</a>
              </li>
              <li>
                <a href="#">AR-GE</a>
              </li>
              <li>
                <a href="#">Akıl İşi</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3>KURUMSAL</h3>
            <ul>
              <li>
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li>
                <a href="/hakkimizda">Neden Biz</a>
              </li>
              <li>
                <a href="/iletisim">Teklif Al</a>
              </li>
              <li>
                <a href="#">Portal Girişi</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3>İNSAN KAYNAKLARI</h3>
            <ul>
              {/* <li>
                <a href="#">Açık Pozisyonlar</a>
              </li> */}
              <li>
                <a href="#">İnsan Kaynakları Politikası</a>
              </li>
              {/* <li>
                <a href="#">İşe Alım ve Oryantasyon</a>
              </li> */}
              <li>
                <a href="#">Yetenek Yönetimi</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © Tüm hakları Bilir Nakliyat`a aittir.
          </div>
          <div className={styles.footerLinks}>
            <a href="#">Çerez Politikası</a>
            <a href="#">KVKK</a>
            <a href="#">Politika ve Kalite Belgeleri</a>
          </div>
          <div className={styles.socialMedia}>
            <span>Bizi Takip Edin.</span>
            <Link href="/">
              <Icon name="facebook" size="2.25rem" />
            </Link>
            <Link href="/">
              <Icon name="linkedin" size="2.25rem" />
            </Link>
            <Link href="https://www.instagram.com/bilir.nakliyatt/">
              <Icon name="instagram" size="2.25rem" />
            </Link>
            <Link href="/">
              <Icon name="youtube" size="2.25rem" />
            </Link>
            <Link href="/">
              <Icon name="twitter" size="2.25rem" />
            </Link>
          </div>
        </div>
        <div className={styles.semih}>Created by Semih Kopcal</div>
      </div>
    </footer>
  );
}

export default Footer;
