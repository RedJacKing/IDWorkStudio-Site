import { Helmet } from 'react-helmet-async';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type StringMap = Record<string, string>;
type PairMap = Record<string, [string, string]>;

export default function ArticleRenovationCost2026() {
  const { t } = useTranslation();
  const tableRows = t('article_renovation_cost_2026.sections.table_rows', { returnObjects: true }) as PairMap;
  const tiers = t('article_renovation_cost_2026.sections.tiers', { returnObjects: true }) as StringMap;
  const overspendItems = t('article_renovation_cost_2026.sections.overspend_items', { returnObjects: true }) as StringMap;
  const budgetCards = t('article_renovation_cost_2026.sections.budget_cards', { returnObjects: true }) as StringMap;
  const expectationItems = t('article_renovation_cost_2026.sections.expectation_items', { returnObjects: true }) as StringMap;

  const renovationFaqs = Object.values(
    t('article_renovation_cost_2026.faq.items', { returnObjects: true }) as Record<string, { q: string; a: string }>
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('article_renovation_cost_2026.title'),
    "description": t('article_renovation_cost_2026.meta.description'),
    "author": { "@type": "Organization", "name": "ID Work Studio" },
    "publisher": {
      "@type": "Organization",
      "name": "ID Work Studio",
      "logo": { "@type": "ImageObject", "url": "https://idworkstudio.com/logo192.png" }
    },
    "datePublished": "2026-04-23",
    "dateModified": "2026-05-03",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/insights/renovation-cost-singapore-2026"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idworkstudio.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://idworkstudio.com/insights" },
      { "@type": "ListItem", "position": 3, "name": t('article_renovation_cost_2026.title'), "item": "https://idworkstudio.com/insights/renovation-cost-singapore-2026" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://idworkstudio.com/insights/renovation-cost-singapore-2026#faq",
    "mainEntity": renovationFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  /* Reusable sub-heading component (gold left border, no numbered badge) */
  const SectionH3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-[1.4rem] font-bold text-charcoal leading-snug mt-12 mb-4 pl-4 border-l-4 border-gold">
      {children}
    </h3>
  );

  /* Reusable section h2 */
  const SectionH2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mt-16 mb-5 pb-4 border-b border-gray-200">
      {children}
    </h2>
  );

  /* Body paragraph */
  const P = ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">{children}</p>
  );

  return (
    <>
      <Helmet>
        <title>{t('article_renovation_cost_2026.meta.title')}</title>
        <meta name="description" content={t('article_renovation_cost_2026.meta.description')} />
        <link rel="canonical" href="https://idworkstudio.com/insights/renovation-cost-singapore-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t('article_renovation_cost_2026.meta.title')} />
        <meta property="og:description" content={t('article_renovation_cost_2026.meta.description')} />
        <meta property="og:url" content="https://idworkstudio.com/insights/renovation-cost-singapore-2026" />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('article_renovation_cost_2026.meta.title')} />
        <meta name="twitter:description" content={t('article_renovation_cost_2026.meta.description')} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="Renovation cost planning in Singapore"
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block py-1 px-4 border border-champagne text-champagne rounded-full text-xs uppercase tracking-[0.25em] mb-5">
              {t('article_renovation_cost_2026.hero_badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-tight">
              {t('article_renovation_cost_2026.title')}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              {t('article_renovation_cost_2026.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold flex-wrap">
              <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-04-23</span>
              <span className="inline-flex items-center gap-2"><Clock3 className="w-4 h-4" />{t('article_renovation_cost_2026.read_time')}</span>
            </div>
          </div>
        </section>

        {/* ── BACK NAV ── */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('article_common.back_to_insights')}
            </a>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Intro lede */}
            <p className="text-xl md:text-2xl text-charcoal font-light leading-relaxed mb-12 pb-10 border-b border-gray-100">
              {t('article_renovation_cost_2026.intro')}
            </p>

            {/* ── COSTS SECTION ── */}
            <SectionH2>{t('article_renovation_cost_2026.sections.costs_title')}</SectionH2>
            <P>{t('article_renovation_cost_2026.sections.costs_intro')}</P>

            {/* Cost table */}
            <div className="overflow-x-auto my-8 rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-off-white">
                    <th className="text-left px-5 py-4 border-b border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs font-bold">
                      {t('article_renovation_cost_2026.sections.table_headers.type')}
                    </th>
                    <th className="text-left px-5 py-4 border-b border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs font-bold">
                      {t('article_renovation_cost_2026.sections.table_headers.budget')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(tableRows).map(([label, value], i) => (
                    <tr key={label} className={i % 2 === 1 ? 'bg-off-white/40' : 'bg-white'}>
                      <td className="px-5 py-3.5 border-b border-gray-100 text-gray-700">{label}</td>
                      <td className="px-5 py-3.5 border-b border-gray-100 text-gray-700 font-medium">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <P>{t('article_renovation_cost_2026.sections.tiers_intro')}</P>
            <ul className="space-y-2 mb-8 pl-1">
              {Object.values(tiers).map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* ── COST DRIVERS ── */}
            <SectionH2>{t('article_renovation_cost_2026.sections.drivers_title')}</SectionH2>
            <P>{t('article_renovation_cost_2026.sections.drivers_intro')}</P>

            {/* Carpentry */}
            <SectionH3>{t('article_renovation_cost_2026.sections.carpentry_title')}</SectionH3>
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-6">
              <img
                src="/images/article1-carpentry.jpg"
                alt="Custom carpentry wardrobe with laminate finish in Singapore renovation"
                className="w-full h-[280px] md:h-[420px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <P>{t('article_renovation_cost_2026.sections.carpentry_p1')}</P>
            <P>{t('article_renovation_cost_2026.sections.carpentry_p2')}</P>
            <P>{t('article_renovation_cost_2026.sections.carpentry_p3')}</P>

            {/* Kitchen */}
            <SectionH3>{t('article_renovation_cost_2026.sections.kitchen_title')}</SectionH3>
            <P>{t('article_renovation_cost_2026.sections.kitchen_p1')}</P>
            <P>{t('article_renovation_cost_2026.sections.kitchen_p2')}</P>
            <P>{t('article_renovation_cost_2026.sections.kitchen_p3')}</P>

            {/* Wet works */}
            <SectionH3>{t('article_renovation_cost_2026.sections.wetworks_title')}</SectionH3>
            <P>{t('article_renovation_cost_2026.sections.wetworks_p1')}</P>

            {/* Tiles */}
            <SectionH3>{t('article_renovation_cost_2026.sections.tiles_title')}</SectionH3>
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-6">
              <img
                src="/images/article1-tiles.jpg"
                alt="Large format tiles 600x1200 used in modern Singapore interior"
                className="w-full h-[280px] md:h-[420px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <P>{t('article_renovation_cost_2026.sections.tiles_p1')}</P>
            <P>{t('article_renovation_cost_2026.sections.tiles_p2')}</P>

            {/* Electrical */}
            <SectionH3>{t('article_renovation_cost_2026.sections.elec_title')}</SectionH3>
            <P>{t('article_renovation_cost_2026.sections.elec_p1')}</P>

            {/* ── BTO VS RESALE ── */}
            <SectionH2>{t('article_renovation_cost_2026.sections.bto_vs_resale_title')}</SectionH2>
            <P>{t('article_renovation_cost_2026.sections.bto_vs_resale_intro')}</P>

            <SectionH3>{t('article_renovation_cost_2026.sections.bto_title')}</SectionH3>
            <P>{t('article_renovation_cost_2026.sections.bto_p1')}</P>

            <SectionH3>{t('article_renovation_cost_2026.sections.resale_title')}</SectionH3>
            <P>{t('article_renovation_cost_2026.sections.resale_p1')}</P>
            <P>{t('article_renovation_cost_2026.sections.resale_p2')}</P>

            {/* Callout box */}
            <div className="bg-off-white rounded-2xl border border-gray-200 p-7 my-10">
              <h3 className="text-lg md:text-xl font-bold text-charcoal mb-3">
                {t('article_renovation_cost_2026.sections.callout_title')}
              </h3>
              <p className="text-gray-600 text-base leading-[1.85] mb-0">
                {t('article_renovation_cost_2026.sections.callout_body')}
              </p>
            </div>

            {/* ── OVERSPEND ── */}
            <SectionH2>{t('article_renovation_cost_2026.sections.overspend_title')}</SectionH2>
            <P>{t('article_renovation_cost_2026.sections.overspend_intro')}</P>
            <ul className="space-y-2 mb-8 pl-1">
              {Object.values(overspendItems).map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* ── BUDGET TIPS ── */}
            <SectionH2>{t('article_renovation_cost_2026.sections.budget_title')}</SectionH2>
            <P>{t('article_renovation_cost_2026.sections.budget_intro')}</P>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {Object.values(budgetCards).map((item) => (
                <div
                  key={item}
                  className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-3 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600 leading-7">{item}</p>
                </div>
              ))}
            </div>
            <P>{t('article_renovation_cost_2026.sections.budget_p2')}</P>

            {/* ── EXPECTATIONS ── */}
            <SectionH2>{t('article_renovation_cost_2026.sections.expectation_title')}</SectionH2>
            <P>{t('article_renovation_cost_2026.sections.expectation_intro')}</P>
            <ul className="space-y-2 mb-8 pl-1">
              {Object.values(expectationItems).map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <P>{t('article_renovation_cost_2026.sections.expectation_p2')}</P>

            {/* ── FINAL ── */}
            <SectionH2>{t('article_renovation_cost_2026.sections.final_title')}</SectionH2>
            <P>{t('article_renovation_cost_2026.sections.final_p1')}</P>
            <P>{t('article_renovation_cost_2026.sections.final_p2')}</P>
            <P>{t('article_renovation_cost_2026.sections.final_p3')}</P>

            {/* ── FAQ ── */}
            <SectionH2>{t('article_renovation_cost_2026.faq.title')}</SectionH2>
            <div className="space-y-3 my-8">
              {renovationFaqs.map((faq, index) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  open={index === 0}
                >
                  <summary className="cursor-pointer list-none text-base font-bold text-charcoal flex items-start justify-between gap-4">
                    <span>{faq.q}</span>
                    <span className="text-gold group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm leading-[1.8] mt-4 mb-0">{faq.a}</p>
                </details>
              ))}
            </div>

            {/* ── RELATED READING (INTERNAL LINKING) ── */}
            <div className="mt-16 rounded-3xl border border-gray-200 bg-off-white p-7 md:p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3">
                {t('article_renovation_cost_2026.internal_links.eyebrow')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5">
                {t('article_renovation_cost_2026.internal_links.title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {t('article_renovation_cost_2026.internal_links.timeline_intro')}{' '}
                <Link
                  to="/insights/hdb-renovation-timeline-singapore"
                  className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors"
                >
                  {t('article_renovation_cost_2026.internal_links.timeline_link')}
                </Link>
                {' '}{t('article_renovation_cost_2026.internal_links.timeline_outro')}
              </p>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {t('article_renovation_cost_2026.internal_links.mistakes_intro')}{' '}
                <Link
                  to="/insights/renovation-mistakes-singapore"
                  className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors"
                >
                  {t('article_renovation_cost_2026.internal_links.mistakes_link')}
                </Link>
                {' '}{t('article_renovation_cost_2026.internal_links.mistakes_outro')}
              </p>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-0">
                {t('article_renovation_cost_2026.internal_links.calculator_intro')}{' '}
                <Link
                  to="/renovation-cost-calculator"
                  className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors"
                >
                  {t('article_renovation_cost_2026.internal_links.calculator_link')}
                </Link>
                {' '}{t('article_renovation_cost_2026.internal_links.calculator_outro')}
              </p>
            </div>

            {/* ── CTA ── */}
            <div className="mt-16 rounded-3xl bg-dark-charcoal p-8 md:p-10 text-white">
              <div className="flex items-start gap-4 mb-5">
                <MessageCircle className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">{t('article_renovation_cost_2026.cta.eyebrow')}</p>
                  <h2 className="text-2xl md:text-4xl font-serif mb-4">{t('article_renovation_cost_2026.cta.title')}</h2>
                  <p className="text-gray-300 text-base leading-[1.8] mb-0">
                    {t('article_renovation_cost_2026.cta.body')}
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20am%20planning%20a%20home%20renovation.%20Can%20you%20help%20me%20review%20a%20realistic%20budget%20from%20my%20floor%20plan%20and%20scope%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.22em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
              >
                {t('article_renovation_cost_2026.cta.button')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* ── NEXT ARTICLE FOOTER ── */}
            <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
                  {t('article_common.next_article')}
                </p>
                <h3 className="text-2xl font-serif text-charcoal">
                  {t('article_renovation_cost_2026.next_title')}
                </h3>
              </div>
              <a
                href="/insights/hdb-renovation-timeline-singapore"
                className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200 whitespace-nowrap"
              >
                {t('article_common.continue_reading')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </article>
      </div>
    </>
  );
}
