import HeroSlider from "../components/HeroSlider";
import ServicesSection from "../components/ServicesSection";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <WhyChoose />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;