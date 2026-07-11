import React, { useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { CheckoutModal } from './components/CheckoutModal';
import { BookOpen, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeclineConfirm, setShowDeclineConfirm] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const handleAccept = () => {
    setIsModalOpen(true);
  };

  const handleDecline = () => {
    setShowDeclineConfirm(true);
  };

  const handleSuccess = () => {
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Urgency Header Banner */}
      <HeaderBanner />

      {/* Success Toast */}
      {successToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-400/40 animate-bounce">
          <ShieldCheck className="w-6 h-6 shrink-0" />
          <div>
            <h4 className="font-bold text-sm">¡Bienvenido a Codex Bíblico!</h4>
            <p className="text-xs text-emerald-100">Tu cuenta ha sido actualizada con éxito.</p>
          </div>
        </div>
      )}

      {/* Decline Confirmation Modal / Toast */}
      {showDeclineConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 md:p-8 text-center space-y-6 shadow-2xl">
            <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto text-amber-400">
              <BookOpen className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-white">¿Estás completamente seguro?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Esta oferta de <strong>$9.90 USD/mes</strong> solo está disponible en esta página de agradecimiento. Si cierras esta pestaña, el precio regular se incrementará.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  setShowDeclineConfirm(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all cursor-pointer"
              >
                ¡Esperame! Quiero aprovechar la oferta
              </button>
              <button
                onClick={() => {
                  setShowDeclineConfirm(false);
                  alert("Entendido. Tu pedido principal ha sido procesado con éxito. ¡Gracias!");
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors cursor-pointer"
              >
                No, rechazar esta oportunidad para siempre
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection onAccept={handleAccept} onDecline={handleDecline} />
        <PillarsSection />
        <TestimonialsFAQ onAccept={handleAccept} onDecline={handleDecline} />
      </main>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 px-4 text-center text-xs text-slate-500 space-y-3">
        <div className="flex items-center justify-center gap-2 font-serif text-slate-400 text-sm">
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>App Codex Bíblico — Formación Bíblica Profunda</span>
        </div>
        <p>© {new Date().getFullYear()} Todos los derechos reservados. Pago seguro procesado bajo estándares PCI-DSS.</p>
        <div className="flex items-center justify-center gap-4 text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Garantía de Reembolso</a>
        </div>
      </footer>
    </div>
  );
}
