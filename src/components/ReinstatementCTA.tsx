import React from 'react';
import { CheckCircle } from 'lucide-react';

const ReinstatementCTA: React.FC = () => {
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20site%20survey%20for%20my%20commercial%20reinstatement.`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group bg-white py-24 w-full cursor-pointer transition-colors hover:bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center mb-10 leading-tight">
          A <span className="font-serif italic text-[#1A1A1A]">FLAWLESS</span>, <br className="hidden md:block" />
          <span className="font-sans font-bold text-[#C5A059]">COMPLIANT, BARE SHELL HANDOVER.</span>
        </h2>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 mb-16">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#C5A059] w-6 h-6 md:w-8 md:h-8" />
            <span className="font-sans font-bold text-[#1A1A1A] md:text-lg tracking-wide">100% MCST Compliance</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#C5A059] w-6 h-6 md:w-8 md:h-8" />
            <span className="font-sans font-bold text-[#1A1A1A] md:text-lg tracking-wide">Fast Deposit Recovery</span>
          </div>
        </div>

        {/* Visual Proof Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-16">
          {/* Before Image */}
          <div className="relative aspect-video md:aspect-[4/3] overflow-hidden rounded-xl shadow-lg border border-gray-100">
            <img 
              src="/assets/reinstatement-before.jpg" 
              alt="Before Reinstatement - Fully Furnished Office" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 text-xs md:text-sm font-black tracking-[0.2em] uppercase text-[#1A1A1A] rounded shadow-sm">
              Before
            </div>
          </div>

          {/* After Image */}
          <div className="relative aspect-video md:aspect-[4/3] overflow-hidden rounded-xl shadow-lg border border-gray-100">
            <img 
              src="/assets/reinstatement-after.jpg" 
              alt="After Reinstatement - Bare Shell Office Unit" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute top-4 right-4 bg-[#C5A059] text-white px-4 py-2 text-xs md:text-sm font-black tracking-[0.2em] uppercase rounded shadow-md">
              After
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <span className="inline-flex items-center justify-center bg-[#1A1A1A] text-white font-sans font-bold uppercase tracking-[2px] px-8 py-5 text-sm md:text-base group-hover:bg-[#C5A059] group-hover:shadow-[0_10px_30px_rgba(197,160,89,0.4)] group-hover:-translate-y-1 transition-all duration-300 rounded-full shadow-xl">
            WhatsApp for a Free Site Survey
          </span>
        </div>
      </div>
    </a>
  );
};

export default ReinstatementCTA;
