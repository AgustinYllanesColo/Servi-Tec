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
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useReveal();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen bg-background selection:bg-accent/30"
    >
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <PartsSection />
        <div id="diagnosis" className="bg-slate-900">
          <DiagnosisWidget />
        </div>
        <PainSolution />
        <Coverage />
        <Testimonials />
        <UrgencyCTA />
        <FAQ />
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <FloatingCTAs />
      <ExitIntentPopup />
    </motion.div>
  );
};

export default Index;
