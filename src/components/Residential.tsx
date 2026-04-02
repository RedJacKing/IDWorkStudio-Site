import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Home, Layout, Box, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Residential() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20quote%20for%20my%20residential%20renovation.`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "ID Work Studio Residential Design",
    "description": "HDB & BCA Registered Interior Design specializing in Modern BTO & Resale Renovation in Singapore.",
    "areaServed": "Singapore",
    "serviceType": [
      "BTO Renovation Solutions",
      "Resale Flat Transformation",
      "Kitchen & Bath Remodeling",
      "Full-house Carpentry",
      "Warm Luxury Interior Design",
      "Japandi Interior Design"
    ],
    "knowsAbout": [
      "Tengah BTO Renovation",
      "Bidadari Estate Design",
      "Tampines North Layouts",
      "Smart-integrated storage solutions"
    ],
    "provider": {
      "@type": "Organization",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com"
    },
    "license": "HDB-Approved & BCA-Registered"
  };

  return (
    <>
      <Helmet>
        <title>HDB Approved Contractor & Residential ID Singapore | ID Work Studio</title>
        <meta name="description" content="BCA-registered & HDB-approved interior design. Specialized in BTO, Resale, and Condo renovations." />
        <meta property="og:image" content="https://idworkstudio.com/WALANDING.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://idworkstudio.com/residential" />
        <meta name="twitter:image" content="https://idworkstudio.com/WALANDING.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Main Container - Night Mode */}
      <div className="bg-[#1A1A1A] min-h-screen selection:bg-gold selection:text-dark-charcoal text-white">
        
        {/* Hero Section - UPDATED TO MATCH MAIN PAGE HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Warm Minimalist Living Room" 
              className="w-full h-full object-cover opacity-60"
              // Tells the browser this is the most important image on the homepage
              fetchpriority="high"
              // Ensures the browser decodes this image in the background
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-7xl font-serif mb-6 tracking-tighter leading-tight uppercase">
                {/* Same subtitle and title logic as main hero */}
                <span className="block text-white/90 font-light italic text-2xl md:text-4xl mb-2 lowercase">
                  {/* Reuse appropriate translation key or provide fallback for "Discover Visionary" style */}
                  {t('hero.subtitle_top') || 'Discover Visionary'} 
                </span>
                <span className="text-gold tracking-[0.1em] drop-shadow-2xl">
                  {/* Reuse main page hero title logic */}
                  {t('hero.title') || 'ID WORK STUDIO'}
                </span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-widest leading-relaxed px-4">
                {/* Reuse main page hero description logic */}
                {t('hero.description') || t('residential_page.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-gold text-dark-charcoal text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-full min-w-[200px]"
                >
                  {/* Kept Residential CTA text */}
                  {t('residential_page.hero.cta')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specialists Section - Implemented Night Mode (Removed Maroon, Applied Gold) */}
        <section className="py-24 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">{t('residential_page.specialists.title')}</h2>
                <div className="space-y-8">
                  <div className="flex group">
                    <div className="flex-shrink-0">
                      {/* Night Mode Icon: Dark BG, Gold Icon/Border */}
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-dark-charcoal text-gold border border-gold/20 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                        <Home size={24} />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">{t('residential_page.specialists.items.1.title')}</h3>
                      <p className="mt-2 text-gray-400 leading-relaxed font-sans font-normal">
                        {t('residential_page.specialists.items.1.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-dark-charcoal text-gold border border-gold/20 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                        <Layout size={24} />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">{t('residential_page.specialists.items.2.title')}</h3>
                      <p className="mt-2 text-gray-400 leading-relaxed font-sans font-normal">
                        {t('residential_page.specialists.items.2.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-dark-charcoal text-gold border border-gold/20 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                        <Box size={24} />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">{t('residential_page.specialists.items.3.title')}</h3>
                      <p className="mt-2 text-gray-400 leading-relaxed font-sans font-normal">
                        {t('residential_page.specialists.items.3.desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px] group">
                <img 
                   src="/gallery/house-renovation.png" 
                  alt="HDB & BCA Registered Interior Design Singapore" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  // Kept original image attributes
                  loading="lazy"
                  decoding="async"
                />
                {/* Night Mode Testimonial Card */}
                <div className="absolute -bottom-8 -left-8 bg-dark-charcoal p-8 shadow-2xl max-w-xs hidden md:block border-l-4 border-gold">
                  <p className="text-white font-serif text-lg italic leading-relaxed">
                    "{t('residential_page.specialists.testimonial.quote')}"
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-4 font-sans font-bold">
                    {t('residential_page.specialists.testimonial.author')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle-First Design Solutions - Implemented Night Mode (Applied Gold) */}
        <section className="py-24 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">{t('residential_page.lifestyle.title')}</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
                {t('residential_page.lifestyle.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-10 border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 group">
                <Box className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{t('residential_page.lifestyle.items.1.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {t('residential_page.lifestyle.items.1.desc')}
                </p>
              </div>
              <div className="p-10 border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 group">
                <TrendingUp className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{t('residential_page.lifestyle.items.2.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {t('residential_page.lifestyle.items.2.desc')}
                </p>
              </div>
              <div className="p-10 border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 group">
                <Sparkles className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{t('residential_page.lifestyle.items.3.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {t('residential_page.lifestyle.items.3.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GEO-Ready Atomic Answers - Implemented Night Mode (Removed Maroon, Applied Gold) */}
        <section className="py-24 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center text-white uppercase tracking-tighter">
              {t('residential_page.insights.title')}
            </h2>
            
            <div className="space-y-8">
              {/* FAQ Card: Dark BG, Gold accent border, light text */}
              <div className="bg-dark-charcoal p-10 rounded-xl shadow-lg border-l-4 border-gold group hover:shadow-2xl hover:bg-dark-charcoal/80 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-start uppercase tracking-tight">
                  <TrendingUp className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  {t('residential_page.insights.q1.q')}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-10 font-sans" dangerouslySetInnerHTML={{ __html: t('residential_page.insights.q1.a') }} />
              </div>

              <div className="bg-dark-charcoal p-10 rounded-xl shadow-lg border-l-4 border-gold group hover:shadow-2xl hover:bg-dark-charcoal/80 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-start uppercase tracking-tight">
                  <Box className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  {t('residential_page.insights.q2.q')}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-10 font-sans" dangerouslySetInnerHTML={{ __html: t('residential_page.insights.q2.a') }} />
              </div>

              <div className="bg-dark-charcoal p-10 rounded-xl shadow-lg border-l-4 border-gold group hover:shadow-2xl hover:bg-dark-charcoal/80 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-start uppercase tracking-tight">
                  <ShieldCheck className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  {t('residential_page.insights.q3.q')}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-10 font-sans" dangerouslySetInnerHTML={{ __html: t('residential_page.insights.q3.a') }} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - (Kept Dark & Original) */}
        <section id="contact" className="py-32 bg-dark-charcoal text-white text-center scroll-mt-24 relative overflow-hiddenCTA Section">
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 uppercase tracking-tighter CTA Title">{t('residential_page.cta.title')}</h2>
            <p className="text-gray-400 mb-12 text-lg font-light tracking-wide italic CTA Subtitle">
              {t('residential_page.cta.subtitle')}
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.3em] hover:bg-gold-hover hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 font-bold rounded-full CTA Button"
            >
              {t('residential_page.cta.button')}
            </a>
          </div>
          <div className="decorative-element decorative-element-1 absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
        </section>
      </div>
    </>
  );
}