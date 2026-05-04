import { ShieldCheck, Clock, Wrench, BadgeCheck, Truck, ThumbsUp } from "lucide-react";

const brands = ["ROWA", "GRUNDFOS", "SALMSON", "DAB", "ESPA", "FLYGT", "PEDROLLO", "VULCANO"];

const items = [
  { icon: Clock, label: "Respuesta < 60 min" },
  { icon: ShieldCheck, label: "Garantía Escrita" },
  { icon: Wrench, label: "Técnicos Matriculados" },
  { icon: BadgeCheck, label: "Presupuesto Sin Cargo" },
  { icon: Truck, label: "Servicio a Domicilio" },
  { icon: ThumbsUp, label: "+2.500 Reparaciones" },
];

export const TrustBar = () => (
  <section className="bg-white border-y border-slate-100 overflow-hidden py-8 md:py-12">
    {/* Brand Marquee */}
    <div className="relative mb-10 md:mb-14">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 px-4">
          <div className="h-px flex-1 bg-slate-100" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">
            Especialistas en Marcas Líderes
          </span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee flex-nowrap items-center gap-12 whitespace-nowrap px-6 md:gap-24">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-xl md:text-3xl font-extrabold text-slate-200 hover:text-accent transition-colors cursor-default tracking-tight uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Trust Pillars */}
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <Icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-800 leading-tight text-center transition-colors">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
