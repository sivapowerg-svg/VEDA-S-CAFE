import React from 'react';
import { Sparkles, Quote, Heart, Coffee, Award } from 'lucide-react';

interface LeadershipProfileProps {
  language: 'en' | 'te';
}

export const LeadershipProfile: React.FC<LeadershipProfileProps> = ({ language }) => {
  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-[#201013] overflow-hidden border-t border-[#402329]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-[#D8B66A]/10 via-[#B87948]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-[#402329]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photograph Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Outer Traditional Indian Jaali Dashed Accent Frame */}
              <div className="hidden sm:block absolute -inset-3 rounded-3xl border border-dashed border-[#D8B66A]/30 pointer-events-none -z-0" />

              {/* Portrait Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#D8B66A]/60 bg-[#291619] shadow-2xl shadow-black/85">
                <picture>
                  <source srcSet="/owner.jpg" type="image/jpeg" />
                  <img
                    src="/owner.png"
                    alt="Vellaturu Yoga Vishnu Vardhan Rao"
                    className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Subtle Cinematic Bottom Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-[#201013]/25 to-transparent pointer-events-none" />

                {/* Corner Decorative Heritage Ribbon */}
                <div className="absolute top-4 left-4 bg-[#291619]/90 border border-[#D8B66A] px-3.5 py-1.5 rounded-lg backdrop-blur-md shadow-lg flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#D8B66A]" />
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D8B66A]">
                    VEDA&apos;S CAFE · GUDUR
                  </span>
                </div>

                {/* Floating Bottom Name Plaque */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#291619]/92 border border-[#D8B66A]/50 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#D8B66A]">
                        {language === 'en' ? 'LEADERSHIP & HOSPITALITY' : 'నాయకత్వం & ఆతిథ్యం'}
                      </span>
                      <h3 className="font-serif-display text-sm sm:text-base font-bold text-[#F8F0E3] mt-0.5 leading-snug">
                        Vellaturu Yoga Vishnu Vardhan Rao
                      </h3>
                      {language === 'te' && (
                        <p className="font-telugu text-xs text-[#D8B66A] mt-0.5">
                          వేలటూరు యోగ విష్ణు వర్ధన్ రావు
                        </p>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#402329] border border-[#D8B66A]/40 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-[#D8B66A]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B66A]">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
              <span>{language === 'en' ? 'THE HEART BEHIND VEDA\'S' : 'వేదాస్ వెనుక ఉన్న ఆత్మీయత'}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
            </div>

            {/* Client Full Name Header */}
            <div>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8F0E3] leading-[1.2]">
                Vellaturu Yoga Vishnu Vardhan Rao
              </h2>
              {language === 'te' && (
                <p className="font-telugu text-xl text-[#D8B66A] font-semibold mt-1">
                  వేలటూరు యోగ విష్ణు వర్ధన్ రావు
                </p>
              )}
            </div>

            {/* Subtitle / Calling */}
            <p className="font-script text-2xl sm:text-3xl text-[#D8B66A]">
              {language === 'en'
                ? 'Dedicated to Tradition, Warmth & Authentic Hospitality'
                : 'సంప్రదాయం, ఆత్మీయత మరియు అసలైన ఆతిథ్యానికి ప్రతీక'}
            </p>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base text-[#F8F0E3]/85 leading-relaxed">
              <p>
                {language === 'en'
                  ? 'Behind the fragrant tea and welcoming smiles at Veda’s Cafe is a steadfast commitment to genuine South Andhra hospitality. Believing that a great cup of tea has the power to bring people together, Vellaturu Yoga Vishnu Vardhan Rao champions authentic craftsmanship, pure whole milk, and traditional brewing in Gudur.'
                  : 'వేదాస్ కేఫ్‌లో లభించే సుగంధభరిత టీ మరియు ఆత్మీయమైన చిరునవ్వుల వెనుక అసలైన దక్షిణ ఆంధ్ర ఆతిథ్యం పట్ల అచంచలమైన అంకితభావం ఉంది. ఒక మంచి టీ కప్పు మనుషులను ఒకచోట చేర్చగలదనే నమ్మకంతో, వేలటూరు యోగ విష్ణు వర్ధన్ రావు గారు సాంప్రదాయ తయారీ విధానాన్ని, స్వచ్ఛమైన పాలను మరియు తిరుగులేని నాణ్యతను నిరంతరం ప్రోత్సహిస్తున్నారు.'}
              </p>
              <p>
                {language === 'en'
                  ? 'Every detail—from the slow simmer of fresh cardamom chai to the serene, respectful ambiance—is guided by a passion to ensure that every visitor departs with a joyful heart and the warmth of true companionship.'
                  : 'తాజా యాలకుల టీ ఘుమఘుమల నుండి ప్రశాంతమైన వాతావరణం వరకు—ప్రతి ఒక్కటీ ఎంతో శ్రద్ధతో రూపొందించబడింది. మా వద్దకు వచ్చే ప్రతి అతిథికి ఒక గొప్ప అనుభూతిని అందించడమే ప్రధాన లక్ష్యం.'}
              </p>
            </div>

            {/* Special Quote Pill */}
            <div className="p-6 rounded-2xl bg-[#402329]/75 border-l-4 border-[#D8B66A] border-y border-r border-[#402329] backdrop-blur-sm shadow-xl relative">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#D8B66A] shrink-0 mt-1 opacity-80" />
                <div>
                  <p className="font-serif-display text-base sm:text-lg italic text-[#F8F0E3]/95 leading-relaxed">
                    {language === 'en'
                      ? '“A cup of tea in Gudur is never rushed. It is a moment of pause, a celebration of togetherness, and our way of sharing warmth with every soul that enters our doors.”'
                      : '“గుడూరులో టీ తాగడం అంటే కేవలం ఒక అలవాటు మాత్రమే కాదు. అది ఒక మధురమైన విరామం, ఆత్మీయుల కలయిక మరియు మా వద్దకు వచ్చే ప్రతి ఒక్కరితో ఆనందాన్ని పంచుకునే సంప్రదాయం.”'}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D8B66A] font-bold mt-3">
                    — Vellaturu Yoga Vishnu Vardhan Rao
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#402329]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F8F0E3]">
                    {language === 'en' ? 'Warm Care' : 'ఆత్మీయత'}
                  </p>
                  <p className="text-xs text-[#F8F0E3]/65 mt-0.5">
                    {language === 'en' ? 'Family-like hospitality' : 'సొంత కుటుంబంలా ఆదరణ'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F8F0E3]">
                    {language === 'en' ? 'Purity First' : 'పరిశుభ్రత'}
                  </p>
                  <p className="text-xs text-[#F8F0E3]/65 mt-0.5">
                    {language === 'en' ? 'Pure whole dairy milk' : 'స్వచ్ఛమైన సహజ పాలు'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F8F0E3]">
                    {language === 'en' ? 'Gudur Pride' : 'గుడూరు సంస్కృతి'}
                  </p>
                  <p className="text-xs text-[#F8F0E3]/65 mt-0.5">
                    {language === 'en' ? 'Rooted in local heritage' : 'స్థానిక సంప్రదాయ మూలాలు'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

