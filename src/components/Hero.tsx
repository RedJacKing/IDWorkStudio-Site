import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <meta name="description" content="Singapore's trusted renovation and interior design firm based in Woodlands, Singapore. BCA-registered & HDB-approved. Specialising in commercial fit-outs, office reinstatement, and residential renovations across Singapore." />
        <link rel="canonical" href="https://idworkstudio.com/" />
        <meta property="og:url" content="https://idworkstudio.com/" />
      </Helmet>

      <section 
        id="home" 
        ref={containerRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-48 md:pt-32 lg:pt-40 pb-20 md:pb-32"
      >
        {/* Background Image with Overlay and Parallax - Optimized for Speed */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/hero.webp" 
            alt="Modern Interior Design Singapore" 
            className="w-full h-full object-cover object-center opacity-60 scale-110"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-8 md:mt-12">

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight uppercase tracking-tight"
          >
            {t('hero.title_main')}
            <span className="block mt-2 text-gold italic">
              {t('hero.title_sub')}
            </span>
          </motion.h1>

          {/* SEO Accreditation Line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-8 font-semibold"
          >
            <a
              href="https://services2.hdb.gov.sg/webapp/BN31AWERRCMobile/BN31PListingContractor.jsp"
              target="_blank"
              rel="noopener noreferrer"
              title="Search for ID WORK STUDIO on HDB"
              className="hover:text-gold transition-colors underline underline-offset-2"
            >
              {t('accreditation.hdb')}
            </a>
            <span className="mx-2 text-white/30">·</span>
            <a
              href="https://www.bca.gov.sg/eBACS/BCA_DIRECTORY/Search/SearchResults?searchKey=id%20work%20s"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors underline underline-offset-2"
            >
              {t('accreditation.bca')}
            </a>
            <span className="mx-2 text-white/30">·</span>
            <span className="text-white/60">{t('accreditation.firm')}</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* 4 CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
          >
            <Link 
              to="/commercial"
              className="w-full sm:w-auto px-10 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.2em] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-full min-w-[200px]"
            >
              {t('nav.commercial')}
            </Link>
            <Link 
              to="/residential"
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300 font-bold border border-white/50 rounded-full backdrop-blur-[5px] min-w-[200px]"
            >
              {t('nav.residential')}
            </Link>
            <Link 
              to="/#gallery"
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300 font-bold border border-white/30 rounded-full backdrop-blur-[5px] min-w-[200px]"
            >
              {t('hero.cta')}
            </Link>
            <a
              href="https://wa.me/6598333085"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-[#25D366] text-white text-sm uppercase tracking-[0.2em] hover:bg-[#1ebe5d] hover:shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all duration-300 font-bold rounded-full min-w-[200px]"
            >
              {t('hero.whatsapp')}
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}
