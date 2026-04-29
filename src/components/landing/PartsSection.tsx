import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
          <div className="relative p-10 md:p-16 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-10 h-10 text-accent" />
                <div>
                  <div className="text-white font-black text-xl italic tracking-tighter">QUALITY ASSURED</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">In-house Inventory</div>
                </div>
              </div>
              <div className="text-accent font-black text-5xl opacity-20">ROWA</div>
            </div>
            
            <div className="space-y-6">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "95%" }} 
                  className="h-full bg-accent" 
                />
              </div>
              <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span>Optimización de Desempeño</span>
                <span className="text-white">95%</span>
              </div>
              
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  transition={{ delay: 0.2 }}
                  className="h-full bg-accent" 
                />
              </div>
              <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span>Compatibilidad Original</span>
                <span className="text-white">100%</span>
              </div>
            </div>

            <p className="mt-12 text-slate-400 text-sm leading-relaxed italic">
              "El uso de componentes originales no es opcional. Es lo que garantiza que la bomba no vuelva a fallar en 6 meses."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
