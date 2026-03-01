import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Helper to determine if link is active
  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="fixed w-full z-50">
      {/* Accreditation Bar */}
      <div className="bg-charcoal text-white text-xs py-2 text-center tracking-widest uppercase font-medium border-b border-champagne/20">
        <a 
          href="https://services2.hdb.gov.sg/webapp/BN31AWERRCMobile/BN31PListingContractor.jsp" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Search for ID WORK STUDIO"
          className="text-champagne font-bold hover:text-white transition-colors"
        >
          {t('accreditation.hdb')}
        </a> 
        <span className="mx-2 text-gray-500">|</span> 
        <a 
          href="https://www.bca.gov.sg/eBACS/BCA_DIRECTORY/Search/SearchResults?searchKey=id%20work%20s" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-champagne font-bold hover:text-white transition-colors"
        >
          {t('accreditation.bca')}
        </a>{' '}
        {t('accreditation.firm')}
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between h-auto lg:h-20 items-center py-4 lg:py-0">
            <div className="flex-shrink-0 flex items-center mb-4 lg:mb-0">
              <Link to="/" className="font-serif text-2xl md:max-lg:text-[1.2rem] font-bold tracking-tighter text-charcoal">ID WORK STUDIO</Link>
            </div>
            
            <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
              <Link to="/#home" className="text-charcoal/80 hover:text-champagne transition-colors text-sm uppercase tracking-[0.12rem] font-light font-sans">{t('nav.home')}</Link>
              <Link to="/residential" className={`text-sm uppercase tracking-[0.12rem] font-light font-sans transition-colors ${isActive('/residential') ? 'text-champagne' : 'text-charcoal/80 hover:text-champagne'}`}>{t('nav.residential')}</Link>
              <Link to="/commercial" className={`text-sm uppercase tracking-[0.12rem] font-light font-sans transition-colors ${isActive('/commercial') ? 'text-champagne' : 'text-charcoal/80 hover:text-champagne'}`}>{t('nav.commercial')}</Link>
              <Link to="/gallery" className={`text-sm uppercase tracking-[0.12rem] font-light font-sans transition-colors ${isActive('/gallery') ? 'text-champagne' : 'text-charcoal/80 hover:text-champagne'}`}>{t('nav.gallery')}</Link>
              <Link to="/#contact" className="text-charcoal/80 hover:text-champagne transition-colors text-sm uppercase tracking-[0.12rem] font-light font-sans">{t('nav.contact')}</Link>
              
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-charcoal/80 hover:text-champagne transition-colors text-sm uppercase tracking-[0.12rem] font-light font-sans ml-4 border border-charcoal/20 px-3 py-1 rounded-full"
              >
                <Globe size={14} />
                <span>{i18n.language === 'en' ? '中文' : 'EN'}</span>
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-charcoal/80 hover:text-champagne transition-colors text-xs uppercase tracking-[0.1rem] font-light font-sans border border-charcoal/20 px-3 py-1 rounded-full"
              >
                <Globe size={12} />
                <span>{i18n.language === 'en' ? '中文' : 'EN'}</span>
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-gold hover:text-gold-hover focus:outline-none">
                {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              <Link to="/#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-light text-charcoal hover:text-champagne hover:bg-gray-50 uppercase tracking-[0.15rem]">{t('nav.home')}</Link>
              <Link to="/residential" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-light text-charcoal hover:text-champagne hover:bg-gray-50 uppercase tracking-[0.15rem]">{t('nav.residential')}</Link>
              <Link to="/commercial" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-light text-charcoal hover:text-champagne hover:bg-gray-50 uppercase tracking-[0.15rem]">{t('nav.commercial')}</Link>
              <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-light text-charcoal hover:text-champagne hover:bg-gray-50 uppercase tracking-[0.15rem]">{t('nav.gallery')}</Link>
              <Link to="/#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-light text-charcoal hover:text-champagne hover:bg-gray-50 uppercase tracking-[0.15rem]">{t('nav.contact')}</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
