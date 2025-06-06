
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
// import CaseStudies from '@/components/CaseStudies';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import AuthPage from '@/components/login';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      {/* <CaseStudies /> */}
      <HowItWorks />
      <Pricing />
      <Contact />
      <Blog />
      <Footer />
      <Chatbot />
      {/* <AuthPage/> */}
    </div>
  );
};

export default Index;
