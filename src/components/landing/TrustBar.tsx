import { ShieldCheck, Clock, Wrench, BadgeCheck, Truck, ThumbsUp } from "lucide-react";

const items = [
  { icon: Clock, label: "Respuesta < 60 min" },
  { icon: ShieldCheck, label: "Garantía por escrito" },
  { icon: Wrench, label: "Técnicos matriculados" },
  { icon: BadgeCheck, label: "Presupuesto sin cargo" },
  { icon: Truck, label: "Vamos a tu domicilio" },
  { icon: ThumbsUp, label: "+2.500 clientes" },
];

export const TrustBar = () => (
  <section className="bg-secondary border-y border-border">
    <div className="container mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2.5 text-sm font-semibold text-primary">
          <Icon className="w-5 h-5 text-accent shrink-0" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  </section>
);
