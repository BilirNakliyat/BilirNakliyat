import styles from './styles.module.css'

function WhyWe() {
  return (
    <div className={styles.box}>
        <h2 className={styles.h2}>Neden Biz?</h2>
        <ul className={styles.ul}>
            <li className={styles.li}>Türkiye’nin her köşesine güvenli ve kaliteli nakliye hizmeti sunuyoruz.</li>
            <li className={styles.li}>Eşyalarınızı sigortalayarak olası hasarlara karşı tam koruma sağlıyoruz.</li>
            <li className={styles.li}>Doğru ambalaj teknikleri ve kaliteli malzemelerle, eşyalarınızı aynen aldığınız gibi güvenle teslim ediyoruz.</li>
            <li className={styles.li}>Depolama hizmetimizle, eşya hacminize uygun alanlarda, istediğiniz süre boyunca güvenle muhafaza imkanı sağlıyoruz.</li>
            <li className={styles.li}>Parsiyel taşımacılık ve ofis taşımacılığı gibi özel hizmetlerle, eşyalarınızı özenle yeni adresinize ulaştırıyoruz.</li>
            <li className={styles.li}>Uygun fiyatlarla nakliye ve ambar hizmeti sunarak bütçenize dost çözümler üretiyoruz.</li>
            <li className={styles.li}>Profesyonel ekibimiz ve güçlü altyapımızla, her zaman yüzde 100 müşteri memnuniyeti garantisi veriyoruz.</li>
        </ul>
    </div>
  )
}

export default WhyWe