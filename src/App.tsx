import { IconContext } from 'react-icons';
import AOS from 'aos';
import Hero from './components/Hero/Hero';
import {
  Services,
  AboutUs,
  FoodMenu,
  Reservation,
  Team,
  Testimonial,
  Footer,
} from './sections';
import './i18n/index';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <IconContext.Provider value={{}}>
      <Hero />
      <div data-aos="zoom-in" id="services">
        <Services />
      </div>
      <div data-aos="fade-right" id="about-us">
        <AboutUs />
      </div>
      <div id="food-menu">
        <FoodMenu />
      </div>
      <div id="reservation">
        <Reservation />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <Footer />
    </IconContext.Provider>
  );
}

export default App;
