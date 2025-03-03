import styles from "./styles.module.css";
// import Banner from "@/components/Banner";
import MainContent from "@/components/MainContent";

export default function Hakkimizda() {
  const content = `
    <p><strong>Bilir Nakliyat</strong> olarak, <strong>2003 yılından beri</strong> taşımacılık hizmeti sunuyoruz. Kuruluşumuzdan bu yana, <em>profesyonel ve deneyimli ekibimizle</em>, müşteri odaklı yaklaşımımızı sürekli geliştirerek sektördeki yerimizi güçlendirdik.</p>
    
    <h3>Hizmetlerimiz</h3>
    <ul>
      <li>Şehir içi yük taşımacılığı</li>
      <li>Evden eve nakliyat</li>
      <li>Parsiyel yük taşımacılığı</li>
      <li>Ofis ve büro taşımacılığı</li>
      <li>Asansörlü taşıma</li>
      <li>Ambar taşımacılığı</li>
      <li>Paketleme ve depolama</li>
      <li>Şehirlerarası nakliye</li>
      <li>Hafriyat taşımacılığı</li>
    </ul>

    <p>Eşyalarınızın bir noktadan diğerine güvenli ve zamanında taşınması, <strong>profesyonellik gerektiren</strong> bir süreçtir. Bu yüzden, hizmetlerimizde hız, güven ve organizasyon becerisi bizim için çok önemlidir.</p>

    <h3>Güvenli ve Teknolojik Nakliyat</h3>
    <p>Standartlara uygun araçlarımız, <strong>araç takip sistemlerimiz</strong> ve teknolojiyle uyumlu süreçlerimiz sayesinde eşyalarınızı güvenle, zamanında teslim ediyoruz.</p>

    <p><strong>Bilir Nakliyat</strong> olarak, hızlı ve güvenilir taşımacılık hizmeti arayan müşterilerimize <em>profesyonel çözümler</em> sunmaktan gurur duyuyoruz.</p>
  `;

  return( 
    <div className={styles.container}>
      {/* <Banner title={"BİLİR NAKLİYAT"} src="/photo.jpg" alt={"Ana-Resim"} /> */}
      <MainContent bg="/photos/photo-1.jpg" title="Hakkımızda" htmlContent={content} />
    </div>
  );
}
