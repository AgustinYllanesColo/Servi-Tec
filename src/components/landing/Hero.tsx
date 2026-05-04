import { MessageCircle, Phone, Shield, Clock, Award } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";
import heroImg from "@/assets/hero-technician-realistic.jpg";

export const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#0a0f1a] pb-8 pt-14 md:min-h-[88vh] md:pb-16 md:pt-24"
  >
    {/* Subtle background accents – reduced glow */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/[0.07] blur-[100px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/15 blur-[80px] -mb-24 -ml-24" />
    </div>

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Copy column */}
        <div className="animate-float-up max-w-xl">
          {/* Badge – functional, not decorative */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-accent/15 bg-accent/[0.08] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-accent md:mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-subtle" /> Atención 24hs · CABA y GBA
          </div>

          <h1 className="mb-5 font-display font-extrabold text-white md:mb-6">
            Tu bomba lista{" "}
            <span className="text-accent">hoy.</span>
          </h1>

          <p className="mb-6 max-w-md text-base leading-relaxed text-slate-300/90 md:mb-8 md:text-lg">
            Técnicos matriculados en reparación de bombas{" "}
            <span className="font-semibold text-white">ROWA</span> y presurizadoras.
            Garantía escrita y repuestos originales.
          </p>

          {/* CTA stack: 1 primary WhatsApp, 1 secondary phone */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row md:mb-8">
            <a
              href={waLink("Hola, vi su web y necesito un técnico para mi bomba. ¿Tienen disponibilidad?")}
              target="_blank"
              rel="noopener"
              id="hero-cta-whatsapp"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-whatsapp px-6 text-base font-bold text-white shadow-cta transition-all hover:brightness-110 active:scale-[0.97] sm:px-7"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Urgente
            </a>
            <a
              href={CONTACT.phoneHref}
              id="hero-cta-phone"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-6 text-base font-bold text-white transition-all hover:bg-white/[0.08] active:scale-[0.97] sm:px-7"
            >
              <Phone className="h-5 w-5" /> Llamar Ahora
            </a>
          </div>

          {/* Proof strip – directly near CTAs */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-semibold text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" /> 60 min promedio
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-accent" /> Garantía escrita
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-accent" /> Repuestos ROWA
            </span>
          </div>
        </div>

        {/* Image column – cleaner crop */}
        <div className="relative animate-float-up hidden md:block" style={{ animationDelay: "0.15s" }}>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
            <img
              src={heroImg}
              alt="Técnico especializado en bombas ROWA realizando mantenimiento"
              {...{ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>}
              loading="eager"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/70 via-transparent to-transparent" />

            {/* Certification overlay – single, small */}
            <div className="absolute bottom-4 left-4 z-30 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-lg">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Especialistas ROWA</div>
                <div className="text-xs text-slate-400">Técnicos Matriculados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
