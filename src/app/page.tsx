import AboutSection from './component/AboutSection'
import Banner from './component/Banner'
import ContactSection from './component/ContactSection'
import HeroSection from './component/HeroSection'
import LocationsSection from './component/LocationsSection'
import ServicesSection from './component/ServicesSection'
import SuperHubTeaser from './component/SuperHubTeaser'
import Testimonial from './component/Testimonial'
import VideoSection from './component/VideoSection'

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocationsSection />
      <SuperHubTeaser />
      <VideoSection />
      <Banner />
      <Testimonial />
      <ContactSection />
    </>
  )
}

export default page
