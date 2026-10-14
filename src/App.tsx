/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CtaBanner } from './components/CtaBanner';
import { Doctors } from './components/Doctors';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleReviewsSlider } from './components/GoogleReviewsSlider';
import { HowToBook } from './components/HowToBook';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');

  // Update HTML document direction and lang attribute dynamically
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (lang === 'ur') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ur');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
    }
  }, [lang]);

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-800 ${lang === 'ur' ? 'font-urdu' : ''}`}>
      {/* 1. Header (Sticky navigation, logo, phone, WhatsApp, and Urdu/English toggle) */}
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero lang={lang} />

        {/* 3. About the Hospital */}
        <About lang={lang} />

        {/* 4. Services */}
        <Services lang={lang} />

        {/* 5. Repeat CTA Banner after Services */}
        <CtaBanner lang={lang} variant="primary" />

        {/* 6. Our Doctors (Only Dr. Muhammad Shareef Sumra & Dr. Tahira Shareef) */}
        <Doctors lang={lang} />

        {/* 7. Why Choose Us */}
        <WhyChooseUs lang={lang} />

        {/* 8. Google Reviews Slider (Linked to GMB Profile: https://share.google/OMiE6ycPrH0k8zFK2) */}
        <GoogleReviewsSlider lang={lang} />

        {/* 9. How to Book (3 simple steps) */}
        <HowToBook lang={lang} />

        {/* 9. FAQ (Common questions & answers) */}
        <FAQ lang={lang} />

        {/* 10. Contact Section with Emergency Notice & Embedded Google Map */}
        <Contact lang={lang} />

        {/* 11. Repeat CTA Banner before Footer */}
        <CtaBanner lang={lang} variant="secondary" />
      </main>

      {/* 12. Footer */}
      <Footer lang={lang} />

      {/* 13. Sticky Mobile Bottom Action Bar (Mobile only: WhatsApp & Call Now) */}
      <StickyMobileBar lang={lang} />

      {/* 14. Floating WhatsApp button with subtle pulse animation */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
