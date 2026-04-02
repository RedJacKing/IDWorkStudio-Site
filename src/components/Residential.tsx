import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Home, Layout, Box, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Residential() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20my%20residential%20renovation.`;

  // ... (Schema Data remains identical to your previous version)

  return (
    <>
      <Helmet>
        <title>HDB & Condo Renovation Singapore | Residential Interior Design | ID Work Studio</title>
        <meta name="description" content="HDB-approved residential renovation and interior design in Singapore. BCA-registered contractor specialising in HDB, condo and landed property renovations." />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Main Container - Night Mode */}
      <div className="bg-[#1A1A1A] min-h-screen selection:bg-gold selection:text-dark-charcoal text-white">
        
        {/* Hero Section - UPDATED WITH HARD-CODED TEXT */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Warm Minimalist Living Room" 
              className="w-full h-full object-cover opacity-60"
              fetchpriority="high"
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
                {/* Hard-coded Subtitle to ensure visibility */}
                <span className="block text-white/90 font-light italic text-2xl md:text-4xl mb-2 lowercase">
                  Modern Visionary Living
                </span>
                {/* Hard-coded Title to ensure visibility */}
                <span className="text-gold tracking-[0.1em] drop-shadow-2xl">
                  For Singapore Homeowners
                </span>
              </h1>
              
              {/* Hard-coded Description to ensure visibility */}
              <p className="text-gray-300 text-base md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-widest leading-relaxed px-4">
                BCA-Registered & HDB-Approved Partner. We handle all HDB permits and structural submissions for your peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-gold text-dark-charcoal text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-full min-w-[200px]"
                >
                  {/* Pulls from translation if available, else defaults to text */}
                  {t('residential_page.hero.cta') || 'Book a Home Consultation'}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specialists Section - (Kept Night Mode / Removed Maroon) */}
        <section className="py-24 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">{t('residential_page.specialists.title')}</h2>
                <div className="space-y-8">
                  <div className="flex group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#262626] text-gold border border-gold/20 group-hover:bg-gold group-hover:text-white transition-all duration-300">
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
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#262626] text-gold border border-gold/20 group-hover:bg-gold group-hover:text-white transition-all duration-300">
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
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#262626] text-gold border border-gold/20 group-hover:bg-gold group-hover:text-white transition-all duration-300">
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
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute -bottom-8 -left-8 bg-[#262626] p-8 shadow-2xl max-w-xs hidden md:block border-l-4 border-gold">
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

        {/* (The rest of the file sections: Lifestyle-First, FAQ, and CTA should remain identical to the previous Night Mode version) */}
      </div>
    </>
  );
}