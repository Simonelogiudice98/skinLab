import "./hero.scss";
import { WHATSAPP_LINK } from "../../utils/utils";
import Pill from "../pill/pill";
import heroClinic from "../../assets/images/hero/hero-clinic.jpg";
import { SmartImage } from "../smartImage/smartImage";
import { ClipboardList, ShieldCheck, TrendingUp } from "lucide-react";

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
              <a
                className="btnPrimary"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Book Your Consultation →
              </a>
              <a className="btnGhost" href="#about">
                Learn more
              </a>
            </div>

            <div className="heroMeta">
              <div className="metaItem">
                <span className="metaKpi">Clinical</span>
                <span className="metaLbl">Medical integrity</span>
              </div>
              <div className="metaItem">
                <span className="metaKpi">Personal</span>
                <span className="metaLbl">Tailored plans</span>
              </div>
              <div className="metaItem">
                <span className="metaKpi">Long-term</span>
                <span className="metaLbl">Natural results</span>
              </div>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="visualCard">
              <div className="visualGlow" />
              <div className="visualInner">
                <SmartImage
                  src={heroClinic}
                  alt=""
                  className="visualImage"
                  priority
                />

                <div className="visualOverlay" />
                <div className="visualBadge">ESTD 2025</div>

                <div className="visualCaption">
                  Modern, calm, clinical environment for all skin types &amp;
                  genders.
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="quickServices">
          <article className="serviceCard">
            <div className="serviceTop">
              <span className="serviceIcon" aria-hidden="true">
                <ShieldCheck size={18} />
              </span>
              <h3>Medical integrity</h3>
            </div>
            <p>
              Safe, evidence-based protocols with a nurse-led clinical approach.
            </p>
          </article>

          <article className="serviceCard">
            <div className="serviceTop">
              <span className="serviceIcon" aria-hidden="true">
                <ClipboardList size={18} />
              </span>
              <h3>Personalised plans</h3>
            </div>
            <p>
              Structured treatment plans + curated homecare for optimal results.
            </p>
          </article>

          <article className="serviceCard">
            <div className="serviceTop">
              <span className="serviceIcon" aria-hidden="true">
                <TrendingUp size={18} />
              </span>
              <h3>Long-term results</h3>
            </div>
            <p>
              Natural, progressive improvements that support skin health over
              time.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
};
export default HeroSection;
