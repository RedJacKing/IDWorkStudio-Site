import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, FileCheck, HardHat, Clock, CheckCircle } from 'lucide-react';

export default function Commercial() {
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20my%20commercial%20project.`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["CommercialRealEstateService", "ProfessionalService"],
    "name": "ID Work Studio Commercial Renovation",
    "description": "Strategic Commercial Interior Design & Fit-Outs in Singapore. BCA-Approved Commercial Contractor specializing in Office Reinstatement and Retail Interior Fit-out.",
    "areaServed": "Singapore",
    "knowsAbout": [
      "Office Reinstatement Singapore",
      "Retail Interior Fit-out",
      "BCA-Approved Commercial Contractor",
      "F&B Renovation",
      "Commercial Interior Design"
    ],
    "provider": {
      "@type": "Organization",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Office Renovation Singapore | Retail & Commercial Interior Design</title>
        <meta name="description" content="Professional office renovation in Singapore. BCA-approved commercial contractor for retail, F&B, and reinstatement works. On-time, on-budget delivery." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="pt-20 bg-off-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Minimalist Office Reception Design Singapore" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
            >
              Expert Office Renovation Singapore <br/> & Commercial Fit-Outs
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light"
            >
              Retail, F&B, and Reinstatement Services by BCA-Approved Contractors
            </motion.h2>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-champagne text-white text-sm uppercase tracking-widest hover:bg-champagne-hover transition-colors font-medium rounded-sm"
            >
              Get a Commercial Quote
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 text-charcoal">Commercial Renovation Solutions</h2>
            <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 mb-6 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern Minimalist Office Reception Design Singapore" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">Office Renovation Solutions for Productivity</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Optimized layouts for hybrid work, ergonomic workstations, and collaborative zones. We handle office reinstatement and full fit-outs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> Office Reinstatement</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> System Furniture</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 mb-6 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop" 
                  alt="Luxury Retail Store Layout Singapore" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">High-Traffic Retail & Store Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Captivating retail interiors that drive foot traffic and sales. From luxury boutiques to high-street retail fit-outs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> Visual Merchandising</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> Lighting Design</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 mb-6 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" 
                  alt="BCA HDB Compliant Commercial Renovations Singapore" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">BCA/HDB Compliant Commercial Renovations</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Full compliance with Singapore's strict building codes. We manage all submissions for F&B, Industrial, and Commercial spaces.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> SCDF Submissions</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-champagne mr-2" /> F&B Licensing Support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust Stack Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4 text-charcoal">Project Management & Compliance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We handle the red tape so you can focus on your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <ShieldCheck className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">Fire Safety (SCDF)</h4>
                <p className="text-sm text-gray-500">Full submission and approval handling for fire safety regulations.</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <FileCheck className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">BCA Permits</h4>
                <p className="text-sm text-gray-500">Registered contractor for all necessary Building and Construction Authority permits.</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <Building2 className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">Mall Management</h4>
                <p className="text-sm text-gray-500">Experienced in coordinating with major mall management teams in Singapore.</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-champagne transition-colors">
                <HardHat className="w-12 h-12 text-champagne mx-auto mb-4" />
                <h4 className="font-bold text-charcoal mb-2">Site Safety</h4>
                <p className="text-sm text-gray-500">Strict adherence to workplace safety and health (WSH) standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Atomic Answers / FAQ Section */}
        <section className="py-20 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-charcoal">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <Clock className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  What is the average timeline for an office fit-out in Singapore?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9">
                  For a standard office fit-out in Singapore (approx. 2,000 - 5,000 sqft), the timeline typically ranges from <strong>4 to 8 weeks</strong>. This includes 1-2 weeks for design and material selection, 1-2 weeks for BCA/Fire Safety submissions, and 4-6 weeks for renovation works. Complex projects requiring extensive M&E works or structural changes may take 8-12 weeks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-3 flex items-start">
                  <ShieldCheck className="w-6 h-6 text-champagne mr-3 mt-1 flex-shrink-0" />
                  How does a BCA-registered firm ensure commercial safety compliance?
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9">
                  As a BCA-registered firm, we ensure compliance through a rigorous 3-step process:
                  <br/><br/>
                  1. <strong>Pre-Submission Checks:</strong> Our Qualified Persons (QP) review all designs against current SCDF Fire Code and BCA accessibility standards.
                  <br/>
                  2. <strong>Permit Management:</strong> We handle all necessary submissions to BCA, URA, and FSSD before work commences.
                  <br/>
                  3. <strong>Site Supervision:</strong> Licensed CoreTrade personnel supervise critical works to ensure they meet approved specifications and safety regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">Ready to Transform Your Business Space?</h2>
            <p className="text-gray-300 mb-8">
              Partner with a trusted, BCA-approved commercial contractor for your next project.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-champagne text-white text-sm uppercase tracking-widest hover:bg-champagne-hover transition-colors font-medium rounded-sm"
            >
              WhatsApp Us for a Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
