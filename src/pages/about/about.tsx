import styles from "../../assets/commonStyles/commonStyles.module.scss";
import "./about.scss";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import { SmartImage } from "../../components/smartImage/smartImage";
import aboutImg from "../../assets/images/about/about-consultation.jpg";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <SectionTitle
            overline="About"
            title="A Clinical, Personalised Approach to Skin Health"
            subtitle="A nurse led skin clinic founded on acute medicine experience and advanced aesthetic training."
          />

          <div className="twoCol">
            <div className="textCheck">
              <div className="textBlock">
                <p>
                  SkinLab Medical was founded by a Registered Nurse with over
                  five years of clinical experience. Starting her career in
                  A&amp;E, she later moved into the private sector, working
                  within high end wellness and longevity clinics across Chelsea
                  and Battersea.
                </p>
                <p>
                  This background in acute medicine combined with advanced
                  aesthetic training forms the foundation of SkinLab Medical’s
                  safe, evidence based approach to skin health.
                </p>
              </div>
              <div className="checklist">
                <div className="checkItem"><span>✔</span> Medical integrity</div>
                <div className="checkItem"><span>✔</span> Natural, long term results</div>
                <div className="checkItem"><span>✔</span> Personalised treatment plans</div>
                <div className="checkItem"><span>✔</span> Calm, clinical environment</div>
              </div>
            </div>

            <div className="sideCol">
              <div className="aboutMedia" aria-hidden="true">
                <SmartImage
                  src={aboutImg}
                  alt=""
                  className="aboutMediaImg"
                  priority={false}
                />
                <div className="aboutMediaOverlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
