import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";

export const UrgencyCTA = () => (
  <section className="py-14 md:py-20 bg-hero text-white relative overflow-hidden">
    {/* Single subtle glow */}
    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/15 blur-[100px] rounded-full" />

    <div className="container mx-auto px-4 relative">
      <div className="max-w-2xl mx-auto text-center reveal">
        <h2 className="font-display font-extrabold text-balance">
          No esperes hasta mañana.{" "}
          <span className="text-accent">Recuperá el agua hoy.</span>
        </h2>
        <p className="mt-4 text-base text-white/70 text-balance">
          Llamanos o escribinos por WhatsApp. Un técnico SERVITEC sale para tu domicilio en minutos.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            id="urgency-cta-whatsapp"
            className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl bg-whatsapp text-white font-bold shadow-cta hover:brightness-110 active:scale-[0.97] transition-all"
          >
            <MessageCircle className="w-5 h-5" /> Escribir por WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            id="urgency-cta-phone"
            className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl border border-white/12 bg-white/[0.05] text-white font-bold hover:bg-white/[0.1] active:scale-[0.97] transition-all"
          >
            <Phone className="w-5 h-5" /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  </section>
);
