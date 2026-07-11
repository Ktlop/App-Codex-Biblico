import React from 'react';
import { Sparkles, BookOpen, ShieldCheck, ArrowRight, Check, Award } from 'lucide-react';

interface HeroSectionProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function HeroSection({ onAccept, onDecline }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-16 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Glow background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center relative z-10 space-y-6">


        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
          Desbloquea el Nivel Superior de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Estudio Bíblico</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Accede hoy a <strong>App Codex Bíblico</strong> — La aplicación definitiva de formación bíblica profunda y herramientas profesionales para líderes y estudiosos exigentes.
        </p>
        <p className="text-amber-400/90 font-medium text-sm md:text-base italic max-w-2xl mx-auto">
          "La Geografía Bíblica 3D te da la base. Esta suscripción la mantiene VIVA"
        </p>

        {/* Mockup Card / Visual Banner */}
        <div className="my-8 relative rounded-2xl overflow-hidden border border-slate-700/80 bg-gradient-to-b from-slate-900/90 to-slate-950/95 shadow-2xl p-6 md:p-8 text-left max-w-4xl mx-auto backdrop-blur-md">
          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-bold px-4 py-1 rounded-bl-xl text-xs uppercase tracking-widest shadow">
            Acceso Inmediato
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">App Codex Bíblico</h3>
                  <p className="text-sm text-amber-400/90">Teología rigurosa directo en tu bolsillo</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 text-slate-300 text-sm md:text-base">
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Análisis exegético diario</strong> en hebreo y griego original.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Caja de herramientas para líderes</strong> con sermones y bosquejos listos.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Biblioteca digital mensual</strong> con libros académicos exclusivos.</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 w-full md:w-72 text-center shrink-0 space-y-4 shadow-inner">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Inversión Especial</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-extrabold text-white font-serif">$9.90</span>
                <span className="text-sm text-slate-400">USD / mes</span>
              </div>
              <p className="text-xs text-slate-400">Cancela cuando quieras con 1 clic.</p>
              
              <button
                onClick={onAccept}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>¡SI! QUIERO LA APP, AÑADIR A MI PEDIDO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Garantía de devolución de 7 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
