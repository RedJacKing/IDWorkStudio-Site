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
    "serviceType": [
      "Office Reinstatement",
      "Retail Fit-out",
      "F&B Renovation",
      "Industrial Space Design"
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
        <title>Office Renovation & Commercial ID Singapore | ID Work Studio</title>
        <meta name="description" content="BCA-approved commercial interior design and reinstatement services. Specialized in office, retail, and F&B fit-outs." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="bg-off-white min-h-screen">
        {/* FIXED HERO ONLY: Matches landing page height and padding */}
        <section className="relative pt-40 pb-32 min-h-screen flex items-center justify-center overflow-hidden bg-charcoal text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Office Interior Singapore" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 border border-champagne text-champagne rounded-full text-xs uppercase tracking-widest mb-4"
            >
              {t('commercial_page.hero.badge')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
            >
              {t('commercial_page.hero.title')}
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
              {t('commercial_page.hero.subtitle')}
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-widest hover:bg-gold-hover transition-all duration-300 font-bold rounded-[30px]"
            >
              {t('commercial_page.hero.cta')}
            </a>
          </div>
        </section>

        {/* PRESERVED CONTENT: Original specialists section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.specialists.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-off-white rounded-xl border border-gray-100">
                <Building2 className="w-12 h-12 text-champagne mb-6" />
                <h3 className="text-xl font-bold mb-4">{t('commercial_page.specialists.items.1.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('commercial_page.specialists.items.1.desc')}</p>
              </div>
              <div className="p-8 bg-off-white rounded-xl border border-gray-100">
                <Clock className="w-12 h-12 text-champagne mb-6" />
                <h3 className="text-xl font-bold mb-4">{t('commercial_page.specialists.items.2.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('commercial_page.specialists.items.2.desc')}</p>
              </div>
              <div className="p-8 bg-off-white rounded-xl border border-gray-100">
                <CheckCircle className="w-12 h-12 text-champagne mb-6" />
                <h3 className="text-xl font-bold mb-4">{t('commercial_page.specialists.items.3.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('commercial_page.specialists.items.3.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRESERVED CONTENT: Original FAQ section */}
        <section className="py-20 bg-off-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-12 text-center text-charcoal">{t('commercial_page.faq.title')}</h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <FileCheck className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  {t('commercial_page.faq.q1.q')}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9" dangerouslySetInnerHTML={{ __html: t('commercial_page.faq.q1.a') }} />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <ShieldCheck className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  {t('commercial_page.faq.q2.q')}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9" dangerouslySetInnerHTML={{ __html: t('commercial_page.faq.q2.a') }} />
              </div>
            </div>
          </div>
        </section>

        {/* PRESERVED CONTENT: Original CTA section */}
        <section id="contact" className="py-20 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">{t('commercial_page.cta.title')}</h2>
            <p className="text-gray-300 mb-8">{t('commercial_page.cta.subtitle')}</p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-widest hover:bg-gold-hover transition-all duration-300 font-bold rounded-[30px]"
            >
              {t('commercial_page.cta.button')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}