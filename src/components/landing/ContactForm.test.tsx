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

    // Labels now have required asterisks, use getByRole for inputs
    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), { target: { value: "  Agustin  " } });
    fireEvent.change(screen.getByPlaceholderText(/Belgrano/i), { target: { value: "  Belgrano   CABA " } });
    fireEvent.change(screen.getByPlaceholderText(/bomba no arranca/i), {
      target: { value: "  bomba   no arranca\nhace ruido " },
    });
    // Button text changed to "Enviar consulta por WhatsApp"
    fireEvent.click(screen.getByRole("button", { name: /Enviar consulta por WhatsApp/i }));

    expect(open).toHaveBeenCalledTimes(1);
    const [url, target] = open.mock.calls[0];
    expect(target).toBe("_blank");
    // Message format changed to include newlines
    expect(decodeURIComponent(String(url))).toContain("soy Agustin de Belgrano CABA");
    expect(decodeURIComponent(String(url))).toContain("bomba no arranca hace ruido");
  });
});
