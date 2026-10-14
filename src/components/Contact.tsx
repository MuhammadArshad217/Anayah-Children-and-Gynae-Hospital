import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  ExternalLink,
  Navigation,
  ShieldAlert
} from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface ContactProps {
  lang: 'en' | 'ur';
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = CONTENT[lang].contact;
  const isUr = lang === 'ur';

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Emergency Notice Banner (Requested explicitly in requirements) */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-200/80 text-amber-900 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <p className="font-extrabold text-amber-950 text-base sm:text-lg">
                  {t.emergencyNotice}
                </p>
                <p className="text-xs sm:text-sm text-amber-800 font-medium">
                  {isUr 
                    ? "کسی بھی ہنگامی طبی صورت میں بلا تاخیر کال کریں۔" 
                    : "For urgent maternal or pediatric emergencies, reach our priority line directly."}
                </p>
              </div>
            </div>

            <a
              href={HOSPITAL_CONFIG.callUrl}
              className="tap-target-min shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold text-sm shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{isUr ? "ہنگامی کال ملائیں" : "Call 0303 5362767"}</span>
            </a>
          </div>
        </div>

        {/* Contact Information & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t.addressLabel}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    {HOSPITAL_CONFIG.location}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {isUr ? "ایمپلائز کالونی، لیہ" : "Near Employees Colony main avenue, Layyah"}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-teal-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t.phoneLabel}
                  </h3>
                  <a
                    href={HOSPITAL_CONFIG.callUrl}
                    className="text-base sm:text-xl font-bold text-teal-800 hover:text-teal-950 block mt-1 underline"
                  >
                    {HOSPITAL_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    {isUr ? "براہِ راست کال اور او پی ڈی بکنگ" : "Direct line for appointments & reception"}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    {t.whatsappLabel}
                  </h3>
                  <a
                    href={HOSPITAL_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-emerald-950 hover:text-emerald-700 block mt-1 underline"
                  >
                    {HOSPITAL_CONFIG.phoneInternational}
                  </a>
                  <p className="text-xs text-emerald-800 mt-1">
                    {isUr ? "پیغام بھیج کر وقت اور ڈاکٹر منتخب کریں" : "Chat to reserve an OPD consultation slot"}
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t.timingsLabel}
                  </h3>
                  <p className="font-bold text-sm sm:text-base text-rose-800 bg-rose-50 border border-rose-200/80 px-2.5 py-1 rounded-lg mt-1 inline-block">
                    {isUr ? HOSPITAL_CONFIG.opdTimingsUrdu : HOSPITAL_CONFIG.opdTimings}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {isUr ? "ہفتے کے تمام ایام او پی ڈی کے اوقات" : "Daily OPD consultation schedule for pediatric and gynecological care"}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={HOSPITAL_CONFIG.callUrl}
                className="tap-target-min inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{t.callDirectBtn}</span>
              </a>

              <a
                href={HOSPITAL_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target-min inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappDirectBtn}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col h-full space-y-3">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-slate-100 relative min-h-[380px] sm:min-h-[460px] flex-1">
              {/* Embedded Google Map */}
              <iframe
                title="Anayah Children and Gynae Hospital Employees Colony Layyah Location"
                src={HOSPITAL_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              
              {/* Overlay pill on map */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200/80 pointer-events-auto">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-ping" />
                  ANAYAH HOSPITAL
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Employees Colony, Layyah
                </p>
              </div>
            </div>

            {/* Directions Link */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
              <span className="font-medium">
                {isUr ? "گوگل میپ پر رہنمائی:" : "Need GPS navigation?"}
              </span>
              <a
                href={HOSPITAL_CONFIG.googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-teal-800 hover:text-teal-950 underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.openMapBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
