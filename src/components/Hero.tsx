import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Interior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-none"
        >
          {t('hero.title_main')}<span className="italic font-light text-champagne">{t('hero.title_sub')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
           className="flex justify-center gap-4 mb-10"
        >
          <a 
            href="https://services2.hdb.gov.sg/webapp/BN31AWERRCMobile/BN31PContractorResult.jsp" 
            target="_blank" 
            rel="noopener noreferrer" 
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
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="/residential"
            className="px-8 py-4 bg-white text-charcoal text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors font-medium border border-white min-w-[160px]"
          >
            {t('nav.residential')}
          </a>
          <a 
            href="/commercial"
            className="px-8 py-4 bg-champagne text-white text-sm uppercase tracking-widest hover:bg-champagne-hover transition-colors font-medium border border-champagne min-w-[160px]"
          >
            {t('nav.commercial')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
