import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DiagnosisWidget } from "./DiagnosisWidget";

describe("DiagnosisWidget", () => {
  it("shows a readable summary after completing the diagnosis", () => {
    render(<DiagnosisWidget />);

    fireEvent.click(screen.getByRole("button", { name: "No arranca / No hace nada" }));
    fireEvent.click(screen.getByRole("button", { name: "ROWA (Especialistas)" }));
    fireEvent.click(screen.getByRole("button", { name: "CABA" }));

    expect(screen.getByText("Diagnóstico listo")).toBeInTheDocument();
    expect(screen.getByText("Problema: No arranca / No hace nada")).toBeInTheDocument();
    expect(screen.getByText("Marca: ROWA")).toBeInTheDocument();
    expect(screen.getByText("Zona: CABA")).toBeInTheDocument();
  });
});
