import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { WHATSAPP_LINK } from '../../utils/utils';
import Pill from '../pill/pill';

const HeroSection: React.FC = () => {
  return (
    <main id="top" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Pill>Medical Aesthetics • Skin Health • Confidence</Pill>

            <h1 className={styles.h1}>
              Nurse-led skin clinic for <span className={styles.accent}>clear, even, healthy skin</span>.
            </h1>

            <p className={styles.lead}>
              SkinLab Medical specialises in treating hyperpigmentation, acne scarring and rosacea through
              evidence-based, results-driven skin treatments.
              <br />
              Your journey starts here.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.btnPrimary} href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Book Your Consultation →
              </a>
              <a className={styles.btnGhost} href="#about">
                Learn more
              </a>
            </div>

            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaKpi}>Clinical</span>
                <span className={styles.metaLbl}>Medical integrity</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKpi}>Personal</span>
                <span className={styles.metaLbl}>Tailored plans</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKpi}>Long-term</span>
                <span className={styles.metaLbl}>Natural results</span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL (placeholder) */}
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualCard}>
              <div className={styles.visualGlow} />
              <div className={styles.visualInner}>
                <div className={styles.visualBadge}>ESTD 2025</div>
                <div className={styles.visualLines}>
                  <div className={styles.line} />
                  <div className={styles.line} />
                  <div className={styles.line} />
                </div>
                <div className={styles.visualCaption}>
                  Modern, calm, clinical environment for all skin types &amp; genders.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK SERVICES */}
        <section className={styles.quickServices}>
          <article className={styles.serviceCard}>
            <div className={styles.serviceTop}>
              <span className={styles.serviceIcon}>✦</span>
              <h3>Medical integrity</h3>
            </div>
            <p>Safe, evidence-based protocols with a nurse-led clinical approach.</p>
          </article>

          <article className={styles.serviceCard}>
            <div className={styles.serviceTop}>
              <span className={styles.serviceIcon}>✦</span>
              <h3>Personalised plans</h3>
            </div>
            <p>Structured treatment plans + curated homecare for optimal results.</p>
          </article>

          <article className={styles.serviceCard}>
            <div className={styles.serviceTop}>
              <span className={styles.serviceIcon}>✦</span>
              <h3>Long-term results</h3>
            </div>
            <p>Natural, progressive improvements that support skin health over time.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
export default HeroSection