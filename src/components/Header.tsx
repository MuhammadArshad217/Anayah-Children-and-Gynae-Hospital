import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Heart, Sparkles, Globe } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface HeaderProps {
  lang: 'en' | 'ur';
  setLang: (lang: 'en' | 'ur') => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = CONTENT[lang].nav;
  const isUr = lang === 'ur';

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#services', label: t.services },
    { href: '#doctors', label: t.doctors },
    { href: '#why-us', label: t.whyUs },
    { href: '#reviews', label: t.reviews },
    { href: '#how-to-book', label: t.howToBook },
    { href: '#faq', label: t.faq },
    { href: '#contact', label: t.contact },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-teal-100 shadow-xs transition-colors duration-200">
      {/* Top emergency / quick contact mini bar */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-800 text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-medium">
              {isUr ? "عنایہ ہسپتال، ایمپلائز کالونی، لیہ" : "Anayah Hospital, Employees Colony, Layyah"}
            </span>
            <span className="hidden sm:inline text-teal-200">|</span>
            <span className="hidden sm:inline text-teal-100">
              {isUr ? "او پی ڈی وقت لیں: " : "Book OPD: "}
              <a href={HOSPITAL_CONFIG.callUrl} className="font-semibold underline hover:text-white">
                {HOSPITAL_CONFIG.phoneDisplay}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle switch */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white text-xs px-2.5 py-0.5 rounded-full border border-white/20 transition-all font-medium cursor-pointer"
              aria-label="Toggle language between English and Urdu"
            >
              <Globe className="w-3.5 h-3.5 text-teal-200" />
              <span>{lang === 'en' ? 'اردو (Urdu)' : 'English'}</span>
            </button>

            <a
              href={HOSPITAL_CONFIG.callUrl}
              className="sm:hidden font-semibold text-white underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{HOSPITAL_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-hidden">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <div className="relative">
                <Heart className="w-6 h-6 text-rose-300 fill-rose-300/40" />
                <Sparkles className="w-3 h-3 text-amber-300 absolute -top-1 -right-1" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-teal-950 font-sans">
                  ANAYAH
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 font-semibold uppercase tracking-wider">
                  Layyah
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 font-medium">
                {isUr ? "چلڈرن اینڈ گائنی ہسپتال" : "Children & Gynae Hospital"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 hover:bg-teal-50/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={HOSPITAL_CONFIG.callUrl}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-teal-200 bg-teal-50/60 hover:bg-teal-100/80 text-teal-800 font-bold text-sm shadow-xs transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-teal-600 fill-teal-600/20" />
              <span>{HOSPITAL_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={HOSPITAL_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-sm shadow-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.whatsapp}</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={HOSPITAL_CONFIG.callUrl}
              className="p-2.5 text-teal-700 hover:bg-teal-50 rounded-xl border border-teal-200 flex items-center justify-center"
              aria-label="Call Hospital"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-xl border border-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-teal-100 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-2">
            <a
              href={HOSPITAL_CONFIG.callUrl}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-teal-700 text-white font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{isUr ? "کال ملائیں" : "Call Now"}</span>
            </a>
            <a
              href={HOSPITAL_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isUr ? "واٹس ایپ" : "WhatsApp"}</span>
            </a>
          </div>

          <div className="border-t border-slate-100 pt-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language button inside mobile menu */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              {isUr ? "زبان تبدیل کریں:" : "Language Selection:"}
            </span>
            <button
              onClick={() => {
                setLang(lang === 'en' ? 'ur' : 'en');
                setMobileMenuOpen(false);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'اردو میں دیکھیں' : 'Switch to English'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
