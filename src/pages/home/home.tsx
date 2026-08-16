import Footer from "../footer/footer"
import Header from "../header/header"
import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { concerns, philosophy, treatmentsContent } from "../../components/data/skinLab.data"
import AboutSection from "../about/about";
import ConcernsSection from "../concerns/concerns";
import TreatmentsSection from "../treatments/treatments";
import HeroSection from "../../components/hero/hero";

const Home: React.FC = () => {
  return (
     <div className={styles.page}>
      <Header/>

      <HeroSection />

      <AboutSection philosophy={philosophy} />

      <ConcernsSection concerns={concerns} />

      <TreatmentsSection content={treatmentsContent}/>

      <Footer/>
    </div>
  )
}
export default Home