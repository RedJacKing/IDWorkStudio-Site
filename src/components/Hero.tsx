import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-48 md:pt-32 lg:pt-40 pb-20 md:pb-32"
    >
      {/* Background Image with Overlay and Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Interior" 
          className="w-full h-full object-cover object-center opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-8 md:mt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight uppercase tracking-tight"
        >
          {t('hero.title_main')}
          <span className="block mt-2 text-gold italic">
            {t('hero.title_sub')}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 mb-16 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
           className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
        >
          <a 
            href="https://services2.hdb.gov.sg/webapp/BN31AWERRCMobile/BN31PListingContractor.jsp" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Search for ID WORK STUDIO"
            className="w-full sm:w-auto px-8 py-3 border border-gold/50 text-gold rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-gold hover:text-dark-charcoal transition-all shadow-[0_0_20px_rgba(197,160,89,0.2)]"
          >
            {t('accreditation.hdb')}
          </a>
          <a 
            href="https://www.bca.gov.sg/eBACS/BCA_DIRECTORY/Search/SearchResults?searchKey=id%20work%20s" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-3 border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-white hover:text-dark-charcoal transition-all"
          >
            {t('accreditation.bca')}
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <Link 
            to="/commercial"
            className="w-full sm:w-auto px-12 py-5 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.2em] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-full min-w-[240px]"
          >
            {t('nav.commercial')}
          </Link>
          <Link 
            to="/residential"
            className="w-full sm:w-auto px-12 py-5 bg-transparent text-white text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300 font-bold border border-white/50 rounded-full backdrop-blur-[5px] min-w-[240px]"
          >
            {t('nav.residential')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
