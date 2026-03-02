import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": { "home": "Home", "residential": "Residential", "commercial": "Commercial", "gallery": "Gallery", "contact": "Contact" },
      "accreditation": { "hdb": "HDB-Approved", "bca": "BCA-Registered", "firm": "Firm" },
      "hero": {
        "title_main": "Curated Interiors ",
        "title_sub": "for the Modern Visionary",
        "subtitle": "Premium interior design and renovation services in Singapore. With over a decade of trusted excellence, we transform homes, offices, and retail spaces into masterpieces.",
        "cta": "View Our Work"
      },
      "residential_page": {
        "hero": {
          "badge": "",
          "title": "Modern Visionary Living <br/> for Singapore Homeowners",
          "subtitle": "BCA-Registered & HDB-Approved Partner. We handle all HDB permits and structural submissions for your peace of mind.",
          "cta": "Book a Home Consultation"
        },
        "lifestyle": {
          "title": "Lifestyle-First Design Solutions",
          "subtitle": "Crafting spaces that reflect your personality and enhance your daily life through innovative design.",
          "items": {
            "1": { "title": "Space-Saving Carpentry", "desc": "Bespoke multi-functional carpentry designed for Singapore's urban layouts." },
            "2": { "title": "Smart Home Integration", "desc": "Future-proof your home with seamless smart technology." },
            "3": { "title": "Trending Aesthetics", "desc": "Mastering Japandi, Warm Minimalism, and Modern Luxury." }
          }
        },
        "insights": {
          "title": "Expert Insights for 2026",
          "q1": { "q": "What is the cost of a 4-room BTO renovation in 2026?", "a": "A typical range is $45,000 to $65,000." },
          "q2": { "q": "How can I maximize storage in a small HDB layout?", "a": "Utilize vertical space with floor-to-ceiling carpentry." }
        },
        "cta": { "title": "Start Your Home Transformation", "subtitle": "Consult with our HDB-approved experts today.", "button": "Book a Home Consultation" }
      },
      "footer": { "rights": "All rights reserved." }
    }
  },
  zh: {
    translation: {
      "residential_page": {
        "hero": {
          "badge": "",
          "title": "现代远见生活 <br/> 为新加坡业主打造",
          "subtitle": "BCA注册与HDB认可的合作伙伴。",
          "cta": "预约家居咨询"
        }
      }
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;