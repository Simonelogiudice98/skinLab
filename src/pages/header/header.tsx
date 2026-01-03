import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { WHATSAPP_LINK } from '../../utils/utils';

const Header: React.FC = () => {

  return (
          <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a className={styles.brand} href="#top" aria-label="SkinLab Medical">
            {/* Se vuoi: sostituisci con un <img src={logo} /> quando avrai il PNG/SVG */}
            <span className={styles.brandWordmark}>SkinLab</span>
            <span className={styles.brandSmall}>MEDICAL</span>
          </a>

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

