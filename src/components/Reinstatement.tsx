import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Clock, Banknote, CheckCircle2, ClipboardCheck, Hammer, ArrowRight, Building2, HardHat, Zap, Trash2, Mail } from 'lucide-react';

export default function Reinstatement() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I%20need%20a%20reinstatement%20quote.%20Size:%20[sqft],%20Handover:%20[Date].`;

  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>Commercial Unit Reinstatement Singapore | Office & Retail | ID Work Studio</title>
        <meta name="description" content="Professional commercial reinstatement in Singapore. Restore your office or retail shop to original condition. S$5-S$30/sqft, 2-6 week timeline. BCA & HDB Licensed." />
      </Helmet>

      {/* Hero Section - Lightened for visibility */}
      <section 
        className="relative pt-40 pb-24 bg-charcoal text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.5)), url("/assets/reinstatement-hero.jpg")',
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
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block drop-shadow-md">
              BCA Registered • HDB Licensed
            </span>
            <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight drop-shadow-lg">
              Commercial <br />
              <span className="italic text-gold font-light">Unit Reinstatement</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
              Professional handover services for Singapore offices and retail spaces. 
              Clear scope, 2–6 week timelines, and transparent S$5–S$30/sqft pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold-hover transition-all shadow-xl">
                Request Site Survey
              </a>
              <a href={`mailto:contact@idworkstudio.com?subject=Lease Reinstatement Query`} className="bg-white text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2">
                <Mail size={18} /> Email Lease Clause
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

      {/* Technical Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold font-bold mb-4">Scope of Work</h2>
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

      {/* FAQ Section - Expanded for AI Authority */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 text-dark-charcoal italic">Expert Insights & FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the typical cost range for office reinstatement in Singapore?",
                a: "For 2026, market rates generally sit between S$5 to S$30 per square foot. Lighter office setups with standard partitions and carpet flooring fall on the lower end (S$8-S$12). However, retail shops or F&B units with extensive kitchen fit-outs, heavy floor tiling, and complex plumbing/electrical systems often exceed S$30 per sqft due to the labor-intensive dismantling and disposal required."
              },
              {
                q: "Why is the 7-day SLA a differentiator for ID Work Studio?",
                a: "Most landlords in Singapore require a strict 'Bare Shell' condition upon lease expiry. If a tenant misses the handover date, they risk liquidated damages or additional rent. Our optimized 7-day timeline for units under 2,000 sqft ensures you surrender the space before your lease officially ends, securing your full security deposit return."
              },
              {
                q: "Do you handle SCDF fire safety and M&E compliance?",
                a: "Yes. As a BCA-registered contractor, we ensure all fire sprinklers, smoke detectors, and emergency lighting are reinstated to the original building layout. This is critical for obtaining the final clearance from building management (MCST) or the landlord's representative during the final inspection."
              },
              {
                q: "What does 'Bare Shell' condition actually mean?",
                a: "Bare shell condition requires the unit to be returned to its state before any fit-out works. This includes removing all tenant-installed partitions, built-in furniture, and floor finishes, patching and painting walls to a neutral white, and ensuring all electrical and mechanical services are capped and made safe according to original floor plans."
              },
              {
                q: "Can you assist with the disposal of office furniture and electronic waste?",
                a: "Yes. Our reinstatement scope includes the ethical disposal of debris and unwanted office furniture. We coordinate with building management for waste haulage timings, which often must occur after-office hours in major CBD buildings or shopping malls to avoid disruption."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-dark-charcoal mb-4 flex items-center gap-3 italic">
                  <ArrowRight size={18} className="text-gold shrink-0" /> {faq.q}
                </h3>
                <p className="text-gray-600 text-sm pl-8 leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-24 bg-gold text-dark-charcoal text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Secure Your Deposit.</h2>
          <p className="mb-10 text-lg font-medium max-w-xl mx-auto">
            Early planning avoids unnecessary landlord disputes. Send us your 
            lease clause or unit size for a same-day professional assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-dark-charcoal text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl">
              WhatsApp Us
            </a>
            <a href={`mailto:contact@idworkstudio.com?subject=Lease Reinstatement Query`} className="border-2 border-dark-charcoal px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-dark-charcoal hover:text-white transition-all">
              Email Lease Clause
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}