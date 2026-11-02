import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/menuData';
import { Sparkles, X, Heart, Flame, Info } from 'lucide-react';

interface DigitalMenuProps {
  language: 'en' | 'te';
  setLanguage: (lang: 'en' | 'te') => void;
}

export const DigitalMenu: React.FC<DigitalMenuProps> = ({ language, setLanguage }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tea' | 'coffee' | 'milk' | 'health' | 'parcel'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filterTabs = [
    { key: 'all', label: language === 'en' ? 'All Beverages' : 'అన్ని పానీయాలు' },
    { key: 'tea', label: language === 'en' ? 'Tea & Chai' : 'టీ & ఛాయ్' },
    { key: 'coffee', label: language === 'en' ? 'Coffee' : 'కాఫీ' },
    { key: 'milk', label: language === 'en' ? 'Milk & Specials' : 'పాలు & స్పెషల్స్' },
    { key: 'health', label: language === 'en' ? 'Health Drinks' : 'హెల్త్ డ్రింక్స్' },
    { key: 'parcel', label: language === 'en' ? 'Parcel Menu' : 'పార్శిల్ మెనూ' },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-[#291619] overflow-hidden">
      {/* Decorative Golden Pattern Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#402329]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B87948]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B66A] mb-3">
            <span>ARTISANAL DIGITAL MENU</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8F0E3] mb-4">
            A Cup For Every Mood.
          </h2>

          <p className="font-script text-2xl text-[#D8B66A] mb-4">
            {language === 'en' ? 'Freshly prepared upon your order' : 'మీ కోసమే ప్రత్యేకంగా తయారుచేయబడును'}
          </p>

          <p className="text-sm sm:text-base text-[#F8F0E3]/75 max-w-xl mx-auto mb-8">
            {language === 'en'
              ? 'From our classic ₹12 Indian chai to royal Badam Milk and the iconic Crunchy Cup Tea. Honest ingredients, authentic flavors.'
              : '₹12 సంప్రదాయ టీ నుండి రాజసమైన బాదం పాలు మరియు ప్రత్యేక క్రంచీ కప్ టీ వరకు. స్వచ్ఛమైన పదార్ధాలు, తిరుగులేని రుచి.'}
          </p>

          {/* Bilingual Language Selector Banner */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-xl bg-[#402329]/70 border border-[#D8B66A]/30 backdrop-blur-sm">
            <span className="text-xs text-[#F8F0E3]/70 pl-2">Menu Language:</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3.5 py-1 rounded-lg text-xs font-medium transition-all ${
                language === 'en'
                  ? 'bg-[#D8B66A] text-[#291619] font-bold shadow-sm'
                  : 'text-[#F8F0E3]/80 hover:text-[#D8B66A]'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage('te')}
              className={`px-3.5 py-1 rounded-lg text-xs font-telugu font-medium transition-all ${
                language === 'te'
                  ? 'bg-[#D8B66A] text-[#291619] font-bold shadow-sm'
                  : 'text-[#F8F0E3]/80 hover:text-[#D8B66A]'
              }`}
            >
              తెలుగు (Telugu)
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-200 border ${
                activeFilter === tab.key
                  ? 'bg-[#D8B66A] text-[#291619] border-[#D8B66A] font-semibold shadow-md'
                  : 'bg-[#402329]/60 text-[#F8F0E3]/80 border-[#D8B66A]/20 hover:border-[#D8B66A]/60 hover:text-[#F8F0E3]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Grid - Product Cards with Dotted Separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isHighlight = item.isSpecial;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative bg-[#201013] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isHighlight
                    ? 'border-[#D8B66A] shadow-lg shadow-[#D8B66A]/10 hover:shadow-[#D8B66A]/20'
                    : 'border-[#402329] hover:border-[#D8B66A]/50 shadow-md'
                } hover:-translate-y-1`}
              >
                {/* Product Card Top: Image & Badge */}
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-[#402329]/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-transparent to-black/20" />

                    {/* Special Badge */}
                    {item.highlightBadge && (
                      <div className="absolute top-3 left-3 bg-[#D8B66A] text-[#291619] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.highlightBadge}</span>
                      </div>
                    )}

                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-[#D8B66A]">
                      <span className="bg-[#291619]/90 px-2.5 py-0.5 rounded border border-[#D8B66A]/30 text-[11px] font-medium">
                        {language === 'en' ? item.categoryLabel : item.teluguCategoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    {/* Header with Title and Dotted Separator to Price */}
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <div className="min-w-0 pr-1">
                        <h3 className="font-serif-display text-lg font-bold text-[#F8F0E3] group-hover:text-[#D8B66A] transition-colors truncate">
                          {language === 'en' ? item.name : item.teluguName}
                        </h3>
                        {/* Dual Language Subtitle */}
                        <p className="text-xs text-[#F8F0E3]/50 font-telugu">
                          {language === 'en' ? item.teluguName : item.name}
                        </p>
                      </div>

                      {/* Dotted Leader Line */}
                      <div className="grow border-b border-dotted border-[#D8B66A]/40 mb-1 mx-1 shrink" />

                      {/* Price Element */}
                      <div className="shrink-0 text-right">
                        <span className="font-serif-display text-lg font-bold text-[#D8B66A] tabular-nums whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#F8F0E3]/70 leading-relaxed mb-4 line-clamp-2">
                      {language === 'en' ? item.description : item.teluguDescription}
                    </p>

                    {/* Flavor Notes Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-[#F8F0E3]/60">
                      {item.flavorNotes.map((note, idx) => (
                        <span key={idx} className="flex items-center gap-1">
                          <span className="text-[#D8B66A]">•</span>
                          <span>{note}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 pb-4 pt-2 border-t border-[#402329]/60 flex items-center justify-between text-xs text-[#F8F0E3]/50 group-hover:text-[#D8B66A] transition-colors">
                  <span className="flex items-center gap-1 text-[11px]">
                    <Info className="w-3.5 h-3.5" />
                    <span>View Tasting Notes</span>
                  </span>
                  <span className="text-[11px] font-semibold text-[#D8B66A] uppercase tracking-wider">
                    Details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cafe Notice Banner */}
        <div className="mt-14 max-w-3xl mx-auto rounded-xl bg-[#402329]/50 border border-[#D8B66A]/30 p-6 text-center">
          <p className="font-serif-display text-base text-[#D8B66A] font-semibold mb-1">
            Freshly Simmered & Authentic Preparation
          </p>
          <p className="text-xs text-[#F8F0E3]/70 leading-relaxed">
            All our teas and coffees are made to order using whole milk, freshly crushed spices, and premium quality tea dust. For parcels, we use food-safe thermal packaging to retain maximum warmth.
          </p>
        </div>
      </div>

      {/* Item Quick View Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#291619] border border-[#D8B66A] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#402329]/80 text-[#F8F0E3] hover:text-[#D8B66A] hover:bg-[#402329] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 w-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#291619] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs uppercase tracking-widest text-[#D8B66A] font-semibold">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F8F0E3]">
                  {selectedItem.name}
                </h3>
                <p className="font-telugu text-sm text-[#D8B66A]">
                  {selectedItem.teluguName}
                </p>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#402329]">
                <div>
                  <p className="text-xs text-[#F8F0E3]/60 uppercase tracking-wider">Price at Cafe</p>
                  <p className="font-serif-display text-2xl font-bold text-[#D8B66A] tabular-nums">
                    {selectedItem.price}
                  </p>
                </div>
                {selectedItem.isSpecial && (
                  <span className="px-3 py-1 rounded bg-[#D8B66A]/20 border border-[#D8B66A] text-xs font-semibold text-[#D8B66A]">
                    Signature Choice
                  </span>
                )}
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#D8B66A] font-semibold mb-1">
                  About This Beverage
                </p>
                <p className="text-sm text-[#F8F0E3]/85 leading-relaxed">
                  {language === 'en' ? selectedItem.description : selectedItem.teluguDescription}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#D8B66A] font-semibold mb-2">
                  Flavor Characteristics
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.flavorNotes.map((note, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#402329] border border-[#D8B66A]/20 text-xs text-[#F8F0E3]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=4RXW%2B9JF%2C+Vivekananda+Road%2C+Ashok+Nagar%2C+West+Gudur+Rural%2C+Andhra+Pradesh+524101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 px-4 rounded bg-[#D8B66A] hover:bg-[#c4a259] text-[#291619] font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Visit Cafe in Gudur to Taste
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
