import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroBlock from "./components/IntroBlock";
import WhoWeHelp from "./components/WhoWeHelp";
import QuoteBanner from "./components/QuoteBanner";
import Expertise from "./components/Expertise";
import HowWeWork from "./components/HowWeWork";
import IntermediateBanner from "./components/IntermediateBanner";
import Specialties from "./components/Specialties";
import OurOffice from "./components/OurOffice";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntroBlock />
      <WhoWeHelp />
      <QuoteBanner />
      <Expertise />
      <HowWeWork />
      <IntermediateBanner />
      <Specialties />
      <OurOffice />
      <CTASection />
      <Footer />
    </main>
  );
}