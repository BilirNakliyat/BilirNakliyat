import Banner from "@/components/Banner";
import MainInfoBox from "@/components/MainInfoBox";
import OfferForm from "@/components/OfferForm";
import IletisimSection from "@/components/IletisimSection";
import Features from "@/components/Features";
import WhyWe from "@/components/WhyWe";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Banner title={"BİLİR NAKLİYAT"} src="/photo.jpg" alt={"Ana-Resim"} />
      <Features />
      <div className="main-info-boxes">
      <MainInfoBox 
        title="title"
        content="content"
      />
      </div>
      <div className="main-info-boxes">
      <MainInfoBox
        title="title"
        content="content" />
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
