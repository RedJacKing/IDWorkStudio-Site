import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Project } from '../types';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import projectsData from '../../public/projects.json';

export default function Gallery() {
  const { t } = useTranslation();

  const [projects] = useState<Project[]>(projectsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const commercialProjects = projects.filter(p => p.category.toLowerCase() === 'commercial');
  const residentialProjects = projects.filter(p => p.category.toLowerCase() === 'residential');

  const gallerySchema = {
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
    },
    "about": [
      { "@type": "Service", "name": "HDB Renovation Singapore" },
      { "@type": "Service", "name": "Condo Renovation Singapore" },
      { "@type": "Service", "name": "Office Renovation Singapore" },
      { "@type": "Service", "name": "Commercial Fit-Out Singapore" },
      { "@type": "Service", "name": "Interior Design Woodlands Singapore" }
    ]
  };

  const renderProjectSection = (title: string, projectImages: Project[], sectionDesc: string) => {
    if (projectImages.length === 0) return null;

    return (
      <div className="mb-24 last:mb-0">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif mb-4 text-charcoal tracking-wide uppercase">{title}</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          {/* Visible text for AI crawlers — describes the section content */}
          <p className="text-gray-500 max-w-2xl mx-auto text-sm italic">{sectionDesc}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {projectImages.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
              className="group relative aspect-square cursor-pointer z-0 md:hover:z-50"
            >
              <div className="absolute inset-0 transition-all duration-300 ease-out md:group-hover:scale-125 md:group-hover:shadow-2xl md:group-hover:rounded-lg rounded-md overflow-hidden bg-gray-200 border border-gray-200">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} - ID Work Studio Singapore`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        {/* ================================================ */}
        {/* PRIMARY META — updated for AI + local search     */}
        {/* ================================================ */}
        <title>Renovation Portfolio Singapore | Interior Design Projects | ID Work Studio Woodlands</title>
        <meta name="description" content="Browse completed renovation and interior design projects by ID Work Studio, Singapore. HDB renovation, condo renovation, office fit-out and commercial renovation across Woodlands and all of Singapore." />
        <meta name="keywords" content="renovation portfolio Singapore, interior design projects Singapore, HDB renovation photos Singapore, office renovation Singapore, commercial fit-out portfolio, ID Work Studio Woodlands Singapore" />

        {/* Geo tags */}
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />

        {/* Canonical */}
        <link rel="canonical" href="https://idworkstudio.com/gallery" />

        {/* ================================================ */}
        {/* OPEN GRAPH                                       */}
        {/* ================================================ */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/gallery" />
        <meta property="og:title" content="Renovation Portfolio Singapore | Interior Design Projects | ID Work Studio" />
        <meta property="og:description" content="Browse completed HDB renovation, condo renovation, and commercial fit-out projects by ID Work Studio, Woodlands Singapore." />
        <meta property="og:image" content="https://idworkstudio.com/og-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Renovation Portfolio Singapore | Interior Design Projects | ID Work Studio" />
        <meta name="twitter:description" content="Browse completed HDB renovation, condo renovation, and commercial fit-out projects by ID Work Studio, Woodlands Singapore." />
        <meta name="twitter:image" content="https://idworkstudio.com/og-preview.jpg" />

        {/* ================================================ */}
        {/* SCHEMA — CollectionPage for portfolio            */}
        {/* ================================================ */}
        <script type="application/ld+json">{JSON.stringify(gallerySchema)}</script>
      </Helmet>

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
            {/* Hidden SEO paragraph — readable by AI crawlers, unobtrusive for visitors */}
            <p className="text-gray-400 max-w-3xl mx-auto text-xs mt-4">
              ID Work Studio is a BCA-registered and HDB-approved renovation and interior design firm based in Woodlands, Singapore. Our portfolio includes HDB renovation, BTO renovation, condo renovation, landed property renovation, office fit-out, retail renovation, and F&B renovation projects across Singapore.
            </p>
          </div>

          <div>
            {projects.length === 0 ? (
              <p className="text-center text-gray-500">
                No projects found. Please ensure you have run 'node generate-gallery.js' and pushed projects.json to GitHub.
              </p>
            ) : (
              <>
                {renderProjectSection(
                  t('gallery.commercial'),
                  commercialProjects,
                  "Commercial renovation, office fit-out, retail interior design and F&B renovation projects completed by ID Work Studio across Singapore."
                )}
                {renderProjectSection(
                  t('gallery.residential'),
                  residentialProjects,
                  "HDB renovation, BTO renovation, condo renovation and landed property interior design projects completed by ID Work Studio across Singapore."
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}