import "./hero.scss";
import Pill from "../pill/pill";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";

const HeroSection: React.FC = () => {
  return (
    <main id="top" className="hero">
      <div className="container">
        <div className="heroGrid">
          <div className="heroCopy">
            <div className="pill">
              <Pill>Medically led • Results driven • Personalized to you</Pill>
            </div>

            <h1 className="h1">
              Nurse led skin clinic for{" "}
              <span className="accent">clear, even, healthy </span> skin
            </h1>

            <p className="lead">
              SkinLab Medical specialises in treating hyperpigmentation, acne
              scarring and rosacea through evidence based, results driven skin
              treatments.
              <br />
              <br />
              Your journey starts here.
            </p>

            <div className="heroActions">
              <a className="btnGhost" href="#about">
                <InfoOutlinedIcon className="btnIcon" />
                <span>Learn more</span>
              </a>
            </div>

            <div className="heroJourney">
              <BookConsultationButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
