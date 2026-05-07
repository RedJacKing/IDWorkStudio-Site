import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, CalendarDays, MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ArticleCard = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export default function Insights() {
  const { t } = useTranslation();

  const articles: ArticleCard[] = [
    {
      slug: '/insights/renovation-cost-singapore-2026',
      category: t('insights_page.articles.1.category'),
      title: t('insights_page.articles.1.title'),
      excerpt: t('insights_page.articles.1.excerpt'),
      date: '2026-04-23',
      readTime: t('insights_page.articles.1.read_time'),
    },
    {
      slug: '/insights/hdb-renovation-timeline-singapore',
      category: t('insights_page.articles.2.category'),
      title: t('insights_page.articles.2.title'),
      excerpt: t('insights_page.articles.2.excerpt'),
      date: '2026-04-23',
      readTime: t('insights_page.articles.2.read_time'),
    },
    {
      slug: '/insights/renovation-mistakes-singapore',
      category: t('insights_page.articles.3.category'),
      title: t('insights_page.articles.3.title'),
      excerpt: t('insights_page.articles.3.excerpt'),
      date: '2026-04-23',
      readTime: t('insights_page.articles.3.read_time'),
    },
    {
      slug: '/insights/commercial-renovation-cost-singapore',
      category: t('insights_page.articles.4.category'),
      title: t('insights_page.articles.4.title'),
      excerpt: t('insights_page.articles.4.excerpt'),
      date: '2026-05-03',
      readTime: t('insights_page.articles.4.read_time'),
    },
    {
      slug: '/insights/office-renovation-cost-singapore',
      category: t('insights_page.articles.5.category'),
      title: t('insights_page.articles.5.title'),
      excerpt: t('insights_page.articles.5.excerpt'),
      date: '2026-05-04',
      readTime: t('insights_page.articles.5.read_time'),
    },
    {
      slug: '/insights/office-renovation-timeline-singapore',
      category: t('insights_page.articles.6.category'),
      title: t('insights_page.articles.6.title'),
      excerpt: t('insights_page.articles.6.excerpt'),
      date: '2026-05-04',
      readTime: t('insights_page.articles.6.read_time'),
    },
    {
      slug: '/insights/overseas-renovation-shopping-singapore',
      category: t('insights_page.articles.7.category'),
      title: t('insights_page.articles.7.title'),
      excerpt: t('insights_page.articles.7.excerpt'),
      date: '2026-05-07',
      readTime: t('insights_page.articles.7.read_time'),
    },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ID Work Studio Insights",
    "url": "https://idworkstudio.com/insights",
    "description": t('insights_page.meta.description'),
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://idworkstudio.com${article.slug}`,
        "name": article.title,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idworkstudio.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://idworkstudio.com/insights" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t('insights_page.meta.title')}</title>
        <meta name="description" content={t('insights_page.meta.description')} />
        <link rel="canonical" href="https://idworkstudio.com/insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/insights" />
        <meta property="og:title" content={t('insights_page.meta.title')} />
        <meta property="og:description" content={t('insights_page.meta.description')} />
        <meta property="og:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('insights_page.meta.title')} />
        <meta name="twitter:description" content={t('insights_page.meta.description')} />
        <meta name="twitter:image" content="https://idworkstudio.com/images/insights-hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen selection:bg-gold selection:text-dark-charcoal">
        <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/insights-hero.jpg"
              alt="Editorial interior setting for ID Work Studio insights"
              className="w-full h-full object-cover object-center opacity-55 scale-105"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-4 border border-champagne text-champagne rounded-full text-xs uppercase tracking-[0.25em] mb-5"
            >
              {t('insights_page.hero.badge')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight leading-tight"
            >
              {t('insights_page.hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light"
            >
              {t('insights_page.hero.subtitle')}
            </motion.p>
          </div>
        </section>

        <section className="py-24 bg-off-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
                {t('insights_page.listing.eyebrow')}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6 text-charcoal uppercase tracking-tighter">
                {t('insights_page.listing.title')}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6" />
              <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                {t('insights_page.listing.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] uppercase tracking-[0.25em] font-bold">
                        {article.category}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif text-charcoal leading-tight mb-4">
                      <a href={article.slug} className="hover:text-gold transition-colors duration-200">
                        {article.title}
                      </a>
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-[0.2em] mb-5">
                      <CalendarDays className="w-4 h-4" />
                      <time dateTime={article.date}>{article.date}</time>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {article.excerpt}
                    </p>

                    <a
                      href={article.slug}
                      className="mt-8 inline-flex items-center gap-2 text-charcoal hover:text-gold text-xs uppercase tracking-[0.22em] font-bold transition-colors duration-200"
                    >
                      {t('insights_page.listing.read_more')}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-dark-charcoal text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
                  {t('insights_page.footer_block.eyebrow')}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6 uppercase tracking-tighter">
                  {t('insights_page.footer_block.title')}
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                  {t('insights_page.footer_block.subtitle')}
                </p>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 md:p-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold mt-1" />
                    <div>
                      <p className="text-white font-bold uppercase tracking-[0.18em] text-xs mb-1">
                        {t('insights_page.footer_block.address_label')}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        11 Woodlands Close, Woodlands 11, #03-10<br />
                        Singapore 737853
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold mt-1" />
                    <div>
                      <p className="text-white font-bold uppercase tracking-[0.18em] text-xs mb-1">
                        {t('insights_page.footer_block.phone_label')}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">6816 2872</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold mt-1" />
                    <div>
                      <p className="text-white font-bold uppercase tracking-[0.18em] text-xs mb-1">
                        {t('insights_page.footer_block.email_label')}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">contact@idworkstudio.com</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/6598333085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-10 px-10 py-5 bg-gold text-dark-charcoal text-xs uppercase tracking-[0.22em] hover:bg-gold-hover transition-all duration-300 font-bold rounded-full"
                >
                  {t('insights_page.footer_block.cta')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
