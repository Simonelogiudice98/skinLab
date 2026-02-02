import "./hero.scss";
import { WHATSAPP_LINK } from "../../utils/utils";
import Pill from "../pill/pill";
import ClientJourneyMini from "../clientJourneyMini/clientJourneyMini";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const HeroSection: React.FC = () => {
  return (
    <main id="top" className="hero">
      <div className="container">
        <div className="heroGrid">
          <div className="heroCopy">
            <Pill>Medical Aesthetics • Skin Health • Confidence</Pill>

            <h1 className="h1">
              Nurse-led skin clinic for{" "}
              <span className="accent">clear, even, healthy skin</span>.
            </h1>

            <p className="lead">
              SkinLab Medical specialises in treating hyperpigmentation, acne
              scarring and rosacea through evidence-based, results-driven skin
              treatments.
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
              <ClientJourneyMini />
              <a
                className="btnPrimary"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <span>Book Your Consultation</span>
                <ArrowForwardRoundedIcon className="btnIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
