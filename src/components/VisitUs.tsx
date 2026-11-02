import React, { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, Navigation, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface VisitUsProps {
  language: 'en' | 'te';
}

export const VisitUs: React.FC<VisitUsProps> = ({ language }) => {
  const [copied, setCopied] = useState(false);

  const address = "4RXW+9JF, Vivekananda Road, Ashok Nagar, West Gudur Rural, Andhra Pradesh 524101";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=4RXW%2B9JF%2C+Vivekananda+Road%2C+Ashok+Nagar%2C+West+Gudur+Rural%2C+Andhra+Pradesh+524101";
  const googleMapsViewUrl = "https://maps.google.com/maps?q=4RXW%2B9JF%2C+Vivekananda+Road%2C+Ashok+Nagar%2C+West+Gudur+Rural%2C+Andhra+Pradesh+524101&t=&z=16&ie=UTF8&iwloc=&output=embed";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit-us" className="relative py-24 sm:py-32 bg-[#201013] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D8B66A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B66A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
            <span>FIND US IN GUDUR</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8B66A]" />
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F0E3] mb-4">
            Your Next Cup of Happiness Awaits.
          </h2>

          <p className="text-sm sm:text-base text-[#F8F0E3]/75">
            {language === 'en'
              ? 'Drop in with family and friends to taste hot tea in an edible crunchy cup or traditional filter coffee.'
              : 'కుటుంబంతో మరియు స్నేహితులతో కలిసి వేడి వేడి టీ, సరికొత్త క్రంచీ కప్ మరియు ఫిల్టర్ కాఫీని ఆస్వాదించడానికి విచ్చేయండి.'}
          </p>
        </div>

        {/* 2-Column Split: Cafe Details Left, Interactive Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business & Hours Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#291619] border border-[#D8B66A]/40 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              {/* Cafe Name & Location Badge */}
              <div className="pb-5 border-b border-[#402329]">
                <span className="text-xs font-bold tracking-widest uppercase text-[#D8B66A]">
                  BUSINESS SHOWCASE
                </span>
                <h3 className="font-serif-display text-3xl font-bold text-[#F8F0E3] mt-1">
                  VEDA&apos;S CAFE
                </h3>
                <p className="text-xs text-[#D8B66A] font-telugu mt-0.5">
                  వేదాస్ కేఫ్ · గుడూరు
                </p>
              </div>

              {/* Address with Copy Button */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#D8B66A] font-semibold mb-1">
                    Cafe Address
                  </h4>
                  <p className="text-sm text-[#F8F0E3]/85 leading-relaxed font-normal">
                    {address}
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="mt-2 text-xs text-[#D8B66A] hover:underline flex items-center gap-1.5 focus:outline-none"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Address Copied!</span>
                      </>
                    ) : (
                      <span>Copy Address</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Hours of Operation (Prominently showing 9:30 PM closing time) */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#D8B66A] font-semibold mb-1">
                    Operating Hours
                  </h4>
                  <p className="text-sm text-[#F8F0E3]/90 font-medium">
                    Open Daily
                  </p>
                  <p className="text-xs text-[#D8B66A] font-semibold mt-0.5">
                    Closes at 9:30 PM sharp
                  </p>
                  <p className="text-[11px] text-[#F8F0E3]/60 mt-1">
                    Fresh batches brewed continuously throughout the morning and evening.
                  </p>
                </div>
              </div>

              {/* Contact Information Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#D8B66A] font-semibold mb-1">
                    Contact / Inquiries
                  </h4>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-[#F8F0E3]/85 hover:text-[#D8B66A] transition-colors"
                  >
                    +91 98765 43210 <span className="text-[11px] text-[#F8F0E3]/50">(Cafe Desk)</span>
                  </a>
                  <p className="text-[11px] text-[#F8F0E3]/60 mt-0.5">
                    For bulk parcel inquiries & special batches
                  </p>
                </div>
              </div>

              {/* Instagram Placeholder Link */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#402329] text-[#D8B66A] shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#D8B66A] font-semibold mb-1">
                    Follow Our Story
                  </h4>
                  <a
                    href="https://instagram.com/vedascafe_gudur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#F8F0E3]/85 hover:text-[#D8B66A] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>@vedascafe_gudur</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D8B66A]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-6 mt-6 border-t border-[#402329]">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-lg text-xs font-bold tracking-wider uppercase text-[#291619] bg-gradient-to-r from-[#D8B66A] via-[#E5C77E] to-[#B87948] hover:from-[#E5C77E] hover:to-[#D8B66A] shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D8B66A]/40 bg-[#291619] relative min-h-[420px] shadow-2xl flex flex-col">
            {/* Map Frame */}
            <div className="relative w-full h-full min-h-[420px] grow">
              <iframe
                title="Google Maps Location for Veda's Cafe Gudur"
                src={googleMapsViewUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700 w-full h-full"
              />
            </div>

            {/* Map Overlay Bar */}
            <div className="p-4 bg-[#291619] border-t border-[#402329] flex flex-wrap items-center justify-between gap-3 text-xs text-[#F8F0E3]/70">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Open for Walk-ins · West Gudur Rural</span>
              </span>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8B66A] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Open Full Navigation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
