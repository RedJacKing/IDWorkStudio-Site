import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, FileCheck, HardHat, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Commercial() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20my%20commercial%20project.`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["CommercialRealEstateService", "ProfessionalService"],
    "name": "ID Work Studio Commercial Renovation",
    "description": "Strategic Commercial Interior Design & Fit-Outs in Singapore. BCA-Approved Commercial Contractor specializing in Office Reinstatement and Retail Interior Fit-out.",
    "areaServed": "Singapore",
    "knowsAbout": [
      "Office Reinstatement Singapore",
      "Retail Interior Fit-out",
      "BCA-Approved Commercial Contractor",
      "F&B Renovation",
      "Commercial Interior Design"
    ],
    "provider": {
      "@type": "Organization",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Office Renovation Singapore | Commercial Interior Design | ID Work Studio</title>
        <meta name="description" content="Looking for an office renovation company in Singapore? ID Work Studio is a BCA-registered contractor specializing in turnkey commercial fit-outs and modern office designs." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="bg-off-white min-h-screen">
        {/* Hero Section - FIXED: pt-40 and min-h-screen to match landing page */}
        <section className="relative pt-40 pb-32 min-h-screen flex items-center justify-center overflow-hidden bg-charcoal text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Minimalist Office Reception Design Singapore" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('commercial_page.hero.title') }}
            />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light"
            >
              {t('commercial_page.hero.subtitle')}
            </motion.h2>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.12rem] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-[30px]"
            >
              {t('commercial_page.hero.cta')}
            </a>
          </div>
        </section>

        {/* The rest of the file remains unchanged */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.solutions.title')}</h2>
            <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          </div>
          {/* ... */}
        </section>
      </div>
    </>
  );
}