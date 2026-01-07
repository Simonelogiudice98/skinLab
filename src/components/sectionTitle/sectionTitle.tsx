import './sectionTitle.scss';
import Pill from '../pill/pill';

type Props = {
  overline: string;
  title: string;
  subtitle?: string;
};

const SectionTitle: React.FC<Props> = ({ overline, title, subtitle }) => {
  return (
    <header className="sectionHeader">
      <Pill>{overline}</Pill>
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="sub">{subtitle}</p>}
    </header>
  );
}
export default SectionTitle