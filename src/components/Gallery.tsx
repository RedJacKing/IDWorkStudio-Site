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
  // Using any[] to match the direct array structure in your projects.json
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<null | any>(null);

  useEffect(() => {
    // Your projects.json is a direct array
    setProjects(projectsData);
  }, []);

  const commercialProjects = projects.filter(p => p.category === 'Commercial');
  const residentialProjects = projects.filter(p => p.category === 'Residential');

  const renderProjectSection = (title: string, items: any[], description: string) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-white mb-4">{title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((project, index) => (
          <motion.div
            key={project.id || index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800"
            onClick={() => setSelectedImage(project)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.imageUrl} // Matches "imageUrl" in your projects.json
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm font-medium text-amber-400 mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400/30">
      {/* KEEPS YOUR ORIGINAL SEO METADATA */}
      <Helmet>
        <title>Gallery | ID Work Studio - Premier Interior Design Portfolio</title>
        <meta name="description" content="Explore our portfolio of award-winning residential and commercial interior design projects in Singapore. From HDB BTO renovations to luxury office fit-outs." />
      </Helmet>

      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-medium mb-4"
          >
            <Camera className="w-3 h-3" />
            {t('gallery.title')}
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            {t('gallery.title')}
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {t('gallery.subtitle')}
          </motion.p>
          
          {/* YOUR SEO DESCRIPTION */}
          <p className="text-gray-400 max-w-3xl mx-auto text-xs mt-4">
            {t('gallery.main_desc')}
          </p>
        </div>

        <div>
          {projects.length === 0 ? (
            <p className="text-center text-gray-500">Loading projects...</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-amber-400">
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="md:col-span-2 rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
                <img 
                  src={selectedImage.imageUrl} // Fixed to match your JSON
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-amber-400 font-medium mb-2">{selectedImage.category}</p>
                  <h2 className="text-3xl font-serif text-white mb-4">{selectedImage.title}</h2>
                  <p className="text-gray-400 text-lg">{selectedImage.description}</p>
                </div>
                <button className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-full hover:bg-amber-400 transition-colors">
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