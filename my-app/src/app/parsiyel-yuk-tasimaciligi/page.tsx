// import styles from "./styles.module.css";
import InfoBox from "@/components/InfoBox";
import Banner from "@/components/Banner";

export default function ParsiyelYukTasımaciligi() {
  const content =
    "Evden eve taşıma, ofis büro taşımacılığı, belli özel eşyaların taşınması gibi durumlarda şehirlerarası taşımaya ihtiyaç duyduğunuzda firmamızın ayrıcalıklı hizmetlerinden yararlanabilirsiniz.";

  return (
    <div>
      <Banner title={"PARSİYEL YÜK TAŞIMACILIĞI"} src="/photo.jpg" alt={"Ana-Resim"} />
      <InfoBox content={content} />
    </div>
  );
}
