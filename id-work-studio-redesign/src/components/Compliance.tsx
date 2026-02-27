import { ShieldCheck, FileText, Building } from 'lucide-react';

export default function Compliance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-charcoal">Project Management & Compliance</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            We handle the red tape so you can focus on business. Full regulatory compliance for peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-off-white">
            <ShieldCheck className="w-10 h-10 text-champagne mb-4" />
            <h3 className="text-xl font-serif mb-3 text-charcoal">Fire Safety (SCDF)</h3>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              Complete handling of FSSD submissions, sprinkler relocation, and fire alarm testing to ensure your premises meet strict safety codes.
            </p>
          </div>

          <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-off-white">
            <FileText className="w-10 h-10 text-champagne mb-4" />
            <h3 className="text-xl font-serif mb-3 text-charcoal">BCA & HDB Permits</h3>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              As a BCA-Registered contractor, we manage all necessary permit applications and structural endorsements for smooth approval.
            </p>
          </div>

          <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-off-white">
            <Building className="w-10 h-10 text-champagne mb-4" />
            <h3 className="text-xl font-serif mb-3 text-charcoal">Mall Management</h3>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              Experienced in coordinating with major mall operators (Capitaland, Frasers, etc.) for fit-out deposits, insurance, and night works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
