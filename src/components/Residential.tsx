import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Home, Layout, Box, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';

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
    "provider": {
      "@type": "Organization",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Residential Interior Design | ID Work Studio Singapore</title>
        <meta name="description" content="Expert HDB & BCA approved residential renovations. Specialists in BTO and Resale flat transformations." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main>
        {/* This renders the Hero with the Japandi backdrop */}
        <Hero />

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-charcoal mb-4">{t('residential_page.lifestyle.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('residential_page.lifestyle.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-off-white rounded-xl">
                <Box className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">{t('residential_page.lifestyle.items.1.title')}</h3>
                <p className="text-gray-600">{t('residential_page.lifestyle.items.1.desc')}</p>
              </div>
              <div className="p-8 bg-off-white rounded-xl">
                <Sparkles className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">{t('residential_page.lifestyle.items.2.title')}</h3>
                <p className="text-gray-600">{t('residential_page.lifestyle.items.2.desc')}</p>
              </div>
              <div className="p-8 bg-off-white rounded-xl">
                <Layout className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">{t('residential_page.lifestyle.items.3.title')}</h3>
                <p className="text-gray-600">{t('residential_page.lifestyle.items.3.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-off-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">{t('residential_page.insights.title')}</h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-gold">
                <h3 className="text-xl font-bold mb-3">{t('residential_page.insights.q1.q')}</h3>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('residential_page.insights.q1.a') }} />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-gold">
                <h3 className="text-xl font-bold mb-3">{t('residential_page.insights.q2.q')}</h3>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('residential_page.insights.q2.a') }} />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-dark-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">{t('residential_page.cta.title')}</h2>
            <p className="text-gray-300 mb-8">{t('residential_page.cta.subtitle')}</p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gold text-dark-charcoal uppercase tracking-widest font-bold rounded-full hover:bg-gold-hover transition-all"
            >
              {t('residential_page.cta.button')}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}