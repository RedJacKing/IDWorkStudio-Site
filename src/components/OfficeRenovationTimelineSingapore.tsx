import { Helmet } from 'react-helmet-async';
import type { ReactNode } from 'react';
import { CalendarDays, Clock3, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type TimelineRow = {
  stage: string;
  weeks: string[];
  note: string;
};

type TimelineCard = {
  title: string;
  duration: string;
  body: string;
};

type TextCard = {
  title: string;
  body: string;
};

type FAQItem = {
  q: string;
  a: string;
};

export default function OfficeRenovationTimelineSingapore() {
  const { t } = useTranslation();

  const timelineRanges = t('article_office_renovation_timeline.timeline_ranges', { returnObjects: true }) as Record<string, TextCard>;
  const ganttRows = t('article_office_renovation_timeline.gantt.rows', { returnObjects: true }) as Record<string, TimelineRow>;
  const phases = t('article_office_renovation_timeline.phases.items', { returnObjects: true }) as Record<string, TimelineCard>;
  const delayFactors = t('article_office_renovation_timeline.delay_factors.items', { returnObjects: true }) as Record<string, TextCard>;
  const mistakes = t('article_office_renovation_timeline.mistakes.items', { returnObjects: true }) as Record<string, TextCard>;
  const faqs = t('article_office_renovation_timeline.faqs.items', { returnObjects: true }) as Record<string, FAQItem>;
  const clientConcernItems = t('article_office_renovation_timeline.client_concerns.items', { returnObjects: true }) as Record<string, string>;
  const ganttWeeks = t('article_office_renovation_timeline.gantt.weeks', { returnObjects: true }) as string[];

  const articleUrl = 'https://idworkstudio.com/insights/office-renovation-timeline-singapore';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('article_office_renovation_timeline.title'),
    description: t('article_office_renovation_timeline.meta.description'),
    author: { '@type': 'Organization', name: 'ID Work Studio' },
    publisher: {
      '@type': 'Organization',
      name: 'ID Work Studio',
      logo: { '@type': 'ImageObject', url: 'https://idworkstudio.com/logo192.png' },
    },
    datePublished: '2026-05-04',
    dateModified: '2026-05-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.values(faqs).map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://idworkstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://idworkstudio.com/insights' },
      { '@type': 'ListItem', position: 3, name: t('article_office_renovation_timeline.title'), item: articleUrl },
    ],
  };

  const SectionH2 = ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mt-16 mb-5 pb-4 border-b border-gray-200">
      {children}
    </h2>
  );

  const SectionH3 = ({ children }: { children: ReactNode }) => (
    <h3 className="text-xl md:text-[1.4rem] font-bold text-charcoal leading-snug mt-12 mb-4 pl-4 border-l-4 border-gold">
      {children}
    </h3>
  );

  const P = ({ children }: { children: ReactNode }) => (
    <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">{children}</p>
  );

  return (
    <>
      <Helmet>
        <title>{t('article_office_renovation_timeline.meta.title')}</title>
        <meta name="description" content={t('article_office_renovation_timeline.meta.description')} />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t('article_office_renovation_timeline.meta.title')} />
        <meta property="og:description" content={t('article_office_renovation_timeline.meta.description')} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('article_office_renovation_timeline.meta.title')} />
        <meta name="twitter:description" content={t('article_office_renovation_timeline.meta.description')} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt={t('article_office_renovation_timeline.hero_alt')}
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block py-1 px-4 border border-champagne text-champagne rounded-full text-xs uppercase tracking-[0.25em] mb-5">
              {t('article_office_renovation_timeline.hero_badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-tight">
              {t('article_office_renovation_timeline.title')}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              {t('article_office_renovation_timeline.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold flex-wrap">
              <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-05-04</span>
              <span className="inline-flex items-center gap-2"><Clock3 className="w-4 h-4" />{t('article_office_renovation_timeline.read_time')}</span>
            </div>
          </div>
        </section>

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

        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl md:text-2xl text-charcoal font-light leading-relaxed mb-12 pb-10 border-b border-gray-100">
              {t('article_office_renovation_timeline.intro')}
            </p>

            <SectionH2>{t('article_office_renovation_timeline.direct_answer.title')}</SectionH2>
            <P>{t('article_office_renovation_timeline.direct_answer.body')}</P>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {Object.values(timelineRanges).map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-off-white p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">{item.title}</p>
                  <p className="text-2xl font-serif text-charcoal font-semibold mb-3">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-off-white p-6 my-8">
              <p className="text-gray-600 text-base leading-[1.8] mb-0">
                {t('article_office_renovation_timeline.internal_links.cost_intro')}{' '}
                <a href="/insights/office-renovation-cost-singapore" className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors">
                  {t('article_office_renovation_timeline.internal_links.cost_link')}
                </a>{' '}
                {t('article_office_renovation_timeline.internal_links.cost_outro')}
              </p>
            </div>

            <div className="bg-dark-charcoal text-white rounded-2xl p-7 md:p-8 my-10">
              <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                {t('article_office_renovation_timeline.client_concerns.eyebrow')}
              </p>
              <h3 className="text-2xl md:text-3xl font-serif mb-5">
                {t('article_office_renovation_timeline.client_concerns.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.values(clientConcernItems).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <SectionH2>{t('article_office_renovation_timeline.gantt.title')}</SectionH2>
            <P>{t('article_office_renovation_timeline.gantt.intro')}</P>

            <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[760px] border-collapse text-sm bg-white">
                <thead>
                  <tr className="bg-off-white">
                    <th className="text-left px-4 py-4 border-b border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs font-bold w-[220px]">
                      {t('article_office_renovation_timeline.gantt.headers.stage')}
                    </th>
                    {ganttWeeks.map((week) => (
                      <th key={week} className="text-center px-3 py-4 border-b border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs font-bold">
                        {week}
                      </th>
                    ))}
                    <th className="text-left px-4 py-4 border-b border-gray-200 text-charcoal uppercase tracking-[0.18em] text-xs font-bold w-[220px]">
                      {t('article_office_renovation_timeline.gantt.headers.note')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(ganttRows).map((row, index) => (
                    <tr key={row.stage} className={index % 2 === 1 ? 'bg-off-white/40' : 'bg-white'}>
                      <td className="px-4 py-3.5 border-b border-gray-100 text-charcoal font-semibold">{row.stage}</td>
                      {row.weeks.map((active, weekIndex) => (
                        <td key={`${row.stage}-${weekIndex}`} className="px-3 py-3.5 border-b border-gray-100 text-center">
                          {active === '1' ? <span className="inline-block h-3 w-10 rounded-full bg-gold" /> : <span className="inline-block h-3 w-10 rounded-full bg-gray-100" />}
                        </td>
                      ))}
                      <td className="px-4 py-3.5 border-b border-gray-100 text-gray-500 text-xs leading-relaxed">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gold/10 p-6 my-8">
              <p className="text-charcoal text-base leading-[1.8] mb-0">
                {t('article_office_renovation_timeline.gantt.note')}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 my-8 shadow-sm">
              <p className="text-gray-600 text-base leading-[1.8] mb-0">
                {t('article_office_renovation_timeline.internal_links.service_intro')}{' '}
                <a href="/commercial/office-renovation" className="text-charcoal underline underline-offset-4 decoration-gold hover:text-gold transition-colors">
                  {t('article_office_renovation_timeline.internal_links.service_link')}
                </a>{' '}
                {t('article_office_renovation_timeline.internal_links.service_outro')}
              </p>
            </div>

            <SectionH2>{t('article_office_renovation_timeline.phases.title')}</SectionH2>
            <P>{t('article_office_renovation_timeline.phases.intro')}</P>

            {Object.values(phases).map((phase) => (
              <div key={phase.title}>
                <SectionH3>{phase.title}</SectionH3>
                <p className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold mb-4">
                  {phase.duration}
                </p>
                <P>{phase.body}</P>
              </div>
            ))}

            <SectionH2>{t('article_office_renovation_timeline.delay_factors.title')}</SectionH2>
            <P>{t('article_office_renovation_timeline.delay_factors.intro')}</P>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {Object.values(delayFactors).map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-charcoal leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item.body}</p>
                </div>
              ))}
            </div>

            <SectionH2>{t('article_office_renovation_timeline.mistakes.title')}</SectionH2>
            <P>{t('article_office_renovation_timeline.mistakes.intro')}</P>
            <div className="space-y-4 my-8">
              {Object.values(mistakes).map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-off-white p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item.body}</p>
                </div>
              ))}
            </div>

            <SectionH2>{t('article_office_renovation_timeline.faqs.title')}</SectionH2>
            <div className="space-y-3 my-8">
              {Object.values(faqs).map((faq, index) => (
                <details key={faq.q} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm" open={index === 0}>
                  <summary className="cursor-pointer list-none text-base font-bold text-charcoal flex items-start justify-between gap-4">
                    <span>{faq.q}</span>
                    <span className="text-gold group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm leading-[1.8] mt-4 mb-0">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="bg-dark-charcoal text-white rounded-3xl p-8 md:p-10 mt-16">
              <div className="flex items-start gap-4 mb-5">
                <MessageCircle className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                    {t('article_office_renovation_timeline.cta.eyebrow')}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-serif mb-4">
                    {t('article_office_renovation_timeline.cta.title')}
                  </h2>
                  <p className="text-gray-300 text-base leading-[1.8] mb-0">
                    {t('article_office_renovation_timeline.cta.body')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20am%20planning%20an%20office%20renovation.%20Can%20you%20advise%20a%20realistic%20timeline%20from%20my%20floor%20plan%20and%20target%20move-in%20date%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.22em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
                >
                  {t('article_office_renovation_timeline.cta.whatsapp')}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/commercial/office-renovation"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-all duration-300 font-bold rounded-full"
                >
                  {t('article_office_renovation_timeline.cta.office_service')}
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
