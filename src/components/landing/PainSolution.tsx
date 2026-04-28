import { X, Check } from "lucide-react";

const pains = [
  "Te quedaste sin agua y nadie atiende el teléfono",
  "La presión bajó y la ducha es un goteo",
  "La bomba hace ruido raro o se prende y apaga",
  "Te cobraron una fortuna y el problema volvió",
  "Tenés que esperar días para que vayan a tu casa",
];
const solutions = [
  "Atendemos al instante por WhatsApp y teléfono",
  "Recuperamos la presión normal el mismo día",
  "Diagnóstico exacto con repuestos originales",
  "Presupuesto cerrado por escrito antes de empezar",
  "Técnico en tu domicilio en menos de 60 minutos",
];

export const PainSolution = () => (
  <section className="py-16 md:py-24 bg-dark-gradient text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial)" }} />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-2xl mx-auto text-center reveal">
        <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Por qué SERVITEC</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl text-balance">
          Dejá de pelear con tu bomba. Nosotros la arreglamos.
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="reveal bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur">
          <h3 className="font-display font-bold text-xl text-urgent">El problema</h3>
          <ul className="mt-5 space-y-3">
            {pains.map((p) => (
              <li key={p} className="flex gap-3 text-white/85">
                <X className="w-5 h-5 text-urgent shrink-0 mt-0.5" /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal bg-accent/10 border border-accent/40 rounded-2xl p-7 backdrop-blur">
          <h3 className="font-display font-bold text-xl text-accent">La solución SERVITEC</h3>
          <ul className="mt-5 space-y-3">
            {solutions.map((s) => (
              <li key={s} className="flex gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
