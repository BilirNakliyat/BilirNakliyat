// import styles from "./styles.module.css";
import InfoBox from "@/components/InfoBox";
import Banner from "@/components/Banner";

export default function ParcaEsyaTasımaciligi() {
  const content = `
    <div>
      <p>
        Bilir Nakliyat olarak, parça eşya taşımacılığı hizmeti sunuyoruz. Parça eşya taşıma, bir aracı doldurmayacak kadar küçük miktardaki eşyaların, diğer yüklerle birlikte taşınması işlemidir. Bu yöntem, özellikle küçük işletmeler ve bireysel müşteriler için ekonomik bir seçenek sunar. Eşyalarınız, güvenli bir şekilde sigortalanarak, en uygun taşıma koşullarında hedef noktasına ulaşır.
      </p>
      <p>
        Parça eşya taşımacılığı hizmetimizle, sadece ihtiyacınız olan kadar alan kiralayarak, taşımacılık maliyetlerinizi minimize edebilirsiniz. Deneyimli ekibimiz, eşyalarınızın güvenli ve zamanında taşınması için titizlikle çalışmaktadır.
      </p>
    </div>`
  
  return (
    <div>
      <Banner title={"PARÇA EŞYA TAŞIMACILIĞI"} src="/photo.jpg" alt={"Ana-Resim"} />
      <InfoBox content={content} />
    </div>
  );
}
