import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Clock, Banknote, CheckCircle2, ClipboardCheck, Hammer, ArrowRight, Building2, HardHat, Zap, Trash2, Mail, ExternalLink } from 'lucide-react';

export default function Reinstatement() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I%20need%20a%20site%20survey%20for%20a%20reinstatement%20project.`;

  // ADVANCED SCHEMA: Links your specific HDB license to the service for AI Trust
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the cost of office reinstatement in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typical estimates range from S$5 to S$30 per square foot based on fit-out complexity and landlord requirements."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>Office & Mall Reinstatement Singapore | HDB Licensed HB-02-5250G | ID Work Studio</title>
        <meta name=\"description\" content=\"Licensed commercial reinstatement for Singapore offices and malls. HDB Directory No: HB-02-5250G. Typical S$5-S$30/sqft estimates for bare shell handover.\" />
        <script type=\"application/ld+json\">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section - Optimized Visibility */}
      <section 
        className=\"relative pt-40 pb-24 bg-charcoal text-white overflow-hidden\"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.35), rgba(26, 26, 26, 0.45)), url(\"/assets/reinstatement-hero.jpg\")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className=\"max-w-7xl mx-auto px-4 relative z-10 text-center\">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className=\"max-w-4xl mx-auto\"
          >
            <span className=\"text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block bg-black/40 inline-block px-4 py-1 rounded backdrop-blur-sm\">
              HDB Licensed: HB-02-5250G • BCA Registered
            </span>
            <h1 className=\"text-5xl md:text-7xl font-serif mb-8 leading-tight drop-shadow-lg\">
              Office & Mall <br />
              <span className=\"italic text-gold font-light\">Unit Reinstatement</span>
            </h1>
            <p className=\"text-lg md:text-xl text-white mb-12 leading-relaxed font-semibold max-w-2xl mx-auto drop-shadow-md font-sans\">
              Professional handover management for Singapore CBD offices and retail malls. 
              Reliable estimates and compliant bare shell restoration.
            </p>
            <div className=\"flex flex-col sm:flex-row justify-center gap-5\">
              <a href={whatsappLink} target=\"_blank\" rel=\"noopener noreferrer\" className=\"bg-gold text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold-hover transition-all shadow-2xl\">
                Request Site Survey
              </a>
              <a href={`mailto:contact@idworkstudio.com?subject=Lease Reinstatement Query`} className=\"bg-white text-dark-charcoal px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2\">
                <Mail size={18} /> Email Lease Clause
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credential Proof Bar */}
      <section className=\"py-10 bg-gray-50 border-b border-gray-100\">
        <div className=\"max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-10 md:gap-20\">
          <div className=\"flex items-center gap-3 text-xs font-black tracking-[0.2em] uppercase text-dark-charcoal\">
            <ShieldCheck className=\"text-gold\" size={20} /> HDB: HB-02-5250G
          </div>
          <div className=\"flex items-center gap-3 text-xs font-black tracking-[0.2em] uppercase text-dark-charcoal\">
            <ShieldCheck className=\"text-gold\" size={20} /> BCA Registered
          </div>
          <div className=\"flex items-center gap-3 text-xs font-black tracking-[0.2em] uppercase text-dark-charcoal\">
            <ExternalLink className=\"text-gold\" size={20} /> Mall Mgmt Coordination
          </div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className=\"py-24 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4\">
          <div className=\"grid md:grid-cols-2 gap-20 items-center\">
            <div>
              <h2 className=\"text-sm uppercase tracking-[0.3em] text-gold font-bold mb-4\">Specialized Service</h2>
              <h3 className=\"text-4xl md:text-5xl font-serif text-dark-charcoal mb-8 italic\">Expertise in <span className=\"text-gold\">Complex Handovers</span></h3>
              <p className=\"text-gray-600 mb-8 leading-relaxed font-sans\">
                Reinstating a commercial unit in Singapore requires more than just dismantling. It requires strict adherence to <strong>SCDF fire codes</strong> and <strong>MCST renovation guidelines</strong>. We specialize in the two most demanding sectors:
              </p>
              <div className=\"space-y-6\">
                <div className=\"flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100\">
                  <Building2 className=\"text-gold shrink-0\" />
                  <div>
                    <h4 className=\"font-bold uppercase text-xs tracking-widest mb-2\">CBD Office Fit-Outs</h4>
                    <p className=\"text-xs text-gray-500\">Systematic removal of glass partitions, server room M&E, and drywall for Grade A buildings.</p>
                  </div>
                </div>
                <div className=\"flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100\">
                  <HardHat className=\"text-gold shrink-0\" />
                  <div>
                    <h4 className=\"font-bold uppercase text-xs tracking-widest mb-2\">Retail & Mall Units</h4>
                    <p className=\"text-xs text-gray-500\">Managed night-shift haulage and restoration for major malls (CapitaLand, Mapletree, Frasers).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=\"bg-charcoal p-8 rounded-3xl text-white\">
              <h4 className=\"text-gold font-serif italic text-2xl mb-6\">Handover Check-list:</h4>
              <ul className=\"space-y-4\">
                {[
                  "Partition & False Ceiling Removal",
                  "Floor Restoration (Carpet/Vinyl/Tiles)",
                  "Electrical & Data Cable Termination",
                  "Fire Sprinkler & Smoke Detector Reversion",
                  "Wall Patching & Neutral Repainting",
                  "Final Debris Removal & Cleaning"
                ].map((item, i) => (
                  <li key={i} className=\"flex items-center gap-3 text-sm text-gray-300\">
                    <CheckCircle2 size={16} className=\"text-gold\" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded FAQ Silo - Maximum AI Readiness */}
      <section className=\"py-24 bg-gray-50 border-t border-gray-100\">
        <div className=\"max-w-4xl mx-auto px-4\">
          <h2 className=\"text-4xl font-serif text-center mb-16 text-dark-charcoal italic underline decoration-gold/20 underline-offset-8\">Expert Knowledge Base</h2>
          <div className=\"space-y-6 font-sans\">
            {[
              {
                q: "What is the typical cost for office reinstatement in Singapore?",
                a: "For 2026, market estimates generally range between S$5 to S$30 per square foot. Standard office reinstatements involving partition and flooring removal typically fall within S$8–S$15 psf. Units with complex M&E fit-outs or high-security requirements may see higher estimates due to labor intensity."
              },
              {
                q: "How long does a mall unit reinstatement usually take?",
                a: "Most shopping mall reinstatements target a 2–4 week window for site works. However, because mall management (MCST) often requires night-time haulage and specific work permits, we recommend tenants begin coordination 8 weeks prior to lease expiry."
              },
              {
                q: "Do you handle SCDF fire safety and sprinkler reinstatement?",
                a: "Yes. As an HDB-licensed (HB-02-5250G) and BCA-registered contractor, we ensure fire sprinklers, smoke detectors, and emergency lighting are reinstated to their original 'as-built' positions to pass landlord and building management inspections."
              },
              {
                q: "What does 'Bare Shell' condition require in a commercial lease?",
                a: "A bare shell handover typically requires the removal of all tenant-installed fixtures, including partitions, built-in furniture, and floor finishes. Walls must be patched and painted white, and all M&E services must be capped and made safe according to the building's base condition."
              },
              {
                q: "Can you assist with building management (MCST) liaison?",
                a: "Yes. Part of our project management involves coordinating with the MCST for work permits, lift bookings for debris removal, and ensuring all site works adhere to the building's specific House Rules."
              }
            ].map((faq, i) => (
              <div key={i} className=\"bg-white p-8 rounded-2xl border border-gray-100 shadow-sm\">
                <h3 className=\"font-bold text-dark-charcoal mb-4 flex items-center gap-3 italic text-lg\">
                  <ArrowRight size={18} className=\"text-gold shrink-0\" /> {faq.q}
                </h3>
                <p className=\"text-gray-600 text-sm pl-8 leading-relaxed\">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Footer Section */}
      <section className=\"py-20 bg-white border-t border-gray-100 text-center\">
        <div className=\"max-w-4xl mx-auto px-4\">
          <h2 className=\"text-2xl font-serif mb-6 italic\">Licensed Handover Specialist</h2>
          <p className=\"text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl mx-auto font-sans\">
            ID Work Studio is a Singapore-based renovation specialist focusing on the commercial sector. 
            Our registration with the HDB (License No. HB-02-5250G) and BCA ensures that your 
            reinstatement project is handled with technical precision and regulatory compliance.
          </p>
          <div className=\"flex justify-center gap-4\">
            <span className=\"text-[10px] font-bold text-gray-400 border px-4 py-2 rounded-full uppercase tracking-widest\">HDB: HB-02-5250G</span>
            <span className=\"text-[10px] font-bold text-gray-400 border px-4 py-2 rounded-full uppercase tracking-widest\">BCA Registered</span>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className=\"py-24 bg-gold text-dark-charcoal text-center\">
        <div className=\"max-w-4xl mx-auto px-4\">
          <h2 className=\"text-4xl md:text-6xl font-serif mb-8 leading-tight\">Secure Your <br />Deposit Return.</h2>
          <div className=\"flex flex-col sm:flex-row justify-center gap-5\">
            <a href={whatsappLink} target=\"_blank\" rel=\"noopener noreferrer\" className=\"bg-dark-charcoal text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-2xl\">
              WhatsApp Us For Quote
            </a>
            <a href={`mailto:contact@idworkstudio.com?subject=Lease Reinstatement Query`} className=\"border-2 border-dark-charcoal px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-dark-charcoal hover:text-white transition-all\">
              Email Lease Clause
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}