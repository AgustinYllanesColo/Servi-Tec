import { useState } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Check, Clock, Droplets, ShieldCheck, Zap, MessageCircle } from "lucide-react";
import { waLink } from "@/config/contact";

const steps = [
  {
    id: 1,
    question: "¿Qué problema tiene tu bomba?",
    helper: "Elegí la opción más cercana.",
    options: [
      { id: "no-arranca", label: "No arranca", icon: Zap },
      { id: "poca-presion", label: "Poca presión", icon: Droplets },
      { id: "no-corta", label: "No corta", icon: Clock },
      { id: "pierde-agua", label: "Pierde agua / Ruidos", icon: AlertCircle },
    ],
  },
  {
    id: 2,
    question: "¿De qué marca es?",
    helper: "Si no sabés, elegí 'Otra'.",
    options: [
      { id: "rowa", label: "ROWA", icon: ShieldCheck },
      { id: "grundfos", label: "Grundfos / Salmson", icon: ShieldCheck },
      { id: "otra", label: "Otra / No sé", icon: ShieldCheck },
    ],
  },
  {
    id: 3,
    question: "¿Dónde estás?",
    helper: "Para asignar el técnico más cercano.",
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
    brand: getAnswerLabel(1),
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
    if (isFinished) {
      setIsFinished(false);
      return;
    }
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsFinished(false);
  };

  const getUrgencyMessage = () =>
    `Hola, realicé el diagnóstico web.\n• Problema: ${summary.problem}\n• Marca: ${summary.brand}\n• Zona: ${summary.zone}\nNecesito coordinar un técnico.`;

  return (
    <section id="diagnosis" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-primary p-5 shadow-xl md:p-10">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/[0.06] blur-[60px] -mr-24 -mt-24" />

          <div className="relative z-10">
            {!isFinished ? (
              <>
                {/* Progress */}
                <div className="mb-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                      Paso {currentStep + 1} de {steps.length}
                    </span>
                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" /> Atrás
                      </button>
                    )}
                  </div>

                  {/* Progress bar */}
                  <div className="flex gap-1.5" aria-hidden="true">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-400 ${
                          i <= currentStep ? "bg-accent" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question */}
                <h2 className="mb-2 font-display text-2xl font-extrabold leading-tight text-white md:text-4xl">
                  {steps[currentStep].question}
                </h2>
                <p className="mb-6 text-sm text-white/50 md:text-base">
                  {steps[currentStep].helper}
                </p>

                {/* Options grid */}
                <div className={`grid gap-3 ${steps[currentStep].options.length <= 3 ? "sm:grid-cols-3" : "grid-cols-2"}`}>
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOption(option.id)}
                      className="group flex min-h-[3.5rem] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left transition-all duration-200 hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.97]"
                    >
                      <option.icon className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-sm font-semibold text-white md:text-base">{option.label}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Completion state */
              <div className="animate-float-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 border border-accent/20">
                    <Check className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white md:text-2xl">Diagnóstico listo</h3>
                    <p className="text-sm text-white/50">Información lista para coordinar tu técnico.</p>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-6 space-y-2 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-2.5">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Problema</span>
                    <span className="text-sm font-bold text-white">{summary.problem}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-2.5">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Marca</span>
                    <span className="text-sm font-bold text-white">{summary.brand}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-2.5">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Zona</span>
                    <span className="text-sm font-bold text-white">{summary.zone}</span>
                  </div>
                </div>

                {/* Actions */}
                <a
                  href={waLink(getUrgencyMessage())}
                  target="_blank"
                  rel="noopener"
                  id="diagnosis-cta-whatsapp"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-whatsapp text-base font-bold text-white transition-all hover:brightness-110 active:scale-[0.97]"
                >
                  <MessageCircle className="h-5 w-5" /> Enviar diagnóstico por WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 w-full text-center text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
                >
                  Volver a empezar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
