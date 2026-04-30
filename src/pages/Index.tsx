import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { DiagnosisWidget } from "@/components/landing/DiagnosisWidget";
import { PainSolution } from "@/components/landing/PainSolution";
import { Coverage } from "@/components/landing/Coverage";
import { Testimonials } from "@/components/landing/Testimonials";
import { UrgencyCTA } from "@/components/landing/UrgencyCTA";
import { FAQ } from "@/components/landing/FAQ";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { FloatingCTAs } from "@/components/landing/FloatingCTAs";
import { ExitIntentPopup } from "@/components/landing/ExitIntentPopup";
import { PartsSection } from "@/components/landing/PartsSection";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <PartsSection />
        <div className="bg-slate-900">
          <DiagnosisWidget />
        </div>
        <PainSolution />
        <Coverage />
        <Testimonials />
        <UrgencyCTA />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTAs />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
