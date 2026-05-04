import { Settings, ShieldCheck, CheckCircle2 } from "lucide-react";

const parts = [
  { name: "Impulsores Originales", desc: "Balanceo dinámico de fábrica." },
  { name: "Sellos Mecánicos", desc: "Resistencia térmica extrema." },
  { name: "Capacitores", desc: "Arranque suave y vida útil extendida." },
  { name: "Ejes de Acero", desc: "Resistencia a la corrosión AISI 304." },
];

export const PartsSection = () => (
  <section className="py-16 md:py-24 bg-slate-950 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/15 text-[10px] font-bold tracking-[0.18em] text-accent uppercase mb-5">
            <Settings className="w-3.5 h-3.5" /> Stock Permanente
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight mb-3">
            Repuestos <span className="text-accent">originales</span>.
          </h2>
          <p className="text-xl md:text-2xl font-display font-medium text-slate-500 mb-6">
            Reparación sin esperas.
          </p>
          <p className="text-slate-400 text-base mb-8 max-w-xl leading-relaxed">
            Contamos con inventario propio de componentes críticos para marcas líderes, garantizando que tu bomba sea reparada en la primera visita.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {parts.map((p) => (
              <div key={p.name} className="flex gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white font-bold mb-0.5">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative reveal">
          <div className="relative p-8 md:p-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <h3 className="text-white font-bold text-2xl mb-6">Confianza comprobada</h3>
            <div className="space-y-5">
              {[
                { icon: CheckCircle2, title: "Repuestos genuinos", desc: "Componentes certificados para ROWA con garantía real." },
                { icon: ShieldCheck, title: "Montaje profesional", desc: "Técnicos matriculados y atención en sitio sin demoras." },
                { icon: ShieldCheck, title: "Soporte inmediato", desc: "Seguimiento post-servicio y reparación con repuestos originales." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 w-10 h-10 grid place-items-center rounded-xl bg-accent text-slate-950 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{item.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
