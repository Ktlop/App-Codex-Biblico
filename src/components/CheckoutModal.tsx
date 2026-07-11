import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, X, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function CheckoutModal({ isOpen, onClose, onSuccess }: CheckoutModalProps) {
  const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800/50 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!completed ? (
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Confirmar Actualización</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">App Codex Bíblico</h3>
              <p className="text-slate-400 text-sm">Suscripción mensual de formación profunda y herramientas.</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Plan Mensual:</span>
                <span className="text-white font-medium">Acceso Total Codex</span>
              </div>
              <div className="flex justify-between items-center text-sm border-t border-slate-900 pt-2">
                <span className="text-slate-400">Inversión hoy:</span>
                <span className="text-2xl font-serif font-bold text-amber-400">$9.90 <span className="text-xs font-sans text-slate-400">USD/mes</span></span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Correo Electrónico (para recibir tus accesos):</label>
                <input
                  type="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Método de Pago:</label>
                <div className="bg-slate-950 border border-amber-500/50 rounded-xl p-3 flex items-center justify-between text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                    <span>Tarjeta guardada del pedido anterior (1-Click)</span>
                  </div>
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">Seguro</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Confirmar y Añadir por $9.90/mes</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Transacción encriptada de 256-bits. Garantía de 7 días.</span>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-white">¡Actualización Exitosa!</h3>
              <p className="text-slate-300 text-sm max-w-xs mx-auto">
                Tu acceso a <strong>App Codex Bíblico</strong> ha sido activado. Hemos enviado tus credenciales de acceso a tu correo.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Plan:</span>
                <span className="font-semibold text-white">Suscripción Mensual Codex ($9.90)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Estado:</span>
                <span className="text-emerald-400 font-semibold">Activo e Inmediato</span>
              </div>
            </div>

            <button
              onClick={() => {
                onSuccess();
                onClose();
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-md transition-all cursor-pointer"
            >
              Ir a Mi Panel / Abrir App
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
