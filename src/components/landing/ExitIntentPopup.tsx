import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle, ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/config/contact";

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-[60px] -mr-20 -mt-20" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-8 border border-accent/20">
                <AlertCircle className="w-10 h-10 text-accent" />
              </div>

              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary leading-tight mb-4">
                ¿Todavía sin agua?
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                No dejes que el problema empeore. Hacé un diagnóstico rápido ahora y recibí una solución garantizada hoy mismo.
              </p>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => {
                    setIsVisible(false);
                    document.getElementById('diagnosis')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-3 h-16 rounded-2xl bg-primary text-white font-black text-lg hover:brightness-110 transition-all group"
                >
                  Iniciar Diagnóstico Gratis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href={waLink("Hola, necesito asesoramiento urgente antes de irme de la web.")}
                  className="inline-flex items-center justify-center gap-3 h-16 rounded-2xl bg-whatsapp text-white font-black text-lg hover:brightness-110 transition-all"
                >
                  <MessageCircle className="w-6 h-6" /> WhatsApp Directo
                </a>
              </div>
              
              <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Atención Inmediata 24/7 • Garantía Escrita
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
