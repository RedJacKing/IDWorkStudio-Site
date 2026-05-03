import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  AlertTriangle,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Fan,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

const ARTICLE_KEY = 'insights.article_commercial_renovation_cost';
const KEYS_3 = ['1', '2', '3'];
const KEYS_4 = ['1', '2', '3', '4'];
const KEYS_5 = ['1', '2', '3', '4', '5'];
const KEYS_8 = ['1', '2', '3', '4', '5', '6', '7', '8'];
const KEYS_15 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const COST_KEYS = ['office', 'retail', 'fnb', 'industrial'];

const mistakeIcons = [
  <Fan className="h-5 w-5" />,
  <Droplets className="h-5 w-5" />,
  <FileCheck2 className="h-5 w-5" />,
  <AlertTriangle className="h-5 w-5" />,
  <Building2 className="h-5 w-5" />,
];

export default function CommercialRenovationCostSingapore() {
  const { t } = useTranslation();

  const getArray = (key: string) => t(key, { returnObjects: true }) as string[];
  const getFaq = (key: string) =>
    t(`${ARTICLE_KEY}.faqs.${key}`, { returnObjects: true }) as { q: string; a: string };

  const faqs = KEYS_15.map((key) => getFaq(key));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore#article',
        headline: t(`${ARTICLE_KEY}.title`),
        description: t(`${ARTICLE_KEY}.meta.description`),
        author: {
          '@type': 'Organization',
          name: 'ID Work Studio',
          url: 'https://idworkstudio.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'ID Work Studio',
          url: 'https://idworkstudio.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://idworkstudio.com/og-preview.jpg',
          },
        },
        datePublished: '2026-05-03',
        dateModified: '2026-05-03',
        mainEntityOfPage: 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore',
        about: [
          'commercial renovation Singapore',
          'office renovation cost Singapore',
          'retail renovation Singapore',
          'F&B renovation Singapore',
          'MCST renovation permit Singapore',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore#faq',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://idworkstudio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Insights',
            item: 'https://idworkstudio.com/insights',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: t(`${ARTICLE_KEY}.title`),
            item: 'https://idworkstudio.com/insights/commercial-renovation-cost-singapore',
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t(`${ARTICLE_KEY}.meta.title`)}</title>
        <meta name="description" content={t(`${ARTICLE_KEY}.meta.description`)} />
        <meta
          name="keywords"
          content="commercial renovation cost Singapore, office renovation cost Singapore, retail renovation Singapore, F&B renovation cost Singapore, MCST permit to work Singapore, commercial fit out Singapore"
        />
        <link
          rel="canonical"
          href="https://idworkstudio.com/insights/commercial-renovation-cost-singapore"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t(`${ARTICLE_KEY}.meta.title`)} />
        <meta property="og:description" content={t(`${ARTICLE_KEY}.meta.description`)} />
        <meta
          property="og:url"
          content="https://idworkstudio.com/insights/commercial-renovation-cost-singapore"
        />
        <meta property="og:image" content="https://idworkstudio.com/og-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="Commercial renovation cost planning in Singapore office"
              className="w-full h-full object-cover object-center opacity-50 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <span className="inline-block py-1 px-4 border border-champagne text-champagne rounded-full text-xs uppercase tracking-[0.25em] mb-5">
              {t(`${ARTICLE_KEY}.hero_badge`)}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-tight">
              {t(`${ARTICLE_KEY}.title`)}
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              {t(`${ARTICLE_KEY}.subtitle`)}
            </p>

            <div className="flex items-center justify-center gap-6 mt-8 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold flex-wrap">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                2026 Guide
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="w-4 h-4" />
                {t(`${ARTICLE_KEY}.read_time`)}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                {t(`${ARTICLE_KEY}.bca_label`)}
              </span>
            </div>
          </div>
        </section>

        <section className="py-8 border-b bg-white border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </div>
        </section>

        <article className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.quick_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                <Trans
                  i18nKey={`${ARTICLE_KEY}.quick_p1`}
                  components={{ strong: <strong className="text-charcoal" /> }}
                />
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {COST_KEYS.map((key) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-6 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">
                      {t(`${ARTICLE_KEY}.cost_summary.${key}.title`)}
                    </p>
                    <p className="text-2xl font-serif font-semibold text-charcoal mb-3">
                      {t(`${ARTICLE_KEY}.cost_summary.${key}.range`)}
                    </p>
                    <p className="text-sm leading-7 text-gray-600 mb-0">
                      {t(`${ARTICLE_KEY}.cost_summary.${key}.note`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border-l-4 border-gold bg-[#fbf6ec] p-6 my-8">
                <p className="text-charcoal font-bold mb-2">{t(`${ARTICLE_KEY}.insight_title`)}</p>
                <p className="text-gray-700 leading-8 mb-0">
                  {t(`${ARTICLE_KEY}.insight_text`)}
                </p>
              </div>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                <Trans
                  i18nKey={`${ARTICLE_KEY}.quick_p2`}
                  components={{ strong: <strong className="text-charcoal" /> }}
                />
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.office_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t(`${ARTICLE_KEY}.office_intro`)}
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200 mb-8">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#f4eee4]">
                    <tr>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.office_table_headers.level`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.office_table_headers.cost`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.office_table_headers.scope`)}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {KEYS_3.map((key) => {
                      const row = getArray(`${ARTICLE_KEY}.office_rows.${key}`);
                      return (
                        <tr key={key} className="border-t border-gray-200">
                          <td className="p-4 align-top text-sm font-semibold text-charcoal">
                            {row[0]}
                          </td>
                          <td className="p-4 align-top text-sm text-gray-700">{row[1]}</td>
                          <td className="p-4 align-top text-sm leading-7 text-gray-600">
                            {row[2]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl border-l-4 border-gold bg-[#fbf6ec] p-6">
                <p className="text-gray-700 leading-8 mb-0">{t(`${ARTICLE_KEY}.office_note`)}</p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.breakdown_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t(`${ARTICLE_KEY}.breakdown_intro`)}
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#f4eee4]">
                    <tr>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.breakdown_headers.item`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.breakdown_headers.cost`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.breakdown_headers.note`)}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {KEYS_8.map((key) => {
                      const row = getArray(`${ARTICLE_KEY}.breakdown_rows.${key}`);
                      return (
                        <tr key={key} className="border-t border-gray-200">
                          <td className="p-4 align-top text-sm font-semibold text-charcoal">
                            {row[0]}
                          </td>
                          <td className="p-4 align-top text-sm text-gray-700">{row[1]}</td>
                          <td className="p-4 align-top text-sm leading-7 text-gray-600">
                            {row[2]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.retail_fnb_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {t(`${ARTICLE_KEY}.retail_fnb_intro`)}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <div className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-6">
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {t(`${ARTICLE_KEY}.retail_card_title`)}
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm leading-7">
                    {KEYS_3.map((key) => (
                      <li key={key}>{t(`${ARTICLE_KEY}.retail_items.${key}`)}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-6">
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {t(`${ARTICLE_KEY}.fnb_card_title`)}
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm leading-7">
                    {KEYS_3.map((key) => (
                      <li key={key}>{t(`${ARTICLE_KEY}.fnb_items.${key}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border-l-4 border-gold bg-[#fbf6ec] p-6">
                <p className="text-charcoal font-bold mb-2">
                  {t(`${ARTICLE_KEY}.lease_warning_title`)}
                </p>
                <p className="text-gray-700 leading-8 mb-0">
                  {t(`${ARTICLE_KEY}.lease_warning_text`)}
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.permits_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-5">
                {t(`${ARTICLE_KEY}.permits_intro`)}
              </p>

              <div className="rounded-2xl border border-gray-200 bg-[#fffdf8] p-6 mb-8">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  {t(`${ARTICLE_KEY}.permit_reasons_title`)}
                </h3>
                <ul className="space-y-3 text-gray-600 leading-7">
                  {KEYS_4.map((key) => (
                    <li key={key} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      {t(`${ARTICLE_KEY}.permit_reasons.${key}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                {t(`${ARTICLE_KEY}.permits_link_text_before`)}{' '}
                <Link
                  to="/commercial/permits-compliance"
                  className="text-gold font-semibold underline underline-offset-4"
                >
                  {t(`${ARTICLE_KEY}.permits_link`)}
                </Link>
                . {t(`${ARTICLE_KEY}.permits_link_text_after`)}
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.timeline_title`)}
              </h2>

              <div className="space-y-4">
                {KEYS_4.map((key, index) => (
                  <div
                    key={key}
                    className="grid grid-cols-[46px_1fr] gap-4 rounded-2xl border border-gray-200 bg-[#fffdf8] p-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                        <h3 className="font-serif text-xl text-charcoal">
                          {t(`${ARTICLE_KEY}.timeline.${key}.title`)}
                        </h3>
                        <span className="text-xs uppercase tracking-[0.16em] text-gold font-bold">
                          {t(`${ARTICLE_KEY}.timeline.${key}.duration`)}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-7 mb-0">
                        {t(`${ARTICLE_KEY}.timeline.${key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.mistakes_title`)}
              </h2>

              <div className="space-y-5">
                {KEYS_5.map((key, index) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#fbf6ec] text-gold flex items-center justify-center flex-shrink-0">
                        {mistakeIcons[index]}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-charcoal mb-3">
                          {t(`${ARTICLE_KEY}.mistakes.${key}.title`)}
                        </h3>
                        <p className="text-gray-600 leading-8 mb-0">
                          {t(`${ARTICLE_KEY}.mistakes.${key}.text`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.reinstatement_title`)}
              </h2>

              <p className="text-gray-600 text-base md:text-[1.05rem] leading-[1.85] mb-6">
                {t(`${ARTICLE_KEY}.reinstatement_intro`)}
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#f4eee4]">
                    <tr>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.reinstatement_headers.level`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.reinstatement_headers.cost`)}
                      </th>
                      <th className="p-4 text-xs uppercase tracking-[0.16em] text-charcoal">
                        {t(`${ARTICLE_KEY}.reinstatement_headers.works`)}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {KEYS_3.map((key) => {
                      const row = getArray(`${ARTICLE_KEY}.reinstatement_rows.${key}`);
                      return (
                        <tr key={key} className="border-t border-gray-200">
                          <td className="p-4 text-sm font-semibold text-charcoal">{row[0]}</td>
                          <td className="p-4 text-sm text-gray-700">{row[1]}</td>
                          <td className="p-4 text-sm leading-7 text-gray-600">{row[2]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 leading-8">
                {t(`${ARTICLE_KEY}.reinstatement_p`)}{' '}
                <Link
                  to="/commercial/reinstatement"
                  className="text-gold font-semibold underline underline-offset-4"
                >
                  {t(`${ARTICLE_KEY}.reinstatement_link`)}
                </Link>
                .
              </p>
            </section>

            <section className="mb-16 rounded-3xl border border-gray-200 bg-[#fffdf8] p-7 md:p-9 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-gold font-bold mb-3">
                {t(`${ARTICLE_KEY}.related_label`)}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5">
                {t(`${ARTICLE_KEY}.related_title`)}
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-[1.05rem] leading-[1.85]">
                <p>
                  <Trans
                    i18nKey={`${ARTICLE_KEY}.related_office_cost`}
                    components={{
                      officeCostLink: (
                        <Link
                          to="/insights/office-renovation-cost-singapore"
                          className="text-charcoal font-semibold underline underline-offset-4 hover:text-gold transition-colors"
                        />
                      ),
                    }}
                  />
                </p>
                <p>
                  <Trans
                    i18nKey={`${ARTICLE_KEY}.related_office_timeline`}
                    components={{
                      officeTimelineLink: (
                        <Link
                          to="/insights/office-renovation-timeline-singapore"
                          className="text-charcoal font-semibold underline underline-offset-4 hover:text-gold transition-colors"
                        />
                      ),
                    }}
                  />
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-5 pb-4 border-b border-gray-200">
                {t(`${ARTICLE_KEY}.faq_title`)}
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.q}
                    open={index === 0}
                    className="group rounded-2xl border border-gray-200 bg-[#fffdf8] p-5"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-charcoal flex items-start justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-gold group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-gray-600 leading-8 mt-4 mb-0">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-[#151515] text-white p-7 md:p-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
                    {t(`${ARTICLE_KEY}.cta_title`)}
                  </h2>
                  <p className="text-gray-300 leading-8 mb-0">{t(`${ARTICLE_KEY}.cta_text`)}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a
                  href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20would%20like%20to%20check%20commercial%20renovation%20cost%20for%20my%20unit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-gold-hover transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t(`${ARTICLE_KEY}.cta_whatsapp`)}
                </a>

                <Link
                  to="/renovation-cost-calculator"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-charcoal transition-colors"
                >
                  {t(`${ARTICLE_KEY}.cta_calculator`)}
                </Link>

                <Link
                  to="/commercial"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-charcoal transition-colors"
                >
                  {t(`${ARTICLE_KEY}.cta_services`)}
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
