import styles from './styles.module.css'
import Icon from '../Icon'

interface IletisimSectionProps {
    adress: string,
    ilIlce: string,
}

function IletisimSection({adress, ilIlce}: IletisimSectionProps) {
  return (
    <div className={styles.iletisimSection}>
        <div className={styles.contactBox}>
            <div className={styles.contact}>BİZİMLE İLETİŞİME GEÇİN</div>
            <div className={styles.address}><p>{adress}<br/>{ilIlce}</p></div>
            <div className={styles.callBtn}> <Icon name='telephone' size='1.75rem '></Icon><p className={styles.text}><a  href="tel:05317473909">İletisime Geçin</a></p></div>
        </div>
    </div>
  )
}

export default IletisimSection