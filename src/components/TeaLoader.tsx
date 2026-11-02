import React, { useEffect, useState } from 'react';

interface TeaLoaderProps {
  onComplete?: () => void;
}

export const TeaLoader: React.FC<TeaLoaderProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 1700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#201013] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Steam effect above the cup */}
        <div className="w-16 h-14 flex justify-center items-end mb-1">
          <div className="w-3 h-8 bg-gradient-to-t from-[#D8B66A]/60 via-[#F8F0E3]/30 to-transparent rounded-full blur-xs animate-steam-1 mx-0.5" />
          <div className="w-4 h-11 bg-gradient-to-t from-[#B87948]/60 via-[#F8F0E3]/40 to-transparent rounded-full blur-xs animate-steam-2 mx-0.5" />
          <div className="w-2.5 h-7 bg-gradient-to-t from-[#D8B66A]/50 via-[#F8F0E3]/20 to-transparent rounded-full blur-xs animate-steam-3 mx-0.5" />
        </div>

        {/* Official Golden Tea Cup Emblem */}
        <div className="w-20 h-20 rounded-full border-2 border-[#D8B66A] overflow-hidden bg-[#1a0c0e] shadow-2xl shadow-[#D8B66A]/30 p-1 flex items-center justify-center animate-pulse">
          <img
            src="/logo-crest.png"
            alt="VEDAS CAFE Emblem"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brand Text */}
        <div className="mt-5 text-center">
          <h2 className="font-serif-display text-2xl font-bold tracking-widest text-[#F8F0E3]">
            VEDAS CAFE
          </h2>
          <p className="font-telugu text-sm text-[#D8B66A] font-semibold mt-1">
            వేదాస్ కేఫ్
          </p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#F8F0E3]/70 font-medium mt-1">
            A SIP OF TRADITION &amp; TASTE · GUDUR
          </p>
        </div>

        {/* Shimmer line */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D8B66A] to-transparent mt-4" />
      </div>
    </div>
  );
};
