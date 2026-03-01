import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Commercial from './components/Commercial';
import Residential from './components/Residential';
import StickyMobileNav from './components/StickyMobileNav';
import ScrollToHashElement from './components/ScrollToHashElement';
import { useTranslation } from 'react-i18next';

function QueryParamStripper() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search) {
      // Strip query parameters and redirect to the clean URL
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function LandingPage() {
// ... (rest of the component)
  return (
    <>
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
        <ScrollToHashElement />
        <div className="min-h-screen bg-white font-sans text-charcoal">
          <Helmet>
            <link rel="canonical" href="https://idworkstudio.com" />
          </Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          
          <footer className="bg-black text-white py-12 border-t border-gray-800 pb-[90px] md:pb-[90px] lg:pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-6 flex justify-center space-x-8">
                <a 
                  href="https://services2.hdb.gov.sg/webapp/BN31AWERRCMobile/BN31PListingContractor.jsp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Search for ID WORK STUDIO"
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
                &copy; {new Date().getFullYear()} ID Work Studio. {t('footer.rights')} <span className="text-xs opacity-50">v1.1</span>
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
