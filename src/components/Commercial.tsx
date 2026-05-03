import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, FileCheck, HardHat, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Commercial() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20my%20commercial%20project.`;

  const faqIconMap = [Clock, Building2, Clock, ShieldCheck, FileCheck, HardHat, CheckCircle, FileCheck, Building2, HardHat, CheckCircle, ShieldCheck];

  const commercialFaqs = Array.from({ length: 12 }, (_, index) => {
    const Icon = faqIconMap[index];
    const key = `commercial_page.faq.q${index + 1}`;
    return {
      q: t(`${key}.q`),
      a: t(`${key}.a`),
      icon: <Icon className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />,
    };
  });

  const stripHtmlForSchema = (html: string) =>
    html
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .trim();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Renovation Singapore | Office Renovation Contractor",
    "description": "BCA-registered commercial renovation and office renovation services in Singapore. Practical cost guidance, timeline planning, landlord and MCST coordination, SCDF-aware renovation support, office fit-out, retail renovation and F&B renovation.",
    "serviceType": "Commercial Renovation",
    "areaServed": {
      "@type": "City",
      "name": "Singapore"
    },
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
    "mainEntity": commercialFaqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": stripHtmlForSchema(item.a) }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Commercial Renovation Singapore | Office Renovation Contractor | ID Work Studio</title>
        <meta
          name="description"
          content="Commercial renovation Singapore guide by ID Work Studio. Office renovation, retail fit-out and F&B renovation cost, timeline, process, landlord approval, MCST and SCDF-aware renovation support."
        />
        <meta
          name="keywords"
          content="commercial renovation Singapore, office renovation Singapore, office renovation contractor Singapore, commercial contractor Singapore, retail renovation Singapore, F&B renovation Singapore, commercial fit-out Singapore, BCA registered renovation company Singapore, ID Work Studio"
        />

        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />

        <link rel="canonical" href="https://idworkstudio.com/commercial" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/commercial" />
        <meta property="og:title" content="Commercial Renovation Singapore | Office Renovation Contractor | ID Work Studio" />
        <meta
          property="og:description"
          content="BCA-registered commercial renovation services in Singapore for offices, retail shops and F&B spaces. Includes cost guidance, timeline, approval process and practical contractor advice."
        />
        <meta property="og:image" content="https://idworkstudio.com/WALANDING.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Renovation Singapore | Office Renovation Contractor | ID Work Studio" />
        <meta
          name="twitter:description"
          content="Commercial renovation Singapore guide for offices, retail spaces and F&B environments. Cost, timeline, landlord approval and contractor process."
        />
        <meta name="twitter:image" content="https://idworkstudio.com/WALANDING.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="bg-off-white min-h-screen">
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/gallery/commercial-expertise.png"
              alt="Refined commercial interior design and office fit-out in Singapore"
              className="w-full h-full object-cover object-center opacity-60"
              fetchpriority="high"
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

        <section className="py-16 md:py-20 bg-off-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
              <div className="bg-white rounded-2xl p-7 md:p-10 border border-gray-100 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-bold mb-4">{t('commercial_page.direct_answer.eyebrow')}</p>
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-5 leading-tight">{t('commercial_page.direct_answer.title')}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <span dangerouslySetInnerHTML={{ __html: t('commercial_page.direct_answer.p1') }} />
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('commercial_page.direct_answer.p2')}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {[1, 2, 3].map((n) => {
                  const item = {
                    label: t(`commercial_page.direct_answer.cards.${n}.label`),
                    range: t(`commercial_page.direct_answer.cards.${n}.range`),
                    note: t(`commercial_page.direct_answer.cards.${n}.note`),
                  };
                  return (
                  <div key={item.label} className="bg-charcoal text-white rounded-2xl p-6 border border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gold font-bold mb-2">{item.label}</p>
                    <p className="text-2xl font-serif mb-2">{item.range}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.note}</p>
                  </div>
                );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.cost_breakdown.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">{t('commercial_page.cost_breakdown.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => {
                const item = {
                  title: t(`commercial_page.cost_breakdown.items.${n}.title`),
                  cost: t(`commercial_page.cost_breakdown.items.${n}.cost`),
                  points: [1, 2, 3].map((point) => t(`commercial_page.cost_breakdown.items.${n}.points.${point}`)),
                };
                return (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-off-white p-6 hover:border-gold/40 transition-colors">
                  <h3 className="font-bold text-charcoal text-lg mb-2">{item.title}</h3>
                  <p className="text-2xl font-serif text-gold mb-4">{item.cost}</p>
                  <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" /> <span>{point}</span></li>
                    ))}
                  </ul>
                </div>
              );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-6 md:p-8">
              <h3 className="font-serif text-2xl text-charcoal mb-3">{t('commercial_page.cost_breakdown.retail_fnb.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: t('commercial_page.cost_breakdown.retail_fnb.body') }} />
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-off-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.timeline_guide.title')}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{t('commercial_page.timeline_guide.subtitle')}</p>
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => {
                    const item = {
                      step: `0${n}`,
                      title: t(`commercial_page.timeline_guide.steps.${n}.title`),
                      time: t(`commercial_page.timeline_guide.steps.${n}.time`),
                      desc: t(`commercial_page.timeline_guide.steps.${n}.desc`),
                    };
                    return (
                    <div key={item.step} className="flex gap-5 bg-white rounded-2xl p-5 border border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gold text-dark-charcoal flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-bold text-charcoal">{item.title}</h3>
                          <span className="text-[10px] text-gold uppercase tracking-[0.15em] font-semibold bg-gold/10 px-2 py-0.5 rounded-full">{item.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                  })}
                </div>
              </div>

              <div className="bg-charcoal rounded-2xl p-7 md:p-9 text-white self-start">
                <h3 className="font-serif text-3xl mb-5">{t('commercial_page.timeline_guide.approval_title')}</h3>
                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                  {[1, 2, 3, 4, 5].map((n) => {
                    const item = t(`commercial_page.timeline_guide.approval_items.${n}`);
                    return (
                    <div key={item} className="flex gap-3"><FileCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" /> <span>{item}</span></div>
                  );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-bold mb-4">{t('commercial_page.content_cluster.eyebrow')}</p>
                <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.content_cluster.title')}</h2>
                <p className="text-gray-600 leading-relaxed">{t('commercial_page.content_cluster.body')}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/insights/commercial-renovation-cost-singapore" className="group rounded-2xl border border-gray-100 bg-off-white p-6 hover:border-gold/40 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gold font-bold mb-2">{t('commercial_page.content_cluster.cost_card.eyebrow')}</p>
                  <h3 className="font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">{t('commercial_page.content_cluster.cost_card.title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('commercial_page.content_cluster.cost_card.desc')}</p>
                </Link>
                <Link to="/insights/office-renovation-timeline-singapore" className="group rounded-2xl border border-gray-100 bg-off-white p-6 hover:border-gold/40 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gold font-bold mb-2">{t('commercial_page.content_cluster.timeline_card.eyebrow')}</p>
                  <h3 className="font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">{t('commercial_page.content_cluster.timeline_card.title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('commercial_page.content_cluster.timeline_card.desc')}</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                  alt: "Office interior design Singapore",
                  title: t('commercial_page.subpages.office.title'),
                  desc: t('commercial_page.subpages.office.desc'),
                  detail: t('commercial_page.subpages.office.detail'),
                  link: "/commercial/office-renovation",
                },
                {
                  img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
                  alt: "Retail interior fit-out Singapore",
                  title: t('commercial_page.subpages.retail.title'),
                  desc: t('commercial_page.subpages.retail.desc'),
                  detail: t('commercial_page.subpages.retail.detail'),
                  link: "/commercial/retail-mall-renovation",
                },
                {
                  img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
                  alt: "Shophouse interior renovation Singapore",
                  title: t('commercial_page.subpages.shophouse.title'),
                  desc: t('commercial_page.subpages.shophouse.desc'),
                  detail: t('commercial_page.subpages.shophouse.detail'),
                  link: "/commercial/shophouse-renovation",
                },
                {
                  img: "/gallery/commercial-expertise.png",
                  alt: "Commercial permits and compliance Singapore",
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
                  <div className="relative h-44 overflow-hidden rounded-t-xl">
                    <img
                      src={svc.img}
                      alt={svc.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/70 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-charcoal text-sm uppercase tracking-wide mb-2 group-hover:text-gold transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
                      {svc.desc}
                    </p>
                    <div className="w-full bg-gold text-dark-charcoal rounded-full py-2.5 text-center text-xs font-bold uppercase tracking-[0.15em] group-hover:bg-gold-hover transition-colors flex items-center justify-center gap-1.5">
                      {t('commercial_page.subpages.btn')} <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

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

        <section className="py-20 bg-off-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif mb-3 text-charcoal">{t('commercial_page.partners.title')}</h2>
            <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">{t('commercial_page.partners.subtitle')}</p>
            <img
              src="/Partners_Logo.png"
              alt="ID Work Studio clients including ST Engineering, Estée Lauder, Simply Toys, Koong Woh Tong, Chiropractic First, Otter Pizza and House of KPOP"
              className="w-full max-w-5xl mx-auto"
              loading="lazy"
            />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif mb-3 text-charcoal">{t('commercial_page.process.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">{t('commercial_page.process.subtitle')}</p>
            </div>

            <div className="relative">
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
                    <div className="flex-shrink-0 w-14 h-14 bg-gold rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.2)] relative z-10">
                      <span className="text-dark-charcoal font-bold text-lg font-sans leading-none">0{n}</span>
                    </div>
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

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">{t('commercial_page.faq.title')}</h2>
              <div className="w-24 h-1 bg-champagne mx-auto mb-4"></div>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">{t('commercial_page.faq.subtitle')}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {commercialFaqs.map((item) => (
                <div key={item.q} className="bg-off-white p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-charcoal mb-2 flex items-start gap-3 text-sm md:text-base">
                    {item.icon}
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8 text-sm">{item.a}</p>
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