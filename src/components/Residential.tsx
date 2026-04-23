import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  Home, Layout, Box, ShieldCheck, TrendingUp, Sparkles,
  CheckCircle, DollarSign, Clock, FileText, Building
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Residential() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20quote%20for%20my%20residential%20renovation.`;
  const whatsappResaleLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20to%20plan%20my%20resale%20HDB%20renovation.`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idworkstudio.com" },
      { "@type": "ListItem", "position": 2, "name": "Residential Renovation Singapore", "item": "https://idworkstudio.com/residential" }
    ]
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Renovation Singapore",
    "description": "HDB-licensed and BCA-registered residential renovation and interior design in Singapore. Specialising in HDB renovation, condo renovation, and landed home interiors across Singapore. Based in Woodlands, Singapore.",
    "serviceType": "Residential Renovation",
    "areaServed": { "@type": "City", "name": "Singapore" },
    "provider": {
      "@type": "LocalBusiness",
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
        "name": "What is the renovation cost for a 4-room BTO flat in 2026?",
        "acceptedAnswer": { "@type": "Answer", "text": "A comprehensive 4-room BTO renovation in Singapore typically ranges from $45,000 to $65,000 in 2026. This covers flooring, painting, plumbing, and custom carpentry for the kitchen and wardrobes. Premium finishes or open-plan hacking can push costs to $75,000+." }
      },
      {
        "@type": "Question",
        "name": "How much does a 3-room or 5-room HDB renovation cost in Singapore?",
        "acceptedAnswer": { "@type": "Answer", "text": "A 3-room BTO renovation typically costs $25,000–$45,000. A 5-room BTO ranges from $50,000–$90,000. Resale flats of any size add 20–40% to the cost due to hacking, rewiring and waterproofing requirements." }
      },
      {
        "@type": "Question",
        "name": "Why does resale HDB renovation cost more than BTO renovation?",
        "acceptedAnswer": { "@type": "Answer", "text": "Resale HDB flats require infrastructure work before aesthetic renovation — including rewiring old electrical systems, replacing corroded pipes, hacking dated tiles, and waterproofing wet areas. These prelim works typically add $8,000–$20,000 to the total cost." }
      },
      {
        "@type": "Question",
        "name": "How can I maximize storage in a small HDB layout?",
        "acceptedAnswer": { "@type": "Answer", "text": "To maximize storage in small HDBs, utilize vertical space with floor-to-ceiling carpentry. Implement smart solutions like platform beds with drawers, hidden storage within feature walls, and extendable dining tables. Japandi designs use concealed cabinetry to maintain a minimalist aesthetic without sacrificing functionality." }
      },
      {
        "@type": "Question",
        "name": "Do I need an HDB permit for renovation works in Singapore?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most HDB renovation works including hacking, tiling, electrical and plumbing require an HDB Renovation Permit before physical work begins. The permit takes 1–3 weeks to approve. As an HDB-licensed firm, ID Work Studio handles all permit submissions on your behalf." }
      },
      {
        "@type": "Question",
        "name": "How long does an HDB renovation take in Singapore?",
        "acceptedAnswer": { "@type": "Answer", "text": "A 4-room BTO renovation typically takes 8–12 weeks from key collection to handover, including permit processing. Resale flat renovations take 10–16 weeks due to additional hacking and infrastructure works." }
      },
      {
        "@type": "Question",
        "name": "What is the HDB renovation loan limit in Singapore?",
        "acceptedAnswer": { "@type": "Answer", "text": "HDB flat owners can borrow up to $30,000 under the HDB Renovation Loan, repayable over up to 5 years. The loan covers licensed renovation works only. Bank renovation loans are available for projects exceeding this limit." }
      },
      {
        "@type": "Question",
        "name": "Why is choosing an HDB-licensed firm important?",
        "acceptedAnswer": { "@type": "Answer", "text": "Choosing an HDB-licensed firm is important because it helps ensure your renovation follows HDB guidelines and structural safety requirements. It also gives homeowners added confidence that works are carried out in line with Singapore’s renovation standards." }
      }
    ]
  };

  const faqIcons: Record<string, React.ReactNode> = {
    '1': <DollarSign className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
    '2': <DollarSign className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
    '3': <Building className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
    '4': <Box className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
    '5': <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
    '6': <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
    '7': <TrendingUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
    '8': <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
  };

  return (
    <>
      <Helmet>
        <title>HDB &amp; Condo Interior Design Singapore | ID Work Studio</title>
        <meta
          name="description"
          content="HDB-licensed and BCA-registered residential interior design and renovation in Singapore. Tailored solutions for BTO, resale flats, condominiums and landed homes."
        />
        <meta
          name="keywords"
          content="HDB renovation Singapore, condo renovation Singapore, BTO renovation Singapore 2026, resale HDB renovation, MOP renovation Singapore 2026, 4-room BTO renovation cost, landed property renovation Singapore, interior design Singapore, ID Work Studio"
        />
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />
        <link rel="canonical" href="https://idworkstudio.com/residential" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/residential" />
        <meta property="og:title" content="HDB & Condo Interior Design Singapore | ID Work Studio" />
        <meta
          property="og:description"
          content="HDB-licensed and BCA-registered residential interior design and renovation in Singapore for BTO, resale, condo and landed homes."
        />
        <meta property="og:image" content="https://idworkstudio.com/WALANDING.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HDB & Condo Interior Design Singapore | ID Work Studio" />
        <meta
          name="twitter:description"
          content="HDB-licensed and BCA-registered residential interior design and renovation in Singapore. Specialising in BTO, resale and condo homes."
        />
        <meta name="twitter:image" content="https://idworkstudio.com/WALANDING.jpg" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
              alt="Refined residential interior design in Singapore by ID Work Studio"
              className="w-full h-full object-cover object-center opacity-60 scale-110"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8 md:mt-12">
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
              className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 leading-tight uppercase tracking-tight"
            >
              {t('residential_page.hero.title')}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
            >
              {t('residential_page.hero.subtitle')}
            </motion.h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.2em] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-full min-w-[200px]"
              >
                {t('residential_page.hero.cta')}
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
                  HDB-Licensed &amp; BCA-Registered Firm
                </span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-8 text-charcoal">
                  {t('residential_page.specialists.title')}
                </h2>

                <div className="space-y-8">
                  {([
                    { icon: <Home size={24} />, key: '1' },
                    { icon: <Layout size={24} />, key: '2' },
                    { icon: <Box size={24} />, key: '3' },
                  ] as const).map(({ icon, key }) => (
                    <div key={key} className="flex group">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-off-white text-gold border border-gold/20 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                          {icon}
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-charcoal uppercase tracking-wider">
                          {t(`residential_page.specialists.items.${key}.title`)}
                        </h3>
                        <p className="mt-2 text-gray-500 leading-relaxed font-sans font-normal">
                          {t(`residential_page.specialists.items.${key}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[500px] group">
                <img
                  src="/gallery/house-renovation.png"
                  alt="Residential interior design in Singapore by ID Work Studio"
                  className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl max-w-xs hidden md:block border-l-4 border-gold">
                  <p className="text-dark-charcoal font-serif text-lg italic leading-relaxed">
                    "{t('residential_page.specialists.testimonial.quote')}"
                  </p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mt-4 font-sans font-bold">
                    {t('residential_page.specialists.testimonial.author')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">{t('residential_page.lifestyle.title')}</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
                {t('residential_page.lifestyle.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {([
                { icon: <Box className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform" />, key: '1' },
                { icon: <TrendingUp className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform" />, key: '2' },
                { icon: <Sparkles className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform" />, key: '3' },
              ] as const).map(({ icon, key }) => (
                <div key={key} className="p-10 border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 group">
                  {icon}
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
                    {t(`residential_page.lifestyle.items.${key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    {t(`residential_page.lifestyle.items.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
                {t('residential_page.pricing.badge')}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6 text-charcoal uppercase tracking-tighter">
                {t('residential_page.pricing.title')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                {t('residential_page.pricing.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                    <Home className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    {t('residential_page.pricing.items.bto3.label')}
                  </span>
                </div>
                <p className="text-3xl font-serif text-charcoal font-bold mb-3">
                  {t('residential_page.pricing.items.bto3.range')}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t('residential_page.pricing.items.bto3.desc')}
                </p>
              </div>

              <div className="bg-dark-charcoal rounded-2xl p-8 shadow-xl border-2 border-gold relative overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-5 right-5 bg-gold text-dark-charcoal text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                  Most Popular
                </div>
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                    <Home className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    {t('residential_page.pricing.items.bto4.label')}
                  </span>
                </div>
                <p className="text-3xl font-serif text-white font-bold mb-3">
                  {t('residential_page.pricing.items.bto4.range')}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('residential_page.pricing.items.bto4.desc')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                    <Home className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    {t('residential_page.pricing.items.bto5.label')}
                  </span>
                </div>
                <p className="text-3xl font-serif text-charcoal font-bold mb-3">
                  {t('residential_page.pricing.items.bto5.range')}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t('residential_page.pricing.items.bto5.desc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                    <Building className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    {t('residential_page.pricing.items.resale.label')}
                  </span>
                </div>
                <p className="text-3xl font-serif text-charcoal font-bold mb-3">
                  {t('residential_page.pricing.items.resale.range')}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t('residential_page.pricing.items.resale.desc')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                    <Layout className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    {t('residential_page.pricing.items.condo.label')}
                  </span>
                </div>
                <p className="text-3xl font-serif text-charcoal font-bold mb-3">
                  {t('residential_page.pricing.items.condo.range')}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t('residential_page.pricing.items.condo.desc')}
                </p>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                ⚠️ {t('residential_page.pricing.note')}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-block px-8 py-4 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.2em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full whitespace-nowrap"
              >
                {t('residential_page.pricing.cta')}
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-charcoal uppercase tracking-tighter">
                {t('residential_page.timeline.title')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                {t('residential_page.timeline.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(['1', '2', '3'] as const).map((key) => {
                const icons: Record<string, React.ReactNode> = {
                  '1': <FileText className="w-6 h-6 text-gold" />,
                  '2': <Clock className="w-6 h-6 text-gold" />,
                  '3': <CheckCircle className="w-6 h-6 text-gold" />,
                };

                return (
                  <div
                    key={key}
                    className="bg-off-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                      {icons[key]}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal uppercase tracking-wide mb-3">
                      {t(`residential_page.timeline.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {t(`residential_page.timeline.items.${key}.desc`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-off-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-charcoal uppercase tracking-tighter">
                {t('residential_page.mistakes.title')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                {t('residential_page.mistakes.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(['1', '2', '3'] as const).map((key) => {
                const icons: Record<string, React.ReactNode> = {
                  '1': <DollarSign className="w-6 h-6 text-gold" />,
                  '2': <Layout className="w-6 h-6 text-gold" />,
                  '3': <ShieldCheck className="w-6 h-6 text-gold" />,
                };

                return (
                  <div
                    key={key}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                      {icons[key]}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal uppercase tracking-wide mb-3">
                      {t(`residential_page.mistakes.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {t(`residential_page.mistakes.items.${key}.desc`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[540px] group order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2000&auto=format&fit=crop"
                  alt="Resale HDB kitchen design in Singapore by ID Work Studio"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute -top-5 -right-4 md:-right-8 bg-gold text-dark-charcoal p-5 md:p-6 rounded-2xl shadow-xl">
                  <p className="text-2xl md:text-3xl font-bold font-serif leading-none">13,480</p>
                  <p className="text-[10px] uppercase tracking-widest mt-1 font-bold leading-tight">
                    MOP Flats<br />in 2026
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block py-1 px-4 bg-gold/10 border border-gold/30 text-gold rounded-full text-xs uppercase tracking-widest mb-5 font-bold">
                  {t('residential_page.resale.badge')}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-6 text-charcoal uppercase tracking-tighter leading-tight">
                  {t('residential_page.resale.title')}
                </h2>
                <p className="text-gray-500 mb-10 leading-relaxed text-lg font-light">
                  {t('residential_page.resale.subtitle')}
                </p>

                <div className="space-y-6">
                  {['1', '2', '3'].map((n) => (
                    <div key={n} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal uppercase tracking-wide text-sm mb-1">
                          {t(`residential_page.resale.points.${n}.title`)}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {t(`residential_page.resale.points.${n}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappResaleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-10 px-10 py-5 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.2em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
                >
                  {t('residential_page.resale.cta')}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-off-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-charcoal uppercase tracking-tighter">
                {t('residential_page.faq_section.title')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-xl mx-auto font-light">
                {t('residential_page.faq_section.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(['1', '2', '3', '4', '5', '6', '7', '8'] as const).map((key) => (
                <div
                  key={key}
                  className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-gold hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-charcoal uppercase tracking-tight text-sm mb-3 flex items-start gap-3">
                    {faqIcons[key]}
                    <span>{t(`residential_page.faq_section.items.${key}.q`)}</span>
                  </h3>
                  <p
                    className="text-gray-500 text-sm leading-relaxed pl-8"
                    dangerouslySetInnerHTML={{ __html: t(`residential_page.faq_section.items.${key}.a`) }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 uppercase tracking-tighter">
                {t('residential_page.testimonials.title')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-xl mx-auto font-light">
                {t('residential_page.testimonials.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(['1', '2', '3'] as const).map((key) => (
                <div
                  key={key}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-gold text-lg tracking-widest">★★★★★</p>
                    <span className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold">
                        {t('residential_page.testimonials.verified')}
                      </span>
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic flex-1">
                    "{t(`residential_page.testimonials.items.${key}.quote`)}"
                  </p>

                  <div className="border-t border-white/10 pt-5">
                    <p className="font-bold text-white text-sm uppercase tracking-wider">
                      {t(`residential_page.testimonials.items.${key}.name`)}
                    </p>
                    <p className="text-gold text-[10px] mt-1 uppercase tracking-widest leading-relaxed">
                      {t(`residential_page.testimonials.items.${key}.flat`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.google.com/maps/search/?api=1&query=ID+Work+Studio+Woodlands+Singapore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                View all reviews on Google
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 bg-dark-charcoal text-white text-center scroll-mt-24 relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 uppercase tracking-tighter">
              {t('residential_page.cta.title')}
            </h2>
            <p className="text-gray-400 mb-12 text-lg font-light tracking-wide italic">
              {t('residential_page.cta.subtitle')}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.3em] hover:bg-gold-hover hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 font-bold rounded-full"
            >
              {t('residential_page.cta.button')}
            </a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
        </section>
      </div>
    </>
  );
}
