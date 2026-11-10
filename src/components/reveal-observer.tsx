"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// One IntersectionObserver for every `.reveal` element on the page. The hidden
// state only exists under `html.js`, so content stays visible if this script
// never runs. Runs again after each client navigation.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Tells the inline boot script in the root layout that reveals are live.
    (window as Window & { __revealReady?: boolean }).__revealReady = true;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));
    if (elements.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
