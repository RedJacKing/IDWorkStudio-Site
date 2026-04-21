import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, ArrowRight, CheckCircle2, Mail } from 'lucide-react';

export default function Reinstatement() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I%20need%20a%20site%20survey%20for%20a%20reinstatement%20project.`;

  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>{t('reinstatement_page.hero.title_main')} | ID Work Studio</title>
        <meta name="description" content="Professional commercial reinstatement for Singapore offices and malls. HDB License: HB-02-5250G." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative pt-40 pb-24 bg-charcoal text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.5)), url("/assets/reinstatement-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block bg-black/40 inline-block px-4 py-1 rounded backdrop-blur-sm">
              {t('reinstatement_page.hero.badge')}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {t('reinstatement_page.hero.title_main')} <br />
              <span className="italic text-gold font-light">{t('reinstatement_page.hero.title_italic')}</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto">
              {t('reinstatement_page.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold-hover transition-all">
                {t('reinstatement_page.hero.whatsapp')}
              </a>
              <a href="mailto:contact@idworkstudio.com?subject=Lease Reinstatement Query" className="bg-white text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Mail size={18} /> {t('reinstatement_page.hero.email')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 italic text-dark-charcoal">
            {t('reinstatement_page.faq.title')}
          </h2>
          <div className="space-y-6">
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-lg mb-3 flex gap-2"><ArrowRight className="text-gold" /> {t('reinstatement_page.faq.q1')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('reinstatement_page.faq.a1')}</p>
             </div>
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-lg mb-3 flex gap-2"><ArrowRight className="text-gold" /> {t('reinstatement_page.faq.q2')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('reinstatement_page.faq.a2')}</p>
             </div>
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-lg mb-3 flex gap-2"><ArrowRight className="text-gold" /> {t('reinstatement_page.faq.q3')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('reinstatement_page.faq.a3')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold text-dark-charcoal text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">{t('reinstatement_page.cta.title')}</h2>
          <p className="mb-12 text-lg font-bold max-w-xl mx-auto opacity-80">{t('reinstatement_page.cta.subtitle')}</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-dark-charcoal text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all">
            {t('reinstatement_page.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}