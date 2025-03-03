// import styles from "./styles.module.css";
import InfoBox from "@/components/InfoBox";
import Banner from "@/components/Banner";

export default function OfisBuroTasimaciligi() {
  const content = `<p><strong>Ofis Taşıma Hizmeti</strong><br>Günümüzde ofis taşıma işlemleri, insanların yaşamını kolaylaştırmak için ofis taşıma firmaları tarafından profesyonelce sunulmaktadır. Her ne kadar benzer hizmetler verilse de, hizmet kalitesi firmadan firmaya değişiklik göstermektedir. Bilir Nakliyat olarak, ofis taşıma sektöründeki en önemli faktörlerin; araçlar, ekipmanlar, ambalaj malzemeleri, personel ve güvenilirlik olduğunun bilincindeyiz. Hijyen koşullarına uygun, güler yüzlü ve deneyimli personelimizle, eşyalarınızı sağlam şekilde, hiçbir fonksiyon kaybı olmadan ve zaman kaybı yaratmadan yeni çalışma alanlarınıza taşımak ve yerleştirmek için kendimizi sürekli olarak geliştiriyoruz.</p>

  <p><strong>Güvenlik, Kalite ve Şeffaflık</strong><br>Ofis eşyalarınızın işletmeniz için değerli olduğunun farkındayız. Eşyalarınızın her birinin belirli bir kullanım alanı vardır ve bu alanların değiştirilmesi veya dosyaların karışması iş akışınızı aksatabilir. Bilir Nakliyat olarak, eşyalarınızın kaybolmadan, zarar görmeden, fonksiyon kaybı yaşamadan ve en önemlisi zaman kaybı olmadan taşınmasını sağlamak için her adımda titizlikle çalışıyoruz. Amacımız, alıştığınız düzeni bozmadan ve hiçbir aksama yaşatmadan eşyalarınızın yeni ofisinize yerleşmesini sağlamak.</p>
  
  <p><strong>Ofis Taşıma Süreci</strong><br>Ofis taşıma süreci, uzman personelimizin ofisinize gelerek eşyalarınızı incelemesiyle başlar. Tüm eşyalar analiz edilir, taşınacak yüklere uygun araçlar belirlenir ve gerekli durumlarda asansörlü araç temin edilir. Nakliye günü geldiğinde, eşyalarınız türlerine göre ayrılır ve sigortalanır. Mobilya ve dolaplar demonte edilerek taşımaya uygun hale getirilir. Her bir eşya, en iyi şekilde korunması için uygun ambalaj malzemeleriyle sarılır. Dosyalar uygun kolilere yerleştirilir, üzerine açıklamalar yazılır ve koli sayımları yapılır. Eşyaların güvenli şekilde taşınması için en uygun yükleme planı hazırlanır ve taşıma araçları park edilir. Varış noktasında ise, aynı titizlikle eşyalar indirilir ve yerleştirilir. Kurulumlar tamamlanır ve tüm işlemler gözden geçirilerek teslimat yapılır.</p>
  `;
  return (
    <div>
      <Banner
        title={"OFİS BÜRO TAŞIMACILIĞI"}
        src="/photo.jpg"
        alt={"Ana-Resim"}
      />
      <InfoBox content={content} />
    </div>
  );
}
