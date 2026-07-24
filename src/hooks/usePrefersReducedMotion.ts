import { useEffect, useRef, type RefObject } from "react";

export function usePrefersReducedMotion(): RefObject<boolean> {
  const prefersRef = useRef(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersRef.current = mediaQuery.matches;

    function handleChange(event: MediaQueryListEvent): void {
      prefersRef.current = event.matches;
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersRef;
}
