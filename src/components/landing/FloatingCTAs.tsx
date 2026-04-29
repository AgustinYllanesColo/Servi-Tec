import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingCTAs = () => (
  <>
    {/* Floating buttons (desktop + tablet) */}
    <div className="hidden md:flex fixed bottom-10 right-10 z-50 flex-col gap-5">
      <Magnetic>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          className="w-20 h-20 rounded-full bg-whatsapp text-whatsapp-foreground grid place-items-center shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform pulse-ring"
        >
          <MessageCircle className="w-10 h-10" />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href={CONTACT.phoneHref}
          aria-label="Llamar"
          className="w-20 h-20 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:scale-110 transition-transform"
        >
          <Phone className="w-10 h-10" />
        </a>
      </Magnetic>
    </div>

    {/* Mobile bottom bar */}
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-primary/95 backdrop-blur-2xl border-t border-white/10 p-4 grid grid-cols-2 gap-3 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center justify-center gap-3 h-16 rounded-2xl bg-whatsapp text-whatsapp-foreground font-black text-sm active:scale-95 transition-transform"
      >
        <MessageCircle className="w-6 h-6" /> WhatsApp
      </a>
      <a
        href={CONTACT.phoneHref}
        className="inline-flex items-center justify-center gap-3 h-16 rounded-2xl bg-accent text-accent-foreground font-black text-sm active:scale-95 transition-transform"
      >
        <Phone className="w-6 h-6" /> Llamar
      </a>
    </div>
  </>
);
