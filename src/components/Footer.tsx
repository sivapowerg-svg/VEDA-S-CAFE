import React from 'react';
import { Instagram, MapPin, ArrowUp, Sparkles, Navigation } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'te';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: language === 'en' ? 'Home' : 'హోమ్', href: '#hero' },
    { label: language === 'en' ? 'Our Story' : 'మా కథ', href: '#our-story' },
    { label: language === 'en' ? 'Special Tea' : 'స్పెషల్ టీ', href: '#signature-tea' },
    { label: language === 'en' ? 'Menu' : 'మెనూ', href: '#menu' },
    { label: language === 'en' ? 'Gallery' : 'గ్యాలరీ', href: '#gallery' },
    { label: language === 'en' ? 'Visit Us' : 'మా వద్దకు రండి', href: '#visit-us' },
  ];

  return (
    <footer className="relative bg-[#190b0e] text-[#F8F0E3] pt-20 pb-12 border-t border-[#D8B66A]/25 overflow-hidden">
      {/* Decorative Golden Ambient Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D8B66A]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Closing Statement Banner */}
        <div className="text-center pb-16 border-b border-[#402329]">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B66A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
            <span>THE VEDA&apos;S INVITATION</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#F8F0E3] mb-4">
            &ldquo;Come for the Tea. Stay for the Crunch.&rdquo;
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-[#D8B66A]">
            Happiness is the Cup of Tea. One Cup. Endless Happiness.
          </p>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-[#402329]">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#D8B66A]/60 bg-[#190b0e] shadow-xl p-0.5 flex items-center justify-center shrink-0">
                <img
                  src="/logo-crest.png"
                  alt="VEDAS CAFE Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif-display text-2xl font-bold tracking-wider text-[#F8F0E3]">
                  VEDAS CAFE
                </span>
                <p className="text-[11px] font-semibold text-[#D8B66A] tracking-[0.18em] uppercase">
                  వేదాస్ కేఫ్ · A Sip of Tradition &amp; Taste
                </p>
              </div>
            </div>

            <p className="text-sm text-[#F8F0E3]/70 leading-relaxed max-w-sm">
              A premium celebration of Indian tea culture in Gudur, Andhra Pradesh. Home of the signature Biscuit Cup Tea, artisanal filter coffee, and authentic freshly boiled chai.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/vedas.cafee?mdxt=bGk0dXE4ZDIwdDMy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#402329] hover:bg-[#D8B66A] text-[#F8F0E3] hover:text-[#291619] border border-[#D8B66A]/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/Mentj1W2MpK3nhJN9?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#402329] hover:bg-[#D8B66A] text-[#F8F0E3] hover:text-[#291619] border border-[#D8B66A]/30 flex items-center justify-center transition-colors"
                aria-label="Location Map"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D8B66A] font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F0E3]/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#D8B66A] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#D8B66A]/40 text-xs">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Timings Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D8B66A] font-bold">
              Cafe Location
            </h4>
            <p className="text-sm text-[#F8F0E3]/80 leading-relaxed">
              Door No 100, Petrol Pump, 5890-6, Venkatagiri - Gudur Road, Near Railway Station, Opposite CPM Office, Ashok Nagar, Nellore, West Gudur Rural, Andhra Pradesh - 524101, India.
            </p>
            <div className="pt-1">
              <p className="text-xs text-[#D8B66A] font-semibold">
                Open Daily · Closes at 9:30 PM
              </p>
              <p className="text-xs text-[#F8F0E3]/70 mt-0.5">
                Contact:{' '}
                <a
                  href="tel:+919618377032"
                  className="text-[#D8B66A] hover:underline font-medium"
                >
                  96183 77032
                </a>{' '}
                <span className="text-[#F8F0E3]/50">(Cafe Desk)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F0E3]/50">
          <p>
            © {new Date().getFullYear()} VEDA&apos;S CAFE. All rights reserved. Business Showcase Website.
          </p>

          <p className="text-center text-[#D8B66A]/80 font-medium">
            VEDA&apos;S CAFE – Happiness is the Cup of Tea.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#F8F0E3]/70 hover:text-[#D8B66A] transition-colors focus:outline-none"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
