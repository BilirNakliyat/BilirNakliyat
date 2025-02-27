import { FaHome, FaSearch, FaEnvelope, FaTwitter, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaYoutube, FaQuoteRight, FaAngleDown, FaFacebook, FaInstagram, FaRegClock, FaLinkedin, FaBars, FaTimes, FaTruck, FaUserTie } from 'react-icons/fa';
import styles from './styles.module.css';

interface IconProps {
  name: 'home' | 'search' | 'email' | 'twitter' | 'whatsapp' | 'telephone' | 'location' | 'youtube' | 'quote' | 'arrowDown' | 'facebook'| 'instagram' | 'clock' | 'linkedin' | 'bars' | 'times' | "truck" | "tie";
  size?: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color = 'white', backgroundColor, className }) => {
  
  const icons = {
    home: <FaHome size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    search: <FaSearch size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    clock: <FaRegClock size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    email: <FaEnvelope size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    twitter: <FaTwitter size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    whatsapp: <FaWhatsapp size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    facebook: <FaFacebook size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    youtube: <FaYoutube size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    instagram: <FaInstagram size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    linkedin: <FaLinkedin size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    telephone: <FaPhone size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    location: <FaMapMarkerAlt size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    quote: <FaQuoteRight size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    arrowDown: <FaAngleDown size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    bars: <FaBars size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    times: <FaTimes size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    truck: <FaTruck size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
    tie: <FaUserTie size={size} color={color} style={{ backgroundColor: backgroundColor }} className={`${styles.icon} ${className}`} />,
  };

  return icons[name] || null;
}

export default Icon;

{/* <Icon name='home' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='search' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='twitter' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='email' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='whatsapp' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='telephone' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='location' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='quote' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='arrowDown' size="2.5rem" color="white" backgroundColor="orange"/>
<Icon name='youtube' size="2.5rem" color="white" backgroundColor="orange"/> */}
