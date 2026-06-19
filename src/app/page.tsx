import { Hero } from "@/components/home/Hero/Hero";
import { TrustBar } from "@/components/home/TrustBar/TrustBar";
import { About } from "@/components/home/About/About";
import { Treatments } from "@/components/home/Treatments/Treatments";
import { ImplantHighlight } from "@/components/home/ImplantHighlight/ImplantHighlight";
import { Gallery } from "@/components/home/Gallery/Gallery";
import { Journey } from "@/components/home/Journey/Journey";
import { Statistics } from "@/components/home/Statistics/Statistics";
import { Testimonials } from "@/components/home/Testimonials/Testimonials";
import { FAQ } from "@/components/home/FAQ/FAQ";
import { Contact } from "@/components/home/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <About />
      <Treatments />
      <ImplantHighlight />
      <Gallery />
      <Journey />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
