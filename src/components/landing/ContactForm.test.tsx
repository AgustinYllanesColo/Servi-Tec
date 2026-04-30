import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("opens WhatsApp with a sanitized readable lead summary", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "  Agustin  " } });
    fireEvent.change(screen.getByLabelText("Zona"), { target: { value: "  Belgrano   CABA " } });
    fireEvent.change(screen.getByLabelText("¿Cuál es el problema?"), {
      target: { value: "  bomba   no arranca\nhace ruido " },
    });
    fireEvent.click(screen.getByRole("button", { name: "Enviar por WhatsApp" }));

    expect(open).toHaveBeenCalledTimes(1);
    const [url, target] = open.mock.calls[0];
    expect(target).toBe("_blank");
    expect(decodeURIComponent(String(url))).toContain(
      "Hola SERVITEC, soy Agustin de Belgrano CABA. Mi problema: bomba no arranca hace ruido",
    );
  });
});
