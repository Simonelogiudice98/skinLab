import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";


const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <SectionTitle
            overline="About"
            title="A Clinical, Personalised Approach to Skin Health"
            subtitle="A nurse-led skin clinic founded on acute medicine experience and advanced aesthetic training."
          />

          <div className={styles.twoCol}>
            <div className={styles.textBlock}>
              <p>
                SkinLab Medical was founded by a Registered Nurse with over five years of clinical experience.
                Starting her career in A&amp;E, she later moved into the private sector, working within
                high-end wellness and longevity clinics across Chelsea and Battersea.
              </p>
              <p>
                This background in acute medicine combined with advanced aesthetic training forms the foundation
                of SkinLab Medical’s safe, evidence-based approach to skin health.
              </p>
            </div>

            <div className={styles.checklist}>
              <div className={styles.checkItem}>✔ Medical integrity</div>
              <div className={styles.checkItem}>✔ Natural, long-term results</div>
              <div className={styles.checkItem}>✔ Personalised treatment plans</div>
              <div className={styles.checkItem}>✔ Calm, clinical environment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection