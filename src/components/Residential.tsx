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
    "description": "Award-Winning HDB & BCA Registered Interior Design specializing in Modern BTO & Resale Renovation in Singapore.",
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
    }
  };

  return (
    <>
      <Helmet>
        <title>HDB Approved Contractor & Residential ID Singapore | ID Work Studio</title>
        <meta name="description" content="BCA-registered & HDB-approved interior design. Specialized in BTO, Resale, and Condo renovations." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="bg-off-white min-h-screen">
        {/* HERO SECTION - ONLY ADJUSTED HEIGHT AND PADDING */}
        <section className="relative pt-40 pb-32 min-h-screen flex items-center justify-center overflow-hidden bg-charcoal text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/residential-hero.jpg" 
              alt="ID Work Studio Residential Design" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 border border-champagne text-champagne rounded-full text-xs uppercase tracking-widest mb-4"
            >
              {t('residential_page.hero.badge')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('residential_page.hero.title') }}
            />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light"
            >
              {t('residential_page.hero.subtitle')}
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.12rem] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-[30px] min-w-[200px]"
              >
                {t('residential_page.hero.cta')}
              </a>
            </div>
          </div>
        </section>

        {/* SPECIALISTS SECTION - RESTORED ORIGINAL */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6 text-charcoal">{t('residential_page.specialists.title')}</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-off-white text-champagne border border-champagne/20">
                        <Home />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-charcoal">{t('residential_page.specialists.items.1.title')}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {t('residential_page.specialists.items.1.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-off-white text-champagne border border-champagne/20">
                        <Layout />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-charcoal">{t('residential_page.specialists.items.2.title')}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {t('residential_page.specialists.items.2.desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96">
                <img 
                   src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Master Bedroom" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS SECTION - RESTORED ORIGINAL */}
        <section className="py-20 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-charcoal">{t('residential_page.insights.title')}</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-champagne">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <TrendingUp className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  {t('residential_page.insights.q1.q')}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9" dangerouslySetInnerHTML={{ __html: t('residential_page.insights.q1.a') }} />
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-champagne">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <ShieldCheck className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  {t('residential_page.insights.q3.q')}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9" dangerouslySetInnerHTML={{ __html: t('residential_page.insights.q3.a') }} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - RESTORED ORIGINAL */}
        <section id="contact" className="py-20 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">{t('residential_page.cta.title')}</h2>
            <p className="text-gray-300 mb-8">
              {t('residential_page.cta.subtitle')}
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.12rem] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-[30px]"
            >
              {t('residential_page.cta.button')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}