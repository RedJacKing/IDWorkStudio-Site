import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

function LandingPage() {
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

export default function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToHashElement />
        <div className="min-h-screen bg-white font-sans text-charcoal">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          
          <footer className="bg-black text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-6 flex justify-center space-x-8">
                <a 
                  href="https://services2.hdb.gov.sg/webapp/BN31AWERRCMobile/BN31PContractorResult.jsp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 text-sm uppercase tracking-widest border border-gray-700 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {t('accreditation.hdb')}
                </a>
                <a 
                  href="https://www.bca.gov.sg/eBACS/BCA_DIRECTORY/Search/SearchResults?searchKey=id%20work%20s" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 text-sm uppercase tracking-widest border border-gray-700 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
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
