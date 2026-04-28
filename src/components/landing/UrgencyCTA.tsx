import { Phone, MessageCircle, Clock } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";

export const UrgencyCTA = () => (
  <section className="py-16 md:py-24 bg-hero text-white relative overflow-hidden">
    <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-3xl mx-auto text-center reveal">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-urgent/20 border border-urgent/40 text-urgent font-bold text-sm">
          <Clock className="w-4 h-4 pulse-ring rounded-full" /> EMERGENCIA · ATENCIÓN INMEDIATA
        </div>
        <h2 className="mt-6 font-display font-extrabold text-3xl md:text-5xl text-balance">
          No esperes hasta mañana. <span className="text-accent">Recuperá el agua hoy.</span>
        </h2>
        <p className="mt-4 text-lg text-white/80 text-balance">
          Llamanos o escribinos por WhatsApp. Un técnico SERVITEC sale para tu domicilio en minutos.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-whatsapp text-whatsapp-foreground font-bold shadow-cta hover:scale-[1.03] active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> Escribir por WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-accent text-accent-foreground font-bold shadow-cta hover:scale-[1.03] active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  </section>
);
