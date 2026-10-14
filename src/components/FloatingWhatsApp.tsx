import React from 'react';
import { MessageCircle } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';

interface FloatingWhatsAppProps {
  lang: 'en' | 'ur';
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isUr = lang === 'ur';

  return (
    <aside
      aria-label={isUr ? "واٹس ایپ رابطہ" : "WhatsApp Quick Contact"}
      className="fixed bottom-22 sm:bottom-24 md:bottom-8 right-4 sm:right-6 md:right-8 z-40 flex items-center gap-2 group"
    >
      {/* Tooltip badge for desktop */}
      <span className="hidden md:inline-block px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {isUr ? "واٹس ایپ پر رابطہ کریں" : "Chat on WhatsApp"}
      </span>

      {/* Floating Button with Subtle Pulse Animation */}
      <a
        href={HOSPITAL_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-whatsapp-pulse tap-target-min w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white flex items-center justify-center shadow-lg transition-transform focus:outline-hidden"
        aria-label="Contact Anayah Hospital on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </aside>
  );
};
