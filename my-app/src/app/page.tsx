import Banner from "@/components/Banner";
import MainInfoBox from "@/components/MainInfoBox";
import OfferForm from "@/components/OfferForm";
import IletisimSection from "@/components/IletisimSection";
import Features from "@/components/Features";
import WhyWe from "@/components/WhyWe";

export default function Home() {
  const imagesSrc = [
    '/nakliyat1.jpg',
    '/nakliyat2.jpg',
    // '/nakliyat3.jpg',
  ];

  const imagesAlt = [
    'photo-1',
    'photo-2',
    // 'photo-3',
  ];

  const content2 = "İstanbul'un her köşesine kolay, hızlı ve güvenli ulaşım sağlıyoruz. Modern araçlarımız ve kullanıcı dostu platformumuzla şehir içindeki tüm ihtiyaçlarınıza çözüm sunuyoruz."
  const content1 = "Yolculuklarınızı güvenli, konforlu ve zamanında tamamlamanızı sağlıyoruz. Geniş araç filomuz ve profesyonel hizmetimizle şehirler arası ulaşım deneyiminizi mükemmelleştiriyoruz.";
  
  return (
    <div style={{ width: "100%" }}>
      <Banner title={"BİLİR NAKLİYAT"} src={imagesSrc} alt={imagesAlt} />
      <Features />
      <div className="main-info-boxes">
        <MainInfoBox src="/photos/photo-5.jpg" title="Şehirlerarası Nakliye" content={content1} href="/sehirlerarasi-nakliye" />
      </div>
      <div className="main-info-boxes">
        <MainInfoBox src="/photos/photo-3.jpg" title="İstanbul Nakliye" content={content2} href="/istanbul-nakliye" />
      </div>
      <OfferForm />
      <WhyWe />
      <IletisimSection
        adress="Solaris Mahallesi, Luminova İlçesi, Auroria Sitesi, Nova Terra No:16"
        ilIlce="ILCE/IL"
      />
    </div>
  );
}
