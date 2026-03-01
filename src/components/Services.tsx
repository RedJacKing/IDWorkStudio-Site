import { Home, Briefcase, PenTool } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.residential.title'),
      description: t('services.residential.desc'),
      icon: Home,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      alt: "Modern Residential Interior Design Singapore",
      link: "/residential"
    },
    {
      title: t('services.commercial.title'),
      description: t('services.commercial.desc'),
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      alt: "Commercial Office Renovation Singapore",
      link: "/commercial"
    },
    {
      title: t('services.custom.title'),
      description: t('services.custom.desc'),
      icon: PenTool,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      alt: "Custom Carpentry Singapore",
      link: "/gallery"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-charcoal">{t('services.title')}</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden block">
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
            </Link>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-200 pt-16">
          <div>
            <h3 className="text-4xl font-serif mb-2 text-gold">10+</h3>
            <p className="text-gold uppercase tracking-widest text-sm">{t('services.stats.years')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-2 text-gold">{t('services.stats.trusted')}</h3>
            <p className="text-gold uppercase tracking-widest text-sm">{t('services.stats.brand')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-serif mb-2 text-gold">{t('services.stats.quality')}</h3>
            <p className="text-gold uppercase tracking-widest text-sm">{t('services.stats.workmanship')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
