import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Home, Layout, Box, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export default function Residential() {
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20quote%20for%20my%20residential%20renovation.`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "ID Work Studio Residential Design",
    "description": "Award-Winning HDB & BCA Registered Interior Design specializing in Modern BTO & Resale Renovation in Singapore.",
    "areaServed": "Singapore",
    "serviceType": [
      "BTO Renovation Solutions",
      "Resale Flat Transformation",
      "Kitchen & Bath Remodeling",
      "Full-house Carpentry",
      "Warm Luxury Interior Design",
      "Japandi Interior Design"
    ],
    "knowsAbout": [
      "Tengah BTO Renovation",
      "Bidadari Estate Design",
      "Tampines North Layouts",
      "Smart-integrated storage solutions"
    ],
    "provider": {
      "@type": "Organization",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com"
    },
    "license": "HDB-Approved & BCA-Registered"
  };

  return (
    <>
      <Helmet>
        <title>HDB Approved Contractor & Residential ID Singapore | ID Work Studio</title>
        <meta name="description" content="BCA-registered & HDB-approved interior design. Specialized in BTO, Resale, and Condo renovations." />
        <meta property="og:image" content="/assets/WALANDING.jpg" />
        <meta name="twitter:image" content="/assets/WALANDING.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="bg-off-white min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/residential-hero.jpg" 
              alt="Modern Warm Minimalist Living Room" 
              className="w-full h-full object-cover object-center opacity-60 scale-110"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8 md:mt-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 border border-champagne text-champagne rounded-full text-xs uppercase tracking-widest mb-4"
            >
              2026 Design Trends
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
            >
              Modern Visionary Living <br/> for Singapore Homeowners
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light"
            >
              BCA-Registered & HDB-Approved Partner. We handle all HDB permits and structural submissions for your peace of mind.
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.12rem] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-[30px] min-w-[200px]"
              >
                Book a Home Consultation
              </a>
            </div>
          </div>
        </section>

        {/* 2026 Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6 text-charcoal">HDB Approved Contractor Singapore</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-off-white text-champagne border border-champagne/20">
                        <Home />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-charcoal">BTO Renovation Ideas</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Expert solutions for Tengah, Bidadari, and Tampines North. Turnkey delivery from defect checking to HDB permit handling.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-off-white text-champagne border border-champagne/20">
                        <Layout />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-charcoal">Condo Interior Design Singapore</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Elevating private living with premium finishes and structural re-configuration. Specialized in Modern Luxury and Warm Minimalism.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-off-white text-champagne border border-champagne/20">
                        <Box />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-charcoal">Landed Property A&A Works</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Comprehensive Addition & Alteration works. We manage structural submissions and architectural enhancements for landed homes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96">
                <img 
                   src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Master Bedroom" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                  <p className="text-charcoal font-serif text-lg italic">"The broken-plan layout completely changed how we use our 5-room flat."</p>
                  <p className="text-gray-500 text-sm mt-2">- Sarah & James, Bidadari</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle-First Design Solutions */}
        <section className="py-20 bg-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4">Lifestyle-First Design Solutions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Crafting spaces that reflect your personality and enhance your daily life through innovative design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                <Box className="w-10 h-10 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">Space-Saving Carpentry</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bespoke multi-functional carpentry designed for Singapore's urban layouts. Maximize every square inch with hidden storage and transformable furniture.
                </p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                <TrendingUp className="w-10 h-10 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">Smart Home Integration</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Future-proof your home with seamless smart technology. From automated lighting to integrated climate control, we build homes that think for you.
                </p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                <Sparkles className="w-10 h-10 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">Trending Aesthetics</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mastering Japandi, Warm Minimalism, and Modern Luxury. We create timeless spaces that balance trend-setting design with daily functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GEO-Ready Atomic Answers */}
        <section className="py-20 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-charcoal">Expert Insights for 2026</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-champagne">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <TrendingUp className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  What is the cost of a 4-room BTO renovation in 2026?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9">
                  In 2026, a comprehensive 4-room BTO renovation in Singapore typically ranges from <strong>$45,000 to $65,000</strong>. This estimate covers essential works like flooring, painting, plumbing, and custom carpentry for the kitchen and wardrobes. Premium "Warm Luxury" finishes or extensive hacking for "broken-plan" layouts can push costs to $75,000+.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-champagne">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <Box className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  How can I maximize storage in a small HDB layout?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9">
                  To maximize storage in small HDBs, utilize <strong>vertical space</strong> with floor-to-ceiling carpentry. Implement <strong>smart-integrated solutions</strong> like platform beds with drawers, hidden storage within feature walls, and extendable dining tables. "Lived-in Japandi" designs often use concealed cabinetry to maintain a clutter-free, minimalist aesthetic without sacrificing functionality.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-champagne">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <ShieldCheck className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  Why is choosing an HDB-registered contractor important for safety?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9">
                  Choosing an HDB-registered contractor is crucial because they are trained to strictly adhere to <strong>HDB's renovation guidelines</strong> and structural safety protocols. They ensure that no critical structural pillars are compromised during hacking and that all electrical and plumbing works meet Singapore's safety standards, protecting you from liability and safety hazards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-charcoal text-white text-center scroll-mt-24">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">Start Your Home Transformation</h2>
            <p className="text-gray-300 mb-8">
              Secure your slot for 2026. Consult with our HDB-approved design experts today.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold text-dark-charcoal text-sm uppercase tracking-[0.12rem] hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 font-bold rounded-[30px]"
            >
              Book a Home Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
