
import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import featuresData from './data/featuresData.js';
import PricingSection from './components/PricingSection.jsx';
import featuresDataPricing from './data/featuresDataPricing.js';
import TestimonialCard from './components/TestimonialCard .jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import featuresDataT from './data/featuresDataT.js';
function App() {
 
 
//   const featuresData = [
//    { icon: "🚀", title: "Fast Performance", desc: "Experience blazing fast load times and smooth interactions." }, 
//    { icon: "🔒", title: "Secure", desc: "Your data is protected with top‑tier security standards." }, 
//    { icon: "🎨", title: "Customizable", desc: "Easily adapt the design to match your brand identity." }
// ]; 

  const links = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ];

  console.log(featuresData);
  
  return (
    <>
      <Navbar title="My Landing Super page" links={links}></Navbar>

       <HeroSection title="Welcome to Our Website" subtitle="We are glad to have you here. Explore our products and services." 
       image="https://cdn.pixabay.com/photo/2020/09/18/13/07/smoothie-5581794_1280.jpg"  ></HeroSection> 


      <FeaturesGrid data={featuresData}></FeaturesGrid>



      <HeroSection title="Use the force" subtitle="We are happy to new year. " 
      image="https://cdn.pixabay.com/photo/2025/11/17/09/57/dahlia-9961337_1280.jpg"  ></HeroSection> 

    <PricingSection dataPricing={featuresDataPricing}></PricingSection>

    <TestimonialsSection dataTestimonials={featuresDataT}></TestimonialsSection>

    <Footer year={2026} socialLinks={[
      { name: 'Facebook', url: 'https://facebook.com' },
      { name: 'Twitter', url: 'https://twitter.com' },
      { name: 'Instagram', url: 'https://instagram.com' },
    ]}></Footer>


    </>
  )
}

export default App
