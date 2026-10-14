import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  MapPin, 
  Users, 
  MessageCircle, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { CONTENT } from '../translations/content';

interface WhyChooseUsProps {
  lang: 'en' | 'ur';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const t = CONTENT[lang].whyUs;
  const isUr = lang === 'ur';

  const icons = [
    <ShieldCheck className="w-6 h-6 text-teal-700" key="0" />,
    <HeartHandshake className="w-6 h-6 text-rose-600" key="1" />,
    <MapPin className="w-6 h-6 text-cyan-700" key="2" />,
    <Users className="w-6 h-6 text-indigo-700" key="3" />,
    <MessageCircle className="w-6 h-6 text-emerald-600" key="4" />,
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Real, Genuine Points - NO fake reviews, NO fake statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {icons[idx]}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>{point.title}</span>
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {point.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-teal-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>{isUr ? "معیاری اصول" : "Dedicated Standard"}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
