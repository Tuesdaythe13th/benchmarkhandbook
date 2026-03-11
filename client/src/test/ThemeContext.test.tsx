import { render, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

function ThemeConsumer() {
  const { theme, toggleTheme, switchable } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="switchable">{String(switchable)}</span>
      {toggleTheme && (
        <button onClick={toggleTheme} data-testid="toggle">
          toggle
        </button>
      )}
    </div>
  );
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("uses defaultTheme when localStorage is empty", () => {
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(getByTestId("theme").textContent).toBe("light");
  });

  it("uses defaultTheme='dark' when specified", () => {
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(getByTestId("theme").textContent).toBe("dark");
  });

  it("reads valid 'dark' from localStorage when switchable", () => {
    localStorage.setItem("theme", "dark");
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="light" switchable>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(getByTestId("theme").textContent).toBe("dark");
  });

  it("reads valid 'light' from localStorage when switchable", () => {
    localStorage.setItem("theme", "light");
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="dark" switchable>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(getByTestId("theme").textContent).toBe("light");
  });

  it("falls back to defaultTheme for invalid localStorage value", () => {
    localStorage.setItem("theme", "hacker-theme-malicious");
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="light" switchable>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(getByTestId("theme").textContent).toBe("light");
  });

  it("ignores localStorage when not switchable", () => {
    localStorage.setItem("theme", "dark");
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="light" switchable={false}>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(getByTestId("theme").textContent).toBe("light");
  });

  it("toggleTheme is undefined when not switchable", () => {
    const { queryByTestId } = render(
      <ThemeProvider defaultTheme="light" switchable={false}>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(queryByTestId("toggle")).toBeNull();
  });

  it("toggleTheme switches between light and dark", async () => {
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="light" switchable>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(getByTestId("theme").textContent).toBe("light");
    await act(async () => {
      getByTestId("toggle").click();
    });
    expect(getByTestId("theme").textContent).toBe("dark");
    await act(async () => {
      getByTestId("toggle").click();
    });
    expect(getByTestId("theme").textContent).toBe("light");
  });

  it("adds dark class to documentElement when theme is dark", async () => {
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="light" switchable>
        <ThemeConsumer />
      </ThemeProvider>
    );
    await act(async () => {
      getByTestId("toggle").click();
    });
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("removes dark class when switching back to light", async () => {
    document.documentElement.classList.add("dark");
    const { getByTestId } = render(
      <ThemeProvider defaultTheme="dark" switchable>
        <ThemeConsumer />
      </ThemeProvider>
    );
    await act(async () => {
      getByTestId("toggle").click();
    });
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("throws when useTheme is used outside ThemeProvider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<ThemeConsumer />)).toThrow(
      "useTheme must be used within ThemeProvider"
    );
    spy.mockRestore();
  });
});
