import { useEffect, useState } from "react";

/**
 * Observe a list of section ids and return the currently visible id.
 * @param {string[]} ids
 * @param {object} options IntersectionObserver options
 */
export function useSectionSpy(ids = [], options = { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveId(id);
      }, options);
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return activeId;
}