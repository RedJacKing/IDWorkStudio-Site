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
        <title>Office Renovation Singapore | Retail & Commercial Interior Design</title>
        <meta name="description" content="Professional office renovation in Singapore. BCA-approved commercial contractor for retail, F&B, and reinstatement works. On-time, on-budget delivery." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="pt-32 bg-off-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal text-white">
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

        {/* Services Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.solutions.title')}</h2>
            <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 mb-6 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern Minimalist Office Reception Design Singapore" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">{t('commercial_page.solutions.items.1.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('commercial_page.solutions.items.1.desc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> {t('commercial_page.solutions.items.1.point1')}</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> {t('commercial_page.solutions.items.1.point2')}</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 mb-6 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop" 
                  alt="Luxury Retail Store Layout Singapore" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">{t('commercial_page.solutions.items.2.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('commercial_page.solutions.items.2.desc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> {t('commercial_page.solutions.items.2.point1')}</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> {t('commercial_page.solutions.items.2.point2')}</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 mb-6 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" 
                  alt="BCA HDB Compliant Commercial Renovations Singapore" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">{t('commercial_page.solutions.items.3.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('commercial_page.solutions.items.3.desc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> {t('commercial_page.solutions.items.3.point1')}</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> {t('commercial_page.solutions.items.3.point2')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust Stack Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.trust.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('commercial_page.trust.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <ShieldCheck className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">{t('commercial_page.trust.items.1.title')}</h4>
                <p className="text-sm text-gray-500">{t('commercial_page.trust.items.1.desc')}</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <FileCheck className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">{t('commercial_page.trust.items.2.title')}</h4>
                <p className="text-sm text-gray-500">{t('commercial_page.trust.items.2.desc')}</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <Building2 className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">{t('commercial_page.trust.items.3.title')}</h4>
                <p className="text-sm text-gray-500">{t('commercial_page.trust.items.3.desc')}</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <HardHat className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">{t('commercial_page.trust.items.4.title')}</h4>
                <p className="text-sm text-gray-500">{t('commercial_page.trust.items.4.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Atomic Answers / FAQ Section */}
        <section className="py-20 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-charcoal">{t('commercial_page.faq.title')}</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <Clock className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
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

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">{t('commercial_page.cta.title')}</h2>
            <p className="text-gray-300 mb-8">
              {t('commercial_page.cta.subtitle')}
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.12rem] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-[30px]"
            >
              {t('commercial_page.cta.button')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
