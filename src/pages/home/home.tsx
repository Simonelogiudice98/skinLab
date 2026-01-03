import { HeroSection } from "../../components/hero/hero"
import Footer from "../footer/footer"
import Header from "../header/header"
import styles from '../../assets/commonStyles/commonStyles.module.scss';
import { concerns, treatments } from "../../components/data/skinLab.data"
import AboutSection from "../about/about";
import ConcernsSection from "../concerns/concerns";
import TreatmentsSection from "../treatments/treatments";

const Home: React.FC = () => {
  return (
     <div className={styles.page}>
      <Header/>

      <HeroSection />

      <AboutSection />

      <ConcernsSection concerns={concerns} />

      <TreatmentsSection treatments={treatments}/>

      <Footer/>
    </div>
  )
}
export default Home