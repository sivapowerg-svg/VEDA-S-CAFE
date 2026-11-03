import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/menuData';
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface GalleryProps {
  language: 'en' | 'te';
}

export const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_ITEMS.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#201013] overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D8B66A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B66A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
            <span>VISUAL CHRONICLES</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F0E3] mb-4">
            Moments at Veda&apos;s Cafe.
          </h2>

          <p className="text-sm sm:text-base text-[#F8F0E3]/75">
            {language === 'en'
              ? 'A glimpse into the steam, the crunch, the brass tumblers, and the warm conversations in Gudur.'
              : 'గుడూరులోని వేదాస్ కేఫ్‌లో వేడి ఆవిర్లు, కరకరలాడే క్రంచీ కప్, ఇత్తడి గ్లాసులు మరియు మధుర క్షణాల సమాహారం.'}
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* Card 1: Biscuit Cup Tea (Large Hero Feature - 7 cols) */}
          <div
            onClick={() => openLightbox(0)}
            className="lg:col-span-7 h-80 sm:h-96 rounded-2xl overflow-hidden relative group cursor-pointer border border-[#D8B66A]/40 shadow-xl"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-[#201013]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B66A] bg-[#402329]/90 px-2 py-0.5 rounded border border-[#D8B66A]/30">
                  {GALLERY_ITEMS[0].category}
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#F8F0E3] mt-1">
                  {GALLERY_ITEMS[0].title}
                </h3>
                <p className="text-xs text-[#F8F0E3]/70">{GALLERY_ITEMS[0].caption}</p>
              </div>
              <div className="p-2.5 rounded-full bg-[#D8B66A] text-[#291619] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Traditional Cutting Chai (5 cols) */}
          <div
            onClick={() => openLightbox(1)}
            className="lg:col-span-5 h-80 sm:h-96 rounded-2xl overflow-hidden relative group cursor-pointer border border-[#402329] hover:border-[#D8B66A]/50 shadow-xl transition-colors"
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-[#201013]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B66A] bg-[#402329]/90 px-2 py-0.5 rounded border border-[#D8B66A]/30">
                  {GALLERY_ITEMS[1].category}
                </span>
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#F8F0E3] mt-1">
                  {GALLERY_ITEMS[1].title}
                </h3>
                <p className="text-xs text-[#F8F0E3]/70">{GALLERY_ITEMS[1].caption}</p>
              </div>
              <div className="p-2.5 rounded-full bg-[#D8B66A] text-[#291619] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 3: Tea Master Pouring (4 cols) */}
          <div
            onClick={() => openLightbox(2)}
            className="lg:col-span-4 h-72 rounded-2xl overflow-hidden relative group cursor-pointer border border-[#402329] hover:border-[#D8B66A]/50 shadow-xl transition-colors"
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-[#201013]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B66A]">
                {GALLERY_ITEMS[2].category}
              </span>
              <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#F8F0E3] mt-0.5">
                {GALLERY_ITEMS[2].title}
              </h3>
            </div>
          </div>

          {/* Card 4: South Indian Filter Coffee (4 cols) */}
          <div
            onClick={() => openLightbox(3)}
            className="lg:col-span-4 h-72 rounded-2xl overflow-hidden relative group cursor-pointer border border-[#402329] hover:border-[#D8B66A]/50 shadow-xl transition-colors"
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-[#201013]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B66A]">
                {GALLERY_ITEMS[3].category}
              </span>
              <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#F8F0E3] mt-0.5">
                {GALLERY_ITEMS[3].title}
              </h3>
            </div>
          </div>

          {/* Card 5: Badam Milk (4 cols) */}
          <div
            onClick={() => openLightbox(4)}
            className="lg:col-span-4 h-72 rounded-2xl overflow-hidden relative group cursor-pointer border border-[#402329] hover:border-[#D8B66A]/50 shadow-xl transition-colors"
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-[#201013]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B66A]">
                {GALLERY_ITEMS[4].category}
              </span>
              <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#F8F0E3] mt-0.5">
                {GALLERY_ITEMS[4].title}
              </h3>
            </div>
          </div>

          {/* Card 6: Cozy Ambiance (6 cols) */}
          <div
            onClick={() => openLightbox(5)}
            className="lg:col-span-6 h-72 rounded-2xl overflow-hidden relative group cursor-pointer border border-[#402329] hover:border-[#D8B66A]/50 shadow-xl transition-colors"
          >
            <img
              src={GALLERY_ITEMS[5].image}
              alt={GALLERY_ITEMS[5].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-[#201013]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B66A]">
                {GALLERY_ITEMS[5].category}
              </span>
              <h3 className="font-serif-display text-lg font-bold text-[#F8F0E3] mt-0.5">
                {GALLERY_ITEMS[5].title}
              </h3>
              <p className="text-xs text-[#F8F0E3]/70">{GALLERY_ITEMS[5].caption}</p>
            </div>
          </div>

          {/* Card 7: Fresh Lemon Ginger Tea (6 cols) */}
          <div
            onClick={() => openLightbox(6)}
            className="lg:col-span-6 h-72 rounded-2xl overflow-hidden relative group cursor-pointer border border-[#402329] hover:border-[#D8B66A]/50 shadow-xl transition-colors"
          >
            <img
              src={GALLERY_ITEMS[6].image}
              alt={GALLERY_ITEMS[6].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201013] via-[#201013]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B66A]">
                {GALLERY_ITEMS[6].category}
              </span>
              <h3 className="font-serif-display text-lg font-bold text-[#F8F0E3] mt-0.5">
                {GALLERY_ITEMS[6].title}
              </h3>
              <p className="text-xs text-[#F8F0E3]/70">{GALLERY_ITEMS[6].caption}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#402329]/80 text-[#F8F0E3] hover:text-[#D8B66A] hover:bg-[#402329] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#402329]/80 text-[#F8F0E3] hover:text-[#D8B66A] hover:bg-[#402329] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#402329]/80 text-[#F8F0E3] hover:text-[#D8B66A] hover:bg-[#402329] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative max-w-4xl w-full bg-[#291619] border border-[#D8B66A]/60 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={GALLERY_ITEMS[selectedPhotoIndex].image}
                alt={GALLERY_ITEMS[selectedPhotoIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 sm:p-6 bg-[#291619] border-t border-[#402329] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D8B66A]">
                  {GALLERY_ITEMS[selectedPhotoIndex].category}
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#F8F0E3]">
                  {GALLERY_ITEMS[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F0E3]/70 mt-1">
                  {GALLERY_ITEMS[selectedPhotoIndex].caption}
                </p>
              </div>
              <div className="text-xs text-[#D8B66A] tabular-nums whitespace-nowrap">
                {selectedPhotoIndex + 1} / {GALLERY_ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
