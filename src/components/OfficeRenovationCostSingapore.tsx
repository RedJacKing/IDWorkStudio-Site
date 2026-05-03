import { Helmet } from 'react-helmet-async';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building2, CalendarDays, CheckCircle2, Clock3, DollarSign, HelpCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type SizeCard = {
  title: string;
  cost: string;
  desc: string;
};

type FAQItem = {
  q: string;
  a: string;
};

export default function OfficeRenovationCostSingapore() {
  const { t } = useTranslation();

  const articleUrl = 'https://idworkstudio.com/insights/office-renovation-cost-singapore';

  const costItems = [
    t('insights.officeCost.intro.cost1'),
    t('insights.officeCost.intro.cost2'),
    t('insights.officeCost.intro.cost3'),
  ];

  const sizeCards: SizeCard[] = [
    t('insights.officeCost.size.small', { returnObjects: true }) as SizeCard,
    t('insights.officeCost.size.mid', { returnObjects: true }) as SizeCard,
    t('insights.officeCost.size.large', { returnObjects: true }) as SizeCard,
    t('insights.officeCost.size.corp', { returnObjects: true }) as SizeCard,
  ];

  const breakdownItems = [
    t('insights.officeCost.breakdown.item1'),
    t('insights.officeCost.breakdown.item2'),
    t('insights.officeCost.breakdown.item3'),
    t('insights.officeCost.breakdown.item4'),
    t('insights.officeCost.breakdown.item5'),
    t('insights.officeCost.breakdown.item6'),
    t('insights.officeCost.breakdown.item7'),
  ];

  const timelineItems = [
    t('insights.officeCost.timeline.step1'),
    t('insights.officeCost.timeline.step2'),
    t('insights.officeCost.timeline.step3'),
  ];

  const mistakeItems = [
    t('insights.officeCost.mistakes.item1'),
    t('insights.officeCost.mistakes.item2'),
    t('insights.officeCost.mistakes.item3'),
    t('insights.officeCost.mistakes.item4'),
  ];

  const faqs: FAQItem[] = [
    { q: t('insights.officeCost.faq.q1'), a: t('insights.officeCost.faq.a1') },
    { q: t('insights.officeCost.faq.q2'), a: t('insights.officeCost.faq.a2') },
    { q: t('insights.officeCost.faq.q3'), a: t('insights.officeCost.faq.a3') },
    { q: t('insights.officeCost.faq.q4'), a: t('insights.officeCost.faq.a4') },
    { q: t('insights.officeCost.faq.q5'), a: t('insights.officeCost.faq.a5') },
    { q: t('insights.officeCost.faq.q6'), a: t('insights.officeCost.faq.a6') },
    { q: t('insights.officeCost.faq.q7'), a: t('insights.officeCost.faq.a7') },
    { q: t('insights.officeCost.faq.q8'), a: t('insights.officeCost.faq.a8') },
    { q: t('insights.officeCost.faq.q9'), a: t('insights.officeCost.faq.a9') },
    { q: t('insights.officeCost.faq.q10'), a: t('insights.officeCost.faq.a10') },
    { q: t('insights.officeCost.faq.q11'), a: t('insights.officeCost.faq.a11') },
    { q: t('insights.officeCost.faq.q12'), a: t('insights.officeCost.faq.a12') },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('insights.officeCost.title'),
    description: t('insights.officeCost.meta.desc'),
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://idworkstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://idworkstudio.com/insights' },
      { '@type': 'ListItem', position: 3, name: t('insights.officeCost.title'), item: articleUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const SectionH2 = ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mt-16 mb-5 pb-4 border-b border-gray-200">
      {children}
    </h2>
  );

  const P = ({ children }: { children: ReactNode }) => (
    <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">{children}</p>
  );

  return (
    <>
      <Helmet>
        <title>{t('insights.officeCost.meta.title')}</title>
        <meta name="description" content={t('insights.officeCost.meta.desc')} />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t('insights.officeCost.meta.title')} />
        <meta property="og:description" content={t('insights.officeCost.meta.desc')} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('insights.officeCost.meta.title')} />
        <meta name="twitter:description" content={t('insights.officeCost.meta.desc')} />
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
              alt={t('insights.officeCost.title')}
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block py-1 px-4 border border-champagne text-champagne rounded-full text-xs uppercase tracking-[0.25em] mb-5">
              {t('insights.article4.hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-tight">
              {t('insights.officeCost.title')}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              {t('insights.officeCost.meta.desc')}
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold flex-wrap">
              <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />2026-05-04</span>
              <span className="inline-flex items-center gap-2"><Clock3 className="w-4 h-4" />{t('insights.article4.hero.meta2')}</span>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('insights.article4.back')}
            </Link>
          </div>
        </section>

        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl md:text-2xl text-charcoal font-light leading-relaxed mb-12 pb-10 border-b border-gray-100">
              {t('insights.officeCost.intro.line2')}
            </p>

            <SectionH2>{t('insights.officeCost.intro.line1')}</SectionH2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {costItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-off-white p-6 shadow-sm">
                  <DollarSign className="w-6 h-6 text-gold mb-4" />
                  <p className="text-lg font-serif text-charcoal font-semibold leading-snug mb-0">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-dark-charcoal text-white rounded-2xl p-7 md:p-8 my-10">
              <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                {t('insights.officeCost.timeline.title')}
              </p>
              <h3 className="text-2xl md:text-3xl font-serif mb-5">
                {t('insights.officeCost.size.title')}
              </h3>
              <div className="space-y-3">
                {timelineItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <SectionH2>{t('insights.officeCost.size.title')}</SectionH2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
              {sizeCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <Building2 className="w-6 h-6 text-gold mb-4" />
                  <h3 className="text-lg font-bold text-charcoal leading-snug mb-2">{item.title}</h3>
                  <p className="text-xl font-serif text-charcoal font-semibold mb-3">{item.cost}</p>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <SectionH2>{t('insights.officeCost.breakdown.title')}</SectionH2>
            <P>{t('insights.officeCost.meta.desc')}</P>
            <div className="space-y-4 my-8">
              {breakdownItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-off-white p-5 flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item}</p>
                </div>
              ))}
            </div>

            <SectionH2>{t('insights.officeCost.mistakes.title')}</SectionH2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {mistakeItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <HelpCircle className="w-5 h-5 text-gold mb-4" />
                  <p className="text-gray-600 text-sm leading-[1.8] mb-0">{item}</p>
                </div>
              ))}
            </div>

            <SectionH2>{t('insights.officeCost.faq.title')}</SectionH2>
            <div className="space-y-3 my-8">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm" open={index === 0}>
                  <summary className="cursor-pointer list-none text-base font-bold text-charcoal flex items-start justify-between gap-4">
                    <span>{faq.q}</span>
                    <span className="text-gold group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm leading-[1.8] mt-4 mb-0">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-16 rounded-3xl border border-gray-200 bg-off-white p-7 md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                {t('insights.commercial.content_cluster.eyebrow')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-4">
                {t('insights.commercial.content_cluster.title')}
              </h2>
              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t('insights.commercial.content_cluster.body')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/insights/office-renovation-timeline-singapore"
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
                    {t('insights.commercial.content_cluster.timeline_card.eyebrow')}
                  </p>
                  <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">
                    {t('insights.commercial.content_cluster.timeline_card.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-4">
                    {t('insights.commercial.content_cluster.timeline_card.desc')}
                  </p>
                  <span className="inline-flex items-center gap-2 text-charcoal group-hover:text-gold text-xs uppercase tracking-[0.2em] font-bold">
                    {t('insights.article4.next.cta')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/commercial/office-renovation"
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">
                    {t('insights.article4.quick.office')}
                  </p>
                  <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">
                    {t('insights.commercial.solutions.items.1.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-4">
                    {t('insights.commercial.solutions.items.1.desc')}
                  </p>
                  <span className="inline-flex items-center gap-2 text-charcoal group-hover:text-gold text-xs uppercase tracking-[0.2em] font-bold">
                    {t('insights.article4.next.cta')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-dark-charcoal text-white rounded-3xl p-8 md:p-10 mt-16">
              <div className="flex items-start gap-4 mb-5">
                <MessageCircle className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold font-bold mb-3">
                    {t('insights.article4.hero.meta2')}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-serif mb-4">
                    {t('insights.officeCost.cta.button')}
                  </h2>
                  <p className="text-gray-300 text-base leading-[1.8] mb-0">
                    {t('insights.officeCost.cta.text')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20am%20planning%20an%20office%20renovation.%20Can%20you%20advise%20a%20practical%20fit-out%20budget%20from%20my%20floor%20plan%20and%20lease%20condition%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.22em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
                >
                  {t('insights.officeCost.cta.button')}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/commercial/office-renovation"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-all duration-300 font-bold rounded-full"
                >
                  {t('insights.article4.quick.office')}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
