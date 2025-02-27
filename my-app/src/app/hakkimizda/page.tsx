import styles from "./styles.module.css";
// import Banner from "@/components/Banner";
import MainContent from "@/components/MainContent";

export default function Hakkimizda() {
  return( 
  <div className={styles.container}>
    {/* <Banner title={"BİLİR NAKLİYAT"} src="/photo.jpg" alt={"Ana-Resim"} /> */}
    <MainContent
      title="Hakkımızda"
      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
  </div>
  );
}
