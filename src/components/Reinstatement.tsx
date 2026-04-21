import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Clock, Banknote, CheckCircle2, ClipboardCheck, Hammer, ArrowRight, Building2, HardHat, Zap, Trash2, Mail, ExternalLink } from 'lucide-react';

export default function Reinstatement() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I%20need%20a%20site%20survey%20for%20a%20reinstatement%20project.`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Office & Shopping Mall Reinstatement Singapore",
        "description": "Professional reinstatement services for Singapore CBD offices and major shopping malls. BCA-registered and HDB-licensed (HB-02-5250G) contractor.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "ID Work Studio",
          "identifier": "HB-02-5250G",
          "address": { "@type": "PostalAddress", "addressLocality": "Singapore" }
        },
        "areaServed": "Singapore"
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>{t('reinstatement_page.hero.title_main')} | ID Work Studio</title>
        <meta name="description" content="Professional commercial reinstatement for Singapore offices and malls. HDB License: HB-02-5250G." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative pt-40 pb-24 bg-charcoal text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.35), rgba(26, 26, 26, 0.45)), url("/assets/reinstatement-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block bg-black/40 inline-block px-4 py-1 rounded backdrop-blur-sm">
              {t('reinstatement_page.hero.badge')}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight drop-shadow-lg">
              {t('reinstatement_page.hero.title_main')} <br />
              <span className="italic text-gold font-light">{t('reinstatement_page.hero.title_italic')}</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 leading-relaxed font-semibold max-w-2xl mx-auto drop-shadow-md">
              {t('reinstatement_page.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold-hover transition-all shadow-2xl">
                {t('reinstatement_page.hero.whatsapp')}
              </a>
              <a href="mailto:contact@idworkstudio.com?subject=Lease Reinstatement Query" className="bg-white text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2">
                <Mail size={18} /> {t('reinstatement_page.hero.email')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-10 md:gap-20">
          <div className="text-center text-xs font-bold uppercase tracking-widest flex items-center gap-2">
             <ShieldCheck className="text-gold" /> HB-02-5250G
          </div>
          <div className="text-center">
            <p className="text-gold font-bold text-xl">S$5 - S$30</p>
            <p className="text-[10px] uppercase text-gray-400 tracking-widest">{t('reinstatement_page.stats.cost_label')}</p>
          </div>
          <div className="text-center">
            <p className="text-gold font-bold text-xl">2 - 6 Weeks</p>
            <p className="text-[10px] uppercase text-gray-400 tracking-widest">{t('reinstatement_page.stats.timeline_label')}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 italic text-dark-charcoal underline decoration-gold/20 underline-offset-8">
            {t('reinstatement_page.faq.title')}
          </h2>
          <div className="space-y-6">
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-lg mb-3 flex gap-2"><ArrowRight className="text-gold" /> {t('reinstatement_page.faq.q1')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('reinstatement_page.faq.a1')}</p>
             </div>
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-lg mb-3 flex gap-2"><ArrowRight className="text-gold" /> {t('reinstatement_page.faq.q2')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('reinstatement_page.faq.a2')}</p>
             </div>
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-lg mb-3 flex gap-2"><ArrowRight className="text-gold" /> {t('reinstatement_page.faq.q3')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('reinstatement_page.faq.a3')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold text-dark-charcoal text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">{t('reinstatement_page.cta.title')}</h2>
          <p className="mb-12 text-lg font-bold max-w-xl mx-auto opacity-80">{t('reinstatement_page.cta.subtitle')}</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-dark-charcoal text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl">
            {t('reinstatement_page.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}