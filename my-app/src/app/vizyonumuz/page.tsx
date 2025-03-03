import styles from "./styles.module.css";
import MainContent from "@/components/MainContent";

export default function Vizyonumuz() {
  const content = `
    <p>
      <strong>Vizyonumuz</strong>; taşımacılık sektöründe lider bir marka olmayı, 
      teknolojiyi ve yenilikçi çözümleri en iyi şekilde kullanarak müşterilerimize 
      en güvenilir, hızlı ve ekonomik hizmeti sunmayı hedefliyoruz.
    </p>

    <h3>Hedeflerimiz:</h3>
    <ul>
      <li>Müşteri odaklı yaklaşımımızla sektördeki en saygın firmalardan biri olmak</li>
      <li>Taşımacılık süreçlerinde mükemmeliyeti yakalayarak alanında öncü olmak</li>
      <li>Güven, hız ve kalite odaklı taşımacılık anlayışı sunmak</li>
      <li>Müşterilerimizin her zaman ilk tercihi olmak</li>
    </ul>

    <p>
      Biz, her taşıma işlemini bir <strong>güven, hız ve kalite</strong> deneyimi olarak sunmayı 
      ve sektörde öncü konuma yükselmeyi amaçlıyoruz.
    </p>
  `;

  return (
    <div className={styles.container}>
      <MainContent bg="/photo.jpg" title="Vizyonumuz" htmlContent={content} />
    </div>
  );
}
