import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, FileCheck, Flame, Zap, ClipboardCheck, Layout, Droplets, Search, FileText, Hammer, CheckCircle2 } from 'lucide-react';

export default function Reinstatement() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20site%20survey%20for%20reinstatement.`;

  return (
    <>
      <Helmet>
        {/* ================================================ */}
        {/* PRIMARY META — updated for AI + local search     */}
        {/* ================================================ */}
        <title>Office Reinstatement Singapore | BCA & HDB Compliant Handover | ID Work Studio Woodlands</title>
        <meta name="description" content="Professional office and commercial reinstatement in Singapore. BCA & HDB compliant, SCDF approved. 100% deposit-back guarantee. Serving offices and malls across Singapore from our Woodlands studio. Get a free site survey today." />
        <meta name="keywords" content="office reinstatement Singapore, commercial reinstatement Singapore, BCA reinstatement Singapore, HDB reinstatement Singapore, mall handover Singapore, office handover contractor Singapore, Woodlands contractor Singapore, ID Work Studio" />

        {/* Geo tags */}
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />

        {/* Canonical */}
        <link rel="canonical" href="https://idworkstudio.com/reinstatement" />

        {/* ================================================ */}
        {/* OPEN GRAPH                                       */}
        {/* ================================================ */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/reinstatement" />
        <meta property="og:title" content="Office Reinstatement Singapore | BCA & HDB Compliant | ID Work Studio" />
        <meta property="og:description" content="Professional office and commercial reinstatement in Singapore. BCA & HDB compliant, SCDF approved. 100% deposit-back guarantee. Based in Woodlands, serving all of Singapore." />
        <meta property="og:image" content="https://idworkstudio.com/og-preview.jpg" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Office Reinstatement Singapore | BCA & HDB Compliant | ID Work Studio" />
        <meta name="twitter:description" content="Professional office and commercial reinstatement in Singapore. BCA & HDB compliant, SCDF approved. 100% deposit-back guarantee. Based in Woodlands, serving all of Singapore." />
        <meta name="twitter:image" content="https://idworkstudio.com/og-preview.jpg" />

        {/* ================================================ */}
        {/* SCHEMA — Service page specific                   */}
        {/* ================================================ */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Office Reinstatement Singapore",
            "description": "Professional BCA and HDB compliant office and commercial reinstatement services in Singapore. We handle full strip-out, SCDF fire protection, M&E works, and bare shell handover for offices and shopping malls across Singapore.",
            "serviceType": "Office Reinstatement",
            "areaServed": {
              "@type": "City",
              "name": "Singapore"
            },
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
              "name": "Reinstatement Services Singapore",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Reinstatement Singapore" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Reinstatement Singapore" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mall Unit Reinstatement Singapore" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "BCA Compliant Reinstatement Singapore" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HDB Commercial Reinstatement Singapore" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Bare Shell Handover Singapore" } }
              ]
            }
          }
        `}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">
        {/* Architectural Grid Background Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>

        {/* Hero Header - Optimized for LCP Speed */}
        <section className="relative pt-40 pb-24 bg-dark-charcoal text-white overflow-hidden">
          {/* Background image container for reinstatement Hero */}
          <div className="absolute inset-0 z-0">
             <img 
              src="/gallery/reinstatement-expertise.png" 
              alt="Singapore Commercial Office Reinstatement and Bare Shell Handover" 
              className="w-full h-full object-cover object-center opacity-60"
              // Essential for fixing the 6.2s LCP score
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex justify-center"
            >
              {/* Gold-line Architectural Vector Icon */}
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 15H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 3V21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3V21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3L21 21" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2"/>
                <path d="M21 3L3 21" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1"/>
              </svg>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl mb-8 leading-tight flex flex-col items-center justify-center"
            >
              <span className="font-serif italic font-light text-white mb-2 uppercase tracking-tight">{t('reinstatement_page.hero.headline_serif')}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-[0.2em]">{t('reinstatement_page.hero.headline_bold')}</span>
            </motion.h1>
          </div>
        </section>

        {/* Trust Badges Bar */}
        <div className="bg-gold py-4 relative z-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-dark-charcoal font-bold text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} /> {t('reinstatement_page.trust.bca')}
            </div>
            <div className="flex items-center gap-2">
              <FileCheck size={16} /> {t('reinstatement_page.trust.hdb')}
            </div>
            <div className="flex items-center gap-2">
              <Flame size={16} /> {t('reinstatement_page.trust.scdf')}
            </div>
          </div>
        </div>

        {/* Challenges vs Solutions Section */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{t('reinstatement_page.challenges.title_serif')}</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">{t('reinstatement_page.challenges.title_bold')}</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <motion.div 
                  key={num}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 shadow-xl border-b-4 border-gold group flex flex-col items-center text-center"
                >
                  <div className="mb-8 text-gold flex justify-center">
                    {num === 1 && <ClipboardCheck size={48} strokeWidth={1} />}
                    {num === 2 && <Layout size={48} strokeWidth={1} />}
                    {num === 3 && <Droplets size={48} strokeWidth={1} />}
                  </div>
                  <div className="mb-6 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-sans">{t('reinstatement_page.challenges.title_serif')}</span>
                    <h3 className="text-xl font-bold text-dark-charcoal uppercase font-sans leading-tight">{t(`reinstatement_page.challenges.items.${num}.pain`)}</h3>
                  </div>
                  <div className="pt-6 border-t border-gray-100 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold block mb-2 font-sans">Our Solution</span>
                    <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">
                      {t(`reinstatement_page.challenges.items.${num}.solution`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Static Trust Row (Performance Optimized) */}
        <section className="py-12 bg-white border-y border-gray-100 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-serif italic text-dark-charcoal/40 text-lg md:text-xl tracking-wide">
              {t('reinstatement_page.trust_row.text')}
            </p>
          </div>
        </section>

        {/* Process Roadmap Section */}
        <section className="py-24 relative z-10 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-white/60 text-2xl mb-2">{t('reinstatement_page.process.title_serif')}</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">{t('reinstatement_page.process.title_bold')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[32px] left-0 w-full h-[1px] bg-gold/20 z-0"></div>
              
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(197,160,89,0.3)] group hover:scale-110 transition-transform relative">
                    {step === 1 && <Search className="text-dark-charcoal" size={24} />}
                    {step === 2 && <FileText className="text-dark-charcoal" size={24} />}
                    {step === 3 && <Hammer className="text-dark-charcoal" size={24} />}
                    {step === 4 && <CheckCircle2 className="text-dark-charcoal" size={24} />}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-charcoal text-gold rounded-full flex items-center justify-center text-[10px] font-bold font-sans border border-gold/50">0{step}</div>
                  </div>
                  <div className="w-full min-h-[3.5rem] flex items-center justify-center mb-4">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wider text-gold font-sans leading-tight">
                      {t(`reinstatement_page.process.steps.${step}.title`)}
                    </h4>
                  </div>
                  <div className="w-full min-h-[4rem] flex flex-col items-center">
                    <p className="text-white/90 text-sm leading-relaxed font-sans font-normal max-w-[200px]">
                      {t(`reinstatement_page.process.steps.${step}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-white relative z-10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl mb-12 flex flex-col items-center justify-center gap-2"
            >
              <span className="font-serif italic text-dark-charcoal">{t('reinstatement_page.footer.headline_serif')}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">{t('reinstatement_page.footer.headline_bold')}</span>
            </motion.h2>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans"
            >
              {t('reinstatement_page.footer.whatsapp_btn')}
            </a>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-gold/10 translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* Sticky Mobile Footer CTA */}
        <div className="fixed bottom-0 left-0 w-full bg-dark-charcoal/95 backdrop-blur-md border-t border-gold/30 p-4 z-[100] md:hidden">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gold py-4 rounded-full text-dark-charcoal font-bold text-xs uppercase tracking-widest font-sans"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408 0 12.044c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.408 12.052-12.044.002-3.218-1.248-6.242-3.514-8.508z"/>
            </svg>
            {t('reinstatement_page.sticky_footer.text')}
          </a>
        </div>
      </div>
    </>
  );
}