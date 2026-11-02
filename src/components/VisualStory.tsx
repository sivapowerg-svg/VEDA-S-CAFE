import React, { useState } from 'react';
import { Sparkles, Eye, Coffee, Heart } from 'lucide-react';

interface VisualStoryProps {
  language: 'en' | 'te';
}

export const VisualStory: React.FC<VisualStoryProps> = ({ language }) => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      num: '01',
      title: 'The Freshness',
      teluguTitle: 'తాజాదనం',
      quote: 'Every great cup begins with quality ingredients.',
      teluguQuote: 'ప్రతి గొప్ప టీ కప్పు కూడా మేలైన సహజ పదార్ధాలతోనే మొదలవుతుంది.',
      description:
        'We source hand-crushed whole green cardamom from Idukki, fragrant fresh ginger roots pounded every sunrise, and farm-fresh whole milk. No artificial essences, no short cuts.',
      image: '/the freshnesh.png',
      highlight: 'Fresh Spices & Pure Milk',
    },
    {
      num: '02',
      title: 'The Preparation',
      teluguTitle: 'తయారీ విధానం',
      quote: 'Prepared with care, served with warmth.',
      teluguQuote: 'శ్రద్ధతో తయారై, ఆప్యాయతతో అందించబడుతుంది.',
      description:
        'Brewed slowly in heavy brass samovars to extract the deepest tea tannins and caramelized milk proteins. Aerated through high-altitude long pours to create our signature velvet froth.',
      image: '/preparation.png',
      highlight: 'The Long Aeration Pour',
    },
    {
      num: '03',
      title: 'The Happiness',
      teluguTitle: 'ఆనందం',
      quote: 'One sip brings comfort. Every cup brings a smile.',
      teluguQuote: 'ఒక్క గుటక హాయినిస్తుంది. ప్రతి కప్పు చిరునవ్వును పూయిస్తుంది.',
      description:
        'Tea in Gudur is not just a drink—it is the pause between conversations, the morning spark with friends, and the evening comfort that makes every day memorable.',
      image: '/cafe-photo.jpg',
      highlight: 'Shared Warmth & Memories',
    },
  ];

  return (
    <section id="visual-story" className="relative py-24 sm:py-32 bg-[#201013] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D8B66A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B66A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
            <span>THE ART OF MAKING TEA</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F0E3] mb-4">
            A Ritual in Three Acts.
          </h2>

          <p className="text-sm sm:text-base text-[#F8F0E3]/75">
            Discover the patient craftsmanship that goes into brewing your morning and evening cup at Veda&apos;s Cafe.
          </p>
        </div>

        {/* 3 Story Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const isHovered = activeStory === index;
            return (
              <div
                key={story.num}
                onMouseEnter={() => setActiveStory(index)}
                className={`group relative rounded-2xl overflow-hidden bg-[#291619] border transition-all duration-500 flex flex-col justify-between ${
                  isHovered ? 'border-[#D8B66A] shadow-xl shadow-[#D8B66A]/15 -translate-y-2' : 'border-[#402329] shadow-md'
                }`}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#291619] via-[#291619]/40 to-transparent" />

                  {/* Panel Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#291619]/90 border border-[#D8B66A]/60 px-3 py-1.5 rounded-lg backdrop-blur-md">
                    <span className="font-serif-display text-lg font-bold text-[#D8B66A] tracking-wider">
                      {story.num}
                    </span>
                  </div>

                  {/* Highlight pill */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B66A] bg-[#402329]/80 px-2.5 py-1 rounded border border-[#D8B66A]/30">
                      {story.highlight}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl font-bold text-[#F8F0E3] mb-2 group-hover:text-[#D8B66A] transition-colors">
                      {language === 'en' ? story.title : story.teluguTitle}
                    </h3>

                    {/* Prominent Quote */}
                    <blockquote className="font-script text-xl text-[#D8B66A] mb-3 leading-snug">
                      &ldquo;{language === 'en' ? story.quote : story.teluguQuote}&rdquo;
                    </blockquote>

                    <p className="text-xs sm:text-sm text-[#F8F0E3]/70 leading-relaxed mb-4">
                      {story.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#402329] flex items-center justify-between text-xs text-[#F8F0E3]/50">
                    <span className="italic">Veda&apos;s Cafe Tradition</span>
                    <span className="text-[#D8B66A] group-hover:translate-x-1 transition-transform">
                      Step {index + 1} of 3 →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
