import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ConsultationSection from "@/components/landing/ConsultationSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <SocialProofSection />
      <WhyChooseUsSection />
      <div id="process">
        <ProcessSection />
      </div>
      <div id="cases">
        <CaseStudiesSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <ConsultationSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
