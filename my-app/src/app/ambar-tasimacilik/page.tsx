import Banner from "@/components/Banner";
import InfoBox from "@/components/InfoBox";

export default function AmbarTasimacilik() {
  const content = `
<p><strong>Yük Taşımacılığının Önemli Yöntemlerinden Biri: Ambar Taşımacılık</strong><br>Yük taşımacılığının önemli yöntemlerinden biri olan ambar taşımacılık, taşınacak yüklerin bir aracı doldurmayacak miktarda olduğu veya kargo firmalarının taşıyamayacağı büyüklükte ve miktarda olduğu durumlar için ideal bir çözümdür. Farklı yükler, belirli bir merkezde toplanarak aynı yöne gidecek diğer yüklerle birlikte bir araçta taşınır. Bu sistem, taşıma işlemi için tüm aracı kiralama zahmetinden ve maliyetinden sizi kurtarır. Komple araç tutmanın ya da parsiyel araç kiralamanın daha maliyetli olacağı durumlarda ambar taşımacılık devreye girer ve işlerinizi daha ekonomik hale getirir.</p>

<p><strong>Bilir Nakliyat</strong> olarak ambar taşımacılık hizmetiyle, eşyalarınızı en güvenli şekilde taşıma garantisi veriyoruz. Yüklerinizi toplama aşamasından teslimata kadar takip eder ve sigortalı bir şekilde, güvenli koşullarda varış noktasına ulaştırırız.</p>

<p>Ambar taşımacılık, titiz bir organizasyon gerektiren bir hizmettir. Kurduğumuz sistemde, aynı yöne taşınacak yüklerin planlaması en doğru şekilde yapılır. Şeffaflık ilkesiyle hareket eden <strong>Bilir Nakliyat</strong>, her aşamada sizi bilgilendirir ve süreçteki herhangi bir aksaklığı ortadan kaldırır.</p>

<p><strong>Neden Ambar Taşımacılık?</strong><br>Birden fazla eşyanızı aynı anda farklı yönlere göndermek istiyorsunuz ancak araçlarınız tam olarak dolmuyor. Kargo firmaları ise ya yüksek fiyatlar talep ediyor ya da yüklerinizin boyutları nedeniyle taşıma işlemini gerçekleştiremiyor. Ambar taşımacılık ise, eşyalarınızı sigortalayarak güvenli bir şekilde alır ve merkezi bir noktada toplayarak diğer yüklerle birlikte ekonomik bir taşımacılık süreci sağlar. Bu sistem sayesinde hem güvenli hem de ekonomik bir taşıma gerçekleştirilir.</p>

<p><strong>Bilir Nakliyat</strong> olarak ambar taşımacılıkta hedefimiz, yüzde yüz müşteri memnuniyetine ulaşmaktır. Yük toplama alanımızın güvenliği ve düzeni, sistemimizin pratikliği ve izlenebilirliği, araçlarımızın son model ve taşımaya uygunluğu, şoför ve taşıma ekibimizin işbilirliği ve güler yüzü, belirlediğimiz hedefi sürdürülebilir kılmaktadır.</p>

<p><strong>Havalimanı Sevkiyatları</strong><br>Yurtiçi ve yurtdışına teslim edilecek yüklerini daha hızlı bir şekilde ulaştırmak isteyen müşterilerimiz, havayolu taşımacılığını tercih etmektedir. Aciliyet, pek çok yük gönderisinde önemli bir faktördür. Ancak bu yüklerin havalimanlarına karayolu aracılığıyla taşınması gerekmektedir. Bu da havalimanı sevkiyatlarını özel bir taşıma alanı haline getirmektedir. <strong>Bilir Nakliyat</strong>, havalimanı sevkiyatlarında da hizmet sunmaktadır.</p>

<p><strong>Deniz Limanı Sevkiyatları</strong><br>Yurtiçi ve yurtdışına deniz yolu ile yük göndermek isteyen müşterilerimize, deniz limanı sevkiyatı hizmeti sunmaktayız. Bu hizmet, deniz taşımacılığına uygun şekilde yüklerinizi güvenli ve zamanında ulaştırmak için tasarlanmıştır.</p>

<p><strong>Mühürlü Araç Sevkiyatı</strong><br>Değerli eşyalarınızın taşınmasında mühürlü araçlar kullanıyoruz. Eşyalarınız araca yüklendikten sonra, havalimanı ya da deniz limanı sevkiyat alanında mühürleme işlemi gerçekleştirilir. Özel ürün taşımacılığı olarak sunduğumuz bu hizmet, eşyalarınızın güvenliğini mühürleme ile garanti altına alır.</p>
`;


    

  return (
    <div>
      <Banner title={"AMBAR TAŞIMACILIK HİZMETİMİZ"} src="/photo.jpg" alt={"Ana-Resim"} />
      <InfoBox content={content} />
    </div>
  );
}
