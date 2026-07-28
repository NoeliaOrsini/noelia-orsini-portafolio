import { useEffect, useState } from "react";

export function SplashScreen() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2000);
    const hideTimer = setTimeout(() => setHidden(true), 2900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-100 grid place-items-center bg-background transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="animate-splash font-display text-6xl font-bold tracking-[0.25em] text-gradient sm:text-8xl">
        NO
      </span>
    </div>
  );
}