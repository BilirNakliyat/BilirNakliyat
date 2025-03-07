import Map from "@/components/Map";
import MailForm from "@/components/MailForm";

export default function Iletisim() {
  return (
    <div>
      <MailForm
        adress={[
          <span key="address1">Şahintepe Mahallesi Aşıkveysel Caddesi</span>,
          <span key="address2">2243 Sokak No:16</span>,
        ]}
        ilIlce="BAŞAKŞEHİR/İSTANBUL"
        person={[
          ["Ahmet Murat Bilir", "0531 747 39 09"],
          // ["Mehmet Kaya", "+90 555 987 65 43"],
        ]}
      />
      <Map address="Şahintepe, 2243. Sk. No:16, 34494 Başakşehir/İstanbul, Türkiye" />
    </div>
  );
}