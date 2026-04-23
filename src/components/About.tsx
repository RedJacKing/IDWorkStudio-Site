import { Shield, Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 text-charcoal">
              A Trusted Interior Design Studio for Residential & Commercial Spaces in Singapore
            </h2>
            <div className="w-24 h-1 bg-champagne mb-8"></div>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6">
                At ID Work Studio, we create thoughtfully designed interiors that balance refinement, functionality and regulatory confidence. As a <strong>BCA-registered</strong> and <strong>HDB-licensed</strong> firm in Singapore, we deliver residential and commercial spaces with careful attention to detail, workmanship and compliance.
              </p>
              <p className="mb-6">
                With over a decade of experience, our team understands Singapore’s unique property landscape — from <strong>HDB BTO</strong> requirements and condominium renovations to tailored <strong>office reinstatement</strong> and commercial interior works. Every project is approached with clarity, professionalism and a strong design sensibility.
              </p>
              <p>
                Whether you are shaping your first <strong>BTO</strong>, reimagining a private residence, or elevating a business environment, our role is to translate vision into spaces that feel timeless and well considered. We bring together creative <strong>interior design</strong>, technical know-how and practical execution, so every space feels polished, purposeful and built to last.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="text-champagne w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-charcoal">HDB Licensed (HB-02-5134F)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-champagne w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-charcoal">BCA Registered Firm</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-champagne w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-charcoal">CaseTrust Accredited</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-champagne w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-charcoal">BizSafe Level 3</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-champagne rounded-lg z-0"></div>
            <img 
              src="assets/about/team-1.jpg" 
              alt="ID Work Studio team delivering refined interior design and renovation services in Singapore"
              className="relative z-10 rounded-lg shadow-xl w-full object-cover h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}