import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "¿Cuánto tardan en llegar a mi domicilio?", a: "En CABA y GBA llegamos en menos de 60 minutos en la mayoría de los casos. Para emergencias coordinamos atención inmediata las 24 hs." },
  { q: "¿Cobran la visita o el presupuesto?", a: "El presupuesto es siempre sin cargo y por escrito. Solo cobrás si autorizás la reparación." },
  { q: "¿Trabajan con bombas ROWA?", a: "Sí, somos especialistas en service de bombas ROWA y trabajamos con repuestos originales con garantía." },
  { q: "¿Atienden fines de semana y feriados?", a: "Sí, SERVITEC atiende emergencias las 24 horas, los 365 días del año." },
  { q: "¿Qué garantía dan sobre la reparación?", a: "Toda reparación incluye garantía escrita sobre repuestos y mano de obra. Te quedás tranquilo." },
  { q: "¿Aceptan tarjeta o transferencia?", a: "Sí, podés abonar en efectivo, transferencia o tarjetas de crédito y débito." },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Preguntas frecuentes</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl text-primary text-balance">
            Lo que más nos consultan
          </h2>
        </div>
        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-display font-semibold text-primary hover:bg-accent/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
