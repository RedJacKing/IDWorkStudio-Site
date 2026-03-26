import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const whatsappNumber = "6598333085";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tight mb-8">{t('contact.title')}</h2>
            <p className="text-gray-400 mb-12 text-lg font-medium">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                <MapPin className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.info.address_title')}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    11 Woodlands Close, Woodlands 11, #03-10<br />
                    Singapore 737853
                  </p>
                  <a 
                    href="https://www.google.com.sg/maps/dir//11+%2303-10,+11+Woodlands+Cl,+ID+Work+Studio,+Singapore+737853/@1.4348129,103.7326522,12z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm underline mt-2 inline-block hover:text-gray-300"
                  >
                    {t('contact.info.view_map')}
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                <Mail className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.info.email_title')}</h4>
                  <a href="mailto:contact@idworkstudio.com" className="text-gray-400 hover:text-white transition-colors">
                    contact@idworkstudio.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                <Clock className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.info.hours_title')}</h4>
                  <p className="text-gray-400 font-sans">Mon - Fri: 09:00 - 17:00</p>
                  <p className="text-gray-400 font-sans italic">Sat - Sun: By Appointment Only</p>
                </div>
              </div>

              <div className="pt-8 w-full flex justify-center lg:justify-start">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gold text-dark-charcoal font-bold rounded-full hover:bg-gold-hover transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('contact.info.whatsapp')}
                </a>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-auto bg-gray-800 rounded-2xl overflow-hidden relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3582173199736!2d103.80164607421332!3d1.434241961444109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da136979219b17%3A0xc3910c28340d87a9!2sID%20Work%20Studio!5e0!3m2!1sen!2ssg!4v1711425600000!5m2!1sen!2ssg" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}