import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Commercial from './components/Commercial';
import Reinstatement from './components/Reinstatement';
import OfficeRenovation from './components/OfficeRenovation';
import RetailMallRenovation from './components/RetailMallRenovation';
import ShophouseRenovation from './components/ShophouseRenovation';
import CompliancePermits from './components/CompliancePermits';
import Residential from './components/Residential';
import Insights from './components/Insights';
import ArticleRenovationCost2026 from './components/ArticleRenovationCostSingapore2026';
import ArticleHDBTimeline from './components/ArticleHDBTimeline';
import ArticleRenovationMistakes from './components/ArticleRenovationMistakes';
import CommercialRenovationCostSingapore from './components/CommercialRenovationCostSingapore';
import OfficeRenovationCostSingapore from './components/OfficeRenovationCostSingapore';
import OfficeRenovationTimelineSingapore from './components/OfficeRenovationTimelineSingapore';
import StickyMobileNav from './components/StickyMobileNav';
import ScrollToHashElement from './components/ScrollToHashElement';

import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';

function GARouteTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);

  return null;
}

function QueryParamStripper() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function LanguagePersistence() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return null;
}


function HomepageAuthoritySections() {
  const { t } = useTranslation();

  const quickAnswers = t('homepage_authority.quick_answers.items', { returnObjects: true }) as Array<{
    title: string;
    text: string;
    link: string;
    label: string;
  }>;
  const featuredInsights = t('homepage_authority.featured_insights.items', { returnObjects: true }) as Array<{
    title: string;
    text: string;
    link: string;
  }>;
  const planningTools = t('homepage_authority.planning_tools.items', { returnObjects: true }) as Array<{
    title: string;
    text: string;
    href: string;
    label: string;
  }>;
  const trustSignals = t('homepage_authority.trust.signals', { returnObjects: true }) as string[];
  const projectSnippets = t('homepage_authority.project_snippets.items', { returnObjects: true }) as Array<{
    type: string;
    size: string;
    range: string;
    duration: string;
  }>;
  const homepageFaqs = t('homepage_authority.faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
    link: string;
  }>;

  return (
    <main className="bg-[#f8f5ef] text-dark-charcoal">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl rounded-[2rem] border border-gold/15 bg-white/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t('homepage_authority.quick_answers.eyebrow')}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-5xl">{t('homepage_authority.quick_answers.title')}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              {t('homepage_authority.quick_answers.subtitle')}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {quickAnswers.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <h3 className="font-serif text-2xl font-semibold text-dark-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
                <Link to={item.link} className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:text-gold-hover">
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2rem] border border-gold/15 bg-white/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t('homepage_authority.featured_insights.eyebrow')}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{t('homepage_authority.featured_insights.title')}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              {t('homepage_authority.featured_insights.subtitle')}
            </p>
          </div>

          <div className="grid gap-4">
            {featuredInsights.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.09)]"
              >
                <h3 className="font-serif text-2xl font-semibold text-dark-charcoal group-hover:text-gold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-gold">{t('homepage_authority.featured_insights.read_article')}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-dark-charcoal p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t('homepage_authority.planning_tools.eyebrow')}</p>
              <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{t('homepage_authority.planning_tools.title')}</h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                {t('homepage_authority.planning_tools.subtitle')}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {planningTools.map((tool) => (
                <a key={tool.title} href={tool.href} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-gold/10">
                  <h3 className="font-serif text-2xl font-semibold text-white">{tool.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{tool.text}</p>
                  <span className="mt-5 inline-flex rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-dark-charcoal transition-colors hover:bg-gold-hover">
                    {tool.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t('homepage_authority.trust.eyebrow')}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{t('homepage_authority.trust.title')}</h2>
            <div className="mt-6 grid gap-3">
              {trustSignals.map((item) => (
                <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f5ef] p-4 text-sm leading-6 text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t('homepage_authority.project_snippets.eyebrow')}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{t('homepage_authority.project_snippets.title')}</h2>
            <div className="mt-6 grid gap-4">
              {projectSnippets.map((project) => (
                <article key={project.type} className="rounded-2xl border border-gold/20 bg-[#f8f5ef] p-5">
                  <h3 className="font-serif text-2xl font-semibold text-dark-charcoal">{project.type}</h3>
                  <p className="mt-2 text-sm text-gray-600">{project.size}</p>
                  <p className="mt-2 text-sm font-semibold text-dark-charcoal">{project.range}</p>
                  <p className="mt-1 text-sm text-gray-600">{project.duration}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl rounded-[2rem] border border-gold/15 bg-white/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t('homepage_authority.faq.eyebrow')}</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{t('homepage_authority.faq.title')}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {homepageFaqs.map((item) => (
              <div key={item.question} className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.045)]">
                <h3 className="text-base font-semibold text-dark-charcoal">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.answer}</p>
                <Link to={item.link} className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:text-gold-hover">
                  {t('homepage_authority.faq.learn_more')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>ID Work Studio | Renovation & Interior Design Singapore | Woodlands</title>
        <meta
          name="description"
          content="Singapore's trusted renovation and interior design firm. BCA & HDB registered. Specialising in commercial fit-outs, reinstatement & residential renovations."
        />
        <link rel="canonical" href="https://idworkstudio.com/" />
      </Helmet>

      <Hero />
      <HomepageAuthoritySections />
      <Process />
      <Services />
      <Contact />
      <StickyMobileNav />
    </>
  );
}

function Layout() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <LanguagePersistence />
      <QueryParamStripper />
      <GARouteTracker />
      <ScrollToHashElement />

      <div className="min-h-screen bg-white font-sans text-charcoal">
        <Navbar />

        <Outlet />

        <footer className="bg-black text-white py-12 border-t border-gray-800 pb-[90px] md:pb-[90px] lg:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white font-semibold tracking-[0.2em] uppercase text-sm mb-5">
              ID Work Studio
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-gray-400 text-xs">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-gold/60 flex-shrink-0" />
                11 Woodlands Close #03-10 Woodlands 11 Singapore 737853
              </span>

              <a
                href="tel:+6568162872"
                className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200"
              >
                <Phone className="w-3 h-3 text-gold/60 flex-shrink-0" />
                6816 2872
              </a>

              <a
                href="mailto:contact@idworkstudio.com"
                className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200"
              >
                <Mail className="w-3 h-3 text-gold/60 flex-shrink-0" />
                contact@idworkstudio.com
              </a>

              <span className="flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-gold/60 flex-shrink-0" />
                UEN 201539658C
              </span>
            </div>

            <div className="mb-6 flex justify-center space-x-8">
              <a
                href="https://services2.hdb.gov.sg/webapp/FI10AWBIZ/"
                target="_blank"
                rel="noopener noreferrer"
                title="Verify ID Work Studio on HDB Renovation Contractor Registry"
                className="text-white text-xs uppercase tracking-[0.12rem] border border-gold/50 px-6 py-2 rounded-full hover:bg-gold hover:text-dark-charcoal transition-all backdrop-blur-sm"
              >
                {t('accreditation.hdb')}
              </a>

              <a
                href="https://www.bca.gov.sg/eBACS/BCA_DIRECTORY/Search/SearchResults?searchKey=id%20work%20s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs uppercase tracking-[0.12rem] border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-dark-charcoal transition-all backdrop-blur-sm"
              >
                {t('accreditation.bca')}
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ID Work Studio. {t('footer.rights')}{' '}
              <span className="text-xs opacity-50">v1.1</span>
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },

      { path: 'residential', element: <Residential /> },
      { path: 'commercial', element: <Commercial /> },

      { path: 'commercial/reinstatement', element: <Reinstatement /> },
      { path: 'commercial/office-renovation', element: <OfficeRenovation /> },
      { path: 'commercial/retail-mall-renovation', element: <RetailMallRenovation /> },
      { path: 'commercial/shophouse-renovation', element: <ShophouseRenovation /> },
      { path: 'commercial/permits-compliance', element: <CompliancePermits /> },

      { path: 'insights', element: <Insights /> },
      { path: 'insights/renovation-cost-singapore-2026', element: <ArticleRenovationCost2026 /> },
      { path: 'insights/hdb-renovation-timeline-singapore', element: <ArticleHDBTimeline /> },
      { path: 'insights/renovation-mistakes-singapore', element: <ArticleRenovationMistakes /> },
      { path: 'insights/commercial-renovation-cost-singapore', element: <CommercialRenovationCostSingapore /> },
      { path: 'insights/office-renovation-cost-singapore', element: <OfficeRenovationCostSingapore /> },
      { path: 'insights/office-renovation-timeline-singapore', element: <OfficeRenovationTimelineSingapore /> },

      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];

export default routes;