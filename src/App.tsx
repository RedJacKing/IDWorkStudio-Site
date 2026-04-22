import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// ADDED: four icons for the footer NAP row — lucide-react is already installed
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

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>ID Work Studio | Renovation &amp; Interior Design Singapore | Woodlands</title>
        <meta name="description" content="Singapore's trusted renovation and interior design firm. BCA & HDB registered. Specialising in commercial fit-outs, reinstatement & residential renovations." />
        <link rel="canonical" href="https://idworkstudio.com/" />
        <meta property="og:url" content="https://idworkstudio.com/" />
        <meta property="og:title" content="ID Work Studio | Renovation &amp; Interior Design Singapore | Woodlands" />
        <meta property="og:description" content="BCA-registered &amp; HDB-registered renovation and interior design firm in Woodlands, Singapore. Commercial fit-outs, office reinstatement, and residential renovations across Singapore." />
        <meta property="og:image" content="https://idworkstudio.com/og-preview.jpg" />
      </Helmet>
      <Hero />
      <Process />
      <Services />
      <Contact />
      <StickyMobileNav />
    </>
  );
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

export default function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguagePersistence />
        <QueryParamStripper />
        <GARouteTracker />
        <ScrollToHashElement />
        <div className="min-h-screen bg-white font-sans text-charcoal">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/commercial/reinstatement" element={<Reinstatement />} />
            <Route path="/commercial/office-renovation" element={<OfficeRenovation />} />
            <Route path="/commercial/retail-mall-renovation" element={<RetailMallRenovation />} />
            <Route path="/commercial/shophouse-renovation" element={<ShophouseRenovation />} />
            <Route path="/commercial/permits-compliance" element={<CompliancePermits />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>

          {/*
            FOOTER — two changes from original:
            1. NAP + UEN row added above the badges (address, phone, email, UEN).
               These appear on every page automatically since the footer lives in
               App.tsx. AI engines read this on every crawl as an entity trust signal.
            2. HDB badge URL updated from old BN31AWERRCMobile path to current
               FI10AWBIZ portal (HDB renewed their site in early 2026).
            Everything else — translations, classes, copyright, BCA link — unchanged.
          */}
          <footer className="bg-black text-white py-12 border-t border-gray-800 pb-[90px] md:pb-[90px] lg:pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

              {/* Company name — entity anchor visible on every page */}
              <p className="text-white font-semibold tracking-[0.2em] uppercase text-sm mb-5">
                ID Work Studio
              </p>

              {/* NAP + UEN row — added for AI/GEO entity verification */}
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

              {/* Credential badges — preserved exactly, HDB URL updated */}
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

              {/* Copyright — preserved exactly */}
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} ID Work Studio. {t('footer.rights')}{' '}
                <span className="text-xs opacity-50">v1.1</span>
              </p>

            </div>
          </footer>

        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
