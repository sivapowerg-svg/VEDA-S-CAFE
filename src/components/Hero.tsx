import React from 'react';
import { Sparkles, ArrowRight, CupSoda } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'te';
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Slow Zoom & Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/src/assets/images/hero_indian_tea_steam_1793623101609.jpg"
          alt="Freshly brewed steaming Indian Chai at Veda's Cafe"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_14s_ease-in-out_infinite] transition-transform duration-1000 ease-out"
        />
        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#291619] via-[#291619]/65 to-[#291619]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#291619]/30 to-[#291619]/90" />
      </div>

      {/* Subtle Floating Steam Particles & Ambience */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 pointer-events-none z-10 w-48 h-64 flex justify-center items-end opacity-70">
        <div className="w-16 h-32 bg-gradient-to-t from-[#D8B66A]/20 via-[#F8F0E3]/15 to-transparent rounded-full blur-xl animate-steam-1" />
        <div className="w-20 h-40 bg-gradient-to-t from-[#B87948]/20 via-[#F8F0E3]/10 to-transparent rounded-full blur-xl animate-steam-2" />
        <div className="w-12 h-28 bg-gradient-to-t from-[#D8B66A]/15 via-white/10 to-transparent rounded-full blur-lg animate-steam-3" />
      </div>

      {/* Floating golden subtle decorative stars */}
      <div className="absolute top-1/4 left-8 sm:left-20 w-1.5 h-1.5 rounded-full bg-[#D8B66A]/40 animate-ping" />
      <div className="absolute top-1/3 right-10 sm:right-24 w-1 h-1 rounded-full bg-[#D8B66A]/60 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-[#D8B66A]/50" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Brand Emblem & Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#402329]/70 border border-[#D8B66A]/40 backdrop-blur-md mb-6 transform hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#D8B66A]">
            YOUR FAVOURITE TEA DESTINATION
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
        </div>

        {/* Cafe Logo Monogram Badge */}
        <div className="mb-4 flex items-center justify-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#D8B66A]/70 flex items-center justify-center bg-[#402329]/80 backdrop-blur-md shadow-2xl shadow-[#D8B66A]/10 group">
            <div className="absolute inset-1 rounded-full border border-dashed border-[#D8B66A]/40 animate-[spin_20s_linear_infinite]" />
            <CupSoda className="w-8 h-8 sm:w-10 sm:h-10 text-[#D8B66A] transform group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F8F0E3] leading-[1.1] max-w-4xl text-balance mb-4">
          Where Every Sip <br className="hidden sm:inline" />
          <span className="gold-gradient-text italic font-normal">Becomes a Memory.</span>
        </h1>

        {/* Telugu Subtitle if chosen or secondary translation line */}
        {language === 'te' && (
          <p className="font-telugu text-lg sm:text-2xl text-[#D8B66A] font-medium mb-3">
            ప్రతి గుటకలో ఒక మధుర జ్ఞాపకం · అసలైన రుచికి చిరునామా
          </p>
        )}

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#F8F0E3]/85 font-light tracking-wide max-w-2xl text-balance mb-2">
          Tradition in Every Cup. Happiness in Every Sip.
        </p>

        {/* Special handwritten quotation */}
        <p className="font-script text-2xl sm:text-3xl text-[#D8B66A]/90 mb-9 tracking-wide">
          &ldquo;Crafted with love, cardamom, and warmth in Gudur&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => handleScrollTo('signature-tea')}
            className="w-full sm:w-auto px-7 py-3.5 rounded text-sm font-semibold tracking-wider uppercase text-[#291619] bg-gradient-to-r from-[#D8B66A] via-[#E5C77E] to-[#B87948] hover:from-[#E5C77E] hover:to-[#D8B66A] shadow-xl hover:shadow-[#D8B66A]/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5"
          >
            <span>{language === 'en' ? 'Discover Our Special' : 'ప్రత్యేక క్రంచీ టీ'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={() => handleScrollTo('menu')}
            className="w-full sm:w-auto px-7 py-3.5 rounded text-sm font-semibold tracking-wider uppercase text-[#F8F0E3] bg-[#402329]/80 hover:bg-[#402329] border border-[#D8B66A]/40 hover:border-[#D8B66A] backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>{language === 'en' ? 'Explore Our Menu' : 'మెనూ వివరాలు'}</span>
          </button>
        </div>

        {/* Subtle quick location indicator below CTA */}
        <div className="mt-12 flex items-center gap-2 text-xs text-[#F8F0E3]/60 tracking-wider">
          <span>Vivekananda Road</span>
          <span aria-hidden="true">·</span>
          <span>Ashok Nagar</span>
          <span aria-hidden="true">·</span>
          <span>West Gudur</span>
        </div>
      </div>

      {/* Bottom Golden Hairline Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D8B66A]/40 to-transparent" />
    </section>
  );
};
