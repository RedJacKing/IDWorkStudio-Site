import { useEffect, useState } from 'react';
import { Project } from '../types';
import { motion } from 'motion/react';
import { getAllProjects } from '../lib/indexedDB';

export default function Gallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts (since it's a new page)
    window.scrollTo(0, 0);
    
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        // Sort by order if available, otherwise by createdAt
        const sorted = data.sort((a, b) => {
          if (a.order !== undefined && b.order !== undefined) {
            return a.order - b.order;
          }
          // Fallback to createdAt descending
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
        setProjects(sorted);
      } catch (error) {
        console.error('Failed to fetch projects', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Helper to normalize category
  const getCategoryGroup = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('home') || lower.includes('residential')) return 'Residential';
    return 'Commercial'; // Default to Commercial for Office, Shop, etc.
  };

  const commercialProjects = projects.filter(p => getCategoryGroup(p.category) === 'Commercial');
  const residentialProjects = projects.filter(p => getCategoryGroup(p.category) === 'Residential');

  const renderProjectSection = (title: string, projectImages: Project[]) => {
    if (projectImages.length === 0) return null;

    return (
      <div className="mb-24 last:mb-0">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif mb-4 text-charcoal">{title}</h3>
          <div className="w-16 h-1 bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {projectImages.map((project) => (
            <div 
              key={project.id}
              className="group relative aspect-square cursor-pointer z-0 md:hover:z-50"
            >
              <div className="absolute inset-0 transition-all duration-300 ease-out md:group-hover:scale-150 md:group-hover:shadow-2xl md:group-hover:rounded-lg rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Gallery</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A curated selection of our finest commercial and residential work.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        ) : (
          <div>
            {projects.length === 0 ? null : (
              <>
                {renderProjectSection('Commercial', commercialProjects)}
                {renderProjectSection('Residential', residentialProjects)}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
