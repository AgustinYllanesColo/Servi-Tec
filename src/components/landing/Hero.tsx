import { Phone, MessageCircle, ShieldCheck, Clock, Star, BadgeCheck } from "lucide-react";
import heroImg from "@/assets/hero-technician.jpg";
import { CONTACT, waLink } from "@/config/contact";
import { motion } from "framer-motion";

export const Hero = () => (
  <section id="top" className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0a0f1a] overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -ml-32 -mb-32" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black tracking-[0.2em] text-accent uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Atención 24hs · Urgencias Hoy
          </div>
          
          <h1 className="font-display font-extrabold text-5xl md:text-8xl leading-[0.95] tracking-tighter text-white mb-8">
            Tu bomba lista <br />
            <span className="text-accent italic">hoy mismo.</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            Especialistas matriculados en reparación de bombas <span className="text-white font-bold uppercase tracking-tight">ROWA</span> y presurizadoras. Servicio técnico urgente con repuestos originales y garantía escrita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={waLink("Hola, vi su web y necesito un técnico urgente para mi bomba. ¿Tienen disponibilidad ahora?")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-3 h-16 px-8 rounded-2xl bg-whatsapp text-white font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
            >
              <MessageCircle className="w-6 h-6" /> WhatsApp Urgente
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-3 h-16 px-8 rounded-2xl bg-white/5 text-white border border-white/10 font-black text-lg hover:bg-white/10 active:scale-95 transition-all"
            >
              <Phone className="w-6 h-6" /> Llamar Ahora
            </a>
          </div>

          {/* Live Availability Indicator */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-sm max-w-sm mb-12">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <p className="text-sm font-bold text-emerald-500 tracking-tight uppercase">
              Técnicos disponibles en <span className="text-white underline decoration-emerald-500/30 underline-offset-4">Buenos Aires</span> ahora
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
            <div>
              <div className="text-white font-bold text-2xl mb-1">60 min</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Respuesta</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl mb-1">100%</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Garantía</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl mb-1">+2.5k</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Services</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[3rem] overflow-hidden group shadow-2xl bg-slate-900">
            {/* Technical Skeleton Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <img
              src={heroImg}
              alt="Técnico SERVITEC trabajando en bomba ROWA"
              fetchpriority="high"
              loading="eager"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60 z-20" />
            
            {/* Overlay Badge - Enhanced Glassmorphism */}
            <div className="absolute bottom-10 left-10 right-10 p-8 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 z-30 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent grid place-items-center shadow-[0_0_30px_rgba(20,184,166,0.4)]">
                  <BadgeCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-white font-black text-lg">Especialistas ROWA</div>
                  <div className="text-slate-400 text-sm font-medium">Servicio Técnico Matriculado</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
