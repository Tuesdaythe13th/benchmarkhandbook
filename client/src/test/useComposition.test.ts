import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useComposition } from "@/hooks/useComposition";

describe("useComposition", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns the four expected handlers", () => {
    const { result } = renderHook(() => useComposition());
    expect(typeof result.current.onCompositionStart).toBe("function");
    expect(typeof result.current.onCompositionEnd).toBe("function");
    expect(typeof result.current.onKeyDown).toBe("function");
    expect(typeof result.current.isComposing).toBe("function");
  });

  it("isComposing starts as false", () => {
    const { result } = renderHook(() => useComposition());
    expect(result.current.isComposing()).toBe(false);
  });

  it("isComposing becomes true after compositionStart", () => {
    const { result } = renderHook(() => useComposition());
    act(() => {
      result.current.onCompositionStart({} as React.CompositionEvent<HTMLInputElement>);
    });
    expect(result.current.isComposing()).toBe(true);
  });

  it("isComposing becomes false after compositionEnd timers flush", () => {
    const { result } = renderHook(() => useComposition());
    act(() => {
      result.current.onCompositionStart({} as React.CompositionEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.onCompositionEnd({} as React.CompositionEvent<HTMLInputElement>);
    });
    expect(result.current.isComposing()).toBe(true); // still true before timers
    act(() => {
      vi.runAllTimers();
    });
    expect(result.current.isComposing()).toBe(false);
  });

  it("onKeyDown blocks Enter when composing", () => {
    const { result } = renderHook(() => useComposition());
    act(() => {
      result.current.onCompositionStart({} as React.CompositionEvent<HTMLInputElement>);
    });
    const stopPropagation = vi.fn();
    const downstreamKeyDown = vi.fn();
    const event = { key: "Enter", shiftKey: false, stopPropagation } as unknown as React.KeyboardEvent<HTMLInputElement>;
    result.current.onKeyDown(event);
    expect(stopPropagation).toHaveBeenCalledOnce();
    expect(downstreamKeyDown).not.toHaveBeenCalled();
  });

  it("onKeyDown allows Shift+Enter when composing", () => {
    const downstreamKeyDown = vi.fn();
    const { result } = renderHook(() =>
      useComposition({ onKeyDown: downstreamKeyDown })
    );
    act(() => {
      result.current.onCompositionStart({} as React.CompositionEvent<HTMLInputElement>);
    });
    const stopPropagation = vi.fn();
    const event = { key: "Enter", shiftKey: true, stopPropagation } as unknown as React.KeyboardEvent<HTMLInputElement>;
    result.current.onKeyDown(event);
    expect(stopPropagation).not.toHaveBeenCalled();
    expect(downstreamKeyDown).toHaveBeenCalledWith(event);
  });

  it("onKeyDown blocks Escape when composing", () => {
    const { result } = renderHook(() => useComposition());
    act(() => {
      result.current.onCompositionStart({} as React.CompositionEvent<HTMLInputElement>);
    });
    const stopPropagation = vi.fn();
    const event = { key: "Escape", shiftKey: false, stopPropagation } as unknown as React.KeyboardEvent<HTMLInputElement>;
    result.current.onKeyDown(event);
    expect(stopPropagation).toHaveBeenCalledOnce();
  });

  it("onKeyDown propagates Enter when not composing", () => {
    const downstreamKeyDown = vi.fn();
    const { result } = renderHook(() =>
      useComposition({ onKeyDown: downstreamKeyDown })
    );
    const stopPropagation = vi.fn();
    const event = { key: "Enter", shiftKey: false, stopPropagation } as unknown as React.KeyboardEvent<HTMLInputElement>;
    result.current.onKeyDown(event);
    expect(stopPropagation).not.toHaveBeenCalled();
    expect(downstreamKeyDown).toHaveBeenCalledWith(event);
  });

  it("calls user-provided onCompositionStart callback", () => {
    const callback = vi.fn();
    const { result } = renderHook(() =>
      useComposition({ onCompositionStart: callback })
    );
    const event = {} as React.CompositionEvent<HTMLInputElement>;
    act(() => {
      result.current.onCompositionStart(event);
    });
    expect(callback).toHaveBeenCalledWith(event);
  });

  it("calls user-provided onCompositionEnd callback", () => {
    const callback = vi.fn();
    const { result } = renderHook(() =>
      useComposition({ onCompositionEnd: callback })
    );
    const event = {} as React.CompositionEvent<HTMLInputElement>;
    act(() => {
      result.current.onCompositionEnd(event);
    });
    expect(callback).toHaveBeenCalledWith(event);
  });

  it("compositionStart clears pending compositionEnd timers", () => {
    const { result } = renderHook(() => useComposition());
    act(() => {
      result.current.onCompositionStart({} as React.CompositionEvent<HTMLInputElement>);
      result.current.onCompositionEnd({} as React.CompositionEvent<HTMLInputElement>);
      // start again before timers flush — simulates fast re-composition
      result.current.onCompositionStart({} as React.CompositionEvent<HTMLInputElement>);
    });
    act(() => {
      vi.runAllTimers();
    });
    // Should still be composing because start cleared the end timers
    expect(result.current.isComposing()).toBe(true);
  });
});
