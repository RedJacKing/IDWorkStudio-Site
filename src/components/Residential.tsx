import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
// HelpCircle removed to eliminate the question mark icon
import { Home, Layout, Box, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Residential() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "ID Work Studio Residential Design",
    "description": "BCA Registered & HDB Approved Interior Design specializing in Modern BTO & Resale Renovation in Singapore.",
    "areaServed": "Singapore",
    "serviceType": [
      "BTO Renovation Packages",
      "Resale Flat Transformation",
      "Kitchen & Bath Remodeling",
      "Full-house Carpentry",
      "Modern Luxury Interior Design",
      "Japandi Interior Design"
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
        <title>ID Work Studio | HDB Approved Contractor & Residential ID Singapore</title>
        <meta name="description" content="BCA-registered & HDB-approved interior design. Specialized in BTO, Resale, and Condo renovations. Expert HDB permit submissions and structural guidelines." />
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
              // Ghost text removed from alt attribute
              alt="ID Work Studio Residential Interior Design Singapore" 
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
              BCA Registered & HDB Approved
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
            >
              Modern Visionary Living <br/> <span className="italic font-light text-champagne">HDB & Condo Specialist</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
              We handle all HDB Renovation Permits and structural submissions to ensure full compliance with town council guidelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-champagne text-white text-sm uppercase tracking-widest hover:bg-champagne-hover transition-colors font-medium rounded-sm"
              >
                Book a Home Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Residential Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6 text-charcoal">Lifestyle-Centric Services</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-off-white text-champagne border border-champagne/20">
                        <Home />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-charcoal">BTO & Resale Transformation</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Expert handling of HDB layouts. We specialize in hacking, re-wiring, and modernizing BTO and Resale units.
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
                      <h3 className="text-lg font-medium text-charcoal">Japandi & Minimalist Design</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Specializing in 2026 aesthetics like Warm Minimalism and Modern Luxury for a lived-in Japandi evolution.
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
                      <h3 className="text-lg font-medium text-charcoal">Space-Saving & Smart Solutions</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Multi-functional carpentry and smart home integration to maximize storage in small HDB layouts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern Luxury Interior Design Singapore" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Insights */}
        <section className="py-20 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-charcoal">Trust & Peace of Mind</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-champagne">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <ShieldCheck className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  Why choose an HDB-registered contractor?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9">
                  We strictly adhere to <strong>HDB's renovation guidelines</strong>. Our HDB-registered status ensures all structural and electrical works meet Singapore's safety standards.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-champagne">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <TrendingUp className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  What are the BTO renovation trends for 2026?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9">
                  Current trends focus on <strong>Warm Minimalism</strong> and <strong>Japandi</strong> styles, prioritizing space-saving carpentry and seamless smart-home integration.
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
              Consult with our BCA-registered designers today for a stress-free renovation.
            </p>
            <a 
              href="https://wa.me/6598333085"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-champagne text-white text-sm uppercase tracking-widest hover:bg-champagne-hover transition-colors font-medium rounded-sm"
            >
              WhatsApp for a Floor Plan Review
            </a>
          </div>
        </section>
      </div>
    </>
  );
}