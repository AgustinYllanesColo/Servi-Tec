import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { sanitizeContactText, waLink } from "@/config/contact";

export const ContactForm = () => {
  const [form, setForm] = useState({ nombre: "", zona: "", problema: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nombre = sanitizeContactText(form.nombre);
    const zona = sanitizeContactText(form.zona);
    const problema = sanitizeContactText(form.problema);
    const msg = `Hola SERVITEC, soy ${nombre} de ${zona}. Mi problema: ${problema}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section id="contacto" className="py-16 pb-24 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-10 shadow-elegant reveal">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Contacto rápido</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-primary text-balance">
              Contanos qué pasa y te respondemos en minutos
            </h2>
            <p className="mt-3 text-muted-foreground">Tu consulta llega directo a nuestro WhatsApp.</p>
          </div>

          <form onSubmit={submit} className="mt-8 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-primary">Nombre</span>
                <input
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  className="mt-1.5 w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-primary">Zona</span>
                <input
                  required
                  value={form.zona}
                  onChange={(e) => setForm({ ...form, zona: e.target.value })}
                  placeholder="Ej: Belgrano, San Isidro..."
                  className="mt-1.5 w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-primary">¿Cuál es el problema?</span>
              <textarea
                required
                value={form.problema}
                onChange={(e) => setForm({ ...form, problema: e.target.value })}
                placeholder="Ej: la bomba no arranca, baja presión, ruido raro..."
                rows={4}
                className="mt-1.5 w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 h-14 px-7 rounded-2xl bg-whatsapp text-whatsapp-foreground font-bold shadow-cta hover:scale-[1.02] active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <MessageCircle className="w-5 h-5" /> Enviar por WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Respondemos en minutos · Sin cargo · 24 hs
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
