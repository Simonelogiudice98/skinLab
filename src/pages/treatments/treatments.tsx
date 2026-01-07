import styles from "../../assets/commonStyles/commonStyles.module.scss";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import { WHATSAPP_LINK } from "../../utils/utils";
import { SmartImage } from "../../components/smartImage/smartImage";
import './treatments.scss';
import type { Treatment } from "../../interfaces/skinLab.types";

interface Props  {
  treatments: Treatment[];
};

const TreatmentsSection: React.FC<Props> = ({ treatments }) => {
  return (
    <section id="treatments" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <SectionTitle
            overline="Treatments"
            title="Results-driven treatments"
            subtitle="Every plan combines in-clinic treatments with curated homecare for long-term transformation."
          />

          <div className="grid2">
            {treatments.map((t) => (
              <article key={t.title} className={styles.card}>
                {t.image ? (
                  <div className="cardMedia" aria-hidden="true">
                    <SmartImage
                      src={t.image}
                      alt=""
                      className="cardMediaImg"
                    />
                    <div className="cardMediaOverlay" />
                  </div>
                ) : null}

                <div className="treatTop">
                  <h3 className={styles.h3}>{t.title}</h3>
                  <span className="priceFrom">{t.priceFrom}</span>
                </div>

                <p className="cardText">{t.description}</p>

                <ul className={styles.list}>
                  {t.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="ctaRow">
            <div>
              <div className="ctaTitle">
                Ready to transform your skin?
              </div>
              <div className="ctaSub">
                Start with a personalised consultation — professional,
                evidence-based, tailored to you.
              </div>
            </div>

            <a
              className={styles.btnPrimary}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Book Your Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
