import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import Navbar from './components/Navbar';
import ScrollToHashElement from './components/ScrollToHashElement';
import { useTranslation } from 'react-i18next';

function GARouteTracker() {
  const location = useLocation();

  useEffect(() => {
    import('react-ga4').then(({ default: ReactGA }) => {
      ReactGA.initialize('G-0R2LXVRM0R');
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname + location.search,
        title: document.title,
      });
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

export default function App({ children }: { children?: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <LanguagePersistence />
      <QueryParamStripper />
      <GARouteTracker />
      <ScrollToHashElement />
      <div className="min-h-screen bg-white font-sans text-charcoal">
        <Navbar />

        {children}

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
