import type { Concern } from "../../interfaces/skinLab.types";
import styles from '../../assets/commonStyles/commonStyles.module.scss';
import SectionTitle from "../../components/sectionTitle/sectionTitle";

type Props = {
  concerns: Concern[];
};

const ConcernsSection: React.FC<Props> = ({ concerns }) => {
  return (
    <section id="concerns" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          overline="Skin concerns"
          title="What we specialise in"
          subtitle="Targeted treatments for common concerns, with a structured plan built around your skin."
        />

        <div className={styles.grid3}>
          {concerns.map((c) => (
            <article key={c.title} className={styles.card}>
              <h3 className={styles.h3}>{c.title}</h3>
              <p className={styles.cardText}>{c.description}</p>

              <div className={styles.cardDivider} />

              <div className={styles.smallLabel}>Recommended treatments</div>
              <ul className={styles.list}>
                {c.treatments.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConcernsSection
