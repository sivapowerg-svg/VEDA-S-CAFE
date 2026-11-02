import React, { useState } from 'react';
import { Sparkles, Cookie, Flame, Leaf, Award, Volume2, Check } from 'lucide-react';

interface SignatureCrunchyCupProps {
  language: 'en' | 'te';
}

export const SignatureCrunchyCup: React.FC<SignatureCrunchyCupProps> = ({ language }) => {
  const [crunched, setCrunched] = useState(false);

  // Synthesize a crisp, pleasant crunch sound using Web Audio API
  const playCrunchSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Multi-layer crunchy noise bursts
      for (let i = 0; i < 4; i++) {
        const bufferSize = ctx.sampleRate * 0.08;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let j = 0; j < bufferSize; j++) {
          data[j] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1800 + i * 600;
        filter.Q.value = 3.0;

        const gain = ctx.createGain();
        const startTime = ctx.currentTime + i * 0.035;
        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.07);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        noise.start(startTime);
        noise.stop(startTime + 0.08);
      }

      setCrunched(true);
      setTimeout(() => setCrunched(false), 2400);
    } catch {
      setCrunched(true);
      setTimeout(() => setCrunched(false), 2400);
    }
  };

  return (
    <section id="signature-tea" className="relative py-24 sm:py-32 bg-[#201013] overflow-hidden">
      {/* Ambient background glow & radial highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#D8B66A]/10 via-[#B87948]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 right-0 w-96 h-96 bg-[#402329]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Golden Marquee Ticker Bar */}
      <div className="w-full bg-gradient-to-r from-[#402329] via-[#522c34] to-[#402329] border-y border-[#D8B66A]/30 py-3 mb-16 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold text-[#D8B66A]">
          <span>NOT JUST A TEA • IT&apos;S AN EXPERIENCE • CRUNCH INTO HAPPINESS</span>
          <span className="text-[#F8F0E3]/40">★</span>
          <span>NOT JUST A TEA • IT&apos;S AN EXPERIENCE • CRUNCH INTO HAPPINESS</span>
          <span className="text-[#F8F0E3]/40">★</span>
          <span>NOT JUST A TEA • IT&apos;S AN EXPERIENCE • CRUNCH INTO HAPPINESS</span>
          <span className="text-[#F8F0E3]/40">★</span>
          <span>NOT JUST A TEA • IT&apos;S AN EXPERIENCE • CRUNCH INTO HAPPINESS</span>
          <span className="text-[#F8F0E3]/40">★</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D8B66A]/15 border border-[#D8B66A]/50 mb-4">
            <Award className="w-4 h-4 text-[#D8B66A]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#D8B66A]">
              THE VEDA&apos;S SPECIAL
            </span>
          </div>

          <p className="font-serif-display text-lg text-[#D8B66A] italic mb-1">
            {language === 'en' ? 'Meet The Crunch.' : 'క్రంచీ కప్ టీ ప్రత్యేకం'}
          </p>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8F0E3] leading-[1.15] text-balance mb-6">
            Tea That You Sip. <br />
            <span className="gold-gradient-text">A Cup That You Eat.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#F8F0E3]/80 leading-relaxed text-balance">
            {language === 'en'
              ? 'Experience something different at Veda\'s Cafe. Enjoy delicious hot tea served in a crunchy edible cup. Experience the warmth of tea and finish with a delightful crunch.'
              : 'వేదాస్ కేఫ్‌లో సరికొత్త అనుభూతిని పొందండి. కరకరలాడే రుచికరమైన బిస్కెట్ కప్‌లో అందించే వేడి వేడి టీని ఆస్వాదించండి. టీ తాగిన తర్వాత కప్‌ను కరకర నమిలి తినేయండి!'}
          </p>
        </div>

        {/* Hero Product Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Product Showcase with animated steam */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[#D8B66A]/40 bg-[#291619] shadow-2xl shadow-black/80">
              <img
                src="/src/assets/images/signature_crunchy_cup_tea_1793623102249.jpg"
                alt="Signature Crunchy Cup Tea at Veda's Cafe"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Steam simulation layer over the cup */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none w-32 h-44 flex justify-center items-end opacity-60">
                <div className="w-12 h-24 bg-gradient-to-t from-[#D8B66A]/25 via-white/20 to-transparent rounded-full blur-md animate-steam-1" />
                <div className="w-14 h-32 bg-gradient-to-t from-[#B87948]/20 via-white/15 to-transparent rounded-full blur-md animate-steam-2" />
              </div>

              {/* Floating golden signature ribbon badge */}
              <div className="absolute top-4 left-4 bg-[#291619]/90 border border-[#D8B66A] px-4 py-2 rounded-lg backdrop-blur-md shadow-lg">
                <p className="text-[10px] tracking-widest uppercase font-semibold text-[#D8B66A]">
                  100% Edible & Eco-Friendly
                </p>
                <p className="font-serif-display text-sm font-bold text-[#F8F0E3]">
                  Crispy Baked Waffle Shell
                </p>
              </div>

              {/* Interactive Audio Crunch Trigger */}
              <div className="absolute bottom-4 right-4">
                <button
                  type="button"
                  onClick={playCrunchSound}
                  className="px-4 py-2.5 rounded-lg bg-[#291619]/90 hover:bg-[#402329] border border-[#D8B66A]/60 text-[#D8B66A] backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  <Volume2 className="w-4 h-4 text-[#D8B66A] animate-pulse" />
                  <span>{crunched ? 'Crunch Heard! ✨' : 'Click to Hear Crunch'}</span>
                </button>
              </div>

              {/* Visual crumb sparkle notification */}
              {crunched && (
                <div className="absolute inset-0 bg-[#D8B66A]/10 backdrop-blur-[1px] flex items-center justify-center animate-in fade-in duration-200">
                  <div className="bg-[#291619] border-2 border-[#D8B66A] text-[#D8B66A] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#D8B66A]" />
                    <span className="font-serif-display text-lg font-bold">
                      Delicious Crispy Crunch!
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Dotted border accent */}
            <div className="hidden sm:block absolute -inset-2 rounded-3xl border border-dashed border-[#D8B66A]/25 -z-10 pointer-events-none" />
          </div>

          {/* Right Column: The 4-step sensory breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#291619]/90 border border-[#402329] hover:border-[#D8B66A]/40 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#F8F0E3] mb-1">
                    1. Steaming Hot Brew
                  </h3>
                  <p className="text-sm text-[#F8F0E3]/70 leading-relaxed">
                    Freshly simmered spiced Indian chai poured at the perfect drinking temperature, infusing warmth into the shell without making it soggy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#291619]/90 border border-[#402329] hover:border-[#D8B66A]/40 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#F8F0E3] mb-1">
                    2. Crispy Waffle Cup
                  </h3>
                  <p className="text-sm text-[#F8F0E3]/70 leading-relaxed">
                    Oven-crisped biscuit layer coated with an edible moisture-resistant barrier that stays completely firm for up to 15 minutes of tea enjoyment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#291619]/90 border border-[#402329] hover:border-[#D8B66A]/40 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#F8F0E3] mb-1">
                    3. Zero-Waste Innovation
                  </h3>
                  <p className="text-sm text-[#F8F0E3]/70 leading-relaxed">
                    No plastic, no paper cups discarded on the street. A 100% eco-friendly indulgence that is good for the earth and delicious to eat.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#291619]/90 border border-[#402329] hover:border-[#D8B66A]/40 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#D8B66A]/20 text-[#D8B66A] shrink-0 border border-[#D8B66A]/40">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#D8B66A] mb-1">
                    4. The Grand Crunch Finale
                  </h3>
                  <p className="text-sm text-[#F8F0E3]/75 leading-relaxed">
                    As you take your last aromatic sip, enjoy the caramelised, toasted biscuit cup as your tea-time snack. It’s tea and biscuit in one single cup!
                  </p>
                </div>
              </div>
            </div>

            {/* Price Note as specified: "Price to be confirmed" */}
            <div className="pt-2 flex items-center justify-between px-2 text-xs text-[#F8F0E3]/60">
              <span>Freshly prepared on order</span>
              <span className="text-[#D8B66A] font-semibold">Available at Veda&apos;s Cafe, Gudur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
