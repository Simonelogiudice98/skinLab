import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { WHATSAPP_LINK } from '../../utils/utils';
import logo from "../../assets/img/skinLab_logo_only.png";

const Header: React.FC = () => {

  return (
          <nav className={styles.nav}>
        <div className={styles.navInner}>
          <img src={logo} alt="logo" style={{height: "60px", width: "auto", display: "block"}} />
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#concerns">Skin Concerns</a>
            <a href="#treatments">Treatments</a>
            <a className={styles.navCta} href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Book Consultation
            </a>
          </div>
        </div>
      </nav>
  )
}
export default Header

