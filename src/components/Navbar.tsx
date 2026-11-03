import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Instagram } from 'lucide-react';

interface NavbarProps {
  language: 'en' | 'te';
  setLanguage: (lang: 'en' | 'te') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: language === 'en' ? 'Home' : 'హోమ్', href: '#hero' },
    { label: language === 'en' ? 'Our Story' : 'మా కథ', href: '#our-story' },
    { label: language === 'en' ? 'Special Tea' : 'స్పెషల్ టీ', href: '#signature-tea' },
    { label: language === 'en' ? 'Menu' : 'మెనూ', href: '#menu' },
    { label: language === 'en' ? 'Gallery' : 'గ్యాలరీ', href: '#gallery' },
    { label: language === 'en' ? 'Visit Us' : 'మా వద్దకు రండి', href: '#visit-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#291619]/95 backdrop-blur-md shadow-2xl border-b border-[#D8B66A]/20 py-3.5'
          : 'bg-gradient-to-b from-[#291619]/80 via-[#291619]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Official Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#D8B66A]/70 p-0.5 bg-[#1a0c0e] shadow-md group-hover:border-[#D8B66A] group-hover:shadow-[#D8B66A]/30 transition-all duration-300 flex items-center justify-center shrink-0">
              <img
                src="/logo-crest.png"
                alt="VEDAS CAFE Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-lg sm:text-xl font-bold tracking-wider text-[#F8F0E3] group-hover:text-[#D8B66A] transition-colors leading-tight">
                VEDAS CAFE
              </span>
              <span className="font-telugu text-[10px] text-[#D8B66A] tracking-wider leading-none">
                వేదాస్ కేఫ్ · Gudur
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#F8F0E3]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#D8B66A] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D8B66A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Language Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick language toggle */}
            <div className="hidden sm:flex items-center bg-[#402329]/80 border border-[#D8B66A]/25 rounded-md p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-[#D8B66A] text-[#291619] font-semibold'
                    : 'text-[#F8F0E3]/70 hover:text-[#F8F0E3]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('te')}
                className={`px-2.5 py-1 rounded font-telugu transition-colors ${
                  language === 'te'
                    ? 'bg-[#D8B66A] text-[#291619] font-semibold'
                    : 'text-[#F8F0E3]/70 hover:text-[#F8F0E3]'
                }`}
              >
                తెలుగు
              </button>
            </div>

            {/* Instagram Profile Link */}
            <a
              href="https://www.instagram.com/vedas.cafee?mdxt=bGk0dXE4ZDIwdDMy"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-8 h-8 rounded-full bg-[#402329]/80 hover:bg-[#D8B66A] text-[#D8B66A] hover:text-[#291619] border border-[#D8B66A]/30 items-center justify-center transition-all duration-200"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Golden Explore Menu Button */}
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold tracking-wide text-[#291619] bg-gradient-to-r from-[#D8B66A] to-[#B87948] hover:from-[#e2c480] hover:to-[#c68958] rounded shadow-md hover:shadow-lg hover:shadow-[#D8B66A]/20 transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Explore Menu' : 'మెనూ చూడండి'}</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F8F0E3] hover:text-[#D8B66A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#291619] border-b border-[#D8B66A]/20 px-6 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#402329]">
            <span className="text-xs uppercase tracking-widest text-[#D8B66A]">Navigation</span>
            <div className="flex items-center bg-[#402329] border border-[#D8B66A]/30 rounded p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded ${language === 'en' ? 'bg-[#D8B66A] text-[#291619] font-bold' : 'text-[#F8F0E3]/70'}`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('te')}
                className={`px-3 py-1 rounded font-telugu ${language === 'te' ? 'bg-[#D8B66A] text-[#291619] font-bold' : 'text-[#F8F0E3]/70'}`}
              >
                తెలుగు
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#F8F0E3]/90 hover:text-[#D8B66A] transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex items-center gap-2">
            <a
              href="https://maps.app.goo.gl/Mentj1W2MpK3nhJN9?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center block py-2.5 px-4 text-xs font-semibold tracking-wider uppercase bg-[#402329] hover:bg-[#502c34] text-[#D8B66A] border border-[#D8B66A]/40 rounded transition-colors"
            >
              Get Directions to Cafe
            </a>
            <a
              href="https://www.instagram.com/vedas.cafee?mdxt=bGk0dXE4ZDIwdDMy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#402329] hover:bg-[#D8B66A] text-[#D8B66A] hover:text-[#291619] border border-[#D8B66A]/40 rounded transition-colors flex items-center justify-center shrink-0"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
