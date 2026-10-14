import React, { useState } from 'react';
import { 
  Baby, 
  Heart, 
  Shield, 
  Activity, 
  Stethoscope, 
  Sparkles, 
  Calendar, 
  UserCheck, 
  MessageCircle, 
  Phone
} from 'lucide-react';
import { SERVICES_LIST, CONTENT, ServiceItem } from '../translations/content';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';

interface ServicesProps {
  lang: 'en' | 'ur';
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'children' | 'women'>('all');
  const t = CONTENT[lang].services;
  const isUr = lang === 'ur';

  const filteredServices = SERVICES_LIST.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const renderIcon = (iconName: ServiceItem['iconName'], category: 'children' | 'women') => {
    const iconClass = category === 'children' 
      ? 'w-6 h-6 text-teal-600' 
      : 'w-6 h-6 text-rose-500';

    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className={iconClass} />;
      case 'Baby': return <Baby className={iconClass} />;
      case 'Shield': return <Shield className={iconClass} />;
      case 'Activity': return <Activity className={iconClass} />;
      case 'Heart': return <Heart className={iconClass} />;
      case 'Sparkles': return <Sparkles className={iconClass} />;
      case 'UserCheck': return <UserCheck className={iconClass} />;
      case 'Calendar': return <Calendar className={iconClass} />;
      default: return <Heart className={iconClass} />;
    }
  };

  const getServiceWhatsAppUrl = (title: string) => {
    const encoded = encodeURIComponent(
      `Assalam o Alaikum, I would like to inquire about and book an appointment for ${title} at Anayah Hospital.`
    );
    return `https://wa.me/923035362767?text=${encoded}`;
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5 text-teal-700" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.subtitle}
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`tap-target-min px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-teal-800 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.filterAll} ({SERVICES_LIST.length})
            </button>
            <button
              onClick={() => setFilter('children')}
              className={`tap-target-min px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                filter === 'children'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.filterChild}
            </button>
            <button
              onClick={() => setFilter('women')}
              className={`tap-target-min px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                filter === 'women'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.filterWomen}
            </button>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const isChildren = service.category === 'children';
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white p-6 border border-slate-200/90 hover:border-teal-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isChildren ? 'bg-teal-50' : 'bg-rose-50'
                    }`}>
                      {renderIcon(service.iconName, service.category)}
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isChildren ? 'bg-teal-100/80 text-teal-800' : 'bg-rose-100/80 text-rose-800'
                    }`}>
                      {isChildren 
                        ? (isUr ? "بچے" : "Pediatric") 
                        : (isUr ? "خواتین" : "Gynecology")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                    {isUr ? service.titleUr : service.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {isUr ? service.descUr : service.descEn}
                  </p>
                </div>

                {/* Bottom Quick Action */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={getServiceWhatsAppUrl(isUr ? service.titleUr : service.titleEn)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-target-min flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isUr ? "وقت لیں" : "Book"}</span>
                  </a>

                  <a
                    href={HOSPITAL_CONFIG.callUrl}
                    className="tap-target-min p-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-200 flex items-center justify-center transition-colors"
                    title={isUr ? "کال کریں" : "Call to inquire"}
                    aria-label="Call Hospital"
                  >
                    <Phone className="w-3.5 h-3.5" />
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
