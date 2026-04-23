import { Helmet } from 'react-helmet-async';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

import { useTranslation } from 'react-i18next';

type StringMap = Record<string, string>;
type PairMap = Record<string, [string, string]>;


export default function ArticleHDBTimeline() {
  const { t } = useTranslation();
  const durationItems = t('article_hdb_timeline.sections.duration_items', { returnObjects: true }) as StringMap;
  const phases = t('article_hdb_timeline.sections.phases', { returnObjects: true }) as Record<string, {title: string; desc: string;}>;
  const avoidItems = t('article_hdb_timeline.sections.avoid_items', { returnObjects: true }) as StringMap;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('article_hdb_timeline.title'),
    "description": t('article_hdb_timeline.meta.description'),
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
      "@id": "https://idworkstudio.com/insights/hdb-renovation-timeline-singapore"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idworkstudio.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://idworkstudio.com/insights" },
      { "@type": "ListItem", "position": 3, "name": t('article_hdb_timeline.title'), "item": "https://idworkstudio.com/insights/hdb-renovation-timeline-singapore" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t('article_hdb_timeline.meta.title')}</title>
        <meta name="description" content={t('article_hdb_timeline.meta.description')} />
        <link rel="canonical" href="https://idworkstudio.com/insights/hdb-renovation-timeline-singapore" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t('article_hdb_timeline.meta.title')} />
        <meta property="og:description" content={t('article_hdb_timeline.meta.description')} />
        <meta property="og:url" content="https://idworkstudio.com/insights/hdb-renovation-timeline-singapore" />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('article_hdb_timeline.meta.title')} />
        <meta name="twitter:description" content={t('article_hdb_timeline.meta.description')} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white pt-28 pb-20">
          <div className="absolute inset-0 z-0">
            <img src="/images/insights-hero.jpg" alt="HDB renovation planning timeline in Singapore" className="w-full h-full object-cover object-center opacity-55 scale-105" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 max-w-4xl text-center px-4">
            <span className="text-xs tracking-[0.25em] uppercase border px-4 py-1 mb-5 inline-block">{t('article_hdb_timeline.hero_badge')}</span>
            <h1 className="text-4xl md:text-6xl font-serif uppercase mb-6">{t('article_hdb_timeline.title')}</h1>
            <p className="text-lg text-gray-200">{t('article_hdb_timeline.subtitle')}</p>

            <div className="flex justify-center gap-6 mt-6 text-xs uppercase">
              <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-04-23</span>
              <span className="flex items-center gap-2"><Clock3 className="w-4 h-4" />{t('article_hdb_timeline.read_time')}</span>
            </div>
          </div>
        </section>

        <section className="py-8 border-b bg-white border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="/insights" className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200">
              <ArrowLeft className="w-4 h-4" />
              {t('article_common.back_to_insights')}
            </a>
          </div>
        </section>

        <article className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none 
prose-headings:font-serif 
prose-headings:text-charcoal 
prose-h2:mt-16 
prose-h2:mb-7 
prose-h2:border-t 
prose-h2:border-gray-200 
prose-h2:pt-8 
prose-h2:text-3xl 
prose-h2:font-semibold 
prose-h2:leading-tight 
prose-h3:mt-12 
prose-h3:mb-5 
prose-h3:text-[1.7rem] 
prose-h3:font-semibold 
prose-h3:leading-snug 
prose-p:text-gray-600 
prose-p:leading-relaxed 
prose-p:mb-6 
prose-strong:text-charcoal 
prose-li:text-gray-600 
prose-li:leading-relaxed 
prose-li:mb-2
prose-img:my-10 
prose-img:rounded-2xl 
prose-img:border 
prose-img:border-gray-100 
prose-img:shadow-sm">
              <h2>{t('article_hdb_timeline.sections.duration_title')}</h2>
              <p>{t('article_hdb_timeline.sections.duration_intro')}</p>
              <ul>{Object.values(durationItems).map((item) => <li key={item}>{item}</li>)}</ul>
              <p>{t('article_hdb_timeline.sections.duration_p2')}</p>

              <h2>{t('article_hdb_timeline.sections.breakdown_title')}</h2>
              <img src="/images/article2-gantt.jpg" alt="Renovation Gantt chart showing sequencing of works in Singapore renovation" className="my-10 rounded-2xl w-full border border-gray-100 shadow-sm" loading="lazy" decoding="async" />
              {Object.values(phases).map((phase) => (
                <div key={phase.title}>
                  <h3>{phase.title}</h3>
                  <p>{phase.desc}</p>
                </div>
              ))}

              <h2>{t('article_hdb_timeline.sections.movein_title')}</h2>
              <p>{t('article_hdb_timeline.sections.movein_p1')}</p>

              <h2>{t('article_hdb_timeline.sections.delays_title')}</h2>

              <h3>{t('article_hdb_timeline.sections.delays.1.title')}</h3>
              <img src="/images/article2-sink.jpg" alt="Undermount kitchen sink installation before countertop placement" className="my-10 rounded-2xl w-full border border-gray-100 shadow-sm" loading="lazy" decoding="async" />
              <p>{t('article_hdb_timeline.sections.delays.1.p1')}</p>
              <p>{t('article_hdb_timeline.sections.delays.1.p2')}</p>

              <h3>{t('article_hdb_timeline.sections.delays.2.title')}</h3>
              <p>{t('article_hdb_timeline.sections.delays.2.p1')}</p>

              <h3>{t('article_hdb_timeline.sections.delays.3.title')}</h3>
              <p>{t('article_hdb_timeline.sections.delays.3.p1')}</p>

              <h3>{t('article_hdb_timeline.sections.delays.4.title')}</h3>
              <p>{t('article_hdb_timeline.sections.delays.4.p1')}</p>
              <p>{t('article_hdb_timeline.sections.delays.4.p2')}</p>

              <h2>{t('article_hdb_timeline.sections.avoid_title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
                {Object.values(avoidItems).map((item) => (
                  <div key={item} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 leading-7 mb-0">{item}</p>
                  </div>
                ))}
              </div>

              <h2>{t('article_hdb_timeline.sections.final_title')}</h2>
              <p>{t('article_hdb_timeline.sections.final_p1')}</p>
            </div>

            <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">{t('article_common.next_article')}</p>
                <h3 className="text-2xl font-serif text-charcoal">{t('article_hdb_timeline.next_title')}</h3>
              </div>
              <a href="/insights/renovation-mistakes-singapore" className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200">
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
