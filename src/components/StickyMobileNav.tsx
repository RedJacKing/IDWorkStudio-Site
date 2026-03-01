import { MessageCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function StickyMobileNav() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20floorplan%20consultation.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark-charcoal border-t border-gold shadow-[0_-4px_10px_rgba(0,0,0,0.3)] pb-safe">
      <div className="grid grid-cols-2 gap-0">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 text-gold py-5 font-bold uppercase tracking-widest active:bg-white/5 transition-colors"
        >
          <MessageCircle size={18} />
          <span className="text-xs">{t('sticky_nav.consult')}</span>
        </a>
        <a 
          href="#contact"
          className="flex items-center justify-center space-x-2 bg-gold text-dark-charcoal py-5 font-bold uppercase tracking-widest active:bg-gold-hover transition-colors"
        >
          <Phone size={18} />
          <span className="text-xs">{t('sticky_nav.contact')}</span>
        </a>
      </div>
    </div>
  );
}
