import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, FileCheck, Home, Sofa, Ruler, PaintBucket, Sparkles } from 'lucide-react';

export default function Residential() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20my%20residential%20renovation.`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Renovation Singapore",
    "description": "HDB-approved and BCA-registered residential renovation and interior design in Singapore. Specialising in HDB renovation, condo renovation, and landed property interior design across Singapore. Based in Woodlands, Singapore.",
    "serviceType": "Residential Renovation",
    "areaServed": { "@type": "City", "name": "Singapore" },
    "provider": {
      "@type": "GeneralContractor",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com",
      "telephone": "+6568162872",
      "email": "contact@idworkstudio.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Woodlands Close, Woodlands 11, #03-10",
        "addressLocality": "Woodlands",
        "addressRegion": "Singapore",
        "postalCode": "737853",
        "addressCountry": "SG"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Residential Renovation Services Singapore",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HDB Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Condo Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landed Property Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "BTO Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Resale HDB Renovation Singapore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Design Woodlands Singapore" } }
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/residential"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of a 4-room BTO renovation in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2026, a comprehensive 4-room BTO renovation in Singapore typically ranges from $45,000 to $65,000. This covers flooring, painting, plumbing, and custom carpentry for the kitchen and wardrobes. Premium finishes or extensive hacking for open-plan layouts can push costs to $75,000+."
        }
      },
      {
        "@type": "Question",
        "name": "How can I maximize storage in a small HDB layout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To maximize storage in small HDBs, utilize vertical space with floor-to-ceiling carpentry. Implement smart solutions like platform beds with drawers, hidden storage within feature walls, and extendable dining tables. Japandi designs use concealed cabinetry to maintain a minimalist aesthetic without sacrificing functionality."
        }
      },
      {
        "@type": "Question",
        "name": "Why is choosing an HDB-registered contractor important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choosing an HDB-registered contractor is crucial because they are trained to adhere to HDB's renovation guidelines and structural safety protocols. They ensure no critical structural pillars are compromised during hacking and that all electrical and plumbing works meet Singapore's safety standards, protecting you from liability and safety hazards."
        }
      },
      {
        "@type": "Question",
        "name": "How long does HDB renovation take in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical HDB renovation in Singapore takes 6 to 10 weeks from commencement of works. ID Work Studio manages all HDB permits and coordinates the renovation timeline to minimise disruption."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>HDB & Condo Renovation Singapore | Residential Interior Design | ID Work Studio Woodlands</title>
        <meta name="description" content="HDB-approved residential renovation and interior design in Singapore. BCA-registered contractor specialising in HDB, condo and landed property renovations. Based in Woodlands, serving all of Singapore. Get a free consultation today." />
        <meta name="keywords" content="HDB renovation Singapore, condo renovation Singapore, residential renovation Singapore, interior design Singapore, BTO renovation Singapore, landed property renovation Singapore, Woodlands interior designer, ID Work Studio" />
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />
        <link rel="canonical" href="https://idworkstudio.com/residential" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/residential" />
        <meta property="og:title" content="HDB & Condo Renovation Singapore | Residential Interior Design | ID Work Studio" />
        <meta property="og:description" content="HDB-approved residential renovation and interior design in Singapore. BCA-registered, Woodlands-based. Specialising in HDB, condo and landed property renovations across Singapore." />
        <meta property="og:image" content="https://idworkstudio.com/og-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HDB & Condo Renovation Singapore | Residential Interior Design | ID Work Studio" />
        <meta name="twitter:description" content="HDB-approved residential renovation and interior design in Singapore. BCA-registered, Woodlands-based. Specialising in HDB, condo and landed property renovations." />
        <meta name="twitter:image" content="https://idworkstudio.com/og-preview.jpg" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* Architectural Grid Background Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 bg-dark-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/gallery/residential-expertise.png"
              alt="Modern HDB and Condo Interior Design Singapore by ID Work Studio"
              className="w-full h-full object-cover object-center opacity-60"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex justify-center"
            >
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl mb-8 leading-tight flex flex-col items-center justify-center"
            >
              <span className="font-serif italic font-light text-white mb-2 uppercase tracking-tight">Modern Visionary Living</span>
              <span className="font-sans font-bold text-gold uppercase tracking-[0.2em]">For Singapore Homeowners</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-sans font-light"
            >
              BCA-Registered &amp; HDB-Approved Partner. We handle all HDB permits and structural submissions for your peace of mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans"
              >
                Book a Home Consultation
              </a>
            </motion.div>
          </div>
        </section>

        {/* Trust Badges Bar */}
        <div className="bg-gold py-4 relative z-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-dark-charcoal font-bold text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} /> HDB-Approved Contractor Singapore
            </div>
            <div className="flex items-center gap-2">
              <FileCheck size={16} /> BCA-Registered Firm
            </div>
            <div className="flex items-center gap-2">
              <Home size={16} /> Serving All of Singapore
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Our</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">Residential Services</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Home size={48} strokeWidth={1} />,
                  subtitle: "BTO & Resale HDB",
                  title: "HDB Renovation Singapore",
                  desc: "Expert solutions for Tengah, Bidadari, and Tampines North. Turnkey delivery from defect checking to HDB permit handling."
                },
                {
                  icon: <Sofa size={48} strokeWidth={1} />,
                  subtitle: "Private Residential",
                  title: "Condo Interior Design Singapore",
                  desc: "Elevating private living with premium finishes and structural re-configuration. Specialized in Modern Luxury and Warm Minimalism."
                },
                {
                  icon: <Ruler size={48} strokeWidth={1} />,
                  subtitle: "Additions & Alterations",
                  title: "Landed Property A&A Works",
                  desc: "Comprehensive Addition & Alteration works. We manage structural submissions and architectural enhancements for landed homes."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 shadow-xl border-b-4 border-gold group flex flex-col items-center text-center"
                >
                  <div className="mb-8 text-gold flex justify-center">{item.icon}</div>
                  <div className="mb-6 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-sans">{item.subtitle}</span>
                    <h3 className="text-xl font-bold text-dark-charcoal uppercase font-sans leading-tight">{item.title}</h3>
                  </div>
                  <div className="pt-6 border-t border-gray-100 w-full">
                    <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Solutions Section */}
        <section className="py-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Lifestyle-First</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">Design Solutions</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-sm italic">
                Crafting spaces that reflect your personality and enhance your daily life through innovative design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <PaintBucket size={48} strokeWidth={1} />,
                  title: "Space-Saving Carpentry",
                  desc: "Bespoke multi-functional carpentry designed for Singapore's urban layouts. Maximize every square inch with hidden storage and transformable furniture."
                },
                {
                  icon: <Sparkles size={48} strokeWidth={1} />,
                  title: "Smart Home Integration",
                  desc: "Future-proof your home with seamless smart technology. From automated lighting to integrated climate control, we build homes that think for you."
                },
                {
                  icon: <Sofa size={48} strokeWidth={1} />,
                  title: "Trending Aesthetics",
                  desc: "Mastering Japandi, Warm Minimalism, and Modern Luxury. We create timeless spaces that balance trend-setting design with daily functionality."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-off-white p-10 shadow-sm border-t-4 border-gold flex flex-col items-center text-center"
                >
                  <div className="mb-8 text-gold flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold text-dark-charcoal font-sans mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-dark-charcoal text-white relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-white/60 text-2xl mb-2">Expert Insights</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">For 2026</span>
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  q: "What is the cost of a 4-room BTO renovation in 2026?",
                  a: "In 2026, a comprehensive 4-room BTO renovation in Singapore typically ranges from $45,000 to $65,000. This estimate covers essential works like flooring, painting, plumbing, and custom carpentry for the kitchen and wardrobes. Premium \"Warm Luxury\" finishes or extensive hacking for \"broken-plan\" layouts can push costs to $75,000+."
                },
                {
                  q: "How can I maximize storage in a small HDB layout?",
                  a: "To maximize storage in small HDBs, utilize vertical space with floor-to-ceiling carpentry. Implement smart-integrated solutions like platform beds with drawers, hidden storage within feature walls, and extendable dining tables. \"Lived-in Japandi\" designs often use concealed cabinetry to maintain a clutter-free, minimalist aesthetic without sacrificing functionality."
                },
                {
                  q: "Why is choosing an HDB-registered contractor important for safety?",
                  a: "Choosing an HDB-registered contractor is crucial because they are trained to strictly adhere to HDB's renovation guidelines and structural safety protocols. They ensure that no critical structural pillars are compromised during hacking and that all electrical and plumbing works meet Singapore's safety standards, protecting you from liability and safety hazards."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 p-8 border border-gold/20">
                  <h3 className="text-lg font-bold text-gold mb-4 font-sans">{item.q}</h3>
                  <p className="text-white/80 leading-relaxed text-sm font-sans font-normal">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-white relative z-10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl mb-12 flex flex-col items-center justify-center gap-2"
            >
              <span className="font-serif italic text-dark-charcoal">Start Your</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">Home Transformation</span>
            </motion.h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-12 font-sans">
              Secure your slot for 2026. Consult with our HDB-approved design experts today.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans"
            >
              Book a Home Consultation
            </a>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-gold/10 translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* Sticky Mobile Footer CTA */}
        <div className="fixed bottom-0 left-0 w-full bg-dark-charcoal/95 backdrop-blur-md border-t border-gold/30 p-4 z-[100] md:hidden">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gold py-4 rounded-full text-dark-charcoal font-bold text-xs uppercase tracking-widest font-sans"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408 0 12.044c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.408 12.052-12.044.002-3.218-1.248-6.242-3.514-8.508z" />
            </svg>
            Book a Home Consultation
          </a>
        </div>

      </div>
    </>
  );
}
