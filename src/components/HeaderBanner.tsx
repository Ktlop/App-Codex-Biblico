import React from 'react';
import { CheckCircle2, Sparkles, Timer } from 'lucide-react';

export function HeaderBanner() {
  const [timeLeft, setTimeLeft] = React.useState({ minutes: 14, seconds: 59 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-slate-950 font-medium py-3 px-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left text-sm md:text-base">
        <div className="flex items-center gap-2 justify-center">
          <CheckCircle2 className="w-5 h-5 text-slate-950 shrink-0 fill-amber-300" />
          <span>
            <strong>¡ESPERA! Tu pedido está confirmado.</strong> Tenemos una oferta especial SOLO para ti.
          </span>
        </div>
        <div className="flex items-center gap-3 bg-slate-950/15 py-1 px-3 rounded-full text-xs md:text-sm font-semibold">
          <Timer className="w-4 h-4 animate-pulse" />
          <span>Oferta reservada por: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}
