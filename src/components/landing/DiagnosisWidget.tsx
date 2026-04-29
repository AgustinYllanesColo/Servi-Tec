import { useState } from "react";
import { Check, ArrowRight, AlertCircle, Droplets, Zap, Clock, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    ]
  },
  {
    id: 2,
    question: "¿De qué marca es?",
    options: [
      { id: "rowa", label: "ROWA (Especialistas)", icon: ShieldCheck },
      { id: "grundfos", label: "Grundfos / Salmson", icon: ShieldCheck },
      { id: "otra", label: "Otra / No sé", icon: ShieldCheck },
    ]
  },
  {
    id: 3,
    question: "¿Dónde se encuentra?",
    options: [
      { id: "caba", label: "CABA", icon: ShieldCheck },
      { id: "gba-norte", label: "GBA Norte", icon: ShieldCheck },
      { id: "gba-oeste", label: "GBA Oeste", icon: ShieldCheck },
      { id: "gba-sur", label: "GBA Sur", icon: ShieldCheck },
    ]
  }
];

export const DiagnosisWidget = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleOption = (optionId: string) => {
    setAnswers({ ...answers, [currentStep]: optionId });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getUrgencyMessage = () => {
    const problem = answers[0];
    const brand = answers[1];
    const zone = answers[2];
    return `Hola, realicé el diagnóstico web. Mi problema es: ${problem}, marca: ${brand}, zona: ${zone}. Necesito un técnico urgente.`;
  };

  return (
    <section id="diagnosis" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10">
            {!isFinished ? (
              <>
                <div className="mb-10">
                  <div className="flex gap-2 mb-4">
                    {steps.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-accent' : 'bg-white/10'}`} 
                      />
                    ))}
                  </div>
                  <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4">
                    {steps[currentStep].question}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOption(option.id)}
                      className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:border-white transition-all text-left"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <option.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="font-bold text-white group-hover:text-primary text-lg">{option.label}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8 border border-accent/20">
                  <Check className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">¡Diagnóstico listo!</h3>
                <p className="text-white/70 text-xl mb-10 max-w-xl mx-auto">
                  Tenemos técnicos disponibles en tu zona para solucionar este problema hoy mismo.
                </p>
                <a 
                  href={waLink(getUrgencyMessage())}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-3 h-16 px-10 rounded-2xl bg-whatsapp text-white font-black text-xl hover:scale-105 transition-transform"
                >
                  Enviar a WhatsApp <ArrowRight className="w-6 h-6" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
