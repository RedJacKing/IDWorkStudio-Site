import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation

export default function Hero() {
  const { t } = useTranslation();
  const location = useLocation(); // This detects the current page
  const containerRef = useRef(null);
  
  // Logic: Only apply the 'res-hero' fix if the URL is exactly /residential
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
      /* The line below checks if isResidential is true. 
         If yes, it adds 'res-hero'. If no, it uses standard padding.
      */
      className={`${isResidential ? 'res-hero' : 'pt-32'} relative min-h-screen flex items-center justify-center overflow-hidden md:pt-12 pb-32`}
    >
      {/* Background Image Layer */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={isResidential ? "/asset/residential-hero.jpg" : "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"} 
          alt="Interior Design" 
          className="w-full h-full object-cover opacity-80 scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-none"
        >
          {t('hero.title_main')}<span className="italic font-light text-champagne">{t('hero.title_sub')}</span>
        </motion.h1>
        
        {/* ... (rest of your p tags and buttons) ... */}
      </div>
    </section>
  );
}