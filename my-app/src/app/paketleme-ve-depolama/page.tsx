import Banner from "@/components/Banner";
import InfoBox from "@/components/InfoBox";

export default function PaketlemeDepolama() {
  const content = `
<p><strong>Bilir Nakliyat</strong> olarak, müşterilerimize yalnızca taşıma değil, aynı zamanda eşyalarını güvenle saklayabilecekleri paketleme ve depolama hizmetleri de sunuyoruz. Bazen taşınacak eşyalarınızın depolanması gerekebilir; bu tür durumlar için doğru güvenlikli alanların sağlanması çok önemlidir. Eşyalarınız, ev taşıma sürecinde henüz yerleştirilmesi mümkün olmayan özel eşyalar olabilir ya da ofis taşınması veya küçültülmesi durumlarında, kullanılmaya devam edilecek ofis eşyalarınız olabilir. Ayrıca, zaman açısından teslimat için bekletilmesi gereken ürünleriniz de olabilir. Bu tür her durumda, eşyalarınızın güvenli bir şekilde depolanmasını sağlıyoruz.</p>

<p><strong>Eşyalarınızı Güvenle Depolayın</strong><br>Eşyalarınızın, saklama süresi boyunca zarar görmeden ve fonksiyonlarını kaybetmeden korunması için doğru paketleme işlemi ilk adımdır. Eşyalarınızın türüne göre en uygun ambalaj malzemeleriyle paketlenmesi sağlanır. Plastik, kağıt, hava kabarcıklı naylon gibi farklı ambalaj malzemeleri ile her ihtimale karşı eşyalarınız özenle paketlenir.</p>

<p><strong>Paketleme ve Depolama Süreci</strong></p>
<ol>
  <li><strong>Eşyaların Tespiti ve Ambalajlama:</strong> Depolanacak eşyalarınız belirlenir ve her tür eşya için en uygun ambalaj malzemesi temin edilerek, zarar görmeden paketlenir.</li>
  <li><strong>Söküm ve Taşıma:</strong> Eşyalarınız, uzman ekibimiz tarafından dikkatlice sökülür ve taşıma araçları ile güvenli bir şekilde depolama alanına taşınır. İhtiyaca göre forklift, vinç ya da asansörlü sistem kullanımı yapılır.</li>
  <li><strong>Hijyenik ve Güvenli Depolama:</strong> Depolama alanlarımız, hijyenik koşullar altında ve güvenli bir şekilde hazırlanır. Eşyalarınız, herhangi bir zarar görmeden bekletilir.</li>
  <li><strong>Taşıma ve Teslimat:</strong> Eşyalarınızı depolama alanında güvenli bir şekilde sakladıktan sonra, istediğiniz zaman belirttiğiniz yere taşır ve teslimatınızı yaparız.</li>
</ol>

<p><strong>Bilir Nakliyat</strong> olarak, eşyalarınızın taşınma ve depolama süreçlerinde maksimum güvenliği ve verimliliği sağlamak için profesyonel ekibimizle en yüksek kalitede hizmet sunmaktayız. Eşyalarınızın güvenliğini garanti ediyor, doğru malzemelerle paketleyip, ihtiyaç duyduğunuz zaman hızlı ve güvenli şekilde taşınmasını sağlıyoruz.</p>
`;


    

  return (
    <div>
      <Banner title={"PAKET VE DEPOLAMA HİZMETİMİZ"} src="/photo.jpg" alt={"Ana-Resim"} />
      <InfoBox content={content} />
    </div>
  );
}
