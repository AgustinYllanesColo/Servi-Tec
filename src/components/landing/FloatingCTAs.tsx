import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT, waLink } from "@/config/contact";

export const FloatingCTAs = () => {
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowMobileBar(window.scrollY > 360);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <>
      <div className="fixed bottom-10 right-10 z-50 hidden flex-col gap-4 md:flex">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          className="grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_18px_44px_rgba(34,197,94,0.34)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
        <a
          href={CONTACT.phoneHref}
          aria-label="Llamar"
          className="grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_18px_44px_rgba(20,184,166,0.28)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Phone className="h-8 w-8" />
        </a>
      </div>

      <div
        data-testid="mobile-contact-bar"
        className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-white/10 bg-primary/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-16px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          showMobileBar ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showMobileBar}
      >
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="inline-flex h-14 min-w-0 items-center justify-center gap-2 rounded-2xl bg-whatsapp text-sm font-black text-whatsapp-foreground transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex h-14 min-w-0 items-center justify-center gap-2 rounded-2xl bg-accent text-sm font-black text-accent-foreground transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Phone className="h-5 w-5" /> Llamar
        </a>
      </div>
    </>
  );
};
