import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Camera, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';
import projectsData from '../../public/projects.json';

const Gallery = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<null | any>(null);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const commercialProjects = projects.filter(p => p.category === 'Commercial');
  const residentialProjects = projects.filter(p => p.category === 'Residential');

  const renderProjectSection = (title: string, items: any[], description: string) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((project, index) => (
          <motion.div
            key={project.id || index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm"
            onClick={() => setSelectedImage(project)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm font-medium text-amber-500 mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-amber-100">
      <Helmet>
        <title>Renovation Portfolio Singapore | Interior Design Projects | ID Work Studio Woodlands</title>
        <meta name="description" content="Browse completed renovation and interior design projects by ID Work Studio, Singapore. HDB renovation, condo renovation, office fit-out and commercial renovation across Woodlands and all of Singapore." />
        <meta name="keywords" content="renovation portfolio Singapore, interior design projects Singapore, HDB renovation photos Singapore, office renovation Singapore, commercial fit-out portfolio, ID Work Studio Woodlands Singapore" />
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />
        <link rel="canonical" href="https://idworkstudio.com/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/gallery" />
        <meta property="og:title" content="Renovation Portfolio Singapore | Interior Design Projects | ID Work Studio" />
        <meta property="og:description" content="Browse completed HDB renovation, condo renovation, and commercial fit-out projects by ID Work Studio, Woodlands Singapore." />
        <meta property="og:image" content="https://idworkstudio.com/og-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Renovation Portfolio Singapore | Interior Design Projects | ID Work Studio" />
        <meta name="twitter:description" content="Browse completed HDB renovation, condo renovation, and commercial fit-out projects by ID Work Studio, Woodlands Singapore." />
        <meta name="twitter:image" content="https://idworkstudio.com/og-preview.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Renovation Portfolio Singapore | ID Work Studio",
          "description": "Browse completed renovation and interior design projects by ID Work Studio, Singapore. HDB renovation, condo renovation, office fit-out, and commercial renovation projects across Singapore. Based in Woodlands, Singapore.",
          "url": "https://idworkstudio.com/gallery",
          "provider": {
            "@type": "GeneralContractor",
            "name": "ID Work Studio",
            "url": "https://idworkstudio.com",
            "telephone": "+6568162872",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "11 Woodlands Close, Woodlands 11, #03-10",
              "addressLocality": "Woodlands",
              "addressRegion": "Singapore",
              "postalCode": "737853",
              "addressCountry": "SG"
            }
          }
        })}</script>
      </Helmet>

      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-medium mb-4"
          >
            <Camera className="w-3 h-3" />
            {t('gallery.title')}
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-gray-900 mb-6"
          >
            {t('gallery.title')}
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            {t('gallery.subtitle')}
          </motion.p>
          {/* SEO text — hidden visually, readable by AI crawlers */}
          <p className="sr-only">{t('gallery.main_desc')}</p>
        </div>

        <div>
          {projects.length === 0 ? (
            <p className="text-center text-gray-400">Loading projects...</p>
          ) : (
            <>
              {renderProjectSection(
                t('gallery.commercial'), 
                commercialProjects, 
                t('gallery.commercial_desc')
              )}
              {renderProjectSection(
                t('gallery.residential'), 
                residentialProjects, 
                t('gallery.residential_desc')
              )}
            </>
          )}
        </div>
      </main>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-gray-900 hover:text-amber-600">
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="md:col-span-2 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-amber-600 font-medium mb-2">{selectedImage.category}</p>
                  <h2 className="text-3xl font-serif text-gray-900 mb-4">{selectedImage.title}</h2>
                  <p className="text-gray-600 text-lg">{selectedImage.description}</p>
                </div>
                <button className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-amber-600 transition-colors">
                  Inquire About Similar Projects
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;