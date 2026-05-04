const env = import.meta.env;

export const sanitizeContactText = (value: string) => value.replace(/\s+/g, " ").trim();

const onlyDigits = (value: string) => value.replace(/\D/g, "");

export const normalizePhoneHref = (value: string) => {
  const digits = onlyDigits(value);
  return digits ? `tel:+${digits}` : "";
};

export const buildWhatsAppLink = (whatsappNumber: string, msg: string) =>
  `https://wa.me/${onlyDigits(whatsappNumber)}?text=${encodeURIComponent(sanitizeContactText(msg))}`;

// Reemplazar estos valores con variables VITE_* reales antes de publicar campañas.
export const CONTACT = {
  brand: sanitizeContactText(env.VITE_CONTACT_BRAND || "SERVITEC"),
  phoneDisplay: sanitizeContactText(env.VITE_CONTACT_PHONE_DISPLAY || "+54 11 0000-0000"),
  phoneHref: normalizePhoneHref(env.VITE_CONTACT_PHONE_E164 || "+54 11 0000-0000"),
  whatsappNumber: onlyDigits(env.VITE_CONTACT_WHATSAPP || "5491100000000"),
  whatsappDefaultMsg: sanitizeContactText(
    env.VITE_CONTACT_DEFAULT_MESSAGE || "Hola SERVITEC, necesito service de bomba de agua. ¿Pueden ayudarme?",
  ),
};

export const contactHasPlaceholders =
  CONTACT.phoneDisplay.includes("0000") || CONTACT.phoneHref.includes("0000") || CONTACT.whatsappNumber.includes("0000");

export const waLink = (msg?: string) => buildWhatsAppLink(CONTACT.whatsappNumber, msg ?? CONTACT.whatsappDefaultMsg);

/**
 * Validates that a WhatsApp message has real content beyond just greetings.
 * Returns true if the message has meaningful content.
 */
export const isValidWhatsAppMessage = (msg: string): boolean => {
  const cleaned = sanitizeContactText(msg);
  // Must have at least 10 meaningful characters after removing common filler
  const withoutFiller = cleaned
    .replace(/^hola\s*/i, "")
    .replace(/servitec\s*/i, "")
    .replace(/[,.\s]/g, "");
  return withoutFiller.length >= 5;
};

// Show config warning in development only
if (import.meta.env.DEV && contactHasPlaceholders) {
  console.warn(
    "[SERVITEC] ⚠️ Contact data uses placeholder values (0000). Set VITE_CONTACT_* env vars before deploying.",
  );
}
