import Banner from "@/components/Banner";
import InfoBox from "@/components/InfoBox";

export default function AsansorluTasima() {
  const content = `
<p><strong>Asansörlü Taşıma Hizmetiyle Kolay ve Güvenli Taşıma</strong><br>Ev ve ofis taşıma işlemi, asansörlü sistemlerle artık çok daha kolay. Bazı ev ve ofis eşyaları, büyüklük ve ağırlıkları nedeniyle insan gücüyle taşınamayacak kadar zorlayıcı olabilir. Yüksek binalarda, eşyaların dışarıya çıkarılması ciddi bir zorluk teşkil eder ve ağır eşyaların taşınması insan sağlığı ve güvenliği açısından riskler doğurur. İşte tam bu noktada, <strong>Bilir Nakliyat</strong> olarak asansörlü taşıma sistemleri devreye girer.</p>

<p>Binanın önüne güvenlik kontrolleri yapılarak park edilen ve çevre güvenliği sağlanan asansörlü araçlarla, eşyalarınızı pratik, hızlı ve zahmetsiz bir şekilde taşıyabilirsiniz. Asansörlü taşımacılık, sadece işleri kolaylaştırmakla kalmaz, aynı zamanda uzmanlık ve maksimum özen gerektiren bir süreçtir. Bu nedenle, bu hizmeti deneyimli ve profesyonel bir ekiple almanız çok önemlidir.</p>

<p><strong>Asansörlü Taşıma Süreci</strong><br>Eşyalarınız, uygun balkonlar veya pencereler aracılığıyla asansörlü sistemle dışarı çıkarılır ve güvenli bir şekilde taşınır. Bu işlem, zamandan tasarruf sağladığı gibi insan gücü ihtiyacını da azaltır ve böylece taşıma maliyetlerinizi düşürür. Güvenli, pratik ve hızlı taşıma için vazgeçilmez olan asansörlü araç, deneyimli teknik ekibimiz tarafından kullanılarak sorunsuz bir taşıma süreci sağlar.</p>

<p><strong>Faydaları:</strong></p>
<ul>
  <li><strong>Ağır Eşyaların Taşınması:</strong> Asansörlü taşıma sistemiyle, büyük ev eşyaları, ofis malzemeleri, elektronik cihazlar, fuar malzemeleri ve daha fazlası güvenli bir şekilde taşınabilir.</li>
  <li><strong>Maliyet Avantajı:</strong> Forklift veya vinç kullanımına gerek duyulmadığı için bu ekipmanların maliyeti ortadan kalkar. Ayrıca daha az insan gücü kullanımıyla maliyetleriniz de düşer.</li>
  <li><strong>Yüksek Katlar ve Dar Alanlar:</strong> Asansörlü taşıma sayesinde, eşyalarınızın bulunduğu katın yüksekliği veya bina merdivenlerinin dar olması gibi engeller artık sorun oluşturmaz.</li>
</ul>

<p><strong>Bilir Nakliyat</strong> olarak, asansörlü taşımacılık hizmetinde sahip olduğumuz uzmanlık ve ekipman sayesinde her adımda maksimum kalite ve verimlilik sağlıyoruz. Profesyonel ekibimiz, taşıma sürecinin her aşamasında titizlikle çalışarak, eşyalarınızın sorunsuz ve güvenli bir şekilde yeni yerlerine ulaşmasını sağlıyoruz.</p>
`;


    

  return (
    <div>
      <Banner title={"ASANSÖRLÜ TAŞIMA HİZMETİMİZ"} src="/photo.jpg" alt={"Ana-Resim"} />
      <InfoBox content={content} />
    </div>
  );
}
