import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquareQuote,
  Sparkles
} from 'lucide-react';
import { GOOGLE_REVIEWS_DATA, CONTENT, GoogleReview } from '../translations/content';
import { HOSPITAL_CONFIG } from '../config/hospitalConfig';

interface GoogleReviewsSliderProps {
  lang: 'en' | 'ur';
}

export const GoogleReviewsSlider: React.FC<GoogleReviewsSliderProps> = ({ lang }) => {
  const t = CONTENT[lang].reviews;
  const isUr = lang === 'ur';
  const reviews = GOOGLE_REVIEWS_DATA;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-scroll through reviews every 5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // swipe left
        isUr ? handlePrev() : handleNext();
      } else {
        // swipe right
        isUr ? handleNext() : handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Google multi-color SVG icon
  const GoogleIcon = () => (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );

  return (
    <section 
      id="reviews" 
      className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            {/* Google GMB Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs">
              <GoogleIcon />
              <span className="text-xs font-bold text-slate-800">
                {t.badge}
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-extrabold text-slate-900">5.0</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* Action CTAs: Direct link to GMB */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={HOSPITAL_CONFIG.gmbProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target-min inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-all"
            >
              <GoogleIcon />
              <span>{t.viewGoogleProfile}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={HOSPITAL_CONFIG.gmbProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target-min inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>{t.writeReview}</span>
            </a>
          </div>
        </div>

        {/* Carousel Slider */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${isUr ? currentIndex * 100 : -currentIndex * 100}%)`,
              }}
            >
              {reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="w-full shrink-0 px-2 sm:px-3"
                >
                  <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200/90 hover:border-teal-300 p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all relative">
                    
                    {/* Top Row: Author info, rating & Google branding */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 rounded-2xl ${rev.avatarColor} text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0`}>
                          {(isUr ? rev.authorUr : rev.authorEn).charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-base sm:text-lg text-slate-900">
                              {isUr ? rev.authorUr : rev.authorEn}
                            </h3>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>{isUr ? rev.timeUr : rev.timeEn}</span>
                            </span>
                          </div>
                          <p className="text-xs text-teal-800 font-semibold mt-0.5">
                            {isUr ? rev.doctorTagUr : rev.doctorTagEn}
                          </p>
                        </div>
                      </div>

                      {/* Stars & Google Badge */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1.5 shrink-0">
                        <div className="flex items-center text-amber-400 gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <GoogleIcon />
                          <span>Google Review</span>
                        </div>
                      </div>
                    </div>

                    {/* Review Quote Body */}
                    <div className="pt-6 pb-2">
                      <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal italic">
                        "{isUr ? rev.textUr : rev.textEn}"
                      </p>
                    </div>

                    {/* Card Footer: Location confirmation */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>{HOSPITAL_CONFIG.locationShort}</span>
                      <a
                        href={HOSPITAL_CONFIG.gmbProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 hover:text-teal-900 font-semibold underline flex items-center gap-1"
                      >
                        <span>{isUr ? "پروفائل پر ریویو دیکھیں" : "View on Google"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between pointer-events-none absolute inset-y-0 left-0 right-0 px-0 sm:px-2">
            <button
              onClick={handlePrev}
              className="pointer-events-auto tap-target-min w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 shadow-md border border-slate-200 flex items-center justify-center transition-all active:scale-95 cursor-pointer -ml-2 sm:ml-0"
              aria-label={t.prevReview}
            >
              {isUr ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>

            <button
              onClick={handleNext}
              className="pointer-events-auto tap-target-min w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 shadow-md border border-slate-200 flex items-center justify-center transition-all active:scale-95 cursor-pointer -mr-2 sm:mr-0"
              aria-label={t.nextReview}
            >
              {isUr ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {reviews.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === dotIdx
                    ? 'w-8 h-2.5 bg-teal-700'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Bottom invitation banner to write a review */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-600">
            {isUr 
              ? "کیا آپ نے حال ہی میں عنایہ ہسپتال کا وزٹ کیا ہے؟ دیگر والدین کی رہنمائی کے لیے گوگل پر اپنی رائے شیئر کریں۔"
              : "Have you visited Anayah Hospital? Help other parents in Layyah by sharing your review on our Google profile."}
          </p>
          <a
            href={HOSPITAL_CONFIG.gmbProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 mt-2 underline"
          >
            <span>{t.writeReview}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
