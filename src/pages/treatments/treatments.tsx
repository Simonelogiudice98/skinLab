import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { SectionTitle } from '../../components/sectionTitle/sectionTitle';
import type { Treatment } from '../../interfaces/skinLab.types';
import { WHATSAPP_LINK } from '../../utils/utils';

type Props = {
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

          <div className={styles.grid2}>
            {treatments.map((t) => (
              <article key={t.title} className={styles.card}>
                <div className={styles.treatTop}>
                  <h3 className={styles.h3}>{t.title}</h3>
                  <span className={styles.priceFrom}>{t.priceFrom}</span>
                </div>

                <p className={styles.cardText}>{t.description}</p>

                <ul className={styles.list}>
                  {t.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <div>
              <div className={styles.ctaTitle}>Ready to transform your skin?</div>
              <div className={styles.ctaSub}>
                Start with a personalised consultation — professional, evidence-based, tailored to you.
              </div>
            </div>

            <a className={styles.btnPrimary} href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Book Your Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TreatmentsSection