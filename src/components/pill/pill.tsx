import React from "react";
import styles from '../../assets/commonStyles/commonStyles.module.scss';

type Props = { children: React.ReactNode };

const Pill: React.FC<Props> = ({children }) => {

  return <span className={styles.pill}>{children}</span>;
}
export default Pill