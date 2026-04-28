import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";

export const FloatingCTAs = () => (
  <>
    {/* Floating buttons (desktop + tablet) */}
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground grid place-items-center shadow-cta hover:scale-110 transition-transform pulse-ring"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Llamar"
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-cta hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>

    {/* Mobile bottom bar */}
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-primary/95 backdrop-blur border-t border-white/10 p-3 grid grid-cols-2 gap-2 shadow-elegant">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-whatsapp text-whatsapp-foreground font-bold text-sm shadow-cta active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
      <a
        href={CONTACT.phoneHref}
        className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-cta active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4" /> Llamar
      </a>
    </div>
  </>
);
