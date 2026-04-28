// Editable placeholders — reemplazar con datos reales de SERVITEC
export const CONTACT = {
  brand: "SERVITEC",
  phoneDisplay: "+54 11 0000-0000",
  phoneHref: "tel:+5411000000000",
  whatsappNumber: "5491100000000", // sin + ni espacios
  whatsappDefaultMsg: "Hola SERVITEC, necesito service de bomba de agua. ¿Pueden ayudarme?",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg ?? CONTACT.whatsappDefaultMsg)}`;
