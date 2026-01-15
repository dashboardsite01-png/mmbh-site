// src/components/ui/progress-bar.tsx
"use client";

import { useEffect, useState } from "react";

export function ProgressBar() {
  const [width, setWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    let scrollAnimationFrame: number | null = null;

    const updateProgressBar = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      setWidth(scrolled);
      scrollAnimationFrame = null;
    };

    const handleScroll = () => {
      if (!scrollAnimationFrame) {
        scrollAnimationFrame = requestAnimationFrame(updateProgressBar);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Inicializar
    updateProgressBar();

    return () => {
      if (scrollAnimationFrame) {
        cancelAnimationFrame(scrollAnimationFrame);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Não renderizar nada durante SSR para evitar hydration mismatch
  if (!isClient) {
    return (
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1">
        <div
          className="h-full w-0 bg-linear-to-r from-emerald-500 to-green-500 transition-all duration-300 ease-out"
          id="progress-bar"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1">
      <div
        className="h-full bg-linear-to-r from-emerald-500 to-green-500 transition-all duration-300 ease-out"
        style={{ width: `${width}%` }}
        id="progress-bar"
        aria-hidden="true"
        role="progressbar"
        aria-valuenow={Math.round(width)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
