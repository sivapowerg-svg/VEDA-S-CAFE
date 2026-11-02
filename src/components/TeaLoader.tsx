import React, { useEffect, useState } from 'react';
import { Coffee, Sparkles } from 'lucide-react';

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

        {/* Golden Tea Cup Icon */}
        <div className="w-16 h-16 rounded-full border-2 border-[#D8B66A] flex items-center justify-center bg-[#402329] shadow-2xl shadow-[#D8B66A]/20">
          <Coffee className="w-8 h-8 text-[#D8B66A] animate-pulse" />
        </div>

        {/* Brand Text */}
        <div className="mt-5 text-center">
          <h2 className="font-serif-display text-2xl font-bold tracking-widest text-[#F8F0E3]">
            VEDA&apos;S CAFE
          </h2>
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#D8B66A] font-medium mt-1">
            THE ART OF CHAI · GUDUR
          </p>
        </div>

        {/* Shimmer line */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D8B66A] to-transparent mt-4" />
      </div>
    </div>
  );
};
