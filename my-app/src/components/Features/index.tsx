import styles from "./styles.module.css";
import Icon from "@/components/Icon";

const features = [
  {
    icon: "clock",
    title: "Zamanında Taşıma",
    description:
      "En doğru takvim planlamasını yapıyor, teslimatı sözleştiğimiz gibi tam vaktinde gerçekleştiriyoruz. Tüm süreci şeffaf bir şekilde müşterilerimizle paylaşıyoruz.",
  },
  {
    icon: "tie",
    title: "Deneyimli Ekip",
    description:
      "Uzman kadromuzla her zaman en iyi hizmeti sunmak için çalışıyoruz. Teknoloji kullanımında ve süreç yönetiminde daima kendimizi yeniliyoruz.",
  },
  {
    icon: "truck",
    title: "Güçlü Lojistik Altyapısı",
    description:
      "Taşıma sürecinizin her aşamasında, güçlü lojistik altyapımız sayesinde sorunsuz bir hizmet sunuyoruz. Yüksek kapasiteli araçlarımız ve deneyimli ekibimizle, eşyalarınızı en verimli şekilde taşıyoruz",
  },
];

const Features = () => {
  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <div key={index} className={styles.feature}>
          <Icon name={feature.icon as "clock" | "tie" | "truck"} size="3rem" color="black" className={styles.icon} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
