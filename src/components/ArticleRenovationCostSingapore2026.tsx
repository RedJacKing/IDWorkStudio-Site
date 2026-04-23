import { Helmet } from 'react-helmet-async';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    "dateModified": "2026-04-23",
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
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
            <img src="/images/insights-hero.jpg" alt="Renovation cost planning in Singapore" className="w-full h-full object-cover object-center opacity-55 scale-105" fetchPriority="high" decoding="async" />
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

        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="/insights" className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200">
              <ArrowLeft className="w-4 h-4" />
              {t('article_common.back_to_insights')}
            </a>
          </div>
        </section>

        <article className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none 
prose-headings:font-serif 
prose-headings:text-charcoal 
prose-p:text-gray-600 
prose-p:leading-relaxed 
prose-p:mb-6 
prose-strong:text-charcoal 
prose-li:text-gray-600 
prose-li:leading-relaxed 
prose-li:mb-2">
              <p className="text-xl md:text-2xl text-charcoal font-light leading-relaxed !mb-10">{t('article_renovation_cost_2026.intro')}</p>

              <h2>{t('article_renovation_cost_2026.sections.costs_title')}</h2>
              <p>{t('article_renovation_cost_2026.sections.costs_intro')}</p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-off-white">
                      <th className="text-left px-4 py-3 border border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs">{t('article_renovation_cost_2026.sections.table_headers.type')}</th>
                      <th className="text-left px-4 py-3 border border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs">{t('article_renovation_cost_2026.sections.table_headers.budget')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(tableRows).map(([label, value], i) => (
                      <tr key={label} className={i % 2 === 1 ? 'bg-off-white/40' : ''}>
                        <td className="px-4 py-3 border border-gray-200">{label}</td>
                        <td className="px-4 py-3 border border-gray-200">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>{t('article_renovation_cost_2026.sections.tiers_intro')}</p>
              <ul>{Object.values(tiers).map((item) => <li key={item}>{item}</li>)}</ul>

              <h2>{t('article_renovation_cost_2026.sections.drivers_title')}</h2>
              <p>{t('article_renovation_cost_2026.sections.drivers_intro')}</p>

              <h3>{t('article_renovation_cost_2026.sections.carpentry_title')}</h3>
              <img src="/images/article1-carpentry.jpg" alt="Custom carpentry wardrobe with laminate finish in Singapore renovation" className="my-8 rounded-xl w-full" loading="lazy" decoding="async" />
              <p>{t('article_renovation_cost_2026.sections.carpentry_p1')}</p>
              <p>{t('article_renovation_cost_2026.sections.carpentry_p2')}</p>
              <p>{t('article_renovation_cost_2026.sections.carpentry_p3')}</p>

              <h3>{t('article_renovation_cost_2026.sections.kitchen_title')}</h3>
              <p>{t('article_renovation_cost_2026.sections.kitchen_p1')}</p>
              <p>{t('article_renovation_cost_2026.sections.kitchen_p2')}</p>
              <p>{t('article_renovation_cost_2026.sections.kitchen_p3')}</p>

              <h3>{t('article_renovation_cost_2026.sections.wetworks_title')}</h3>
              <p>{t('article_renovation_cost_2026.sections.wetworks_p1')}</p>

              <h3>{t('article_renovation_cost_2026.sections.tiles_title')}</h3>
              <img src="/images/article1-tiles.jpg" alt="Large format tiles 600x1200 used in modern Singapore interior" className="my-8 rounded-xl w-full" loading="lazy" decoding="async" />
              <p>{t('article_renovation_cost_2026.sections.tiles_p1')}</p>
              <p>{t('article_renovation_cost_2026.sections.tiles_p2')}</p>

              <h3>{t('article_renovation_cost_2026.sections.elec_title')}</h3>
              <p>{t('article_renovation_cost_2026.sections.elec_p1')}</p>

              <h2>{t('article_renovation_cost_2026.sections.bto_vs_resale_title')}</h2>
              <p>{t('article_renovation_cost_2026.sections.bto_vs_resale_intro')}</p>

              <h3>{t('article_renovation_cost_2026.sections.bto_title')}</h3>
              <p>{t('article_renovation_cost_2026.sections.bto_p1')}</p>

              <h3>{t('article_renovation_cost_2026.sections.resale_title')}</h3>
              <p>{t('article_renovation_cost_2026.sections.resale_p1')}</p>
              <p>{t('article_renovation_cost_2026.sections.resale_p2')}</p>

              <div className="bg-off-white rounded-2xl border border-gray-100 p-8 my-10">
                <h3 className="!mt-0">{t('article_renovation_cost_2026.sections.callout_title')}</h3>
                <p className="!mb-0">{t('article_renovation_cost_2026.sections.callout_body')}</p>
              </div>

              <h2>{t('article_renovation_cost_2026.sections.overspend_title')}</h2>
              <p>{t('article_renovation_cost_2026.sections.overspend_intro')}</p>
              <ul>{Object.values(overspendItems).map((item) => <li key={item}>{item}</li>)}</ul>

              <h2>{t('article_renovation_cost_2026.sections.budget_title')}</h2>
              <p>{t('article_renovation_cost_2026.sections.budget_intro')}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
                {Object.values(budgetCards).map((item) => (
                  <div key={item} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 leading-7 mb-0">{item}</p>
                  </div>
                ))}
              </div>

              <p>{t('article_renovation_cost_2026.sections.budget_p2')}</p>

              <h2>{t('article_renovation_cost_2026.sections.expectation_title')}</h2>
              <p>{t('article_renovation_cost_2026.sections.expectation_intro')}</p>
              <ul>{Object.values(expectationItems).map((item) => <li key={item}>{item}</li>)}</ul>
              <p>{t('article_renovation_cost_2026.sections.expectation_p2')}</p>

              <h2>{t('article_renovation_cost_2026.sections.final_title')}</h2>
              <p>{t('article_renovation_cost_2026.sections.final_p1')}</p>
              <p>{t('article_renovation_cost_2026.sections.final_p2')}</p>
              <p>{t('article_renovation_cost_2026.sections.final_p3')}</p>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">{t('article_common.next_article')}</p>
                <h3 className="text-2xl font-serif text-charcoal">{t('article_renovation_cost_2026.next_title')}</h3>
              </div>
              <a href="/insights/hdb-renovation-timeline-singapore" className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200">
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
