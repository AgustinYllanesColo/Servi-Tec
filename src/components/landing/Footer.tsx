import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";

export const Footer = () => (
  <footer className="bg-primary text-white pt-12 pb-24 md:pb-10">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center font-display font-bold text-primary text-sm">S</div>
          <span className="font-display font-bold text-lg">{CONTACT.brand}</span>
        </div>
        <p className="mt-3 text-sm text-white/60 leading-relaxed">
          Service técnico 24 hs de bombas de agua, ROWA y presurizadoras en Buenos Aires.
          Técnicos matriculados, garantía escrita y presupuesto sin cargo.
        </p>
      </div>

      <div>
        <h4 className="font-display font-bold text-accent uppercase text-[10px] tracking-[0.2em]">Cobertura</h4>
        <ul className="mt-3 space-y-1.5 text-sm text-white/70">
          <li>CABA · Capital Federal</li>
          <li>Zona Norte · Vicente López a Pilar</li>
          <li>Zona Sur · Avellaneda a Quilmes</li>
          <li>Zona Oeste · Morón a Moreno</li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-accent uppercase text-[10px] tracking-[0.2em]">Contacto directo</h4>
        <div className="mt-3 flex flex-col gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-whatsapp text-white font-semibold text-sm hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp 24 hs
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-white/12 bg-white/[0.05] text-white font-semibold text-sm hover:bg-white/[0.1] transition-all"
          >
            <Phone className="w-4 h-4" /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-8 pt-5 border-t border-white/[0.06] text-xs text-white/40 flex flex-col md:flex-row gap-2 justify-between">
      <span>© {new Date().getFullYear()} {CONTACT.brand}. Todos los derechos reservados.</span>
      <span>Atención 24/7 · 365 días al año</span>
    </div>
  </footer>
);
