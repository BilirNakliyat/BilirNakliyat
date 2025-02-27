import Map from "@/components/Map";
import MailForm from "@/components/MailForm";

export default function Iletisim() {
  return (
    <div>
      <MailForm
        adress="Örnek Mahallesi, Örnek Sokak No: 12"
        ilIlce="İstanbul, Kadıköy"
        person={[
          ["Ahmet Yılmaz", "+90 532 123 45 67"],
          // ["Mehmet Kaya", "+90 555 987 65 43"],
          // ["Mehmet Kaya", "+90 555 987 65 43"],
        ]}
      />
      <Map address="istanbul basaksehir altinsehir " />
    </div>
  );
}
