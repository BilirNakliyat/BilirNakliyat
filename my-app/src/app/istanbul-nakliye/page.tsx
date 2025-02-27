import styles from "./styles.module.css";
import Box from "@/components/Box";

export default function IstanbulNakliye() {
  const avrupa = [
    {
      title: "Şehiriçi Nakliye",
      src: "/photo.jpg",
      widht: 320,
      height: 320,
      href: "/sehir-ici-nakliye",//textler ayarlanilacak
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

  const anadolu = [
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
    <div>
      <h2 className={styles.title}>AVRUPA YAKASI</h2>

      <div className={styles.container}>
        {avrupa.map((hizmet, index) => (
          <div className={styles.box} key={index}>
            <Box
              title={hizmet.title}
              src={hizmet.src}
              width={hizmet.widht}
              height={hizmet.height}
              href={hizmet.href}
            />
          </div>
        ))}
      </div>

      <h2 className={styles.title}>ANADOLU YAKASI</h2>

      <div className={styles.container}>
        {anadolu.map((hizmet, index) => (
          <div className={styles.box} key={index}>
            <Box
              title={hizmet.title}
              src={hizmet.src}
              width={hizmet.widht}
              height={hizmet.height}
              href={hizmet.href}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
