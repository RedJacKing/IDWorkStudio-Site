import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Clock, Banknote, CheckCircle2, ClipboardCheck, Trash2, Paintbrush, Hammer } from 'lucide-react';
import ReinstatementCTA from './ReinstatementCTA';

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

      {/* Hero Section - Home Style */}
      <section className="relative pt-32 pb-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Commercial Unit <span className="italic text-gold text-3xl md:text-5xl block mt-2 font-light italic">Reinstatement in Singapore</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Return your office, shop, or F&B unit to handover condition with a clear scope, 
              practical timeline, and transparent pricing. Meet your landlord’s requirements 
              with zero stress.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={whatsappLink} className="bg-gold text-dark-charcoal px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold-hover transition-all">
                Request a Site Survey
              </a>
              <a href={whatsappLink} className="border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-dark-charcoal transition-all">
                Get a Reinstatement Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-dark-charcoal">What is Commercial Reinstatement?</h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-sans">
                It is the process of restoring a leased unit to the original or landlord-approved condition at the end of tenancy. 
                In Singapore, failing to complete this properly can lead to deposit deductions or landlord-arranged rectification at your expense.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-gold"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-bold">Typical Timeline</h4>
                    <p className="text-gray-500 text-sm">2 to 6 weeks depending on unit size and scope.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-gold"><Banknote size={24} /></div>
                  <div>
                    <h4 className="font-bold">Cost Range</h4>
                    <p className="text-gray-500 text-sm">S$5 to S$30+ per sq ft (Market Rate for 2026).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">What's Included:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Partition Removal", "Signage Dismantling", 
                  "Ceiling Patching", "Flooring Restoration", 
                  "Wall Repainting", "M&E Reinstatement",
                  "Debris Disposal", "Final Cleaning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Process - Visual Steps */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16">Our Proper Handover Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: <ClipboardCheck />, title: "Survey", desc: "Lease review & site assessment." },
              { icon: <Banknote />, title: "Quote", desc: "Transparent costing per sqft." },
              { icon: <Clock />, title: "Schedule", desc: "Coordination with Building Mgmt." },
              { icon: <Hammer />, title: "Work", desc: "Dismantling & Rectification." },
              { icon: <CheckCircle2 />, title: "Handover", desc: "Final inspection support." }
            ].map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold group-hover:bg-gold group-hover:text-dark-charcoal transition-all">
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2 uppercase tracking-tighter">{step.title}</h4>
                <p className="text-xs text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Section (ReinstatementCTA is your before/after component) */}
      <ReinstatementCTA />

      {/* Detailed FAQ for AI Citation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 text-dark-charcoal italic">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "Is reinstatement mandatory in Singapore?",
                a: "In many commercial leases, yes. The tenancy agreement often requires the tenant to return the unit to its original condition, fair wear and tear excepted, unless the landlord agrees otherwise in writing. Failing to meet these obligations can result in the landlord holding back your security deposit."
              },
              {
                q: "How much does commercial reinstatement cost per square foot?",
                a: "A common range is S$5 to S$30+ per sq ft. Smaller, light office jobs usually sit at the lower end (around S$8-S$12), while F&B outlets or retail shops with heavy fit-outs, kitchen equipment, and complex M&E requirements can rise to S$30 or more per sq ft."
              },
              {
                q: "How long does the restoration process typically take?",
                a: "The actual site works typically take 2 to 6 weeks. However, we recommend starting the planning and survey process at least 2 to 3 months before your lease expires to account for building management approvals and debris removal logistics."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-3 text-dark-charcoal">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-20 bg-gold text-dark-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6">Need a Reinstatement Quote?</h2>
          <p className="mb-10 font-medium">
            Send us your lease clause, unit size, and handover date. 
            We'll provide a practical quotation to secure your deposit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={whatsappLink} className="bg-dark-charcoal text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all">
              WhatsApp Us
            </a>
            <a href={`mailto:contact@idworkstudio.com?subject=Lease Reinstatement Query`} className="border-2 border-dark-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-dark-charcoal hover:text-white transition-all">
              Email Lease Clause
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}