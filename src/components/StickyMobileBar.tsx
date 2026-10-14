import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';
import { CONTENT } from '../translations/content';

interface StickyMobileBarProps {
  lang: 'en' | 'ur';
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ lang }) => {
  const t = CONTENT[lang].stickyMobile;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2.5 max-w-lg mx-auto">
        {/* WhatsApp Full-Width Button (Green) */}
        <a
          href={HOSPITAL_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-target-min flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-sm transition-all"
          aria-label="Book appointment on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600 shrink-0" />
          <span className="truncate">{t.whatsapp}</span>
        </a>

        {/* Call Now Full-Width Button (Blue/Teal) */}
        <a
          href={HOSPITAL_CONFIG.callUrl}
          className="tap-target-min flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-sm transition-all"
          aria-label="Call Hospital Now"
        >
          <Phone className="w-5 h-5 shrink-0" />
          <span className="truncate">{t.call}</span>
        </a>
      </div>
    </div>
  );
};
