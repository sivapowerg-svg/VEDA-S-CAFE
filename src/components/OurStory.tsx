import React from 'react';
import { Sparkles, HeartHandshake, Coffee, Award, Compass } from 'lucide-react';

interface OurStoryProps {
  language: 'en' | 'te';
}

export const OurStory: React.FC<OurStoryProps> = ({ language }) => {
  return (
    <section id="our-story" className="relative py-24 sm:py-32 bg-[#291619] overflow-hidden">
      {/* Decorative Gold Filigree Accents */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#402329]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Double Image Stack with Gold Borders */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#D8B66A]/60 shadow-2xl shadow-black/80">
              <img
                src="/cafe-photo.jpg"
                alt="Veda's Cafe cozy interior with patrons enjoying tea"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#291619]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D8B66A]">
                  GUDUR, ANDHRA PRADESH
                </span>
                <p className="font-serif-display text-xl font-bold text-[#F8F0E3]">
                  The Soul of South Andhra Tea Culture
                </p>
              </div>
            </div>

            {/* Overlapping secondary photo offset */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-56 h-48 rounded-xl overflow-hidden border-2 border-[#D8B66A] shadow-2xl z-20 bg-[#402329]">
              <img
                src="/images/items/coffee.jpg"
                alt="South Indian Filter Coffee tumbler"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-3 text-[11px] font-semibold text-[#D8B66A]">
                Fresh Filter Coffee
              </div>
            </div>

            {/* Traditional Indian Jaali Frame Outline */}
            <div className="absolute -inset-3 rounded-3xl border border-dashed border-[#D8B66A]/30 pointer-events-none -z-0" />
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B66A]">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
              <span>THE PHILOSOPHY OF VEDA&apos;S</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F0E3] leading-[1.15]">
              More Than a Cafe. <br />
              <span className="gold-gradient-text italic">A Feeling.</span>
            </h2>

            <div className="space-y-4 text-base text-[#F8F0E3]/80 leading-relaxed">
              <p>
                {language === 'en'
                  ? "Welcome to Veda's Cafe, where the simple happiness of tea meets the warmth of Indian tradition. From classic tea and coffee to refreshing beverages and our signature Crunchy Cup Tea, every visit is an opportunity to enjoy something special."
                  : 'వేదాస్ కేఫ్‌కు స్వాగతం. ఇక్కడ టీ యొక్క సహజమైన ఆనందం భారతీయ ఆతిథ్య సంప్రదాయంతో కలుస్తుంది. ప్రాచీన టీ, కాఫీ నుండి రిఫ్రెషింగ్ పానీయాలు మరియు మా ప్రత్యేకమైన క్రంచీ కప్ టీ వరకు, ప్రతి సందర్శన ఒక మధురమైన అనుభూతిగా మారుతుంది.'}
              </p>
              <p>
                Nestled on Venkatagiri - Gudur Road near the Railway Station in Ashok Nagar, West Gudur, Veda&apos;s Cafe was born out of a deep reverence for the honest cup. In an era of hurried sips, we created a sanctuary where neighbors gather, students pause to converse, and travelers discover tea served with soul.
              </p>
            </div>

            {/* Special Quote Pill */}
            <div className="p-5 rounded-xl bg-[#402329]/70 border-l-2 border-[#D8B66A] border-y border-r border-[#402329] backdrop-blur-sm">
              <p className="font-script text-2xl text-[#D8B66A] leading-snug">
                &ldquo;Happiness is the Cup of Tea. One Cup. Endless Happiness.&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest text-[#F8F0E3]/60 mt-1">
                — Veda&apos;s Cafe Motto, Gudur
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#402329]">
              <div>
                <p className="font-serif-display text-2xl font-bold text-[#D8B66A]">100%</p>
                <p className="text-xs text-[#F8F0E3]/70 font-medium">Pure Dairy Milk</p>
              </div>
              <div>
                <p className="font-serif-display text-2xl font-bold text-[#D8B66A]">Daily</p>
                <p className="text-xs text-[#F8F0E3]/70 font-medium">Hand-Ground Spices</p>
              </div>
              <div>
                <p className="font-serif-display text-2xl font-bold text-[#D8B66A]">Gudur</p>
                <p className="text-xs text-[#F8F0E3]/70 font-medium">Local Heritage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
