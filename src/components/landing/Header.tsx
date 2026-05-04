import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTACT, waLink } from "@/config/contact";
import logo from "@/assets/servitec-logo.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = () => { if (mql.matches) setOpen(false); };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#diagnosis", label: "Diagnóstico" },
    { href: "#zonas", label: "Zonas" },
    { href: "#testimonios", label: "Opiniones" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-primary/97 shadow-lg shadow-primary/10 backdrop-blur-xl"
          : "bg-primary/95 backdrop-blur"
      } border-b border-white/[0.06]`}
    >
      <div className="container mx-auto flex items-center justify-between h-[3.5rem] px-4">
        {/* Logo – compact */}
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <img
            src={logo}
            alt="SERVITEC logo"
            className="h-9 w-9 rounded-lg border border-white/10 bg-slate-950 object-contain"
          />
          <span className="font-display font-bold text-lg tracking-tight text-white">
            {CONTACT.brand}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 px-4 h-9 rounded-lg bg-whatsapp text-white font-semibold text-[13px] hover:brightness-110 active:scale-[0.97] transition-all"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 px-4 h-9 rounded-lg border border-white/15 bg-white/5 text-white font-semibold text-[13px] hover:bg-white/10 active:scale-[0.97] transition-all"
            aria-label="Llamar por teléfono"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Llamar</span>
            <span className="sm:hidden">Tel</span>
          </a>
          <button
            aria-label="Menú"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-1 w-9 h-9 grid place-items-center rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 border-t border-white/[0.06]" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Menú móvil"
          className="bg-primary/98 px-4 py-3 flex flex-col gap-0.5"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
