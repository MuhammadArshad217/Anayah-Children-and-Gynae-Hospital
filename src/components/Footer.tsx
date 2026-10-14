import React from 'react';
import { Heart, Sparkles, Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface FooterProps {
  lang: 'en' | 'ur';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = CONTENT[lang].footer;
  const isUr = lang === 'ur';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Hospital Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                <Heart className="w-5 h-5 text-rose-300 fill-rose-300" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                {HOSPITAL_CONFIG.name}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="pt-2 text-xs text-slate-500">
              <p>{t.disclaimer}</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-teal-300 transition-colors">
                  {CONTENT[lang].nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  {CONTENT[lang].nav.services}
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-teal-300 transition-colors">
                  {CONTENT[lang].nav.doctors}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-teal-300 transition-colors">
                  {CONTENT[lang].nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-300 transition-colors">
                  {CONTENT[lang].nav.reviews}
                </a>
              </li>
              <li>
                <a href="#how-to-book" className="hover:text-teal-300 transition-colors">
                  {CONTENT[lang].nav.howToBook}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-300 transition-colors">
                  {CONTENT[lang].nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.contactInfo}
            </h4>
            
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{HOSPITAL_CONFIG.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={HOSPITAL_CONFIG.callUrl} className="text-white hover:text-teal-300 underline font-semibold">
                  {HOSPITAL_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={HOSPITAL_CONFIG.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 underline font-semibold"
                >
                  {HOSPITAL_CONFIG.phoneInternational} (WhatsApp)
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="tap-target-min inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
                <span>{isUr ? "اوپر جائیں" : "Back to Top"}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t.copyright}</p>
          <p className="text-slate-500">
            {isUr ? "معیاری طبی خدمات برائے اطفال و خواتین" : "Employees Colony, Layyah, Punjab"}
          </p>
        </div>
      </div>
    </footer>
  );
};
