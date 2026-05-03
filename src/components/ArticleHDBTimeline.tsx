import { Helmet } from 'react-helmet-async';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type StringMap = Record<string, string>;

export default function ArticleHDBTimeline() {
  const { t } = useTranslation();
  const durationItems = t('article_hdb_timeline.sections.duration_items', { returnObjects: true }) as StringMap;
  const phases = t('article_hdb_timeline.sections.phases', { returnObjects: true }) as Record<string, { title: string; desc: string }>;
  const avoidItems = t('article_hdb_timeline.sections.avoid_items', { returnObjects: true }) as StringMap;
  const hdbTimelineFaqs = [
    {
      q: 'How long does HDB renovation usually take in Singapore?',
      a: 'Most HDB renovations in Singapore take about 8 to 12 weeks for a BTO flat and 10 to 16 weeks for a resale flat. Resale projects usually take longer because hacking, rewiring, plumbing checks, waterproofing and making-good works are more common.'
    },
    {
      q: 'Why does resale HDB renovation take longer than BTO renovation?',
      a: 'Resale HDB renovation takes longer because the existing condition must be removed and checked first. Old tiles, cabinets, wiring, pipes, uneven floors and hidden defects can affect the sequence before new renovation work starts.'
    },
    {
      q: 'When should I start planning before collecting my HDB keys?',
      a: 'Start planning 4 to 8 weeks before key collection if your floor plan is ready. This gives time to confirm layout, budget, material direction and quotation so the project can move faster after site measurements and HDB approval.'
    },
    {
      q: 'Which HDB renovation works commonly need approval?',
      a: 'Hacking, wet-area works, certain wall changes, window-related works and some plumbing works may need HDB approval. A HDB-registered renovation contractor should check the scope before work starts.'
    },
    {
      q: 'Can carpentry start before tiles and electrical work are completed?',
      a: 'Carpentry measurement usually depends on completed site conditions, especially after tiling, ceiling and electrical points are confirmed. Fabrication can overlap with site work, but wrong early measurements can cause fitting issues.'
    },
    {
      q: 'What causes the most common HDB renovation delays?',
      a: 'Common delays include late material selection, delayed HDB approval, owner-supplied items arriving late, changes to carpentry layout, aircon piping coordination, countertop measurement delays and external vendor scheduling issues.'
    },
    {
      q: 'Can I move in immediately after renovation handover?',
      a: 'It is better to allow 1 to 2 extra weeks after handover for cleaning, airing, minor touch-ups, furniture delivery and appliance setup. Moving in too tightly after completion can make defect checking and adjustment harder.'
    },
    {
      q: 'How do Taobao or overseas purchases affect renovation timeline?',
      a: 'Owner-supplied overseas purchases can delay renovation if items arrive late, arrive damaged, have wrong dimensions or miss fittings. Items such as sinks, taps, lights and accessories should be ordered early and checked before installation.'
    },
    {
      q: 'Should I confirm kitchen appliances before carpentry starts?',
      a: 'Yes. Hob, hood, oven, fridge, sink and dishwasher dimensions should be confirmed before carpentry fabrication. Late appliance changes can affect cabinet sizes, ventilation space, electrical points and countertop cut-outs.'
    },
    {
      q: 'How can homeowners keep the renovation timeline under control?',
      a: 'Confirm the layout early, avoid late design changes, decide materials before site work, appoint one main coordinator, check long-lead items and keep the renovation sequence clear. Most delays come from decision and coordination gaps.'
    },
    {
      q: 'How long should I buffer for defects and touch-ups?',
      a: 'A practical buffer is 1 week for smaller BTO projects and 1 to 2 weeks for larger or resale projects. This allows time for paint touch-ups, carpentry alignment, silicone works, cleaning and small rectifications.'
    },
    {
      q: 'What should I prepare before asking for a HDB renovation timeline estimate?',
      a: 'Prepare your floor plan, key collection date, target move-in date, renovation scope, appliance list, preferred materials and any owner-supplied items. These details help the contractor give a more realistic timeline.'
    }
  ];


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


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://idworkstudio.com/insights/hdb-renovation-timeline-singapore#faq",
    "mainEntity": hdbTimelineFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const delayKeys = ['1', '2', '3', '4'] as const;

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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white pt-28 pb-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="HDB renovation planning timeline in Singapore"
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="relative z-10 max-w-4xl text-center px-4">
            <span className="text-xs tracking-[0.25em] uppercase border px-4 py-1 mb-5 inline-block">
              {t('article_hdb_timeline.hero_badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif uppercase mb-6">
              {t('article_hdb_timeline.title')}
            </h1>
            <p className="text-lg text-gray-200">{t('article_hdb_timeline.subtitle')}</p>
            <div className="flex justify-center gap-6 mt-6 text-xs uppercase">
              <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-04-23</span>
              <span className="flex items-center gap-2"><Clock3 className="w-4 h-4" />{t('article_hdb_timeline.read_time')}</span>
            </div>
          </div>
        </section>

        {/* ── BACK NAV ── */}
        <section className="py-8 border-b bg-white border-gray-100">
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

            {/* ── HOW LONG SECTION ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t('article_hdb_timeline.sections.duration_title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t('article_hdb_timeline.sections.duration_intro')}
              </p>
              <ul className="space-y-2 mb-6 pl-1">
                {Object.values(durationItems).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {t('article_hdb_timeline.sections.duration_p2')}
              </p>
            </div>

            {/* ── PHASE BREAKDOWN ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 pb-4 border-b border-gray-200">
                {t('article_hdb_timeline.sections.breakdown_title')}
              </h2>

              {/* Gantt image */}
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-10">
                <img
                  src="/images/article2-gantt.jpg"
                  alt="Renovation Gantt chart showing sequencing of works in Singapore renovation"
                  className="w-full h-[280px] md:h-[400px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Numbered phases - compact timeline layout */}
              <div className="space-y-4">
                {Object.entries(phases).map(([key, phase], index) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-gold flex items-center justify-center text-xs md:text-sm font-bold text-white mt-0.5 shadow-sm"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-charcoal leading-snug">
                          {phase.title}
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm md:text-base leading-7">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── MOVE-IN ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t('article_hdb_timeline.sections.movein_title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {t('article_hdb_timeline.sections.movein_p1')}
              </p>
            </div>

            {/* ── DELAYS ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 pb-4 border-b border-gray-200">
                {t('article_hdb_timeline.sections.delays_title')}
              </h2>

              <div className="space-y-0">
                {delayKeys.map((key, index) => (
                  <div key={key} className="pb-10 mb-10 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gold flex items-center justify-center text-sm font-bold text-white mt-0.5 shadow-sm" aria-hidden="true">
                        {index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-charcoal leading-snug pt-1">
                        {t(`article_hdb_timeline.sections.delays.${key}.title`)}
                      </h3>
                    </div>

                    {/* Sink image inside delay 1 */}
                    {key === '1' && (
                      <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-6 md:ml-14">
                        <img
                          src="/images/article2-sink.jpg"
                          alt="Undermount kitchen sink installation before countertop placement"
                          className="w-full h-[240px] md:h-[380px] object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}

                    <div className="pl-0 md:pl-14 space-y-4">
                      <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                        {t(`article_hdb_timeline.sections.delays.${key}.p1`)}
                      </p>
                      {key === '1' && (
                        <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                          {t(`article_hdb_timeline.sections.delays.${key}.p2`)}
                        </p>
                      )}
                      {key === '4' && (
                        <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                          {t(`article_hdb_timeline.sections.delays.${key}.p2`)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── AVOID SECTION ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 pb-4 border-b border-gray-200">
                {t('article_hdb_timeline.sections.avoid_title')}
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



            {/* ── RELATED PLANNING LINKS ── */}
            <div className="mb-14 rounded-3xl border border-gray-200 bg-off-white p-7 md:p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3">
                {t('article_hdb_timeline.internal_links.eyebrow')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5">
                {t('article_hdb_timeline.internal_links.title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {t('article_hdb_timeline.internal_links.cost_intro')}{' '}
                <a href="/insights/renovation-cost-singapore-2026" className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors">
                  {t('article_hdb_timeline.internal_links.cost_link')}
                </a>{' '}
                {t('article_hdb_timeline.internal_links.cost_outro')}
              </p>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-0">
                {t('article_hdb_timeline.internal_links.mistakes_intro')}{' '}
                <a href="/insights/renovation-mistakes-singapore" className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors">
                  {t('article_hdb_timeline.internal_links.mistakes_link')}
                </a>{' '}
                {t('article_hdb_timeline.internal_links.mistakes_outro')}
              </p>
            </div>

            {/* ── FINAL ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t('article_hdb_timeline.sections.final_title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {t('article_hdb_timeline.sections.final_p1')}
              </p>
            </div>

            {/* ── FAQ ── */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mt-16 mb-5 pb-4 border-b border-gray-200">
                {t('article_hdb_timeline.faq.title')}
              </h2>
              <div className="space-y-3 my-8">
                {hdbTimelineFaqs.map((faq, index) => (
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
            </div>

            {/* ── CTA ── */}
            <div className="mb-14 rounded-3xl bg-dark-charcoal p-8 md:p-10 text-white">
              <div className="flex items-start gap-4 mb-5">
                <MessageCircle className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">{t('article_hdb_timeline.cta.eyebrow')}</p>
                  <h2 className="text-2xl md:text-4xl font-serif mb-4">{t('article_hdb_timeline.cta.title')}</h2>
                  <p className="text-gray-300 text-base leading-[1.8] mb-0">
                    {t('article_hdb_timeline.cta.body')}
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20am%20planning%20an%20HDB%20renovation.%20Can%20you%20help%20me%20estimate%20a%20realistic%20renovation%20timeline%20from%20my%20floor%20plan%20and%20move-in%20date%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.22em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
              >
                {t('article_hdb_timeline.cta.button')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* ── NEXT ARTICLE FOOTER ── */}
            <div className="mt-14 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
                  {t('article_common.next_article')}
                </p>
                <h3 className="text-2xl font-serif text-charcoal">
                  {t('article_hdb_timeline.next_title')}
                </h3>
              </div>
              <a
                href="/insights/renovation-mistakes-singapore"
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
