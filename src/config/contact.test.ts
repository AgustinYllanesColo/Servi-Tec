import { describe, expect, it } from "vitest";
import { CONTACT, buildWhatsAppLink, normalizePhoneHref, sanitizeContactText, waLink } from "./contact";

describe("contact helpers", () => {
  it("normalizes phone numbers for tel links", () => {
    expect(normalizePhoneHref("+54 11 5555-1234")).toBe("tel:+541155551234");
    expect(normalizePhoneHref("54911 5555 1234")).toBe("tel:+5491155551234");
  });

  it("sanitizes user text before building WhatsApp messages", () => {
    expect(sanitizeContactText("  baja\npresion   en   cocina  ")).toBe("baja presion en cocina");
  });

  it("builds encoded WhatsApp links from sanitized text", () => {
    const url = buildWhatsAppLink("5491155551234", " Hola   SERVITEC ");

    expect(url).toBe("https://wa.me/5491155551234?text=Hola%20SERVITEC");
  });

  it("uses the public launch contact number for calls and WhatsApp", () => {
    expect(CONTACT.phoneDisplay).toBe("+54 11 3571-7218");
    expect(CONTACT.phoneHref).toBe("tel:+541135717218");
    expect(CONTACT.whatsappNumber).toBe("5491135717218");
    expect(waLink("Consulta")).toBe("https://wa.me/5491135717218?text=Consulta");
  });
});
