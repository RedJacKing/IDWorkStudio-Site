import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Clock, Banknote, CheckCircle2, ClipboardCheck, Hammer, ArrowRight, Building2, HardHat, Zap, Trash2 } from 'lucide-react';

export default function Reinstatement() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I%20need%20a%20reinstatement%20quote.%20Size:%20[sqft],%20Handover:%20[Date].`;

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Commercial Unit Reinstatement Singapore | Office & Retail | ID Work Studio</title>
        <meta name="description" content="Professional commercial reinstatement in Singapore. Restore your office or retail shop to original condition. S$5-S$30/sqft, 2-6 week timeline. BCA & HDB Licensed." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative pt-40 pb-24 bg-charcoal text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.75), rgba(26, 26, 0.85)), url("/assets/reinstatement-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              BCA Registered • HDB Licensed
            </span>
            <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
              Commercial <br />
              <span className="italic text-gold font-light">Unit Reinstatement</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl mx-auto font-sans">
              Professional handover services for Singapore offices and retail spaces. 
              Clear scope, practical 2–6 week timelines, and transparent S$5–S$30/sqft pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold-hover transition-all shadow-lg hover:shadow-gold/20">
                Request Site Survey
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="border border-white/40 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-dark-charcoal transition-all">
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Stats Section */}
      <section className="py-12 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-gold font-bold text-2xl mb-1">S$5 - S$30</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Cost per Sq Ft</p>
          </div>
          <div>
            <p className="text-gold font-bold text-2xl mb-1">2 - 6 Weeks</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Typical Timeline</p>
          </div>
          <div>
            <p className="text-gold font-bold text-2xl mb-1">100%</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Compliance Rate</p>
          </div>
          <div>
            <p className="text-gold font-bold text-2xl mb-1">BCA/HDB</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Registered Firm</p>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section (Replacing the Images) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold font-bold mb-4">What we do</h2>
            <h3 className="text-4xl font-serif text-dark-charcoal">Full Reinstatement Capabilities</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Building2 />, title: "Dismantling", desc: "Removal of all partitions, false ceilings, custom cabinetry, and flooring." },
              { icon: <Zap />, title: "M&E Services", desc: "Safe termination of electrical points, data cabling, and lighting circuits." },
              { icon: <HardHat />, title: "SCDF Compliance", desc: "Reinstating fire sprinklers and smoke detectors to original positions." },
              { icon: <Hammer />, title: "Rectification", desc: "Wall patching, floor grinding, and professional repainting to landlord specs." },
              { icon: <Trash2 />, title: "Waste Management", desc: "Full debris disposal and haulage according to building management rules." },
              { icon: <CheckCircle2 />, title: "Handover Support", desc: "Pre-inspection walkthrough and final cleaning for a smooth surrender." }
            ].map((service, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all group">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-dark-charcoal uppercase tracking-tight">{service.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 italic">Our Handover <span className="text-gold">Process</span></h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", icon: <ClipboardCheck />, title: "Survey", desc: "Site & lease review" },
              { step: "02", icon: <Banknote />, title: "Quote", desc: "Clear itemized pricing" },
              { step: "03", icon: <Clock />, title: "Schedule", desc: "MCST coordination" },
              { step: "04", icon: <Hammer />, title: "Execution", desc: "On-time reinstatement" },
              { step: "05", icon: <CheckCircle2 />, title: "Handover", desc: "Landlord inspection" }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                <span className="absolute top-4 left-4 text-gold/20 font-bold text-4xl font-serif italic">{item.step}</span>
                <div className="text-gold mb-4 flex justify-center relative z-10">{item.icon}</div>
                <h4 className="font-bold text-sm uppercase mb-2 tracking-widest">{item.title}</h4>
                <p className="text-xs text-gray-400 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 text-dark-charcoal italic">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does office reinstatement cost in Singapore?",
                a: "For 2026, the market rate typically ranges from S$5 to S$30 per sq ft. Simple office setups with minimal M&E work fall on the lower end, while F&B or heavily-fitted retail units are higher."
              },
              {
                q: "Why is a 7-day SLA important?",
                a: "Tenants often leave reinstatement until the last minute. Our expedited 7-day service for standard units prevents liquidated damages and ensures your security deposit is returned on time."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-dark-charcoal mb-2 flex items-center gap-2 italic">
                  <ArrowRight size={16} className="text-gold" /> {faq.q}
                </h3>
                <p className="text-gray-600 text-sm pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold text-dark-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Secure Your Deposit.</h2>
          <p className="mb-10 text-lg opacity-80">
            Don't risk your security deposit. Get a professional site survey 
            and a practical quotation for your lease surrender today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={whatsappLink} className="bg-dark-charcoal text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}