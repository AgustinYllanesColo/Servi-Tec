import { Star } from "lucide-react";

const items = [
  { name: "Laura M.", area: "Belgrano, CABA", text: "Me quedé sin agua un domingo a la noche. En 40 minutos tenía un técnico en casa y a las dos horas ya estaba todo funcionando. Excelente.", rating: 5 },
  { name: "Ricardo P.", area: "San Isidro", text: "Cambiaron la presurizadora ROWA, dejaron todo impecable y la presión es otra. Profesionales y honestos con el presupuesto.", rating: 5 },
  { name: "Consorcio Av. Rivadavia", area: "Caballito", text: "Hace dos años tenemos el plan de mantenimiento. Nunca más nos quedamos sin agua. Súper recomendables.", rating: 5 },
];

export const Testimonials = () => (
  <section id="opiniones" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center reveal">
        <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Opiniones reales</span>
        <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl text-primary text-balance">
          Miles de hogares ya confían en SERVITEC
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure
            key={t.name}
            className="reveal bg-card border border-border rounded-2xl p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="w-4 h-4 fill-accent" />
              ))}
            </div>
            <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</blockquote>
            <figcaption className="mt-5 pt-4 border-t border-border">
              <div className="font-display font-bold text-primary">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.area}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
