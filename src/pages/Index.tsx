import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { PainSolution } from "@/components/landing/PainSolution";
import { Coverage } from "@/components/landing/Coverage";
import { Testimonials } from "@/components/landing/Testimonials";
import { UrgencyCTA } from "@/components/landing/UrgencyCTA";
import { FAQ } from "@/components/landing/FAQ";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTAs } from "@/components/landing/FloatingCTAs";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <PainSolution />
        <Coverage />
        <Testimonials />
        <UrgencyCTA />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
};

export default Index;
