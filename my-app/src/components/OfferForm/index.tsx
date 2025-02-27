"use client";
import { useState } from "react";
import styles from "./styles.module.css";

const OfferForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    request: "Şehir İçi Nakliye",
    from: "",
    to: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // Yeni error state eklendi

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(""); // Hata mesajını sıfırla

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
      <h2 className={styles.title}>TEKLİF FORMU</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Ad Soyad:
          <input className={styles.input} type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Telefon:
          <input className={styles.input} type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          E-posta:
          <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Talep:
          <select className={styles.select} name="request" value={formData.request} onChange={handleChange}>
            <option value="Şehir İçi Nakliye">Şehir İçi Nakliye</option>
            <option value="Şehirler Arası Nakliye">Şehirler Arası Nakliye</option>
            <option value="Parça Eşya Taşıma">Parça Eşya Taşıma</option>
          </select>
        </label>
        <label className={styles.label}>
          Nereden:
          <input className={styles.input} type="text" name="from" value={formData.from} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Nereye:
          <input className={styles.input} type="text" name="to" value={formData.to} onChange={handleChange} required />
        </label>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Gönderiliyor..." : "GÖNDER"}
        </button>
        {message && <p className={styles.success}>{message}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default OfferForm;
