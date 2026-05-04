import { MapPin } from "lucide-react";

const zones = [
  { name: "CABA", areas: "Palermo, Belgrano, Caballito, Recoleta, Núñez, Villa Urquiza, Flores, Almagro y todos los barrios." },
  { name: "Zona Norte", areas: "Vicente López, Olivos, Martínez, San Isidro, Tigre, Pilar, Nordelta, Escobar." },
  { name: "Zona Sur", areas: "Avellaneda, Lanús, Lomas de Zamora, Quilmes, Banfield, Adrogué, Temperley." },
  { name: "Zona Oeste", areas: "Morón, Ramos Mejía, Castelar, Haedo, Ituzaingó, San Justo, Moreno." },
];

export const Coverage = () => (
  <section id="zonas" className="py-14 md:py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center reveal">
        <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Cobertura</span>
        <h2 className="mt-3 font-display font-extrabold text-primary text-balance">
          Llegamos a toda Buenos Aires
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">Sin cargo de visita en CABA y GBA.</p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {zones.map((z, i) => (
          <div
            key={z.name}
            className="reveal group bg-card border border-border rounded-xl p-5 hover:border-accent/40 transition-all duration-200 hover:shadow-soft"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center gap-2 text-accent mb-3">
              <MapPin className="w-4 h-4" />
              <h3 className="font-display font-bold text-base text-primary">{z.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{z.areas}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
