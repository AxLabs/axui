import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders correctly with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies variant and size classes", () => {
    const { container } = render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    );
    const button = container.querySelector("button");
    expect(button?.className).toMatch(/destructive/);
    expect(button?.className).toMatch(/h-10/);
    expect(button?.className).toMatch(/px-8/);
  });

  it("renders as Slot when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });
});
