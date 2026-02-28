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
        <span className="text-champagne font-bold">{t('accreditation.hdb')}</span> <span className="mx-2 text-gray-500">|</span> <span className="text-champagne font-bold">{t('accreditation.bca')}</span> {t('accreditation.firm')}
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-serif text-2xl font-bold tracking-tighter text-charcoal">ID WORK STUDIO</Link>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/#home" className="text-charcoal/80 hover:text-champagne transition-colors text-sm uppercase tracking-widest font-medium">{t('nav.home')}</Link>
              <Link to="/residential" className={`text-sm uppercase tracking-widest font-medium transition-colors ${isActive('/residential') ? 'text-champagne' : 'text-charcoal/80 hover:text-champagne'}`}>{t('nav.residential')}</Link>
              <Link to="/commercial" className={`text-sm uppercase tracking-widest font-medium transition-colors ${isActive('/commercial') ? 'text-champagne' : 'text-charcoal/80 hover:text-champagne'}`}>{t('nav.commercial')}</Link>
              <Link to="/gallery" className={`text-sm uppercase tracking-widest font-medium transition-colors ${isActive('/gallery') ? 'text-champagne' : 'text-charcoal/80 hover:text-champagne'}`}>{t('nav.gallery')}</Link>
              <Link to="/#contact" className="text-charcoal/80 hover:text-champagne transition-colors text-sm uppercase tracking-widest font-medium">{t('nav.contact')}</Link>
              
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-charcoal/80 hover:text-champagne transition-colors text-sm uppercase tracking-widest font-medium ml-4 border border-gray-200 px-3 py-1 rounded-full"
              >
                <Globe size={14} />
                <span>{i18n.language === 'en' ? '中文' : 'EN'}</span>
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-charcoal/80 hover:text-champagne transition-colors text-xs uppercase tracking-widest font-medium border border-gray-200 px-2 py-1 rounded-full"
              >
                <Globe size={14} />
                <span>{i18n.language === 'en' ? '中文' : 'EN'}</span>
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal hover:text-black focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-charcoal hover:text-champagne hover:bg-gray-50">{t('nav.home')}</Link>
              <Link to="/residential" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-charcoal hover:text-champagne hover:bg-gray-50">{t('nav.residential')}</Link>
              <Link to="/commercial" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-charcoal hover:text-champagne hover:bg-gray-50">{t('nav.commercial')}</Link>
              <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-charcoal hover:text-champagne hover:bg-gray-50">{t('nav.gallery')}</Link>
              <Link to="/#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-charcoal hover:text-champagne hover:bg-gray-50">{t('nav.contact')}</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
