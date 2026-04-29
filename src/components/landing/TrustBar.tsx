import { motion } from "framer-motion";
import { ShieldCheck, Clock, Wrench, BadgeCheck, Truck, ThumbsUp } from "lucide-react";

const brands = ["ROWA", "GRUNDFOS", "SALMSON", "DAB", "ESPA", "FLYGT", "PEDROLLO", "VULCANO"];

const items = [
  { icon: Clock, label: "Respuesta < 60 min" },
  { icon: ShieldCheck, label: "Garantía Escrita" },
  { icon: Wrench, label: "Técnicos Matriculados" },
  { icon: BadgeCheck, label: "Presupuesto Sin Cargo" },
  { icon: Truck, label: "Servicio a Domicilio" },
  { icon: ThumbsUp, label: "+2.500 Reparaciones" },
];

export const TrustBar = () => (
  <section className="bg-white border-y border-slate-100 overflow-hidden py-10 md:py-16">
    {/* Full-Width Brand Marquee */}
    <div className="relative mb-16 md:mb-20">
      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4 px-4">
          <div className="h-px flex-1 bg-slate-100" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">
            Especialistas Certificados en Marcas Líderes
          </span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <div className="flex overflow-hidden group">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-nowrap items-center gap-16 md:gap-32 whitespace-nowrap px-8"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span 
                key={i} 
                className="text-2xl md:text-4xl font-black text-slate-200 hover:text-accent transition-colors cursor-default tracking-tighter uppercase"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

    {/* Trust Pillars Grid */}
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
        {items.map(({ icon: Icon, label }, i) => (
          <motion.div 
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-4 group cursor-default"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:shadow-xl group-hover:shadow-accent/20 transition-all duration-500">
              <Icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-xs font-extrabold text-slate-600 group-hover:text-slate-900 leading-tight text-center transition-colors">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
