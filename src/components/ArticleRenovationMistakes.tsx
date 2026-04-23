import { Helmet } from 'react-helmet-async';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

import { useTranslation } from 'react-i18next';

type StringMap = Record<string, string>;
type PairMap = Record<string, [string, string]>;


export default function ArticleRenovationMistakes() {
  const { t } = useTranslation();
  const mistakes = t('article_renovation_mistakes.sections.mistakes', { returnObjects: true }) as Record<string, {title: string; body: string;}>;
  const avoidItems = t('article_renovation_mistakes.sections.avoid_items', { returnObjects: true }) as StringMap;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('article_renovation_mistakes.title'),
    "description": t('article_renovation_mistakes.meta.description'),
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
      "@id": "https://idworkstudio.com/insights/renovation-mistakes-singapore"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idworkstudio.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://idworkstudio.com/insights" },
      { "@type": "ListItem", "position": 3, "name": t('article_renovation_mistakes.title'), "item": "https://idworkstudio.com/insights/renovation-mistakes-singapore" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t('article_renovation_mistakes.meta.title')}</title>
        <meta name="description" content={t('article_renovation_mistakes.meta.description')} />
        <link rel="canonical" href="https://idworkstudio.com/insights/renovation-mistakes-singapore" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t('article_renovation_mistakes.meta.title')} />
        <meta property="og:description" content={t('article_renovation_mistakes.meta.description')} />
        <meta property="og:url" content="https://idworkstudio.com/insights/renovation-mistakes-singapore" />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('article_renovation_mistakes.meta.title')} />
        <meta name="twitter:description" content={t('article_renovation_mistakes.meta.description')} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white pt-28 pb-20">
          <div className="absolute inset-0 z-0">
            <img src="/images/insights-hero.jpg" alt="Renovation planning mistakes in Singapore homes" className="w-full h-full object-cover object-center opacity-55 scale-105" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 max-w-4xl text-center px-4">
            <span className="text-xs tracking-[0.25em] uppercase border px-4 py-1 mb-5 inline-block">{t('article_renovation_mistakes.hero_badge')}</span>
            <h1 className="text-4xl md:text-6xl font-serif uppercase mb-6">{t('article_renovation_mistakes.title')}</h1>
            <p className="text-lg text-gray-200">{t('article_renovation_mistakes.subtitle')}</p>

            <div className="flex justify-center gap-6 mt-6 text-xs uppercase">
              <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-04-23</span>
              <span className="flex items-center gap-2"><Clock3 className="w-4 h-4" />{t('article_renovation_mistakes.read_time')}</span>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none 
prose-headings:font-serif 
prose-headings:text-charcoal 
prose-h2:mt-14 
prose-h2:mb-6 
prose-h2:text-3xl 
prose-h2:font-semibold 
prose-h3:mt-10 
prose-h3:mb-4 
prose-h3:text-2xl 
prose-h3:font-semibold 
prose-p:text-gray-600 
prose-p:leading-relaxed 
prose-p:mb-6 
prose-strong:text-charcoal 
prose-li:text-gray-600 
prose-li:leading-relaxed 
prose-li:mb-2">
              <h2>{t('article_renovation_mistakes.sections.intro_title')}</h2>
              <p>{t('article_renovation_mistakes.sections.intro_p1')}</p>

              <h2>{t('article_renovation_mistakes.sections.mistakes_title')}</h2>

              {Object.entries(mistakes).map(([key, item]) => (
                <div key={key}>
                  <h3>{item.title}</h3>
                  {key === '3' && (
                    <img src="/images/article3-overdesign.jpg" alt="Overdesigned living room with excessive features reducing usability" className="my-8 rounded-xl w-full" loading="lazy" decoding="async" />
                  )}
                  {key === '4' && (
                    <img src="/images/article3-storage.jpg" alt="Example of poor storage planning leading to clutter in a compact home" className="my-8 rounded-xl w-full" loading="lazy" decoding="async" />
                  )}
                  <p>{item.body}</p>
                </div>
              ))}

              <h2>{t('article_renovation_mistakes.sections.avoid_title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
                {Object.values(avoidItems).map((item) => (
                  <div key={item} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 leading-7 mb-0">{item}</p>
                  </div>
                ))}
              </div>

              <h2>{t('article_renovation_mistakes.sections.final_title')}</h2>
              <p>{t('article_renovation_mistakes.sections.final_p1')}</p>
            </div>

            <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">{t('article_common.back_to_start')}</p>
                <h3 className="text-2xl font-serif text-charcoal">{t('article_renovation_mistakes.next_title')}</h3>
              </div>
              <a href="/insights/renovation-cost-singapore-2026" className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200">
                {t('article_common.read_article')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
