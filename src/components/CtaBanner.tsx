import React from 'react';
import { Phone, MessageCircle, Clock, Calendar } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface CtaBannerProps {
  lang: 'en' | 'ur';
  variant?: 'primary' | 'secondary';
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ lang, variant = 'primary' }) => {
  const t = CONTENT[lang].ctaBanner;
  const isUr = lang === 'ur';

  const isPrimary = variant === 'primary';

  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 shadow-xl ${
          isPrimary 
            ? 'bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-900 text-white shadow-teal-900/15'
            : 'bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white shadow-slate-900/20'
        }`}>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-rose-400/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
            
            {/* Text & Phone */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs">
                <Calendar className="w-3.5 h-3.5 text-teal-300" />
                <span>{isUr ? "بر وقت طبی مشاورت" : "Prompt Consultation in Layyah"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {t.title} –{' '}
                <span className="text-teal-200 underline decoration-teal-400/50 underline-offset-4">
                  {HOSPITAL_CONFIG.phoneDisplay}
                </span>
              </h2>

              <p className="text-teal-100 text-sm sm:text-base max-w-xl font-normal">
                {t.subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href={HOSPITAL_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target-min w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-base shadow-md shadow-emerald-950/20 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>{t.whatsappBtn}</span>
              </a>

              <a
                href={HOSPITAL_CONFIG.callUrl}
                className="tap-target-min w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-teal-50 active:scale-95 text-teal-900 font-bold text-base shadow-md transition-all"
              >
                <Phone className="w-5 h-5 text-teal-700" />
                <span>{t.callBtn}: {HOSPITAL_CONFIG.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
