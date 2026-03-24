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
                  five years of clinical experience. Beginning her career in
                  A&E, she later transitioned into the private sector, working
                  within leading wellness and longevity clinics in Chelsea and
                  Battersea.
                </p>
                <p>
                  This combination of medical expertise and advanced aesthetic
                  training forms the foundation of SkinLab Medical’s safe,
                  results driven approach to skin health.
                </p>
              </div>
              <div className="checklist">
                <h3 className="checklistHeadline">
                  Why Choose SkinLab Medical
                </h3>
                <div className="checkItem">
                  <span>✔</span>
                  <div>
                    <strong>Nurse-Led Expertise</strong>
                    <p>
                      All treatments are performed by a registered nurse with
                      clinical experience and advanced aesthetic training.
                    </p>
                  </div>
                </div>
                <div className="checkItem">
                  <span>✔</span>
                  <div>
                    <strong>Personalised Treatment Plans</strong>
                    <p>
                      Every client receives a tailored treatment programme based
                      on their skin concerns and goals.
                    </p>
                  </div>
                </div>
                <div className="checkItem">
                  <span>✔</span>
                  <div>
                    <strong>Evidence-Based Treatments</strong>
                    <p>
                      We focus on clinically proven treatments that improve skin
                      health safely and effectively.
                    </p>
                  </div>
                </div>
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
