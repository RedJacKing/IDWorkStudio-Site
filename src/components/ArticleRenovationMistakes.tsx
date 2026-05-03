import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react';
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

      <div className="min-h-screen bg-off-white selection:bg-gold selection:text-dark-charcoal">
        <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-black pt-28 pb-20 text-white md:pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="Renovation planning mistakes in Singapore homes"
              className="h-full w-full scale-105 object-cover object-center opacity-50"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
            <span className="mb-5 inline-block rounded-full border border-champagne px-4 py-1 text-xs uppercase tracking-[0.25em] text-champagne">
              {t('article_renovation_mistakes.hero_badge')}
            </span>

            <h1 className="mb-6 font-serif text-4xl uppercase leading-tight tracking-tight sm:text-5xl md:text-7xl">
              {t('article_renovation_mistakes.title')}
            </h1>

            <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-200 md:text-xl">
              {t('article_renovation_mistakes.subtitle')}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                2026-04-23
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {t('article_renovation_mistakes.read_time')}
              </span>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-100 bg-white py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-charcoal transition-colors duration-200 hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('article_common.back_to_insights')}
            </Link>
          </div>
        </section>

        <article className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <section className="mb-16">
              <h2 className="mb-5 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {t('article_renovation_mistakes.sections.intro_title')}
              </h2>
              <div className="rounded-2xl border-l-4 border-gold bg-[#fbf6ec] p-6">
                <p className="mb-0 text-base leading-[1.85] text-gray-700 md:text-[1.05rem]">
                  {t('article_renovation_mistakes.sections.intro_p1')}
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="mb-8 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {t('article_renovation_mistakes.sections.mistakes_title')}
              </h2>

              <div className="space-y-5">
                {Object.entries(mistakes).map(([key, item], index) => (
                  <div
                    key={key}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="p-6 md:p-7">
                      <div className="mb-5 flex items-start gap-4">
                        <span
                          className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#fbf6ec] text-base font-bold text-gold"
                          aria-hidden="true"
                        >
                          {index + 1}
                        </span>
                        <div>
                          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                            <AlertTriangle className="h-4 w-4" />
                            {t('article_renovation_mistakes.hero_badge')}
                          </p>
                          <h3 className="font-serif text-xl leading-snug text-charcoal md:text-2xl">
                            {item.title.replace(/^\s*\d+\.\s*/, '')}
                          </h3>
                        </div>
                      </div>

                      {key === '3' && (
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                          <img
                            src="/images/article3-overdesign.jpg"
                            alt="Overdesigned living room with excessive features reducing usability"
                            className="h-[280px] w-full object-cover md:h-[420px]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}

                      {key === '4' && (
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                          <img
                            src="/images/article3-storage.jpg"
                            alt="Example of poor storage planning leading to clutter in a compact home"
                            className="h-[280px] w-full object-cover md:h-[420px]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}

                      <p className="mb-0 text-base leading-[1.85] text-gray-600 md:text-[1.05rem]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="mb-8 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {t('article_renovation_mistakes.sections.avoid_title')}
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Object.values(avoidItems).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#fffdf8] p-5 shadow-sm transition-all duration-200 hover:border-gold hover:shadow-md"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <p className="mb-0 text-sm leading-7 text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="mb-5 border-b border-gray-200 pb-4 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {t('article_renovation_mistakes.sections.final_title')}
              </h2>
              <p className="text-base leading-[1.85] text-gray-600 md:text-[1.05rem]">
                {t('article_renovation_mistakes.sections.final_p1')}
              </p>
            </section>

            <section className="mb-16 rounded-3xl border border-gray-200 bg-[#fffdf8] p-7 shadow-sm md:p-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {t('article_internal_links.residential_label')}
              </p>
              <h2 className="mb-5 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {t('article_internal_links.renovation_mistakes.title')}
              </h2>
              <div className="space-y-4 text-base leading-[1.85] text-gray-600 md:text-[1.05rem]">
                <p>
                  {t('article_internal_links.renovation_mistakes.cost_prefix')}{' '}
                  <Link
                    to="/insights/renovation-cost-singapore-2026"
                    className="text-charcoal underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                  >
                    {t('article_internal_links.renovation_mistakes.cost_link')}
                  </Link>
                  {t('article_internal_links.renovation_mistakes.cost_suffix')}
                </p>
                <p>
                  {t('article_internal_links.renovation_mistakes.timeline_prefix')}{' '}
                  <Link
                    to="/insights/hdb-renovation-timeline-singapore"
                    className="text-charcoal underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                  >
                    {t('article_internal_links.renovation_mistakes.timeline_link')}
                  </Link>
                  {t('article_internal_links.renovation_mistakes.timeline_suffix')}
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-[#151515] p-7 text-white md:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    {t('article_common.back_to_start')}
                  </p>
                  <h3 className="font-serif text-2xl text-white">
                    {t('article_renovation_mistakes.next_title')}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/6598333085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-hover"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>

                  <Link
                    to="/insights/renovation-cost-singapore-2026"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-charcoal"
                  >
                    {t('article_common.read_article')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
