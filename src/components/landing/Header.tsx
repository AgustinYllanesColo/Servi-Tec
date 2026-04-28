import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { CONTACT, waLink } from "@/config/contact";
import logo from "@/assets/servitec-logo.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#zonas", label: "Zonas" },
    { href: "#opiniones", label: "Opiniones" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-18 px-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="SERVITEC logo"
            className="h-12 w-12 rounded-full border border-white/10 bg-slate-950 object-contain"
          />
          <span className="font-display font-extrabold text-xl tracking-tight text-white">
            {CONTACT.brand}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold text-sm hover:scale-[1.03] active:scale-95 transition-transform shadow-cta"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 px-4 h-10 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:scale-[1.03] active:scale-95 transition-transform shadow-cta"
          >
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">Llamar ahora</span><span className="sm:hidden">Llamar</span>
          </a>
          <button
            aria-label="Menú"
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-1 w-10 h-10 grid place-items-center text-white"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden bg-primary border-t border-white/10 px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-white/85 hover:text-accent text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
