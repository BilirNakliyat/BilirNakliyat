// import styles from "./styles.module.css";
import InfoBox from "@/components/InfoBox";
import Banner from "@/components/Banner";

export default function ParsiyelYukTasımaciligi() {
  const content = `
  <h2><strong>Uluslararası Karayolu Taşımacılığı ve Parsiyel Taşıma</strong></h2>
  
  <p>Küreselleşmenin etkisiyle ürün ve malzemelerin uluslararası arenada dolaşım ihtiyacı hızla artmış, bu da ulaşım faaliyetlerinin önemli ölçüde çoğalmasına sebep olmuştur. 
  <strong>Uluslararası karayolu taşımacılığı</strong>, günümüzde dünya çapındaki mal trafiğinde önemli bir rol oynamaktadır.</p>
  
  <p>Karayolu taşımacılığı, malların belirli bir bedel karşılığında <strong>uluslararası anlaşmalar</strong> çerçevesinde taşınmasını sağlayan bir sistemdir. 
  Bu sistemin bir parçası olan <strong>parsiyel taşımacılık</strong>, aynı güzergahta taşınacak ve farklı müşterilere ait olan yüklerin, tek bir araçla taşınması işlemidir. 
  Parsiyel taşımacılığın, birden fazla tarafın yer aldığı bir süreç olması nedeniyle, teslimat organizasyonunun doğru planlanması ve yüklerin zamanında teslim edilmesi büyük önem taşır.</p>
  
  <h3><strong>Parsiyel Taşımacılığın Avantajları</strong></h3>
  <ul>
    <li><strong>Maliyet Avantajı:</strong> Parsiyel taşımacılığın en büyük avantajı, maliyetlerin paylaşılmasıdır. 
    Bir aracın tüm maliyetini üstlenmek yerine, yakıt maliyeti gibi giderler diğer müşterilerle paylaşılır, bu da toplam maliyeti düşürür.</li>
    <li><strong>Esneklik:</strong> Farklı büyüklükteki yüklerin aynı araçta taşınmasına imkan tanır.</li>
    <li><strong>Çevre Dostu:</strong> Daha az araç kullanımı sayesinde karbon salınımı azalır.</li>
    <li><strong>Verimli Lojistik:</strong> Parsiyel taşıma, taşıma sürelerini optimize ederek lojistik sürecini daha etkili hale getirir.</li>
  </ul>
  
  <p>Bu özellikler, <strong>parsiyel taşımacılığı</strong> en çok tercih edilen sistemlerden biri haline getirir. 
  Alanında uzman ekibimiz, eşyalarınızın en güvenli ve verimli şekilde parsiyel taşımacılığını gerçekleştirmek için her zaman hazırdır.</p>
  `;
  
  return (
    <div>
      <Banner title={"PARSİYEL YÜK TAŞIMACILIĞI"} src="/photo.jpg" alt={"Ana-Resim"} />
      <InfoBox content={content} />
    </div>
  );
}
