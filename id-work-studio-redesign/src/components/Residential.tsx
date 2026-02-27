import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Home, Layout, Box, ShieldCheck, TrendingUp } from 'lucide-react';

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
      "BTO Renovation Packages",
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
        <title>Residential Interior Design Singapore | Condo & HDB BTO Renovation</title>
        <meta name="description" content="Expert Condo interior design and HDB BTO renovation services in Singapore. Create your dream home with our BCA-certified team. WhatsApp for a free quote." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="pt-20 bg-off-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Warm Minimalist 5-room BTO Living Room at Woodleigh Glen with Lived-in Japandi style" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
              Premium Condo Interior Design <br/> & HDB Renovation
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light"
            >
              Tailored BTO & Resale Solutions for Modern Singapore Living
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white text-sm uppercase tracking-widest hover:bg-[#128C7E] transition-colors font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                WhatsApp for Free Floorplan Consult
              </a>
            </div>
          </div>
        </section>

        {/* 2026 Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6 text-charcoal">HDB BTO & Resale Specialists</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-off-white text-champagne border border-champagne/20">
                        <Home />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-charcoal">HDB BTO Renovation Packages</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Turnkey solutions for new homeowners. From defect checking to final styling, we handle it all.
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
                      <h3 className="text-lg font-medium text-charcoal">Condo Interior Design & Styling</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Complete overhauls for older units. We specialize in hacking, re-wiring, and modernizing layouts.
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
                        Custom carpentry that hides clutter. Think hidden household shelters and multi-function platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Japandi Master Bedroom with platform storage in Singapore Resale Flat" 
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
        <section id="contact" className="py-20 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">Start Your Home Transformation</h2>
            <p className="text-gray-300 mb-8">
              Secure your slot for 2026. Consult with our award-winning designers today.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-champagne text-white text-sm uppercase tracking-widest hover:bg-champagne-hover transition-colors font-medium rounded-sm"
            >
              Book Free Design Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
