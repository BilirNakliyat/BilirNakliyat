import styles from "./styles.module.css";
import Box from "@/components/Box";
import InfoBox from "@/components/InfoBox";

export default function IstanbulNakliye() {
  const content = `
<p>Eşyalarınızı taşımak istediğinizde sürecin sorunsuz ilerlemesini ve eşyalarınızın güvenli bir şekilde varış noktasına ulaşmasını ister misiniz? O zaman deneyimli nakliye firması <strong>Bilir Nakliyat</strong>’ı tercih edin. 
Biz, sürdürülebilir başarıyı; deneyim, doğru ekipman kullanımı ve müşteri odaklı hizmet anlayışıyla şekillendiriyoruz.</p>

<h3><strong>Şehir İçi Nakliye Hizmetlerimiz</strong></h3>
<p>Hizmetlerimiz arasında <strong>paletli malzeme taşımacılığı</strong>, <strong>kolili malzeme taşımacılığı</strong> ve <strong>kargo taşımacılığı</strong> yer almaktadır.</p>

<h3><strong>Paletli Malzeme Taşımacılığı</strong></h3>
<p>Taşıma işlemlerinde eşyalarınızın güvenliği önceliğimizdir. Paletli taşıma sistemi, eşyalarınızın zarar görmeden ve hızlı bir şekilde taşınmasını sağlar. Yükler paletlere yerleştirilir, özenle paketlenir ve forklift araçlarıyla güvenli bir şekilde yüklenip indirilir. 
Bu yöntem, hem iş gücünü azaltır hem de zaman tasarrufu sağlar. Ayrıca, olası kazaların önüne geçer ve taşıma sürecini daha verimli kılar.</p>

<h3><strong>Kolili Malzeme Taşımacılığı</strong></h3>
<p>Ev taşımacılığından ofis taşımacılığına kadar her tür taşımacılıkta kolili taşıma yöntemini tercih edebiliriz. Eşyalarınızın zarar görmemesi için doğru koli seçimi ve düzenli istifleme çok önemlidir. 
Kolilerin boyutlarına uygun istifleme yaparak, her bir koli için gerekli kontrolleri sağlıyoruz. Taşıma sırasında, eşyalarınızın güvenliğini sağlamak adına uygun paletleri kullanıyoruz ve tüm süreç boyunca ekonomik çözümler sunuyoruz.</p>

<h3><strong>Kargo Taşımacılığı</strong></h3>
<p>Kargo taşımacılığı, büyük ebatlı veya ağır yüklerinizin güvenli bir şekilde bir noktadan diğerine taşınması anlamına gelir. Kargo firmaları yerine, nakliye şirketleriyle çalışarak eşyalarınızı hızlı ve güvenli bir şekilde gönderirsiniz.</p>
<p><strong>Bilir Nakliyat</strong>, her türlü taşıma işlemi için yüksek kaliteli ve profesyonel hizmet sunarak, sürekli olarak kendini yenileyen bir yaklaşım benimsemektedir.</p>

<p>Taşıma işlemlerinizin sorunsuz bir şekilde gerçekleştirilmesi için <strong>Bilir Nakliyat</strong> olarak, yenilikçi çözümlerimizle yanınızdayız.</p>
`;

  const avrupa = [
    {
      title: "Zeytinburnu Nakliyat Hizmetleri",
      src: "/designs/design-7.jpg",
      widht: 320,
      height: 320,
      // href: "/sehir-ici-nakliye",
    },
    {
      title: "Eyüp Nakliyat Hizmetleri",
      src: "/designs/design-8.jpg",
      widht: 320,
      height: 320,
      // href: "/parca-esya-tasimaciligi",
    },
    {
      title: "Beşiktaş Nakliyat Hizmetleri",
      src: "/designs/design-9.jpg",
      widht: 320,
      height: 320,
      // href: "/evden-eve-nakliyat",
    },
    {
      title: "Hadımköy Nakliyat Hizmetleri",
      src: "/designs/design-1.jpg",
      widht: 320,
      height: 320,
      // href: "/hafriyat-tasimaciligi",
    },
    {
      title: "Esenyurt Nakliyat Hizmetleri",
      src: "/designs/design-11.jpg",
      widht: 320,
      height: 320,
      // href: "/ofis-buro-tasimaciligi",
    },
    {
      title: "Bahçelievler Nakliyat Hizmetleri",
      src: "/designs/design-2.jpg",
      widht: 320,
      height: 320,
      // href: "/parsiyel-yuk-tasimaciligi",
    },
    {
      title: "Bakırköy Nakliyat Hizmetleri",
      src: "/designs/design-3.jpg",
      widht: 320,
      height: 320,
      // href: "/parsiyel-yuk-tasimaciligi",
    },
  ];

  const anadolu = [
    {
      title: "Çamlıca Nakliyat Hizmetleri",
      src: "/designs/design-4.jpg",
      widht: 320,
      height: 320,
      // href: "/sehir-ici-nakliye",
    },
    {
      title: "Feratpaşa Nakliyat Hizmetleri",
      src: "/designs/design-5.jpg",
      widht: 320,
      height: 320,
      // href: "/parca-esya-tasimaciligi",
    },
    {
      title: "Gebze Nakliyat Hizmetleri",
      src: "/designs/design-6.jpg",
      widht: 320,
      height: 320,
      // href: "/evden-eve-nakliyat",
    },
    {
      title: "Kartal Nakliyat Hizmetleri",
      src: "/designs/design-7.jpg",
      widht: 320,
      height: 320,
      // href: "/hafriyat-tasimaciligi",
    },
    {
      title: "Sancaktepe Nakliyat Hizmetleri",
      src: "/designs/design-8.jpg",
      widht: 320,
      height: 320,
      // href: "/ofis-buro-tasimaciligi",
    },
    {
      title: "Tuzla Nakliyat Hizmetleri",
      src: "/designs/design-9.jpg",
      widht: 320,
      height: 320,
      // href: "/parsiyel-yuk-tasimaciligi",
    },
    {
      title: "Ümraniye Nakliyat Hizmetleri",
      src: "/designs/design-1.jpg",
      widht: 320,
      height: 320,
      // href: "/parsiyel-yuk-tasimaciligi",
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
              // // href={hizmet.href}
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
              // // href={hizmet.href}
            />
          </div>
        ))}
      </div>
      <InfoBox content={content} />
    </div>
  );
}
