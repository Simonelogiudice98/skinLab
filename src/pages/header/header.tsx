import "./header.scss";
import logo from "../../assets/img/skinlabLogo.svg";
import BookConsultationButton from "../../components/bookConsultationButton/BookConsultationButton";

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
          <BookConsultationButton />
        </div>
      </div>
    </nav>
  );
};
export default Header;
