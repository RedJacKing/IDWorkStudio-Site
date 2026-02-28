import { PenTool, HardHat, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    title: "Consult & Visualize",
    description: "We begin by understanding your vision and lifestyle, translating them into detailed 3D concepts.",
    icon: PenTool
  },
  {
    title: "Accredited Execution",
    description: "Our HDB & BCA registered team manages the renovation with precision, ensuring quality and compliance.",
    icon: HardHat
  },
  {
    title: "The Big Reveal",
    description: "Walk into your dream space, perfectly finished, cleaned, and ready for your new chapter.",
    icon: Sparkles
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-charcoal">Our Process</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            A seamless journey from concept to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center bg-off-white"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-champagne/30 flex items-center justify-center mb-6 shadow-sm relative z-10">
                <step.icon className="w-10 h-10 text-champagne" />
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">{step.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
