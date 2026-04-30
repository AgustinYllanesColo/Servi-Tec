import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the priority hero image without React DOM warnings", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<Hero />);

    const calls = consoleError.mock.calls.flat().join(" ");
    expect(calls).not.toContain("fetchPriority");
  });
});
