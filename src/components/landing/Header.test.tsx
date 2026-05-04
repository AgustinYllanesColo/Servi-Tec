import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("links opinions navigation to the testimonials section", () => {
    render(<Header />);

    // Desktop nav and mobile nav both render now; use getAllByRole and check at least one
    const links = screen.getAllByRole("link", { name: "Opiniones" });
    expect(links.length).toBeGreaterThanOrEqual(1);
    links.forEach((link) => expect(link).toHaveAttribute("href", "#testimonios"));
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
