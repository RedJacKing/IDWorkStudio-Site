import { Helmet } from 'react-helmet-async';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type StringMap = Record<string, string>;

export default function ArticleRenovationMistakes() {
  const { t } = useTranslation();
  const mistakes = t('article_renovation_mistakes.sections.mistakes', { returnObjects: true }) as Record<string, { title: string; body: string }>;
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

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white pt-28 pb-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="Renovation planning mistakes in Singapore homes"
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 max-w-4xl text-center px-4">
            <span className="text-xs tracking-[0.25em] uppercase border px-4 py-1 mb-5 inline-block">
              {t('article_renovation_mistakes.hero_badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif uppercase mb-6">
              {t('article_renovation_mistakes.title')}
            </h1>
            <p className="text-lg text-gray-200">{t('article_renovation_mistakes.subtitle')}</p>
            <div className="flex justify-center gap-6 mt-6 text-xs uppercase">
              <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-04-23</span>
              <span className="flex items-center gap-2"><Clock3 className="w-4 h-4" />{t('article_renovation_mistakes.read_time')}</span>
            </div>
          </div>
        </section>

        {/* ── BACK NAV ─────────────────────────────────────────────────── */}
        <section className="py-8 border-b bg-white border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('article_common.back_to_insights')}
            </a>
          </div>
        </section>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────── */}
        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── INTRO ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t('article_renovation_mistakes.sections.intro_title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-0">
                {t('article_renovation_mistakes.sections.intro_p1')}
              </p>
            </div>

            {/* ── MISTAKES PARENT HEADING ── */}
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-10 pb-4 border-b border-gray-200">
              {t('article_renovation_mistakes.sections.mistakes_title')}
            </h2>

            {/* ── MISTAKE ITEMS ── */}
            <div className="space-y-0">
              {Object.entries(mistakes).map(([key, item], index) => (
                <div
                  key={key}
                  className="pb-12 mb-12 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0"
                >
                  {/* Numbered badge + headline */}
                  <div className="flex items-start gap-4 mb-5">
                    <span
                      className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gold flex items-center justify-center text-sm md:text-base font-bold text-white mt-0.5 shadow-sm"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal leading-snug pt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Inline image for mistake 3 (over-design) */}
                  {key === '3' && (
                    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-6">
                      <img
                        src="/images/article3-overdesign.jpg"
                        alt="Overdesigned living room with excessive features reducing usability"
                        className="w-full h-[280px] md:h-[420px] object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}

                  {/* Inline image for mistake 4 (storage) */}
                  {key === '4' && (
                    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-6">
                      <img
                        src="/images/article3-storage.jpg"
                        alt="Example of poor storage planning leading to clutter in a compact home"
                        className="w-full h-[280px] md:h-[420px] object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}

                  {/* Body copy */}
                  <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] pl-0 md:pl-14">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* ── AVOID SECTION ── */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 pb-4 border-b border-gray-200">
                {t('article_renovation_mistakes.sections.avoid_title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.values(avoidItems).map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-3 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CLOSING ── */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t('article_renovation_mistakes.sections.final_title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {t('article_renovation_mistakes.sections.final_p1')}
              </p>
            </div>

            {/* ── NEXT ARTICLE FOOTER ── */}
            <div className="mt-14 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
                  {t('article_common.back_to_start')}
                </p>
                <h3 className="text-2xl font-serif text-charcoal">
                  {t('article_renovation_mistakes.next_title')}
                </h3>
              </div>
              <a
                href="/insights/renovation-cost-singapore-2026"
                className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200 whitespace-nowrap"
              >
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
