import { MessageCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function StickyMobileNav() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20floorplan%20consultation.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-safe">
      <div className="grid grid-cols-2 gap-1 p-2">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3 rounded-lg font-medium active:scale-95 transition-transform"
        >
          <MessageCircle size={20} />
          <span className="text-sm">{t('sticky_nav.consult')}</span>
        </a>
        <a 
          href="#contact"
          className="flex items-center justify-center space-x-2 bg-charcoal text-white py-3 rounded-lg font-medium active:scale-95 transition-transform"
        >
          <Phone size={20} />
          <span className="text-sm">{t('sticky_nav.contact')}</span>
        </a>
      </div>
    </div>
  );
}
