"use client"
import { JSX, useState } from "react";
import styles from "./styles.module.css";
import Icon from "@/components/Icon";

interface MailFormProps {
  adress: JSX.Element[]; 
  ilIlce: string;
  person?: [name: string, phone: string][]; 
}

function MailForm({ adress, ilIlce, person = [] }: MailFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // Başarı mesajı için state
  const [error, setError] = useState(""); // Hata mesajı için state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Önceki mesajları sıfırla
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("E-posta başarıyla gönderildi!");
      } else {
        throw new Error("E-posta gönderilirken hata oluştu.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactUs}>
        <h2 className={styles.title1}>BİZE ULAŞIN</h2>
        <div className={styles.home}>
          <p className={styles.home}>
            <div className={styles.icon}>
              <Icon name="home" color="green" size="2.5rem" />
            </div> 
            {adress}
            <br /> {ilIlce}
          </p>
        </div>
        {person.map(([name, phone], index) => (
          <div key={index} className={styles.person}>
            <p className={styles.name}>{name}</p>
            <p className={styles.phone}>
             <a href="tel:05317473909">{phone}</a>  
              <div className={styles.icon}>
                <Icon name="telephone" color="green" size="1.5rem" />
              </div>
            </p>
          </div>
        ))}
      </div>
      <div className={styles.box}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title2}>Mail Form</h2>
          <label className={styles.label} htmlFor="name">
            Adınız:<br />
            <input className={styles.input} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label className={styles.label} htmlFor="email">
            E-posta:<br />
            <input className={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label className={styles.label} htmlFor="message">
            Mesajınız:<br />
            <textarea className={styles.input} id="message" name="message" value={formData.message} onChange={handleChange} required />
          </label><br />
          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? "Gönderiliyor..." : "Gönder"}
          </button>

          {/* Başarı ve hata mesajlarını gösterme */}
          {message && <p className={styles.success}>{message}</p>}
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default MailForm;


