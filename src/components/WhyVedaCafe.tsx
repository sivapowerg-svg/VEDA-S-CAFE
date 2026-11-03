import React from 'react';
import { Sparkles, Utensils, HeartHandshake, Award, Coins } from 'lucide-react';

interface WhyVedaCafeProps {
  language: 'en' | 'te';
}

export const WhyVedaCafe: React.FC<WhyVedaCafeProps> = ({ language }) => {
  const features = [
    {
      icon: Utensils,
      title: 'The Taste',
      teluguTitle: 'రుచి',
      subtitle: 'Enjoy delicious beverages.',
      teluguSubtitle: 'అద్భుతమైన రుచిని ఆస్వాదించండి.',
      description:
        'Crafted with thick whole milk, balanced sweetness, and freshly pounded spices so every cup satisfies down to the last drop.',
    },
    {
      icon: HeartHandshake,
      title: 'The Tradition',
      teluguTitle: 'సంప్రదాయం',
      subtitle: 'Experience the happiness of Indian tea culture.',
      teluguSubtitle: 'భారతీయ టీ సంస్కృతి యొక్క ఆనందాన్ని అనుభవించండి.',
      description:
        'From brass kettle brewing to warm neighborhood hospitality, we celebrate the timeless ritual of Indian chai.',
    },
    {
      icon: Award,
      title: 'The Special',
      teluguTitle: 'ప్రత్యేకత',
      subtitle: 'Discover our unique Biscuit Cup Tea.',
      teluguSubtitle: 'మా ప్రత్యేకమైన బిస్కెట్ కప్ టీని కనుగొనండి.',
      description:
        'Drink your hot tea, then crunch into your crispy biscuit cup! A zero-waste, unforgettable indulgence found right here in Gudur.',
    },
    {
      icon: Coins,
      title: 'The Price',
      teluguTitle: 'సరసమైన ధరలు',
      subtitle: 'Enjoy affordable refreshments.',
      teluguSubtitle: 'అందరికీ అందుబాటులో ఉండే ధరలు.',
      description:
        'Starting at just ₹12 for fresh chai and ₹20 for premium badam milk and coffee. Honest luxury for everyday refreshment.',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#291619] overflow-hidden border-t border-[#402329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B66A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
            <span>OUR CORE PROMISE</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F0E3] mb-4">
            Why Veda&apos;s Cafe?
          </h2>

          <p className="text-sm sm:text-base text-[#F8F0E3]/75">
            {language === 'en'
              ? 'Four principles that guide every kettle we heat and every guest we welcome.'
              : 'మా ప్రతి కప్పు తయారీలో మరియు ఆతిథ్యంలో మేము పాటించే నాలుగు ముఖ్యమైన సూత్రాలు.'}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#201013] border border-[#402329] hover:border-[#D8B66A]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#402329] group-hover:bg-[#D8B66A]/20 border border-[#D8B66A]/30 flex items-center justify-center text-[#D8B66A] mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif-display text-xl font-bold text-[#F8F0E3] mb-1 group-hover:text-[#D8B66A] transition-colors">
                    {language === 'en' ? feat.title : feat.teluguTitle}
                  </h3>

                  <p className="text-xs font-semibold text-[#D8B66A] uppercase tracking-wider mb-3">
                    {language === 'en' ? feat.subtitle : feat.teluguSubtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#F8F0E3]/70 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#402329]/60 flex items-center justify-between text-xs text-[#F8F0E3]/40">
                  <span>Pillar 0{index + 1}</span>
                  <span className="text-[#D8B66A]">Veda&apos;s Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
