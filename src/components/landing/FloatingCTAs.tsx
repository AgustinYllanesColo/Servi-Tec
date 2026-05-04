import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT, waLink } from "@/config/contact";

export const FloatingCTAs = () => {
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowMobileBar(window.scrollY > 500);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <>
      {/* Desktop: single WhatsApp FAB only */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          aria-label="Contactar por WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-xl bg-whatsapp text-white shadow-lg shadow-whatsapp/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-whatsapp/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile: polished bottom action bar */}
      <div
        data-testid="mobile-contact-bar"
        className={`fixed inset-x-0 bottom-0 z-50 md:hidden transition-transform duration-300 ${
          showMobileBar ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showMobileBar}
      >
        <div className="grid grid-cols-2 gap-2 border-t border-white/10 bg-primary/97 px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp text-sm font-bold text-white transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="h-4.5 w-4.5" /> WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] text-sm font-bold text-white transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="h-4.5 w-4.5" /> Llamar
          </a>
        </div>
      </div>
    </>
  );
};
