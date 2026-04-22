import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, FileCheck, HardHat, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Commercial() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20my%20commercial%20project.`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Renovation & Office Fit-Out Singapore",
    "description": "BCA-registered commercial renovation and office fit-out contractor in Singapore. Specialising in office design, retail fit-outs, F&B renovations, and commercial interior design across Singapore. Based in Woodlands, Singapore.",
    "serviceType": "Commercial Renovation",
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
      "name": "Commercial Renovation Services Singapore",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Fit-Out Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Interior Fit-Out Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "F&B Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Interior Design Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Interior Design Woodlands Singapore" } }
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/commercial"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ['q1','q2','q3','q4','q5','q6'].map(k => ({
      "@type": "Question",
      "name": t(`commercial_page.faq.${k}.q`),
      "acceptedAnswer": { "@type": "Answer", "text": t(`commercial_page.faq.${k}.a`) }
    }))
  };

  return (
    <>
      <Helmet>
        {/* ================================================ */}
        {/* PRIMARY META — updated for AI + local search     */}
        {/* ================================================ */}
        <title>Office Renovation Singapore | Commercial Fit-Out Contractor | ID Work Studio Woodlands</title>
        <meta name="description" content="BCA-registered office renovation and commercial fit-out contractor in Singapore. Serving offices, retail and F&B across Singapore from our Woodlands studio. Turnkey solutions, on-time delivery. Get a free consultation today." />
        <meta name="keywords" content="office renovation Singapore, commercial fit-out Singapore, office interior design Singapore, retail fit-out Singapore, F&B renovation Singapore, BCA registered contractor Singapore, Woodlands renovation contractor, ID Work Studio" />

        {/* Geo tags */}
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />

        {/* Canonical */}
        <link rel="canonical" href="https://idworkstudio.com/commercial" />

        {/* ================================================ */}
        {/* OPEN GRAPH — full set for this page              */}
        {/* ================================================ */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/commercial" />
        <meta property="og:title" content="Office Renovation Singapore | Commercial Fit-Out | ID Work Studio" />
        <meta property="og:description" content="BCA-registered office renovation and commercial fit-out contractor in Singapore. Woodlands-based, serving all of Singapore. Offices, retail, F&B — turnkey solutions." />
        <meta property="og:image" content="https://idworkstudio.com/WALANDING.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Office Renovation Singapore | Commercial Fit-Out | ID Work Studio" />
        <meta name="twitter:description" content="BCA-registered office renovation and commercial fit-out contractor in Singapore. Woodlands-based, serving all of Singapore." />
        <meta name="twitter:image" content="https://idworkstudio.com/WALANDING.jpg" />

        {/* ================================================ */}
        {/* SCHEMA — Service + FAQPage for rich results      */}
        {/* ================================================ */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="bg-off-white min-h-screen">
        {/* Hero Section - Optimized for LCP */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="/gallery/commercial-expertise.png" 
              alt="Modern Bright Singapore Corporate Office Design" 
              className="w-full h-full object-cover object-center opacity-60"
              // Tells the browser to download this PNG immediately
              fetchpriority="high"
              // Prevents main-thread lag during image decompression
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8 md:mt-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title-break text-3xl sm:text-4xl md:text-6xl font-serif mb-6 leading-tight text-white uppercase tracking-tight px-2"
            >
              {t('commercial_page.hero.title')}
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light tracking-wide leading-relaxed px-4"
            >
              {t('commercial_page.hero.subtitle')}
            </motion.h2>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center w-full px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gold text-dark-charcoal text-[11px] md:text-sm uppercase tracking-[0.2em] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-full text-center"
                >
                  {t('commercial_page.hero.cta')}
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  to="/commercial/reinstatement"
                  className="inline-block w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent text-white text-[11px] md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300 font-bold border border-white/50 rounded-full text-center backdrop-blur-sm"
                >
                  {t('commercial_page.hero.cta_reinstatement')}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SERVICE NAVIGATION ── immediately after hero so visitors see it first ── */}
        <section className="bg-dark-charcoal py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-gold/70 mb-3 font-semibold">
                {t('commercial_page.subpages.section_title')}
              </p>
              <p className="text-white/50 text-sm max-w-xl mx-auto">
                {t('commercial_page.subpages.section_subtitle')}
              </p>
            </div>

            {/* 1 col mobile → 2 col sm → 4 col lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                {
                  num: "01",
                  title: t('commercial_page.subpages.office.title'),
                  desc:  t('commercial_page.subpages.office.desc'),
                  link:  "/commercial/office-renovation",
                },
                {
                  num: "02",
                  title: t('commercial_page.subpages.retail.title'),
                  desc:  t('commercial_page.subpages.retail.desc'),
                  link:  "/commercial/retail-mall-renovation",
                },
                {
                  num: "03",
                  title: t('commercial_page.subpages.shophouse.title'),
                  desc:  t('commercial_page.subpages.shophouse.desc'),
                  link:  "/commercial/shophouse-renovation",
                },
                {
                  num: "04",
                  title: t('commercial_page.subpages.compliance.title'),
                  desc:  t('commercial_page.subpages.compliance.desc'),
                  link:  "/commercial/permits-compliance",
                },
              ].map((svc) => (
                <Link
                  key={svc.num}
                  to={svc.link}
                  className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold/40 transition-all duration-300"
                >
                  {/* Number + title row */}
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-gold/40 text-xs font-bold font-sans tracking-wider flex-shrink-0 mt-0.5">
                      {svc.num}
                    </span>
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide leading-snug group-hover:text-gold transition-colors">
                      {svc.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-xs leading-relaxed mb-5 flex-1">
                    {svc.desc}
                  </p>

                  {/* Explicit gold button — clearly tappable on mobile */}
                  <div className="w-full bg-gold text-dark-charcoal rounded-full py-3 text-center text-xs font-bold uppercase tracking-[0.15em] group-hover:bg-gold-hover transition-colors flex items-center justify-center gap-2">
                    {t('commercial_page.subpages.btn')}
                    <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>

            {/* Reinstatement — full-width prominent row */}
            <Link
              to="/commercial/reinstatement"
              className="group flex items-center justify-between w-full border border-gold/30 rounded-2xl px-6 py-5 hover:bg-white/5 hover:border-gold transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-gold/40 text-xs font-bold font-sans tracking-wider">05</span>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold/50 block mb-0.5">
                    {t('commercial_page.subpages.reinstatement_label')}
                  </span>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide group-hover:text-gold transition-colors">
                    {t('commercial_page.subpages.reinstatement_row')}
                  </h3>
                  <p className="text-white/40 text-xs mt-0.5">
                    {t('commercial_page.subpages.reinstatement_detail')}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <ArrowRight size={15} className="text-gold group-hover:text-dark-charcoal transition-colors" />
              </div>
            </Link>

          </div>
        </section>

        {/* ── CLICKABLE SERVICE CARDS ─────────────────────────────
            Replaces old static 3-card grid. Now 4 cards, all Links,
            same images, visually obvious on mobile.
        ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.solutions.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm">{t('commercial_page.subpages.section_subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
                  alt: "Office Renovation Singapore",
                  title: t('commercial_page.subpages.office.title'),
                  desc: t('commercial_page.subpages.office.desc'),
                  detail: t('commercial_page.subpages.office.detail'),
                  link: "/commercial/office-renovation",
                },
                {
                  img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
                  alt: "Retail Mall Store Renovation Singapore",
                  title: t('commercial_page.subpages.retail.title'),
                  desc: t('commercial_page.subpages.retail.desc'),
                  detail: t('commercial_page.subpages.retail.detail'),
                  link: "/commercial/retail-mall-renovation",
                },
                {
                  img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
                  alt: "Shophouse Renovation Singapore",
                  title: t('commercial_page.subpages.shophouse.title'),
                  desc: t('commercial_page.subpages.shophouse.desc'),
                  detail: t('commercial_page.subpages.shophouse.detail'),
                  link: "/commercial/shophouse-renovation",
                },
                {
                  img: "/gallery/commercial-expertise.png",
                  alt: "Commercial Renovation Permits Compliance Singapore",
                  title: t('commercial_page.subpages.compliance.title'),
                  desc: t('commercial_page.subpages.compliance.desc'),
                  detail: t('commercial_page.subpages.compliance.detail'),
                  link: "/commercial/permits-compliance",
                },
              ].map((svc) => (
                <Link
                  key={svc.link}
                  to={svc.link}
                  className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-gold/30 rounded-xl"
                >
                  {/* Image with hover zoom + gold overlay hint */}
                  <div className="relative h-44 overflow-hidden rounded-t-xl">
                    <img
                      src={svc.img}
                      alt={svc.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Dark gradient so the "tap to explore" label is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-gold/90 font-bold font-sans">
                      {svc.detail}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-charcoal text-sm uppercase tracking-wide mb-2 group-hover:text-gold transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
                      {svc.desc}
                    </p>
                    {/* Explicit CTA — the gold button makes it unmistakably clickable on mobile */}
                    <div className="w-full bg-gold text-dark-charcoal rounded-full py-2.5 text-center text-xs font-bold uppercase tracking-[0.15em] group-hover:bg-gold-hover transition-colors flex items-center justify-center gap-1.5">
                      {t('commercial_page.subpages.btn')} <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.trust.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

        {/* Partners Section — NOTE: place Partners_Logo.png in your /public folder */}
        <section className="py-20 bg-off-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif mb-3 text-charcoal">{t('commercial_page.partners.title')}</h2>
            <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">{t('commercial_page.partners.subtitle')}</p>
            <img
              src="/Partners_Logo.png"
              alt="ID Work Studio clients — ST Engineering, Estée Lauder, Simply Toys, Koong Woh Tong, Chiropractic First, Otter Pizza, House of KPOP and more"
              className="w-full max-w-5xl mx-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif mb-3 text-charcoal">{t('commercial_page.process.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">{t('commercial_page.process.subtitle')}</p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-[28px] top-0 bottom-0 w-[1px] bg-gold/20"></div>

              <div className="space-y-0">
                {[1,2,3,4,5].map((n) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: n * 0.08 }}
                    className="flex items-start gap-6 pb-8"
                  >
                    {/* Gold circle with number */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gold rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.2)] relative z-10">
                      <span className="text-dark-charcoal font-bold text-lg font-sans leading-none">0{n}</span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-off-white rounded-xl p-5 border border-gray-100">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-charcoal text-sm uppercase tracking-wide">{t(`commercial_page.process.steps.${n}.title`)}</h3>
                        <span className="text-[10px] text-gold/70 uppercase tracking-[0.15em] font-semibold bg-gold/10 px-2 py-0.5 rounded-full">{t(`commercial_page.process.steps.${n}.detail`)}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{t(`commercial_page.process.steps.${n}.desc`)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Management — retained */}
        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.project_management.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('commercial_page.project_management.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gold">
                <Clock className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">{t('commercial_page.project_management.items.1.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t('commercial_page.project_management.items.1.desc')}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gold">
                <FileCheck className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">{t('commercial_page.project_management.items.2.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t('commercial_page.project_management.items.2.desc')}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gold">
                <CheckCircle className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">{t('commercial_page.project_management.items.3.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t('commercial_page.project_management.items.3.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — 6 questions */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-charcoal">{t('commercial_page.faq.title')}</h2>
            <div className="space-y-5">
              {[
                { n:"q1", icon:<Clock className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" /> },
                { n:"q2", icon:<ShieldCheck className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" /> },
                { n:"q3", icon:<Building2 className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" /> },
                { n:"q4", icon:<FileCheck className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" /> },
                { n:"q5", icon:<HardHat className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" /> },
                { n:"q6", icon:<CheckCircle className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" /> },
              ].map(({ n, icon }) => (
                <div key={n} className="bg-off-white p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-charcoal mb-2 flex items-start gap-3 text-sm md:text-base">
                    {icon}
                    {t(`commercial_page.faq.${n}.q`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8 text-sm" dangerouslySetInnerHTML={{ __html: t(`commercial_page.faq.${n}.a`) }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
               style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 15H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 3V21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3V21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3L21 21" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2"/>
                <path d="M21 3L3 21" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2"/>
              </svg>
            </motion.div>

            <h2 className="text-3xl md:text-5xl mb-8 leading-tight flex flex-col items-center justify-center">
              <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">{t('reinstatement_section.headline_serif')}</span>
              <span className="font-sans font-bold text-gold uppercase tracking-[0.15em]">{t('reinstatement_section.headline_bold')}</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed font-sans">
              {t('reinstatement_section.subtext')}
            </p>

            <Link 
              to="/commercial/reinstatement"
              className="px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-xl hover:shadow-gold/20"
            >
              {t('reinstatement_section.button')}
            </Link>
          </div>
        </section>

        <section id="contact" className="py-20 bg-charcoal text-white text-center scroll-mt-24">
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