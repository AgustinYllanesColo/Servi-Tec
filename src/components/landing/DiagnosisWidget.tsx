import { useState } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Check, Clock, Droplets, ShieldCheck, Zap } from "lucide-react";
import { waLink } from "@/config/contact";

const steps = [
  {
    id: 1,
    question: "¿Qué problema tiene tu bomba?",
    options: [
      { id: "no-arranca", label: "No arranca / No hace nada", icon: Zap },
      { id: "poca-presion", label: "Poca presión de agua", icon: Droplets },
      { id: "no-corta", label: "No corta (funciona seguido)", icon: Clock },
      { id: "pierde-agua", label: "Pierde agua / Ruidos raros", icon: AlertCircle },
    ],
  },
  {
    id: 2,
    question: "¿De qué marca es?",
    options: [
      { id: "rowa", label: "ROWA (Especialistas)", icon: ShieldCheck },
      { id: "grundfos", label: "Grundfos / Salmson", icon: ShieldCheck },
      { id: "otra", label: "Otra / No sé", icon: ShieldCheck },
    ],
  },
  {
    id: 3,
    question: "¿Dónde se encuentra?",
    options: [
      { id: "caba", label: "CABA", icon: ShieldCheck },
      { id: "gba-norte", label: "GBA Norte", icon: ShieldCheck },
      { id: "gba-oeste", label: "GBA Oeste", icon: ShieldCheck },
      { id: "gba-sur", label: "GBA Sur", icon: ShieldCheck },
    ],
  },
];

const optionLabels = new Map(steps.flatMap((step) => step.options.map((option) => [option.id, option.label])));

export const DiagnosisWidget = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const getAnswerLabel = (stepIndex: number) => {
    const answer = answers[stepIndex];
    return answer ? optionLabels.get(answer) || answer : "";
  };

  const summary = {
    problem: getAnswerLabel(0),
    brand: getAnswerLabel(1).replace(" (Especialistas)", ""),
    zone: getAnswerLabel(2),
  };

  const handleOption = (optionId: string) => {
    setAnswers({ ...answers, [currentStep]: optionId });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }
    setIsFinished(true);
  };

  const handleBack = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };

  const getUrgencyMessage = () =>
    `Hola, realicé el diagnóstico web. Problema: ${summary.problem}. Marca: ${summary.brand}. Zona: ${summary.zone}. Necesito coordinar un técnico.`;

  return (
    <section id="diagnosis" className="py-14 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-primary p-6 shadow-2xl md:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl -mr-32 -mt-32" />

          <div className="relative z-10">
            {!isFinished ? (
              <>
                <div className="mb-8">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="text-xs font-black uppercase tracking-[0.22em] text-accent">
                      Paso {currentStep + 1} de {steps.length}
                    </span>
                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-white/80 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <ArrowLeft className="h-4 w-4" /> Atrás
                      </button>
                    )}
                  </div>

                  <div className="mb-5 flex gap-2" aria-hidden="true">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                          i <= currentStep ? "bg-accent" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>

                  <h2 className="mb-3 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                    {steps[currentStep].question}
                  </h2>
                  <p className="max-w-2xl text-sm text-white/60 md:text-base">
                    Elegí la opción más cercana. Con esto armamos un mensaje claro para coordinar más rápido.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOption(option.id)}
                      className="group flex min-h-24 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all hover:border-white hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                        <option.icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-lg font-bold text-white group-hover:text-primary">{option.label}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="animate-float-up text-center">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-accent/15">
                  <Check className="h-10 w-10 text-accent" />
                </div>
                <h3 className="mb-5 text-3xl font-extrabold text-white md:text-5xl">Diagnóstico listo</h3>
                <p className="mx-auto mb-7 max-w-xl text-lg text-white/70 md:text-xl">
                  Tenemos la información clave para responderte sin ida y vuelta innecesaria.
                </p>

                <div className="mx-auto mb-8 grid max-w-xl gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                  <div className="rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-white">
                    Problema: {summary.problem}
                  </div>
                  <div className="rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-white">Marca: {summary.brand}</div>
                  <div className="rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-white">Zona: {summary.zone}</div>
                </div>

                <a
                  href={waLink(getUrgencyMessage())}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-whatsapp px-8 text-lg font-black text-white transition-transform hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Enviar a WhatsApp <ArrowRight className="h-6 w-6" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
