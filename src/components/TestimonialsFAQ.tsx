import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function TestimonialsFAQ({ onAccept, onDecline }: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Pastor Carlos Mendoza',
      role: 'Iglesia Comunidad de Fe',
      text: 'El análisis exegético diario y las plantillas de sermones me han ahorrado horas de preparación, elevando notablemente la profundidad doctrinal de nuestros mensajes dominicales.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5
    },
    {
      id: '2',
      name: 'Dra. Sofía Rincón',
      role: 'Lider de Maestros y Escuela Bíblica',
      text: 'Tener acceso a teología sistemática rigurosa explicada de forma clara y accesible es un tesoro. Mis alumnos en la escuela dominical están fascinados con el material.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5
    },
    {
      id: '3',
      name: 'Esteban Valenzuela',
      role: 'Estudiante de Teología y Líder de Jóvenes',
      text: 'La sección de hebreo y griego original me ha dado herramientas extraordinarias para mis estudios personales. Vale cada centavo de la suscripción.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto space-y-20">
      {/* Testimonials */}
      <div className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Lo que dicen líderes y pastores
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Cientos de siervos de Dios ya están transformando su enseñanza y estudio con Codex Bíblico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">"{t.text}"</p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800/80">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-amber-500/30" />
                <div>
                  <h4 className="font-semibold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Upsell Call to Action Box */}
      <div className="bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 rounded-3xl p-8 md:p-12 text-slate-950 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-slate-950 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow">
          <span>Última Oportunidad en Esta Pantalla</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
          Lleva contigo un seminario bíblico completo cada mes
        </h2>

        <div className="my-4">
          <span className="text-5xl md:text-7xl font-extrabold font-serif text-slate-950 tracking-tight">$9.90</span>
          <span className="text-lg md:text-xl font-bold text-slate-950/80 ml-1">USD/mes</span>
        </div>

        <p className="text-slate-950/90 max-w-2xl mx-auto text-base md:text-lg font-medium">
          Añade la App Codex Bíblico y comienza a disfrutar cada mes de material nuevo académico y herramientas profesionales listas de liderazgo.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onAccept}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>¡SI! QUIERO LA APP, AÑADIR A MI PEDIDO</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-950/80 pt-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Garantía de reembolso de 7 días • Cancele en cualquier momento con 1 clic</span>
        </div>


      </div>
    </section>
  );
}

