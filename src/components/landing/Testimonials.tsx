import { Star, ShieldCheck, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Administración Consorcio",
    text: "Teníamos 40 unidades sin agua un sábado a la tarde. El equipo de SERVITEC llegó en 45 minutos y resolvió el problema de la bomba ROWA principal en menos de una hora. Excelente profesionalismo.",
    rating: 5,
    location: "Palermo, CABA",
    service: "Reparación Urgente Bomba Presurizadora"
  },
  {
    name: "María Elena Rossi",
    role: "Hogar Particular",
    text: "La presión en mi casa era inexistente. Instalaron una bomba nueva y ahora el servicio es perfecto. Me explicaron todo con mucha paciencia y el presupuesto fue el acordado.",
    rating: 5,
    location: "Martínez, Buenos Aires",
    service: "Instalación de Sistema de Presión"
  },
  {
    name: "Jorge Martínez",
    role: "Gerente de Mantenimiento",
    text: "Servicio técnico impecable para nuestra planta. Conocen las bombas a fondo y los repuestos son originales. Es difícil encontrar gente tan seria en este rubro.",
    rating: 5,
    location: "Pilar, Buenos Aires",
    service: "Mantenimiento Preventivo Industrial"
  },
];

export const Testimonials = () => (
  <section id="testimonios" className="py-24 md:py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-[11px] font-black tracking-[0.2em] text-accent uppercase mb-6">
          <BadgeCheck className="w-3.5 h-3.5" /> Experiencias Reales
        </div>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-primary leading-tight mb-6">
          Confianza construida con <br />
          <span className="text-slate-400 font-medium">soluciones inmediatas.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 md:p-10"
          >
            <div className="flex text-amber-400 mb-6 gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium italic">
              "{t.text}"
            </p>

            <div className="mt-auto flex flex-col gap-1 border-t border-slate-200 pt-8">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-900">{t.name}</span>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3" /> Verificado
                </div>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</span>
              <span className="text-[10px] font-medium text-slate-400 mt-2 italic">{t.service} • {t.location}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
