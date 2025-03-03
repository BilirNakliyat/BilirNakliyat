import styles from "./styles.module.css";
import InfoBox from "@/components/InfoBox";
import Banner from "@/components/Banner";
import Box from "@/components/Box";

export default function SehirlerarasiNakliye() {
  const content = `
  <p>Modern taşıma olanaklarımızla her türlü nakliye işinizi İstanbul dışında da güvenle gerçekleştiriyoruz. 
  Teslimat rotalarımız arasında <strong>İzmir, Bursa, Eskişehir, Ankara, Tokat, Sakarya (Adapazarı), Kocaeli</strong> ve <strong>Bolu</strong> illeri yer almaktadır. 
  Yeni rotalar geliştirmeye devam ediyor ve hizmet ağımızı genişletiyoruz.</p>
  
  <p>Evden eve taşıma, ofis taşımacılığı ve özel eşyaların taşınması gibi durumlarda şehirlerarası taşımaya ihtiyaç duyduğunuzda 
  <strong>Bilir Nakliyat</strong>'ın ayrıcalıklı hizmetlerinden faydalanabilirsiniz.</p>
  
  <p>Şehirlerarası nakliyede, taşıma işleminin başarılı ve güvenli bir şekilde tamamlanabilmesi için birçok faktörün doğru bir şekilde planlanması gerekir. 
  Araçların kapasitesi, şoförlerin deneyimi, güzergahın belirlenmesi, güvenli yolculuk koşullarının sağlanması ve zaman planlamasının doğru yapılması kritik öneme sahiptir. 
  Taşıma işlemi, uzun yol koşullarına uygun araçlarla yapılmalıdır.</p>
  
  <h3><strong>Süreçte Uygulanan Adımlar:</strong></h3>
  <ul>
    <li><strong>Taşıma için Gerekli Araçlar:</strong> Şehirlerarası taşıma için uygun büyüklükte kapalı kasa araçlar kullanılır.</li>
    <li><strong>Güzergah Belirleme ve Zaman Planlaması:</strong> Taşıma güzergahı belirlenir ve zaman planlaması yapılır.</li>
    <li><strong>Eşya Analizi:</strong> Eksper tarafından eşyalarınız analiz edilerek taşımaya uygun hale getirilir.</li>
    <li><strong>Sigortalı Taşıma:</strong> Eşyalarınız sigorta kapsamına alınarak güvenliği sağlanır.</li>
    <li><strong>Paketleme ve Ambalajlama:</strong> Eşyalar türlerine göre kolilenir, ambalajlanır ya da paketlenir.</li>
    <li><strong>Forklift ve Asansörlü Yardım:</strong> Gerekli durumlarda forklift ve asansörlü araç kullanılarak büyük eşyaların taşıma işlemi yapılır.</li>
    <li><strong>Yükleme:</strong> İlk olarak büyük eşyalar, aralarındaki boşlukları en aza indirecek şekilde araçlara yüklenir.</li>
    <li><strong>Küçük Eşyaların Taşıma:</strong> Küçük eşyalar güvenli bir şekilde araçlara yerleştirilir.</li>
    <li><strong>Hassas Eşyaların Korunması:</strong> Hassas ve kırılgan eşyalar için en güvenli alanlar oluşturulur.</li>
    <li><strong>Yola Çıkış:</strong> Tüm eşyalar türlerine göre uygun koşullarda araçlara yerleştirildikten sonra, belirlenen güzergah üzerinden yola çıkılır.</li>
  </ul>
  
  <p>Şehirlerarası nakliye, uzun mesafeler içerdiği için çeşitli riskler barındırabilir. 
  Yolda karşılaşılabilecek beklenmedik durumlar, olası aksaklıklar taşımanın doğal bir parçasıdır. 
  Bu yüzden, <strong>sigortalı taşıma</strong> hizmetimizle eşyalarınızı olası risklere karşı koruma altına alıyoruz.</p>
  
  <p>Şehirlerarası taşımada, gerekli izinler ve belgeler alınarak hizmet verilir. Yolculuk sırasında mesafeye bağlı olarak yedek şoför bulundurulmaktadır.</p>
  
  <p><strong>Geniş araç filomuz</strong>, <strong>uzun yol tecrübesi</strong> olan şoförlerimiz ve <strong>taşımacılık deneyimimiz</strong> ile, 
  şehirlerarası nakliye hizmetlerimiz en önemli uzmanlık alanlarımızdan biridir.</p>
  `;
  
  
    
  const boxes = [
    {
      title: "Antalya Şehilerarası Nakliye",
      src: "/designs/design-1.jpg",
    },
    {
      title: "Ankara Şehirlerarası Nakliye",
      src: "/designs/design-2.jpg",
    },
    {
      title: "İzmir Şehilerarası Nakliye",
      src: "/designs/design-3.jpg",
    },
    {
      title: "Eskişehir Şehirlerarası Nakliye",
      src: "/designs/design-4.jpg",
    },
    {
      title: "Bursa Şehilerarası Nakliye",
      src: "/designs/design-5.jpg",
    },
    {
      title: "Sakarya Şehirlerarası Nakliye",
      src: "/designs/design-6.jpg",
    },
    {
      title: "Tokat Şehirlerarası Nakliye",
      src: "/designs/design-7.jpg",
    },
  ];
  return (
    <div>
      <Banner
        title={"ŞEHİRLERARASI NAKLİYE"}
        src="/nakliyat3.jpg"
        alt={"Ana-Resim"}
      />

      <div className={styles.container}>
        {boxes.map((box, index) => (
          <div className={styles.box} key={index}>
            <Box title={box.title} src={box.src} />
          </div>
        ))}
      </div>

      <InfoBox content={content} />
    </div>
  );
}
