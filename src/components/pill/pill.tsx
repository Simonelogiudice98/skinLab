import React from "react";
import styles from '../../assets/commonStyles/commonStyles.module.scss';

type Props = { children: React.ReactNode };

export function Pill({ children }: Props) {
  return <span className={styles.pill}>{children}</span>;
}
