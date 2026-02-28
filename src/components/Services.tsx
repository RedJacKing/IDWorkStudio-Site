import { Home, Briefcase, PenTool } from 'lucide-react';

const services = [
  {
    title: "Residential Renovation",
    description: "Transforming HDBs, Condos, and Landed properties into dream homes. Specialized in space planning and lifestyle-centric designs.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Residential Interior Design Singapore",
    link: "/residential"
  },
  {
    title: "Commercial & Retail",
    description: "Strategic workspace and retail design that enhances brand identity and operational efficiency. BCA-compliant solutions.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    alt: "Commercial Office Renovation Singapore",
    link: "/commercial"
  },
  {
    title: "Custom Carpentry & Styling",
    description: "Bespoke joinery and furniture design tailored to your space. Premium materials and expert craftsmanship.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    alt: "Custom Carpentry Singapore",
    link: "/#gallery"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-charcoal">Our Expertise</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive interior design solutions for residential and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="group bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden block">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <service.icon className="text-white w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-serif mb-3 text-charcoal">{service.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-200 pt-16">
          <div>
            <h3 className="text-4xl font-serif mb-2">10+</h3>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-2">Trusted</h3>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Singapore Brand</p>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-2">Quality</h3>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Guaranteed Workmanship</p>
          </div>
        </div>
      </div>
    </section>
  );
}
