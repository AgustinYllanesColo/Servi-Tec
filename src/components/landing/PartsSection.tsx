import { Settings, ShieldCheck, CheckCircle2 } from "lucide-react";

const parts = [
  { name: "Impulsores Originales", desc: "Balanceo dinámico de fábrica." },
  { name: "Sellos Mecánicos", desc: "Resistencia térmica extrema." },
  { name: "Capacitores", desc: "Arranque suave y vida útil extendida." },
  { name: "Ejes de Acero", desc: "Resistencia a la corrosión grado AISI 304." },
];

export const PartsSection = () => (
  <section className="py-24 bg-slate-950 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black tracking-[0.2em] text-accent uppercase mb-6">
            <Settings className="w-3.5 h-3.5" /> Stock Permanente
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white leading-tight mb-8">
            Repuestos <span className="text-accent">100% Originales</span>. <br />
            <span className="text-slate-500 font-medium text-3xl md:text-5xl">Reparación sin esperas.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl">
            No tercerizamos repuestos. Contamos con un inventario propio de componentes críticos para marcas líderes, garantizando que tu bomba sea reparada en la primera visita.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {parts.map((p) => (
              <div key={p.name} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <div className="text-white font-bold mb-1">{p.name}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative reveal">
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
          <div className="relative p-10 md:p-16 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden">
            <h3 className="text-white font-black text-3xl mb-8">Confianza comprobada</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-11 h-11 grid place-items-center rounded-2xl bg-accent text-slate-950">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">Repuestos genuinos</div>
                  <div className="text-slate-400 text-sm">Componentes certificados para ROWA con garantía real.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-11 h-11 grid place-items-center rounded-2xl bg-accent text-slate-950">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">Montaje profesional</div>
                  <div className="text-slate-400 text-sm">Técnicos matriculados y atención en sitio sin demoras.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-11 h-11 grid place-items-center rounded-2xl bg-accent text-slate-950">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">Soporte inmediato</div>
                  <div className="text-slate-400 text-sm">Seguimiento post-servicio y reparación con repuestos originales.</div>
                </div>
              </div>
            </div>

            <p className="mt-10 text-slate-400 text-sm leading-relaxed">
              Nuestro historial con bombas ROWA respalda reparaciones confiables que evitan nuevas paradas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
