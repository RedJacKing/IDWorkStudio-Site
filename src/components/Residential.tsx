import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Residential() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20my%20residential%20renovation.`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Renovation Singapore",
    "description": "HDB-approved and BCA-registered residential renovation and interior design in Singapore. Specialising in HDB renovation, condo renovation, and landed property interior design across Singapore. Based in Woodlands, Singapore.",
    "serviceType": "Residential Renovation",
    "areaServed": { "@type": "City", "name": "Singapore" },
    "provider": {
      "@type": "GeneralContractor",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com",
      "telephone": "+6568162872",
      "email": "contact@idworkstudio.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Woodlands Close, Woodlands 11, #03-10",
        "addressLocality": "Woodlands",
        "addressRegion": "Singapore",
        "postalCode": "737853",
        "addressCountry": "SG"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Residential Renovation Services Singapore",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HDB Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Condo Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landed Property Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "BTO Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Resale HDB Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Design Woodlands Singapore" } }
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/residential"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of a 4-room BTO renovation in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2026, a comprehensive 4-room BTO renovation in Singapore typically ranges from $45,000 to $65,000. This covers flooring, painting, plumbing, and custom carpentry for the kitchen and wardrobes. Premium finishes or extensive hacking for open-plan layouts can push costs to $75,000+."
        }
      },
      {
        "@type": "Question",
        "name": "How can I maximize storage in a small HDB layout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To maximize storage in small HDBs, utilize vertical space with floor-to-ceiling carpentry. Implement smart solutions like platform beds with drawers, hidden storage within feature walls, and extendable dining tables. Japandi designs use concealed cabinetry to maintain a minimalist aesthetic without sacrificing functionality."
        }
      },
      {
        "@type": "Question",
        "name": "Why is choosing an HDB-registered contractor important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choosing an HDB-registered contractor is crucial because they are trained to adhere to HDB's renovation guidelines and structural safety protocols. They ensure no critical structural pillars are compromised during hacking and that all electrical and plumbing works meet Singapore's safety standards, protecting you from liability and safety hazards."
        }
      },
      {
        "@type": "Question",
        "name": "How long does HDB renovation take in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical HDB renovation in Singapore takes 6 to 10 weeks from commencement of works. ID Work Studio manages all HDB permits and coordinates the renovation timeline to minimise disruption."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* ================================================ */}
        {/* PRIMARY META — updated for AI + local search     */}
        {/* ================================================ */}
        <title>HDB & Condo Renovation Singapore | Residential Interior Design | ID Work Studio Woodlands</title>
        <meta name="description" content="HDB-approved residential renovation and interior design in Singapore. BCA-registered contractor specialising in HDB, condo and landed property renovations. Based in Woodlands, serving all of Singapore. Get a free consultation today." />
        <meta name="keywords" content="HDB renovation Singapore, condo renovation Singapore, residential renovation Singapore, interior design Singapore, BTO renovation Singapore, landed property renovation Singapore, Woodlands interior designer, ID Work Studio" />

        {/* Geo tags */}
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />

        {/* Canonical */}
        <link rel="canonical" href="https://idworkstudio.com/residential" />

        {/* ================================================ */}
        {/* OPEN GRAPH                                       */}
        {/* ================================================ */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/residential" />
        <meta property="og:title" content="HDB & Condo Renovation Singapore | Residential Interior Design | ID Work Studio" />
        <meta property="og:description" content="HDB-approved residential renovation and interior design in Singapore. BCA-registered, Woodlands-based. Specialising in HDB, condo and landed property renovations across Singapore." />
        <meta property="og:image" content="https://idworkstudio.com/og-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HDB & Condo Renovation Singapore | Residential Interior Design | ID Work Studio" />
        <meta name="twitter:description" content="HDB-approved residential renovation and interior design in Singapore. BCA-registered, Woodlands-based. Specialising in HDB, condo and landed property renovations." />
        <meta name="twitter:image" content="https://idworkstudio.com/og-preview.jpg" />

        {/* ================================================ */}
        {/* SCHEMA — Service + FAQPage for rich results      */}
        {/* ================================================ */}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 bg-dark-charcoal text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl mb-8 leading-tight"
            >
              {t('residential_page.hero.title')}
            </motion.h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
              {t('residential_page.hero.subtitle')}
            </p>
            
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl font-sans"
            >
              {t('residential_page.hero.cta')}
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal mb-4">
                {t('residential_page.services.title')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <motion.div
                  key={num}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 shadow-xl border-b-4 border-gold flex flex-col"
                >
                  <h3 className="text-xl font-bold text-dark-charcoal mb-4 font-sans">
                    {t(`residential_page.services.items.${num}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-sans">
                    {t(`residential_page.services.items.${num}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Solutions */}
        <section className="py-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal mb-4">
                {t('residential_page.solutions.title')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="text-center p-8">
                  <h3 className="text-xl font-bold text-dark-charcoal mb-4 font-sans">
                    {t(`residential_page.solutions.items.${num}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">
                    {t(`residential_page.solutions.items.${num}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-off-white relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-12 text-center font-sans">
              {t('residential_page.faq.title')}
            </h2>
            <div className="space-y-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-dark-charcoal mb-3 font-sans">
                    {t(`residential_page.faq.items.${num}.q`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-sans">
                    {t(`residential_page.faq.items.${num}.a`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-dark-charcoal text-white relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 font-sans"
            >
              {t('residential_page.cta.title')}
            </motion.h2>
            <p className="text-white/70 mb-12 text-lg">
              {t('residential_page.cta.subtitle')}
            </p>
            
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl font-sans"
            >
              {t('residential_page.cta.button')}
            </a>
          </div>
        </section>

        {/* Sticky Mobile Footer CTA */}
        <div className="fixed bottom-0 left-0 w-full bg-dark-charcoal/95 backdrop-blur-md border-t border-gold/30 p-4 z-[100] md:hidden">
          
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gold py-4 rounded-full text-dark-charcoal font-bold text-xs uppercase tracking-widest font-sans"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408 0 12.044c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.408 12.052-12.044.002-3.218-1.248-6.242-3.514-8.508z"/>
            </svg>
            {t('residential_page.cta.button')}
          </a>
        </div>
      </div>
    </>
  );
}