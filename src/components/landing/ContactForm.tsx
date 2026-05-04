import { useState, useMemo } from "react";
import { MessageCircle, Phone, Eye, AlertTriangle } from "lucide-react";
import { sanitizeContactText, waLink, CONTACT, isValidWhatsAppMessage } from "@/config/contact";

type UrgencyLevel = "" | "normal" | "urgente" | "emergencia";

export const ContactForm = () => {
  const [form, setForm] = useState({ nombre: "", zona: "", problema: "", urgencia: "" as UrgencyLevel });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPreview, setShowPreview] = useState(false);

  const update = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setTouched({ ...touched, [field]: true });
  };

  const urgencyOptions: { value: UrgencyLevel; label: string }[] = [
    { value: "normal", label: "Normal" },
    { value: "urgente", label: "Urgente (hoy)" },
    { value: "emergencia", label: "Emergencia (ahora)" },
  ];

  const generatedMessage = useMemo(() => {
    const nombre = sanitizeContactText(form.nombre);
    const zona = sanitizeContactText(form.zona);
    const problema = sanitizeContactText(form.problema);
    const urgencia = form.urgencia ? urgencyOptions.find(u => u.value === form.urgencia)?.label || "" : "";

    let msg = `Hola SERVITEC, soy ${nombre || "[nombre]"} de ${zona || "[zona]"}.`;
    msg += `\nProblema: ${problema || "[problema]"}`;
    if (urgencia) msg += `\nUrgencia: ${urgencia}`;
    return msg;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const isComplete = form.nombre.trim().length >= 2 && form.zona.trim().length >= 2 && form.problema.trim().length >= 5;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ nombre: true, zona: true, problema: true });
    if (!isComplete) return;
    if (!isValidWhatsAppMessage(generatedMessage)) return;
    window.open(waLink(generatedMessage), "_blank");
  };

  const fieldError = (field: string, minLen: number) =>
    touched[field] && form[field as keyof typeof form].trim().length < minLen;

  return (
    <section id="contacto" className="py-14 pb-20 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-5 md:p-8 shadow-elegant reveal">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">Contacto rápido</span>
            <h2 className="mt-2 font-display font-extrabold text-2xl md:text-3xl text-primary text-balance">
              Armá tu consulta y la recibimos al instante
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Tu mensaje llega directo a nuestro WhatsApp.</p>
          </div>

          <form onSubmit={submit} className="grid gap-4" noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-primary">
                  Nombre <span className="text-urgent">*</span>
                </span>
                <input
                  required
                  value={form.nombre}
                  onChange={(e) => update("nombre", e.target.value)}
                  onBlur={() => setTouched({ ...touched, nombre: true })}
                  placeholder="Tu nombre"
                  className={`mt-1 w-full h-[3.25rem] px-4 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition ${
                    fieldError("nombre", 2) ? "border-urgent ring-1 ring-urgent/30" : "border-input"
                  }`}
                />
                {fieldError("nombre", 2) && (
                  <span className="mt-1 flex items-center gap-1 text-xs text-urgent">
                    <AlertTriangle className="w-3 h-3" /> Ingresá tu nombre
                  </span>
                )}
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-primary">
                  Zona <span className="text-urgent">*</span>
                </span>
                <input
                  required
                  value={form.zona}
                  onChange={(e) => update("zona", e.target.value)}
                  onBlur={() => setTouched({ ...touched, zona: true })}
                  placeholder="Ej: Belgrano, San Isidro..."
                  className={`mt-1 w-full h-[3.25rem] px-4 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition ${
                    fieldError("zona", 2) ? "border-urgent ring-1 ring-urgent/30" : "border-input"
                  }`}
                />
                {fieldError("zona", 2) && (
                  <span className="mt-1 flex items-center gap-1 text-xs text-urgent">
                    <AlertTriangle className="w-3 h-3" /> Indicá tu zona
                  </span>
                )}
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-primary">
                ¿Cuál es el problema? <span className="text-urgent">*</span>
              </span>
              <textarea
                required
                value={form.problema}
                onChange={(e) => update("problema", e.target.value)}
                onBlur={() => setTouched({ ...touched, problema: true })}
                placeholder="Ej: la bomba no arranca, baja presión, ruido raro..."
                rows={3}
                className={`mt-1 w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none ${
                  fieldError("problema", 5) ? "border-urgent ring-1 ring-urgent/30" : "border-input"
                }`}
              />
              {fieldError("problema", 5) && (
                <span className="mt-1 flex items-center gap-1 text-xs text-urgent">
                  <AlertTriangle className="w-3 h-3" /> Describí brevemente el problema
                </span>
              )}
            </label>

            {/* Urgency */}
            <div>
              <span className="text-sm font-semibold text-primary">Urgencia</span>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {urgencyOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update("urgencia", form.urgencia === opt.value ? "" : opt.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                      form.urgencia === opt.value
                        ? "bg-accent/10 border-accent text-accent"
                        : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message preview */}
            {isComplete && (
              <div>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  <Eye className="w-3.5 h-3.5" /> {showPreview ? "Ocultar" : "Ver"} mensaje que se enviará
                </button>
                {showPreview && (
                  <div className="mt-2 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600 whitespace-pre-line font-mono">
                    {generatedMessage}
                  </div>
                )}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isComplete}
              className="mt-1 inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl bg-whatsapp text-white font-bold shadow-cta hover:brightness-110 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:active:scale-100"
            >
              <MessageCircle className="w-5 h-5" /> Enviar consulta por WhatsApp
            </button>

            {/* Secondary phone */}
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-12 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4" /> O llamanos: {CONTACT.phoneDisplay}
            </a>

            <p className="text-xs text-muted-foreground text-center">
              Respondemos en minutos · Sin cargo · 24 hs
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
