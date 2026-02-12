import './footer.scss';
import { WHATSAPP_LINK } from '../../utils/utils';
import logo from "../../assets/img/skinlabLogo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footerInner">
            <div className="footerBrand">
              <img src={logo} alt="logo" style={{height: "40px", width: "auto", display: "block"}} />
            </div>
            <a className="footerLink" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              WhatsApp Booking
            </a>
          </div>
        </div>
      </footer>
  )
}
export default Footer