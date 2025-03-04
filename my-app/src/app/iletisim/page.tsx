import Map from "@/components/Map";
import MailForm from "@/components/MailForm";

export default function Iletisim() {
  return (
    <div>
      <MailForm
        adress="Örnek Mahallesi, Örnek Sokak No: 12"
        ilIlce="İstanbul, Kadıköy"
        person={[
          ["Ahmet Murat Bilir", "+90 531 747 39 09"],
          // ["Mehmet Kaya", "+90 555 987 65 43"],
          // ["Mehmet Kaya", "+90 555 987 65 43"],
        ]}
      />
      <Map address="Şahintepe, 2243. Sk. No:16, 34494 Başakşehir/İstanbul, Türkiye" />
    </div>
  );
}
