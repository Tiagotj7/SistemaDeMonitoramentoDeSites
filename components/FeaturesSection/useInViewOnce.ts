"use client";

import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, options]);

  return { ref, inView };
}