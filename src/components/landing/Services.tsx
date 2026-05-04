import { Droplets, Gauge, Power, Settings, MessageCircle } from "lucide-react";
import { waLink } from "@/config/contact";

const serviceGroups = [
  {
    icon: Power,
    category: "Sin agua / No arranca",
    outcome: "Diagnóstico eléctrico y mecánico. Tu bomba funcionando hoy.",
    services: ["Bombas que no arrancan", "Falla de motor/capacitor", "Tablero eléctrico"],
    msg: "Hola, mi bomba de agua no arranca. Necesito un técnico.",
  },
  {
    icon: Gauge,
    category: "Baja presión",
    outcome: "Recuperamos la presión normal en duchas, calefón y termotanque.",
    services: ["Presión baja en pisos altos", "Goteo en duchas", "Calibración de presóstato"],
    msg: "Hola, tengo baja presión de agua en casa.",
  },
  {
    icon: Droplets,
    category: "ROWA y presurizadoras",
    outcome: "Especialistas en toda la línea ROWA con repuestos originales.",
    services: ["ROWA Tango, Press, Mini", "Grundfos, Salmson, DAB", "Pérdidas, ruidos, vibración"],
    msg: "Hola, necesito service para mi bomba ROWA.",
  },
  {
    icon: Settings,
    category: "Instalación / Mantenimiento",
    outcome: "Instalación profesional y planes preventivos para no quedarte sin agua.",
    services: ["Instalación de bomba nueva", "Mantenimiento preventivo", "Consorcios y comercios"],
    msg: "Hola, quiero consultar por instalación o mantenimiento.",
  },
];

export const Services = () => (
  <section id="servicios" className="py-14 md:py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center reveal">
        <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Servicios</span>
        <h2 className="mt-3 font-display font-extrabold text-primary text-balance">
          ¿Qué problema tenés?
        </h2>
        <p className="mt-3 text-muted-foreground text-balance">
          Más de 15 años resolviendo urgencias en Buenos Aires. Seleccioná tu situación.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {serviceGroups.map(({ icon: Icon, category, outcome, services, msg }, i) => (
          <article
            key={category}
            className="reveal group relative bg-card border border-border rounded-xl p-5 md:p-6 hover:border-accent/50 transition-all duration-200 hover:shadow-soft"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {/* Problem → Solution header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-lg bg-accent/10 grid place-items-center shrink-0 group-hover:bg-accent transition-colors duration-200">
                <Icon className="w-5 h-5 text-accent group-hover:text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-base text-primary leading-tight">{category}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-snug">{outcome}</p>
              </div>
            </div>

            {/* Service list – scannable rows */}
            <ul className="mb-4 space-y-1.5 pl-[3.75rem]">
              {services.map((s) => (
                <li key={s} className="text-[13px] text-slate-500 before:content-['·'] before:mr-2 before:text-accent before:font-bold">
                  {s}
                </li>
              ))}
            </ul>

            {/* WhatsApp action */}
            <a
              href={waLink(msg)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-whatsapp hover:gap-2.5 transition-all pl-[3.75rem]"
            >
              <MessageCircle className="w-4 h-4" /> Consultar por WhatsApp
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
