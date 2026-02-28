import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is the average timeline for an office fit-out in Singapore?",
    answer: "For a standard office fit-out (1,000 - 3,000 sqft), the timeline typically ranges from 4 to 8 weeks. This includes 1-2 weeks for design and material selection, 1-2 weeks for permit approvals (BCA/Fire Safety), and 3-4 weeks for renovation works. Reinstatement projects can often be completed in 2-3 weeks."
  },
  {
    question: "How does a BCA-registered firm ensure commercial safety compliance?",
    answer: "A BCA-registered firm adheres to the Building Control Act regulations. We ensure all structural works are endorsed by a Professional Engineer (PE), materials used are fire-rated according to SCDF standards, and all electrical/plumbing works are carried out by licensed workers. We also manage the necessary inspections and handover documentation."
  },
  {
    question: "Do you handle reinstatement works for handing over to landlords?",
    answer: "Yes, we specialize in office and retail reinstatement. We restore the unit to its original condition as per the landlord's tenancy agreement, including hacking, removal of partitions/flooring, and M&E termination, ensuring you get your deposit back."
  },
  {
    question: "What is included in a typical retail interior fit-out package?",
    answer: "Our retail packages typically include space planning, 3D visualization, carpentry (display shelves, counters), electrical lighting plans, signage installation, and submission of all necessary permits to the mall management and authorities."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4 text-charcoal">Common Questions</h2>
          <p className="text-charcoal/70">Expert answers for business owners.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-medium text-charcoal text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-champagne" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-charcoal/70 leading-relaxed bg-gray-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
