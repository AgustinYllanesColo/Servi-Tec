import { BadgeCheck, MessageCircle, Phone } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";
import heroImg from "@/assets/hero-technician-realistic.jpg";

export const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-[86vh] items-center overflow-hidden bg-[#0a0f1a] pb-10 pt-16 md:min-h-[90vh] md:pb-20 md:pt-28"
  >
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[100px] -mb-32 -ml-32" />
    </div>

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
        <div className="animate-float-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent md:mb-8">
            <span className="h-2 w-2 rounded-full bg-accent" /> Atención 24hs · Urgencias Hoy
          </div>

          <h1 className="mb-5 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl md:mb-8 md:text-8xl">
            Tu bomba lista <br />
            <span className="text-accent italic">hoy mismo.</span>
          </h1>

          <p className="mb-7 max-w-xl text-base leading-relaxed text-slate-300 md:mb-10 md:text-xl">
            Especialistas matriculados en reparación de bombas{" "}
            <span className="font-bold uppercase tracking-tight text-white">ROWA</span> y presurizadoras. Servicio técnico urgente
            con repuestos originales y garantía escrita.
          </p>

          <div className="mb-7 flex flex-col gap-3 sm:flex-row md:mb-10">
            <a
              href={waLink("Hola, vi su web y necesito un técnico urgente para mi bomba. ¿Tienen disponibilidad ahora?")}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-whatsapp px-7 text-base font-black text-white shadow-[0_16px_40px_rgba(34,197,94,0.25)] transition-all hover:scale-[1.02] active:scale-95 md:min-h-16 md:text-lg"
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6" /> WhatsApp Urgente
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 text-base font-black text-white transition-all hover:bg-white/10 active:scale-95 md:min-h-16 md:text-lg"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6" /> Llamar Ahora
            </a>
          </div>

          <div className="mb-7 flex max-w-sm items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4 backdrop-blur-sm md:mb-10">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            <p className="text-sm font-bold uppercase tracking-tight text-emerald-500">
              Técnicos disponibles en{" "}
              <span className="text-white underline decoration-emerald-500/30 underline-offset-4">Buenos Aires</span> ahora
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 md:gap-8 md:pt-8">
            <div>
              <div className="mb-1 text-xl font-bold text-white md:text-2xl">60 min</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Respuesta</div>
            </div>
            <div>
              <div className="mb-1 text-xl font-bold text-white md:text-2xl">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Garantía</div>
            </div>
            <div>
              <div className="mb-1 text-xl font-bold text-white md:text-2xl">+2.5k</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Servicios</div>
            </div>
          </div>
        </div>

        <div className="relative animate-float-up">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-900 shadow-2xl md:aspect-[5/6]">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />

            <img
              src={heroImg}
              alt="Técnico especializado en bombas ROWA realizando mantenimiento"
              {...{ fetchpriority: "high" }}
              loading="eager"
              className="relative z-10 h-full w-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-100"
            />
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-4 left-4 right-4 z-30 rounded-2xl border border-white/10 bg-slate-950/45 p-4 shadow-2xl backdrop-blur-xl md:bottom-10 md:left-10 md:right-10 md:p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent shadow-[0_0_30px_rgba(20,184,166,0.3)] md:h-14 md:w-14">
                  <BadgeCheck className="h-7 w-7 text-primary md:h-8 md:w-8" />
                </div>
                <div>
                  <div className="text-base font-black text-white md:text-lg">Especialistas ROWA</div>
                  <div className="text-sm font-medium text-slate-400">Servicio Técnico Matriculado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
