import Banner from "@/components/Banner";
import InfoBox from "@/components/InfoBox";

export default function EvdenEveNakliyat() {
  const content = `
<p>Ev taşımak, hayatımızın vazgeçilmez bir parçası haline gelmiştir. Taşınmak bir kişi için heyecan verici bir deneyim olabilir. 
Yeni evli bir çift için, ilk evlerine taşınmak yeni bir başlangıcın habercisidir; üniversiteye adım atan bir genç içinse farklı bir dünyayı keşfetmeye yönelik ilk adımdır. 
Semt ya da ilçe değiştiren bir aile içinse yeni bir düzen kurmanın coşkusu vardır. Tayin, terfi ya da iş değişikliğiyle hayatında değişiklik yapmak zorunda kalan bireyler içinse bu süreç, kazandıracağı yeni deneyimlere işaret eder. 
Tüm bu anlar, hayatımızın önemli dönüm noktalarından biridir.</p>

<p>Ancak, bu süreç heyecan verici olduğu kadar stresli de olabilir. Taşınma sırasında karşılaşılan aksaklıklar, motivasyonumuzu olumsuz etkileyebilir. 
Biz, her şeyin sorunsuz ilerlemesini isteriz. Eşyalarımızın zarar görmemesi, eski ve yeni adresimizdeki kişilerin taşınmamızdan olumsuz etkilenmemesi, eşyalarımızın zamanında ulaşması ve 
tüm bu işlemlerin zamanımızı fazla almaması gerekir.</p>

<p>Evden eve taşıma, sıradan bir taşınma sürecinden çok daha fazlasıdır; günümüzün hızlı yaşam temposunda çok sayıda ihtiyaca yanıt veren kapsamlı bir süreçtir. 
Uzmanlar tarafından gerçekleştirildiğinde ise tek yapmanız gereken, yeni hayatınıza başlamanın keyfini sürmektir.</p>

<h3><strong>Bilir Nakliyat Farkı ile Taşımanın Adımları:</strong></h3>
<ul>
  <li><strong>Eksper Değerlendirmesi:</strong> İlk olarak, taşınacak eşyalarınızı yerinde inceleyerek en uygun taşıma planını oluşturuyoruz. Eşyalarınızın büyüklüğüne ve taşınacağı alana göre en ideal çözümü sunuyoruz.</li>
  <li><strong>Uygun Araç Seçimi:</strong> Her tür eşya için özel olarak seçtiğimiz araçlar ile taşıma işleminizi en verimli şekilde gerçekleştiriyoruz. Asansörlü araçlardan, uygun kapasitedeki taşıma araçlarına kadar her ihtimale göre hazırlıklı oluyoruz.</li>
  <li><strong>Güvenli Taşıma:</strong> Taşıma işlemi için gerekli tüm çevre güvenlik önlemlerini alıyor, araç park yerini dikkatlice belirliyoruz. Asansörlü taşıma işlemiyle eşyalarınızın zarar görmesini engelliyoruz.</li>
  <li><strong>Özenli Paketleme:</strong> Kırılabilecek eşyalarınızı özel malzemelerle dikkatlice paketliyor ve her kutuyu doğru şekilde işaretliyoruz. Bu sayede taşıma sırasında hiçbir eşyanızın zarar görmesini engelliyoruz.</li>
  <li><strong>Envanter Takibi:</strong> Taşıma öncesi ve sonrası her eşyanın kaybolmaması veya karışmaması için detaylı bir envanter kontrolü yapıyoruz. Bu sayede taşınacak her eşya güvenle yerini buluyor.</li>
  <li><strong>Sigorta:</strong> Eşyalarınızı taşırken oluşabilecek olası zararları önceden sigortalayarak size güvence sağlıyoruz. Her adımda, her eşyanın güvenliği için garanti sunuyoruz.</li>
  <li><strong>Zamanında Teslimat:</strong> Eşyalarınızın belirlenen adrese zamanında ve güvenli bir şekilde ulaşmasını sağlıyoruz. Planlanan süre içinde taşınma işlemini tamamlıyoruz.</li>
  <li><strong>Yerleştirme ve Temizlik:</strong> Yeni adresinizde, eşyalarınızı en uygun şekilde yerleştiriyor ve taşınma sonrasında temizlik ve hijyen koşullarına uygun teslimat yapıyoruz. Yeni evinize hızlıca yerleşmeniz için tüm detayları önceden planlıyoruz.</li>
</ul>

<p>Eşyalarınızın hasarsız ve zamanında teslimatıyla, müşteri memnuniyetini ön planda tutarak sunduğumuz kapıdan kapıya hizmet, bizim uzmanlık alanımız!</p>
`;


    

  return (
    <div>
      <Banner title={"EVDEN EVE NAKLİYAT"} src="/photo.jpg" alt={"Ana-Resim"} />
      <InfoBox content={content} />
    </div>
  );
}
