import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureCrunchyCup } from './components/SignatureCrunchyCup';
import { DigitalMenu } from './components/DigitalMenu';
import { VisualStory } from './components/VisualStory';
import { OurStory } from './components/OurStory';
import { Gallery } from './components/Gallery';
import { WhyVedaCafe } from './components/WhyVedaCafe';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { TeaLoader } from './components/TeaLoader';
import { Navigation, ArrowUp } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#291619] text-[#F8F0E3] selection:bg-[#D8B66A] selection:text-[#291619] font-sans">
      {/* Initial Tea Brew Loading Animation */}
      <TeaLoader />

      {/* Navigation */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* 1. Hero Section */}
      <Hero language={language} />

      {/* 2. Signature Experience - Crunchy Cup Tea (The Hero Product) */}
      <SignatureCrunchyCup language={language} />

      {/* 3. Our Menu - Editorial Digital Menu */}
      <DigitalMenu language={language} setLanguage={setLanguage} />

      {/* 4. Visual Story - The Art of Making Tea */}
      <VisualStory language={language} />

      {/* 5. Our Story & Heritage */}
      <OurStory language={language} />

      {/* 6. Visual Chronicles Gallery */}
      <Gallery language={language} />

      {/* 7. Why Veda's Cafe */}
      <WhyVedaCafe language={language} />

      {/* 8. Visit Our Cafe & Location */}
      <VisitUs language={language} />

      {/* 9. Premium Footer */}
      <Footer language={language} />

      {/* Floating Quick Navigation & Directions Widget */}
      {showFloatingBar && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <a
            href="https://maps.app.goo.gl/Mentj1W2MpK3nhJN9?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-[#D8B66A] text-[#291619] text-xs font-bold uppercase tracking-wider shadow-2xl hover:bg-[#c6a457] transition-all flex items-center gap-2 transform hover:scale-105"
          >
            <Navigation className="w-4 h-4" />
            <span className="hidden sm:inline">Directions</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full bg-[#402329] border border-[#D8B66A]/40 text-[#D8B66A] hover:bg-[#D8B66A] hover:text-[#291619] shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
