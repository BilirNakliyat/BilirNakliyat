// import styles from "./styles.module.css";
import InfoBox from "@/components/InfoBox";
import Banner from "@/components/Banner";

export default function HafriyatTasımaciligi() {
  const content = `
  <p>İnşaat çalışmaları, tadilat işlemleri, yıkılmaya yüz tutmuş binaların güvenli bir şekilde kaldırılması veya binanın bazı bölümlerinin yenilenmesi sırasında hafriyat ortaya çıkmaktadır. Arıza, yenileme veya benzer durumlar da hafriyat oluşumuna yol açabilir. Bu biriken molozların güvenli bir şekilde kaldırılıp taşınması, işin sağlıklı bir şekilde tamamlanması için oldukça önemlidir.</p>

<p>Hafriyat taşımacılığı, belirli bir prosedür dahilinde gerçekleşen bir işlemdir. Bu işlemi gerçekleştirecek firmanın, yasal gereklilikleri yerine getirmesi ve gerekli izinleri alması gerekmektedir. Hafriyat taşıma sürecinde, işin beyanı için dilekçe, inşaat ruhsatı, atığın üreticisine ait vergi levhası, taşıma izin belgesi ve taşıyıcı araçların ruhsatı gibi belgeler gereklidir. Ayrıca, hafriyat kamyonlarının belirli özelliklere sahip olması gerektiği unutulmamalıdır.</p>

<p><strong>Bilir Nakliyat</strong>, hafriyat taşımacılığı konusunda uzmanlaşmış ve yetkilendirilmiş bir firmadır. Hafriyat taşıma işlemleri için firmamızdan teklif alabilirsiniz. Molozları İstanbul Büyükşehir Belediyesi’nin belirlediği alanlara taşımak için, moloz türüne göre uygun büyüklükte taşıma araçları kullanıyoruz. Moloz yükleme işlemi, iş makinelerinin kullanılamadığı alanlarda insan gücüyle yapılmaktadır.</p>

<p>Uygun araçlar, gerekli izin belgeleri ve deneyimli personelimizle, hafriyat taşımacılığı konusunda sorunsuz hizmeti <strong>Bilir Nakliyat</strong> olarak sunuyoruz.</p>
  `;
  return (
    <div>
      <Banner
        title={"HAFRİYAT TAŞIMACILIĞI"}
        src="/photo.jpg"
        alt={"Ana-Resim"}
      />
      <InfoBox content={content} />
    </div>
  );
}
