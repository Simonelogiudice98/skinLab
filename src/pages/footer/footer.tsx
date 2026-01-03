import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { WHATSAPP_LINK } from '../../utils/utils';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <span className={styles.brandWordmark}>SkinLab</span>
              <span className={styles.brandSmall}>MEDICAL</span>
            </div>
            <a className={styles.footerLink} href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              WhatsApp Booking
            </a>
          </div>
        </div>
      </footer>
  )
}
export default Footer