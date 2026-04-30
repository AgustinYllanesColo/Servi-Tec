import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FloatingCTAs } from "./FloatingCTAs";

describe("FloatingCTAs", () => {
  it("reveals the mobile contact bar after the visitor scrolls", () => {
    render(<FloatingCTAs />);

    const mobileBar = screen.getByTestId("mobile-contact-bar");
    expect(mobileBar).toHaveAttribute("aria-hidden", "true");

    Object.defineProperty(window, "scrollY", { configurable: true, value: 480 });
    fireEvent.scroll(window);

    expect(mobileBar).toHaveAttribute("aria-hidden", "false");
  });
});
