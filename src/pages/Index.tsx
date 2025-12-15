import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Package from "@/components/landing/Package";
import WhyUs from "@/components/landing/WhyUs";
import Testimonials from "@/components/landing/Testimonials";
import SmartAutomation from "@/components/landing/SmartAutomation";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Package />
      <WhyUs />
      <Testimonials />
      <SmartAutomation />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
