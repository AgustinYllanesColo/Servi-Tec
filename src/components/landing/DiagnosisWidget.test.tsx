import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DiagnosisWidget } from "./DiagnosisWidget";

describe("DiagnosisWidget", () => {
  it("shows a readable summary after completing the diagnosis", () => {
    render(<DiagnosisWidget />);

    // Updated button labels to match redesigned shorter labels
    fireEvent.click(screen.getByRole("button", { name: /No arranca/i }));
    fireEvent.click(screen.getByRole("button", { name: /ROWA/i }));
    fireEvent.click(screen.getByRole("button", { name: /CABA/i }));

    expect(screen.getByText("Diagnóstico listo")).toBeInTheDocument();
    // Summary now uses labeled rows instead of inline text
    expect(screen.getByText("No arranca")).toBeInTheDocument();
    expect(screen.getByText("ROWA")).toBeInTheDocument();
    expect(screen.getByText("CABA")).toBeInTheDocument();
  });
});
