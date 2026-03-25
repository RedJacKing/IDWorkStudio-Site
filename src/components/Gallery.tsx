import { useEffect, useState } from 'react';
import { Project } from '../types';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
// 1. Import the generated data from your public folder
import projectsData from '../../public/projects.json';

export default function Gallery() {
  const { t } = useTranslation();
  
  // 2. Initialize projects state with the imported JSON data
  const [projects] = useState<Project[]>(projectsData);

  useEffect(() => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);
  }, []);

  // Helper to normalize and filter projects by category
  const commercialProjects = projects.filter(p => p.category.toLowerCase() === 'commercial');
  const residentialProjects = projects.filter(p => p.category.toLowerCase() === 'residential');

  const renderProjectSection = (title: string, projectImages: Project[]) => {
    if (projectImages.length === 0) return null;

    return (
      <div className="mb-24 last:mb-0">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif mb-4 text-charcoal tracking-wide uppercase">{title}</h3>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {projectImages.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group relative aspect-square cursor-pointer z-0 md:hover:z-50"
            >
              <div className="absolute inset-0 transition-all duration-300 ease-out md:group-hover:scale-125 md:group-hover:shadow-2xl md:group-hover:rounded-lg rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-off-white pt-48 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-dark-charcoal uppercase tracking-tighter">
            {t('gallery.title')}
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div>
          {projects.length === 0 ? (
            <p className="text-center text-gray-500">No projects found. Please ensure you have run 'node generate-gallery.js' and pushed projects.json to GitHub.</p>
          ) : (
            <>
              {renderProjectSection(t('gallery.commercial'), commercialProjects)}
              {renderProjectSection(t('gallery.residential'), residentialProjects)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}