// import styles from "./styles.module.css";
import InfoBox from "@/components/InfoBox";
import Banner from "@/components/Banner";

export default function OfisBuroTasimaciligi() {
  const content =
    "Evden eve taşıma, ofis büro taşımacılığı, belli özel eşyaların taşınması gibi durumlarda şehirlerarası taşımaya ihtiyaç duyduğunuzda firmamızın ayrıcalıklı hizmetlerinden yararlanabilirsiniz.";

  return (
    <div>
      <Banner title={"OFİS BÜRO TAŞIMACILIĞI"} src="/photo.jpg" alt={"Ana-Resim"} />
      <InfoBox content={content} />
    </div>
  );
}
