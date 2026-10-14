import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Heart, Baby, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface HeroProps {
  lang: 'en' | 'ur';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = CONTENT[lang].hero;
  const isUr = lang === 'ur';

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-teal-100/50">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-rose-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Main CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-900 text-xs sm:text-sm font-semibold shadow-xs">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
              <span>{t.badge}</span>
            </div>

            {/* Main Headline (single H1 for SEO) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.2] lg:leading-[1.18]">
              {t.title}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.subtitle}
            </p>

            {/* Above-the-fold PRIMARY CALL TO ACTIONS */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              {/* WhatsApp Button (Prominent Green) */}
              <a
                href={HOSPITAL_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target-min inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-600/30 transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                </div>
                <span>{t.ctaWhatsApp}</span>
              </a>

              {/* Call Now Button (Medical Teal/Blue) */}
              <a
                href={HOSPITAL_CONFIG.callUrl}
                className="tap-target-min inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-teal-700 hover:bg-teal-800 active:scale-[0.98] text-white font-bold text-base sm:text-lg shadow-lg shadow-teal-700/25 transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>{t.ctaCall}</span>
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-4 border-t border-slate-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {isUr ? "ہماری بنیادی خصوصیات" : "Specialized Clinical Focus"}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-teal-100 shadow-xs text-xs sm:text-sm font-semibold text-teal-900">
                  <Baby className="w-4 h-4 text-teal-600" />
                  <span>{t.trustPill1}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-rose-100 shadow-xs text-xs sm:text-sm font-semibold text-rose-900">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
                  <span>{t.trustPill2}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-cyan-100 shadow-xs text-xs sm:text-sm font-semibold text-cyan-900">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>{t.trustPill3}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Trust Graphic / Calming Healthcare Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer Glow Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white via-teal-50/50 to-rose-50/40 p-6 sm:p-8 border border-teal-100/80 shadow-xl shadow-teal-950/5">
                
                {/* Visual Medical Scene / Badge composition */}
                <div className="bg-gradient-to-br from-teal-700 to-cyan-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-inner">
                  {/* Subtle pattern */}
                  <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 text-white text-[11px] font-semibold tracking-wide uppercase">
                      <Sparkles className="w-3 h-3 text-amber-300" /> Layyah Care
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center border border-white/20">
                      <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                        ANAYAH HOSPITAL
                      </h2>
                      <p className="text-teal-200 text-sm mt-0.5 font-medium">
                        {isUr ? "ماؤں اور بچوں کے لیے مخصوص نگہداشت" : "Mother & Child Specialist Healthcare"}
                      </p>
                    </div>

                    <div className="pt-2 text-xs text-teal-100/90 leading-relaxed border-t border-white/15">
                      {isUr ? (
                        <p>
                          ڈاکٹر محمد شریف سمرا (چائلڈ سپیشلسٹ) اور ڈاکٹر طاہرہ شریف (گائناکالوجسٹ) کی زیر نگرانی معتبر اور پرسکون علاج۔
                        </p>
                      ) : (
                        <p>
                          Consultation with Dr. Muhammad Shareef Sumra (Child Specialist) &amp; Dr. Tahira Shareef (Gynecologist).
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sub-cards below visual */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-xs flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                      <Baby className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">
                        {isUr ? "بچوں کے امراض" : "Pediatrics"}
                      </p>
                      <p className="text-xs font-bold text-slate-800">
                        {isUr ? "ڈاکٹر محمد شریف سمرا" : "Dr. M. Shareef Sumra"}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-xs flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">
                        {isUr ? "امراضِ نسواں" : "Gynecology"}
                      </p>
                      <p className="text-xs font-bold text-slate-800">
                        {isUr ? "ڈاکٹر طاہرہ شریف" : "Dr. Tahira Shareef"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick phone confirmation strip */}
                <div className="mt-4 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/60 flex items-center justify-between text-xs text-emerald-950 font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isUr ? "واٹس ایپ وقت:" : "WhatsApp Booking:"}</span>
                  </div>
                  <a
                    href={HOSPITAL_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-900 underline font-bold"
                  >
                    0303 5362767
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
