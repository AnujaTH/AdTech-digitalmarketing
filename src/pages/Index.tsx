import Hero from "@/components/Hero";
import About from "@/components/About";
// import CaseStudies from '@/components/CaseStudies';
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
// import Chatbot from "@/components/Chatbot";

// import AuthPage from "@/components/login";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      <About />
      {/* <CaseStudies /> */}
      <HowItWorks />
      <Pricing />
      <Footer />
      {/* <AuthPage/> */}
    </div>
  );
};

export default Index;
