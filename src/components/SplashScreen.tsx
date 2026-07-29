import { useEffect, useState } from "react";
import iaBalanza from "@/assets/ia-balanza.png";

export function SplashScreen() {
  const [saliendo, setSaliendo] = useState(false);
  const [oculto, setOculto] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSaliendo(true), 2900);
    const t2 = setTimeout(() => setOculto(true), 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (oculto) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        saliendo ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="splash-logo-wrap">
        <img
          src={iaBalanza}
          alt=""
          width={1024}
          height={1024}
          className="splash-logo-sway h-56 w-auto opacity-90 sm:h-72"
        />
      </div>
    </div>
  );
}