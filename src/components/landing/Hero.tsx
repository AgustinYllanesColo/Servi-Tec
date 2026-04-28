import { Phone, MessageCircle, ShieldCheck, Clock, Star } from "lucide-react";
import heroImg from "@/assets/hero-technician.jpg";
import { CONTACT, waLink } from "@/config/contact";

export const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-hero text-white">
    <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-radial)" }} />
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
    <div className="container mx-auto px-4 py-14 md:py-24 grid lg:grid-cols-2 gap-12 items-center relative">
      <div className="animate-float-up">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-accent backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-accent pulse-ring" /> ATENCIÓN 24 HORAS · LOS 365 DÍAS
        </span>
        <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
          ¿Te quedaste <span className="text-accent">sin agua</span>? Tu bomba vuelve a funcionar <span className="text-accent">hoy mismo</span>.
        </h1>
        <p className="mt-5 text-lg text-white/80 max-w-xl text-balance">
          Service técnico urgente de bombas de agua, ROWA y presurizadoras en Buenos Aires.
          Técnicos matriculados en tu domicilio en menos de 60 minutos. Presupuesto sin cargo.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-whatsapp text-whatsapp-foreground font-bold text-base shadow-cta hover:scale-[1.03] active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> Pedir técnico por WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-accent text-accent-foreground font-bold text-base shadow-cta hover:scale-[1.03] active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" /> Llamar al {CONTACT.phoneDisplay}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent" /> Garantía escrita</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> Respuesta en 60 min</span>
          <span className="inline-flex items-center gap-1.5"><Star className="w-4 h-4 text-accent" /> +2.500 reparaciones</span>
        </div>
      </div>

      <div className="relative animate-float-up" style={{ animationDelay: "0.15s" }}>
        <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
        <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/10">
          <img
            src={heroImg}
            alt="Técnico SERVITEC reparando bomba de agua presurizadora"
            width={1280}
            height={1280}
            className="w-full h-full object-cover aspect-[4/5] lg:aspect-[5/6]"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-primary/95 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent grid place-items-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold">Técnicos matriculados</div>
                <div className="text-xs text-white/70">Cobertura total Buenos Aires</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
