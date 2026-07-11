import React from 'react';
import { BookOpen, Shield, GraduationCap, FileText, Users, Bookmark, CheckCircle, Sparkles } from 'lucide-react';

export function PillarsSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
          Diseñado en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">2 Pilares Fundamentales</span> para tu Crecimiento
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Todo lo que necesitas para profundizar tu fe personal y liderar con excelencia en tu comunidad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Pilar 1 */}
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono text-amber-400 tracking-wider font-semibold">Pilar 01</span>
                <h3 className="text-2xl font-serif font-bold text-white">Estudio Diario con Profundidad Académica</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Elimina la superficialidad y descubre los matices originales que los traductores no siempre pueden plasmar en una sola palabra.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</div>
                <div>
                  <strong className="text-white block text-sm">Versículo del día con análisis exegético</strong>
                  <span className="text-slate-400 text-xs">Desglose gramatical y contextual en hebreo y griego original con lexicones aprobados.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</div>
                <div>
                  <strong className="text-white block text-sm">Módulo mensual de teología sistemática</strong>
                  <span className="text-slate-400 text-xs">Lecciones estructuradas mes a mes sobre las doctrinas cardinales de la fe cristiana.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</div>
                <div>
                  <strong className="text-white block text-sm">Nuevo libro digital académico cada mes</strong>
                  <span className="text-slate-400 text-xs">Ebooks e investigaciones teológicas exclusivas añadidas directo a tu biblioteca en la app.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Desarrollado por teólogos e historiadores bíblicos</span>
          </div>
        </div>

        {/* Pilar 2 */}
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono text-amber-400 tracking-wider font-semibold">Pilar 02</span>
                <h3 className="text-2xl font-serif font-bold text-white">Caja de Herramientas del Líder</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Ahorra horas de preparación semanal y lleva contenido transformador y riguroso a tu congregación, grupos pequeños o clases.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</div>
                <div>
                  <strong className="text-white block text-sm">Plantillas de sermones y estudios descargables</strong>
                  <span className="text-slate-400 text-xs">Bosquejos homiléticos listos para adaptar, ilustrar y predicar con solidez doctrinal.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</div>
                <div>
                  <strong className="text-white block text-sm">Material listo para escuela dominical</strong>
                  <span className="text-slate-400 text-xs">Guías didácticas, dinámicas y preguntas de discusión para todas las edades.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</div>
                <div>
                  <strong className="text-white block text-sm">Personaje bíblico estudiado a profundidad</strong>
                  <span className="text-slate-400 text-xs">Un perfil biográfico y psicológico detallado de una figura bíblica cada mes.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Ideal para pastores, líderes de células y maestros</span>
          </div>
        </div>
      </div>
    </section>
  );
}
