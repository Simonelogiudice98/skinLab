import "./header.scss";
import { WHATSAPP_LINK } from "../../utils/utils";
import logo from "../../assets/img/skinLabLogo.svg";

const Header: React.FC = () => {
  return (
    <nav className="nav">
      <div className="navInner">
        <img
          src={logo}
          alt="logo"
          style={{ height: "60px", width: "auto", display: "block" }}
        />
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#concerns">Skin Concerns</a>
          <a href="#treatments">Treatments</a>
          <a
            className="navCta"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Header;
