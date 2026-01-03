import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { Pill } from "../pill/pill";

type Props = {
  overline: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ overline, title, subtitle }: Props) {
  return (
    <header className={styles.sectionHeader}>
      <Pill>{overline}</Pill>
      <h2 className={styles.h2}>{title}</h2>
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
    </header>
  );
}
