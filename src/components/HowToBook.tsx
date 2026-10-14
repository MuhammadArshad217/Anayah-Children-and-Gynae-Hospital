import React from 'react';
import { PhoneCall, CalendarCheck, MapPin, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface HowToBookProps {
  lang: 'en' | 'ur';
}

export const HowToBook: React.FC<HowToBookProps> = ({ lang }) => {
  const t = CONTENT[lang].howToBook;
  const isUr = lang === 'ur';

  const steps = [
    {
      num: isUr ? "۱" : "1",
      icon: <PhoneCall className="w-6 h-6 text-teal-700" />,
      title: t.step1Title,
      desc: t.step1Desc,
      ctaLabel: isUr ? "0303 5362767 پر رابطہ" : "Call 0303 5362767",
      ctaHref: HOSPITAL_CONFIG.callUrl,
    },
    {
      num: isUr ? "۲" : "2",
      icon: <CalendarCheck className="w-6 h-6 text-rose-600" />,
      title: t.step2Title,
      desc: t.step2Desc,
      ctaLabel: isUr ? "واٹس ایپ وقت تصدیق" : "Confirm on WhatsApp",
      ctaHref: HOSPITAL_CONFIG.whatsappUrl,
    },
    {
      num: isUr ? "۳" : "3",
      icon: <MapPin className="w-6 h-6 text-cyan-700" />,
      title: t.step3Title,
      desc: t.step3Desc,
      ctaLabel: isUr ? "ایمپلائز کالونی تشریف لائیں" : "Employees Colony, Layyah",
      ctaHref: "#contact",
    },
  ];

  return (
    <section id="how-to-book" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-slate-50/80 border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Step indicator & icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-teal-200/70 select-none font-sans">
                    #{step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={step.ctaHref}
                  className="tap-target-min inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>{step.ctaLabel}</span>
                  {isUr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
