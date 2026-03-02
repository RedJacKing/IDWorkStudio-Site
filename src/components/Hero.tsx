import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();
  const location = useLocation();
  const containerRef = useRef(null);
  
  // Logic: Check if current page is Residential
  const isResidential = location.pathname === '/residential';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      /* Dynamically switches between the two styles */
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-12 pb-32 ${isResidential ? 'hero-residential' : 'hero-landing'}`}
    >
      {/* Background Layer */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={isResidential ? "/asset/residential-hero.jpg" : "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"} 
          alt="Interior Design" 
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-none"
        >
          {t('hero.title_main')}<span className="italic font-light text-champagne">{t('hero.title_sub')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light tracking-wide"
        >
          {t('hero.subtitle')}
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <a href="https://services2.hdb.gov.sg/webapp/BN31AWERRCMobile/BN31PListingContractor.jsp" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-4 py-2 border border-white/30 text-white rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm hover:bg-gold transition-all">
            {t('accreditation.hdb')}
          </a>
          <a href="https://www.bca.gov.sg/eBACS/BCA_DIRECTORY/Search/SearchResults?searchKey=id%20work%20s" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-4 py-2 border border-white/30 text-white rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm hover:bg-white/10 transition-all">
            {t('accreditation.bca')}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/commercial" className="w-full sm:w-auto px-10 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-widest font-bold rounded-full">
            {t('nav.commercial')}
          </Link>
          <Link to="/residential" className="w-full sm:w-auto px-10 py-4 bg-transparent text-white text-sm uppercase tracking-widest font-bold border border-white/50 rounded-full backdrop-blur-sm">
            {t('nav.residential')}
          </Link>
        </div>
      </div>
    </section>
  );
}