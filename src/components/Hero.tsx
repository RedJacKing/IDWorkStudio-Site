import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-12"
    >
      {/* Background Image with Overlay and Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Interior" 
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

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
           className="flex justify-center gap-4 mb-12"
        >
          <a 
            href="https://services2.hdb.gov.sg/webapp/BN31AWERRCMobile/BN31PListingContractor.jsp" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Search for ID WORK STUDIO"
            className="px-6 py-2 border-2 border-champagne text-champagne rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm hover:bg-champagne hover:text-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            {t('accreditation.hdb')}
          </a>
          <a 
            href="https://www.bca.gov.sg/eBACS/BCA_DIRECTORY/Search/SearchResults?searchKey=id%20work%20s" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-2 border-2 border-champagne text-champagne rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm hover:bg-champagne hover:text-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            {t('accreditation.bca')}
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="/commercial"
            className="px-10 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.2em] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-[4px] min-w-[200px]"
          >
            {t('nav.commercial')}
          </a>
          <a 
            href="/residential"
            className="px-10 py-4 bg-transparent text-white text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300 font-bold border border-white rounded-[4px] min-w-[200px]"
          >
            {t('nav.residential')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
