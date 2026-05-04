import { useState, useEffect } from "react";
import { X, ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/config/contact";

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      const isDesktop = window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;
      const leavesViewport = e.clientY <= 0 && e.relatedTarget === null;
      if (isDesktop && leavesViewport && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) setIsVisible(false); }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-7 shadow-2xl animate-float-up md:p-10">
        <button
          type="button"
          aria-label="Cerrar aviso"
          onClick={() => setIsVisible(false)}
          className="absolute top-5 right-5 p-2 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>

        <div className="text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary leading-tight mb-3">
            ¿Todavía sin agua?
          </h2>
          <p className="text-slate-500 text-base mb-8 leading-relaxed">
            Hacé un diagnóstico rápido y recibí una solución hoy mismo.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setIsVisible(false);
                document.getElementById("diagnosis")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 h-14 rounded-xl bg-primary text-white font-bold text-base hover:brightness-110 transition-all group"
            >
              Iniciar Diagnóstico Gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href={waLink("Hola, necesito asesoramiento urgente.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 h-14 rounded-xl bg-whatsapp text-white font-bold text-base hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Directo
            </a>
          </div>

          <p className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Atención Inmediata 24/7 · Garantía Escrita
          </p>
        </div>
      </div>
    </div>
  );
};
