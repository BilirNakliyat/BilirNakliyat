import Box from "@/components/Box";
import styles from "./styles.module.css";

export default function Hizmetlerimiz() {
  const hizmetler = [
    {
      title: "Şehiriçi Nakliye",
      src: "/photo.jpg",
      widht: 320,
      height: 320,
      href: "/sehir-ici-nakliye",
    },
    {
      title: "Parça Eşya Taşımacılığı",
      src: "/photo.jpg",
      widht: 320,
      height: 320,
      href: "/parca-esya-tasimaciligi",
    },
    {
      title: "Evden Eve Nakliyat",
      src: "/photo.jpg",
      widht: 320,
      height: 320,
      href: "/evden-eve-nakliyat",
    },
    {
      title: "Hafriyat Taşımacılığı",
      src: "/photo.jpg",
      widht: 320,
      height: 320,
      href: "/hafriyat-tasimaciligi",
    },
    {
      title: "Ofis Büro Taşımacılığı",
      src: "/photo.jpg",
      widht: 320,
      height: 320,
      href: "/ofis-buro-tasimaciligi",
    },
    {
      title: "Parsiyel Yük Taşımacılığı",
      src: "/photo.jpg",
      widht: 320,
      height: 320,
      href: "/parsiyel-yuk-tasimaciligi",
    },
  ];

  return (
    <div className={styles.container}>
      {hizmetler.map((hizmet, index) => (
        <div className={styles.box} key={index}>
          <Box
            // key={index}
            title={hizmet.title}
            src={hizmet.src}
            width={hizmet.widht}
            height={hizmet.height}
            href={hizmet.href}
          />
        </div>
      ))}
    </div>
  );
}
// BURAYI EKLEDIK EVE BIR SIKINTI CKTI TEKRAR KONTROL EDERIZ
