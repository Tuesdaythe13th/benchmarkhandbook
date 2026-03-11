import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Stub heavy page components so routing tests stay fast
vi.mock("@/pages/Home", () => ({
  default: () => <div data-testid="page-home">Home</div>,
}));
vi.mock("@/pages/HarmTaxonomy", () => ({
  default: () => <div data-testid="page-harm">HarmTaxonomy</div>,
}));
vi.mock("@/pages/Multicultural", () => ({
  default: () => <div data-testid="page-multicultural">Multicultural</div>,
}));
vi.mock("@/pages/AgenticPrimer", () => ({
  default: () => <div data-testid="page-agentic-primer">AgenticPrimer</div>,
}));
vi.mock("@/pages/RubricHandbook", () => ({
  default: () => <div data-testid="page-rubric-handbook">RubricHandbook</div>,
}));
vi.mock("@/components/Nav", () => ({
  default: () => null,
}));
vi.mock("@/components/ui/sonner", () => ({
  Toaster: () => null,
}));
vi.mock("@/components/ui/tooltip", () => ({
  TooltipProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock("@/components/ErrorBoundary", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

import App from "@/App";

function renderWithPath(path: string) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

describe("App routing", () => {
  it("renders Home at /", () => {
    renderWithPath("/");
    expect(screen.getByTestId("page-home")).toBeTruthy();
  });

  it("renders HarmTaxonomy at /safety", () => {
    renderWithPath("/safety");
    expect(screen.getByTestId("page-harm")).toBeTruthy();
  });

  it("renders Multicultural at /multicultural", () => {
    renderWithPath("/multicultural");
    expect(screen.getByTestId("page-multicultural")).toBeTruthy();
  });

  it("renders AgenticPrimer at /agentic", () => {
    renderWithPath("/agentic");
    expect(screen.getByTestId("page-agentic-primer")).toBeTruthy();
  });

  it("renders RubricHandbook at /rubric", () => {
    renderWithPath("/rubric");
    expect(screen.getByTestId("page-rubric-handbook")).toBeTruthy();
  });

  it("renders NotFound for unknown routes", () => {
    renderWithPath("/does-not-exist-xyz");
    // NotFound renders with a recognisable structure; check it's not a known page
    expect(screen.queryByTestId("page-home")).toBeNull();
    expect(screen.queryByTestId("page-harm")).toBeNull();
    expect(screen.queryByTestId("page-multicultural")).toBeNull();
  });
});
