import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { WHATSAPP_LINK } from '../../utils/utils';
import logo from "../../assets/img/skinLab_logo_only.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <img src={logo} alt="logo" style={{height: "40px", width: "auto", display: "block"}} />
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