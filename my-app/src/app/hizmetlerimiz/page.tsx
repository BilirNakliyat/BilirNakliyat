import Box from "@/components/Box";
import styles from "./styles.module.css";

export default function Hizmetlerimiz() {
  const hizmetler = [
    {
      title: "Şehiriçi Nakliye",
      src: "/photos/photo-1.jpg",
      widht: 320,
      height: 320,
      href: "/sehir-ici-nakliye",
    },
    {
      title: "Parça Eşya Taşımacılığı",
      src: "/photos/photo-2.jpg",
      widht: 320,
      height: 320,
      href: "/parca-esya-tasimaciligi",
    },
    {
      title: "Evden Eve Nakliyat",
      src: "/photos/photo-44.jpg",
      widht: 320,
      height: 320,
      href: "/evden-eve-nakliyat",
    },
    {
      title: "Hafriyat Taşımacılığı",
      src: "/photos/photo-4.jpg",
      widht: 320,
      height: 320,
      href: "/hafriyat-tasimaciligi",
    },
    {
      title: "Ofis Büro Taşımacılığı",
      src: "/photos/photo-35.jpg",
      widht: 320,
      height: 320,
      href: "/ofis-buro-tasimaciligi",
    },
    {
      title: "Parsiyel Yük Taşımacılığı",
      src: "/photos/photo-6.jpg",
      widht: 320,
      height: 320,
      href: "/parsiyel-yuk-tasimaciligi",
    },
    {
      title: "Ambar Taşımacılık Hizmetimiz ",
      src: "/photos/photo-29.jpg",
      widht: 320,
      height: 320,
      href: "/ambar-tasimacilik",
    },
    {
      title: "Paketleme ve Depolama Hizmetimiz",
      src: "/photos/photo-12.jpg",
      widht: 320,
      height: 320,
      href: "/paketleme-ve-depolama",
    },
    {
      title: "Asansörlü Taşıma Hizmetimiz",
      src: "/photos/photo-9.jpg",
      widht: 320,
      height: 320,
      href: "/asansorlu-tasima",
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
