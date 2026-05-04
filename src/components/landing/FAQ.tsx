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
    <section id="faq" className="py-14 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Preguntas frecuentes</span>
          <h2 className="mt-3 font-display font-extrabold text-primary text-balance">
            Lo que más nos consultan
          </h2>
        </div>

        <div className="mt-8 max-w-2xl mx-auto space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="reveal bg-card border border-border rounded-xl overflow-hidden"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 text-left px-5 py-4 font-display font-semibold text-sm md:text-base text-primary hover:bg-accent/[0.03] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  id={`faq-btn-${i}`}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="grid transition-all duration-200"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
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
