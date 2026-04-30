import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("links opinions navigation to the testimonials section", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Opiniones" })).toHaveAttribute("href", "#testimonios");
  });

  it("closes the mobile menu after choosing a section", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: "Menú" });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const mobileNav = screen.getByRole("navigation", { name: "Menú móvil" });
    fireEvent.click(mobileNav.querySelector('a[href="#contacto"]')!);

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
