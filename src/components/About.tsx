import { Shield, Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-charcoal">
              Your Trusted HDB Licensed Contractor & Interior Design Partner
            </h2>
            <div className="w-24 h-1 bg-champagne mb-8"></div>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6">
                At ID Work Studio, we are more than just interior designers; we are your trusted partners in building safe, compliant, and stunning spaces. As a <strong>BCA-registered</strong> and <strong>HDB-licensed contractor</strong> in Singapore, we adhere to the strictest industry standards, ensuring your renovation journey is seamless and stress-free.
              </p>
              <p className="mb-6">
                With over a decade of experience, our team specializes in navigating Singapore's unique property landscape, from navigating <strong>HDB BTO</strong> structural guidelines to executing complex <strong>office reinstatement</strong> projects. We pride ourselves on transparency and quality, holding ourselves accountable to the rigorous requirements of the Building and Construction Authority (BCA).
              </p>
              <p>
                Whether you are a young couple collecting keys to your first <strong>BTO</strong> or a business owner expanding your footprint, our commitment remains the same: delivering exceptional workmanship that stands the test of time. We bridge the gap between creative <strong>Condo interior design</strong> and practical, regulatory compliance, giving you peace of mind that your property is in safe, professional hands.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="text-champagne w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-charcoal">HDB Licensed (HB-02-5134F)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-champagne w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-charcoal">BCA Registered Contractor</span>
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
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000&auto=format&fit=crop" 
              alt="ID Work Studio Team - HDB Licensed Contractor Singapore" 
              className="relative z-10 rounded-lg shadow-xl w-full object-cover h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
