import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";

export const Footer = () => (
  <footer className="bg-primary text-white pt-14 pb-28 md:pb-10">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-accent-gradient flex items-center justify-center font-display font-bold text-primary">S</div>
          <span className="font-display font-extrabold text-xl">{CONTACT.brand}</span>
        </div>
        <p className="mt-4 text-sm text-white/70 leading-relaxed">
          Service técnico 24 hs de bombas de agua, ROWA y presurizadoras en Buenos Aires.
          Técnicos matriculados, garantía escrita y presupuesto sin cargo.
        </p>
      </div>

      <div>
        <h4 className="font-display font-bold text-accent uppercase text-xs tracking-[0.2em]">Cobertura</h4>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          <li>CABA · Capital Federal</li>
          <li>Zona Norte · Vicente López a Pilar</li>
          <li>Zona Sur · Avellaneda a Quilmes</li>
          <li>Zona Oeste · Morón a Moreno</li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-accent uppercase text-xs tracking-[0.2em]">Contacto directo</h4>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 h-12 px-5 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-4 h-4" /> {CONTACT.phoneDisplay}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-12 px-5 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp 24 hs
          </a>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row gap-2 justify-between">
      <span>© {new Date().getFullYear()} {CONTACT.brand}. Todos los derechos reservados.</span>
      <span>Atención 24/7 · 365 días al año</span>
    </div>
  </footer>
);
