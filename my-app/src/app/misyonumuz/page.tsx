import styles from "./styles.module.css"; 
import MainContent from "@/components/MainContent";

export default function Misyonumuz() {
  const content = `
    <p>Misyonumuz; hizmetlerimizi sürekli iyileştirerek tam müşteri memnuniyetine ulaşmak, güvenilir ve hızlı çözümlerle taşımacılık hizmeti sunarak sektördeki en çok tercih edilen markalardan biri olmaktır.</p>
    
    <h3>Tüm Taşıma Hizmetlerinde Bizim En Büyük Önceliğimiz:</h3>
    <ul>
      <li><strong>Müşteri Memnuniyeti</strong></li>
      <li><strong>Güvenilirlik</strong></li>
      <li><strong>Hız</strong></li>
      <li><strong>Ekonomik Çözümler</strong></li>
    </ul>

    <p>Bizim için her taşıma, yalnızca eşyaların bir yerden bir yere taşınması değil; aynı zamanda güvenli, hızlı ve ekonomik bir çözüm sunarak, müşteri memnuniyetini en üst seviyede tutmaktır.</p>
  `;

  return (
    <div className={styles.container}>
      <MainContent bg="/photos/photo-3.jpg" title="Misyonumuz" htmlContent={content} />
    </div>
  );
}
