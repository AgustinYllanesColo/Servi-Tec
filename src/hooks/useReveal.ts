import { useEffect } from "react";

/**
 * Fail-open reveal system:
 * - Content starts visible via CSS (opacity:1) by default.
 * - JS adds `.reveal-ready` to <html> only when IntersectionObserver is supported,
 *   which triggers the hidden-by-default styles.
 * - Respects prefers-reduced-motion: skips animations entirely.
 * - Handles hash navigation: elements targeted by the URL hash are revealed immediately.
 */
export function useReveal() {
  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Only hide elements when JS + IO are available
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-ready");

    const els = document.querySelectorAll<HTMLElement>(".reveal");

    // Immediately reveal hash-targeted sections
    const hash = window.location.hash?.slice(1);
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
          el.classList.add("is-visible");
        });
        if (target.classList.contains("reveal")) {
          target.classList.add("is-visible");
        }
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);
}
