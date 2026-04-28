import { Wrench, Droplets, Gauge, AlertTriangle, Power, Settings, ShieldAlert, Zap, MessageCircle } from "lucide-react";
import { waLink } from "@/config/contact";

const services = [
  { icon: Wrench, title: "Reparación de bombas de agua", desc: "Diagnóstico y arreglo de bombas centrífugas, sumergibles y de superficie de todas las marcas.", msg: "Hola, necesito reparar mi bomba de agua." },
  { icon: Droplets, title: "Service oficial bombas ROWA", desc: "Repuestos originales y reparación experta para toda la línea ROWA Tango, Press, Mini y similares.", msg: "Hola, necesito service para mi bomba ROWA." },
  { icon: Gauge, title: "Presurizadoras", desc: "Instalación, calibración y reparación de presurizadoras para mejorar la presión de tu hogar.", msg: "Hola, quiero consultar por una presurizadora." },
  { icon: AlertTriangle, title: "Baja presión de agua", desc: "Detectamos la causa y devolvemos la presión normal en duchas, calefón y termotanques.", msg: "Hola, tengo baja presión de agua en casa." },
  { icon: Power, title: "Bomba que no arranca", desc: "Reparación de motores, capacitores, presóstatos y tableros eléctricos asociados.", msg: "Hola, mi bomba de agua no arranca." },
  { icon: Settings, title: "Instalación nueva", desc: "Asesoramiento y colocación de bombas y tanques con materiales de primera calidad.", msg: "Hola, quiero instalar una bomba nueva." },
  { icon: ShieldAlert, title: "Mantenimiento preventivo", desc: "Planes para consorcios, casas y comercios. Evitá quedarte sin agua antes de que ocurra.", msg: "Hola, quiero información sobre mantenimiento preventivo." },
  { icon: Zap, title: "Emergencias 24 hs", desc: "Atendemos fines de semana y feriados. Llamada y técnico en camino las 24 horas.", msg: "EMERGENCIA: necesito un técnico ahora." },
];

export const Services = () => (
  <section id="servicios" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center reveal">
        <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Servicios</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl text-primary text-balance">
          Solucionamos cualquier problema de bombas de agua
        </h2>
        <p className="mt-4 text-muted-foreground text-balance">
          Más de 15 años resolviendo urgencias en Buenos Aires. Tenemos los repuestos y la experiencia para que el agua vuelva hoy.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map(({ icon: Icon, title, desc, msg }, i) => (
          <article
            key={title}
            className="reveal group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 hover:shadow-elegant"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 grid place-items-center group-hover:bg-accent group-hover:scale-110 transition-all">
              <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
            </div>
            <h3 className="mt-4 font-display font-bold text-lg text-primary">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <a
              href={waLink(msg)}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Pedir presupuesto →
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
