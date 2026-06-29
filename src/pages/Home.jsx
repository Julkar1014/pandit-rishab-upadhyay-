import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import Trust from "../components/home/Trust";
import Services from "../components/home/Services";
import WhyUs from "../components/home/WhyUs";
import Pandits from "../components/home/Pandits";
import Journey from "../components/home/Journey";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import PujaVideo from "../components/home/PujaVideo";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Trust />
      <Services />
      <WhyUs />
      <Pandits />
      <Journey />
      <Testimonials />
      <FAQ />
      <PujaVideo />
      <CTA />
    </>
  );
}