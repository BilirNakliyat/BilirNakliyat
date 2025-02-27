import styles from "./styles.module.css";

interface MapProps {
  address: string;
}

export default function Map({ address }: MapProps) {
  const generateMapLink = (address: string): string => {
    const encodedAddress = encodeURIComponent(address.trim());
    return `https://www.google.com/maps?q=${encodedAddress}&output=embed&z=16`;
  };
  const mapLink = generateMapLink(address);
  return (
  <section className={styles.section}>
    <div
      className={styles.map}
    >
      <iframe className={styles.iframe} title={`Google Map of ${address}`} src={mapLink}></iframe>
    </div>
  </section>
  );
}
