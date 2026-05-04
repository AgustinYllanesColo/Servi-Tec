import { X, Check } from "lucide-react";

const pains = [
  "Te quedaste sin agua y nadie atiende",
  "La presión bajó y la ducha es un goteo",
  "La bomba hace ruido raro o se prende y apaga",
  "Te cobraron de más y el problema volvió",
  "Tenés que esperar días para que vayan",
];
const solutions = [
  "Respondemos al instante por WhatsApp y teléfono",
  "Recuperamos la presión normal el mismo día",
  "Diagnóstico exacto con repuestos originales",
  "Presupuesto cerrado por escrito antes de empezar",
  "Técnico en tu domicilio en menos de 60 min",
];

export const PainSolution = () => (
  <section className="py-14 md:py-20 bg-dark-gradient text-white relative overflow-hidden">
    <div className="container mx-auto px-4 relative">
      <div className="max-w-2xl mx-auto text-center reveal">
        <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Por qué SERVITEC</span>
        <h2 className="mt-3 font-display font-extrabold text-balance">
          Dejá de pelear con tu bomba.
        </h2>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="reveal bg-white/[0.04] border border-white/10 rounded-xl p-6">
          <h3 className="font-display font-bold text-lg text-urgent mb-4">El problema</h3>
          <ul className="space-y-3">
            {pains.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                <X className="w-4 h-4 text-urgent shrink-0 mt-0.5" /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal bg-accent/[0.08] border border-accent/25 rounded-xl p-6">
          <h3 className="font-display font-bold text-lg text-accent mb-4">La solución SERVITEC</h3>
          <ul className="space-y-3">
            {solutions.map((s) => (
              <li key={s} className="flex gap-3 text-sm text-white/90 leading-relaxed">
                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
