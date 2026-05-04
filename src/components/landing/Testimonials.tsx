import { Star, MapPin, Clock, Wrench } from "lucide-react";

const testimonials = [
  {
    problem: "Edificio con 40 unidades sin agua un sábado",
    outcome: "Bomba ROWA reparada en menos de 1 hora",
    name: "Carlos R.",
    type: "Administración Consorcio",
    location: "Palermo, CABA",
    timing: "45 min de respuesta",
    service: "Reparación urgente de presurizadora",
    rating: 5,
  },
  {
    problem: "Presión inexistente en pisos altos",
    outcome: "Sistema de presión instalado, funcionamiento perfecto",
    name: "María Elena R.",
    type: "Hogar Particular",
    location: "Martínez, GBA Norte",
    timing: "Resuelto el mismo día",
    service: "Instalación de sistema de presión",
    rating: 5,
  },
  {
    problem: "Planta industrial con bombas detenidas",
    outcome: "Mantenimiento completo con repuestos originales",
    name: "Jorge M.",
    type: "Gerente de Mantenimiento",
    location: "Pilar, GBA Norte",
    timing: "Servicio programado",
    service: "Mantenimiento preventivo industrial",
    rating: 5,
  },
];

export const Testimonials = () => (
  <section id="testimonios" className="py-16 md:py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16 reveal">
        <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Resultados reales</span>
        <h2 className="mt-3 font-display font-extrabold text-primary text-balance">
          Problemas resueltos,{" "}
          <span className="text-slate-400">clientes tranquilos.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <article
            key={t.name}
            className="reveal group relative flex flex-col rounded-xl border border-slate-100 bg-slate-50/80 p-6 transition-all duration-300 hover:bg-white hover:shadow-elegant hover:border-slate-200 md:p-7"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Stars */}
            <div className="flex text-amber-400 mb-4 gap-0.5">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>

            {/* Outcome-first: problem → result */}
            <div className="mb-4">
              <p className="text-sm text-slate-500 mb-1.5">
                <span className="font-semibold text-slate-700">Problema:</span> {t.problem}
              </p>
              <p className="text-base font-bold text-primary leading-snug">
                ✓ {t.outcome}
              </p>
            </div>

            {/* Meta: timing, service */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/8 text-[10px] font-bold text-accent uppercase tracking-wide">
                <Clock className="w-3 h-3" /> {t.timing}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                <Wrench className="w-3 h-3" /> {t.service}
              </span>
            </div>

            {/* Customer info */}
            <div className="mt-auto pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-display font-bold text-sm text-slate-800">{t.name}</span>
                  <span className="text-xs text-slate-400 ml-2">{t.type}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                <MapPin className="w-3 h-3" /> {t.location}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
