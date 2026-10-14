import React from 'react';
import { Building2, MapPin, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface AboutProps {
  lang: 'en' | 'ur';
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = CONTENT[lang].about;
  const isUr = lang === 'ur';

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual highlights & Location card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl bg-gradient-to-tr from-teal-50 via-slate-50 to-rose-50/50 p-6 sm:p-8 border border-teal-100 shadow-md">
              <div className="space-y-6">
                
                {/* Visual Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-md shadow-teal-700/20">
                  <Building2 className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {HOSPITAL_CONFIG.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-teal-800 font-semibold">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{HOSPITAL_CONFIG.location}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-teal-100/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900 font-semibold">
                        {isUr ? "بچوں اور خواتین کے لیے وقف: " : "Exclusively Focused: "}
                      </strong>
                      {isUr ? "پیڈیاٹرک اور گائناکالوجی پر خصوصی توجہ۔" : "Pediatric care, newborn health, and women's wellness."}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900 font-semibold">
                        {isUr ? "مکمل پرائیویسی: " : "Strict Patient Privacy: "}
                      </strong>
                      {isUr ? "خواتین اور ماؤں کے لیے محفوظ اور پردہ دار طبی ماحول۔" : "Comfortable, dignified consultation rooms for mothers and infants."}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900 font-semibold">
                        {isUr ? "آسان رابطہ: " : "Direct WhatsApp Booking: "}
                      </strong>
                      {isUr ? "0303 5362767 پر باآسانی رابطہ اور وقت کا تعین۔" : "Fast appointment scheduling with no waiting queues."}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: 2 short paragraphs */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.p1}
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.p2}
            </p>

            {/* Location badge */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-800 hover:text-teal-900 text-sm font-semibold transition-colors border border-slate-200 hover:border-teal-200"
              >
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>{t.locationTag}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
