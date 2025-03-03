import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    let mailOptions;
    // Teklif formu (OfferForm) verisi kontrolü
    if (formData.fullName && formData.phone && formData.email && formData.request) {
      mailOptions = {
        from: `${formData.email}`,
        to: "bilirnakliyatsirketi@gmail.com", // Buraya mailin gideceği adresi yaz
        subject: "Yeni Teklif Talebi",
        text: `
          Ad Soyad: ${formData.fullName}
          Telefon: ${formData.phone}
          E-posta: ${formData.email}
          Talep: ${formData.request}
          Nereden: ${formData.from}
          Nereye: ${formData.to}
        `,
      };
    }
    // Mail formu (MailForm) verisi kontrolü
    else if (formData.name && formData.email && formData.message) {
      mailOptions = {
        from: `${formData.email}`,
        to: "bilirnakliyatsirketi@gmail.com", // Buraya mailin gideceği adresi yaz
        subject: "Yeni Mail Formu Gönderimi",
        text: `
          Ad: ${formData.name}
          E-posta: ${formData.email}
          Mesaj: ${formData.message}
        `,
      };
    } else {
      return NextResponse.json(
        { message: "Eksik veya hatalı form verisi gönderildi." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bilirnakliyatsirketi@gmail.com", // Kendi mailini gir
        pass: "dgnz fldn upyj zoca", // Google'dan aldığın uygulama şifresini gir
      },
    });

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "E-posta başarıyla gönderildi!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "E-posta gönderilirken hata oluştu", error },
      { status: 500 }
    );
  }
}
