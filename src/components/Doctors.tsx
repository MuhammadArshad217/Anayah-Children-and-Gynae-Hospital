import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Stethoscope, 
  GraduationCap, 
  Clock, 
  Baby, 
  Heart, 
  User,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { DOCTORS, HOSPITAL_CONFIG, Doctor } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface DoctorsProps {
  lang: 'en' | 'ur';
}

export const Doctors: React.FC<DoctorsProps> = ({ lang }) => {
  const t = CONTENT[lang].doctors;
  const isUr = lang === 'ur';

  const getDoctorWhatsAppUrl = (doctor: Doctor) => {
    const encoded = encodeURIComponent(doctor.whatsappMessage);
    return `https://wa.me/923035362767?text=${encoded}`;
  };

  return (
    <section id="doctors" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Doctor Cards - ONLY the 2 doctors specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {DOCTORS.map((doc) => {
            const isPediatric = doc.roleType === 'pediatric';

            return (
              <div
                key={doc.id}
                className="relative rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-teal-300 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Doctor Avatar & Header */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    
                    {/* Neutral Avatar Portrait Placeholder */}
                    <div className="relative shrink-0">
                      <div className={`w-28 h-28 rounded-2xl flex items-center justify-center border-2 ${
                        isPediatric 
                          ? 'bg-teal-100/70 border-teal-300 text-teal-800' 
                          : 'bg-rose-100/70 border-rose-300 text-rose-800'
                      } shadow-sm overflow-hidden`}>
                        {/* Neutral professional medical portrait placeholder */}
                        <div className="flex flex-col items-center justify-center">
                          <User className="w-14 h-14 stroke-[1.4]" />
                          <span className="text-[10px] font-bold uppercase tracking-wider mt-1 text-slate-600">
                            Portrait
                          </span>
                        </div>
                      </div>

                      {/* Small badge icon */}
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm ${
                        isPediatric ? 'bg-teal-700' : 'bg-rose-600'
                      }`}>
                        {isPediatric ? <Baby className="w-4 h-4" /> : <Heart className="w-4 h-4" />}
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-white border border-slate-200 text-slate-700 shadow-2xs">
                          {isPediatric 
                            ? (isUr ? "پیڈیاٹرک سپیشلسٹ" : "Pediatric Specialist") 
                            : (isUr ? "گائناکالوجسٹ" : "Consultant Gynecologist")}
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/90 shadow-2xs">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{isUr ? "مستند معالج" : "Qualified"}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {isUr ? doc.nameUr : doc.nameEn}
                      </h3>

                      <p className={`text-sm sm:text-base font-semibold ${
                        isPediatric ? 'text-teal-700' : 'text-rose-700'
                      }`}>
                        {isUr ? doc.specialtyUr : doc.specialtyEn}
                      </p>
                    </div>
                  </div>

                  {/* Short 2-line Bio */}
                  <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {isUr ? doc.bioUr : doc.bioEn}
                  </p>

                  {/* Qualifications and Timings */}
                  <div className="mt-6 space-y-3.5 pt-5 border-t border-slate-200">
                    
                    {/* Qualifications Section with Prominent 'Qualified' Badge */}
                    <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                      <GraduationCap className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm flex-1 space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="font-bold text-slate-800 block">
                            {t.qualificationsLabel}:
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/90 shadow-2xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{isUr ? "مصدقہ و مستند (Qualified)" : "Verified & Qualified"}</span>
                          </span>
                        </div>

                        {/* List of Doctor Qualifications with soft backgrounds */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {(isUr ? doc.qualificationsUr : doc.qualifications).map((qual, qIdx) => (
                            <span
                              key={qIdx}
                              className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                                isPediatric
                                  ? 'bg-teal-50/80 border-teal-200/80 text-teal-900'
                                  : 'bg-rose-50/80 border-rose-200/80 text-rose-900'
                              }`}
                            >
                              {qual}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* OPD Timings (2pm to 10pm) */}
                    <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                      <Clock className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm flex-1">
                        <span className="font-bold text-slate-800 block">
                          {t.timingsLabel}:
                        </span>
                        <div className="mt-1 flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1.5 font-bold text-rose-900 bg-rose-50 border border-rose-200/80 px-3 py-1 rounded-lg text-xs sm:text-sm shadow-2xs">
                            <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                            <span>{isUr ? doc.opdTimingsUr : doc.opdTimings}</span>
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">
                            {isUr ? "(روزانہ دستیابی)" : "(Daily OPD Schedule)"}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Two Action Buttons: Call Now and WhatsApp */}
                <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-2 gap-3">
                  <a
                    href={HOSPITAL_CONFIG.callUrl}
                    className="tap-target-min inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 active:scale-95 text-white text-sm font-bold shadow-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t.callDoctor}</span>
                  </a>

                  <a
                    href={getDoctorWhatsAppUrl(doc)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-target-min inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-sm font-bold shadow-sm shadow-emerald-600/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>{t.whatsappDoctor}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
