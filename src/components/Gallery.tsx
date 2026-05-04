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
    <div className="mb-20 last:mb-0">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-[#171514] mb-4">{title}</h2>
        <p className="text-[#746b61] max-w-2xl mx-auto leading-7">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((project, index) => (
          <motion.div
            key={project.id || index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#fffaf4] border border-[#d8cec0]/70 shadow-sm hover:shadow-xl transition-all"
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
                <p className="text-sm font-medium text-[#C5A059] mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm">
                  View Project
                  <ExternalLink className="w-3 h-3" />
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#fbf7ef_0,#f0ebe3_40%,#e8dfd3_100%)] text-[#171514] selection:bg-[#ede5d8]">
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
      
      <section className="relative overflow-hidden bg-[#111] pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.22),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.16em] mb-5"
          >
            <Camera className="w-3 h-3" />
            {t('gallery.title')}
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
          >
            Renovation <em className="text-[#C5A059] not-italic">Portfolio</em>
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto leading-8"
          >
            {t('gallery.subtitle')}
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20viewed%20your%20renovation%20portfolio%20and%20would%20like%20to%20discuss%20a%20similar%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#C5A059] px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#D6B26B]"
            >
              Discuss a Similar Project
            </a>
            <a
              href="/renovation-cost-calculator"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/15"
            >
              Estimate Renovation Cost
            </a>
          </div>
          {/* SEO text — hidden visually, readable by AI crawlers */}
          <p className="sr-only">{t('gallery.main_desc')}</p>
        </div>
      </section>

      <main className="pb-20 px-4 md:px-8 max-w-7xl mx-auto -mt-10 relative z-10">
        <div className="bg-[#fbf8f2]/90 border border-[#d8cec0]/60 rounded-3xl p-6 md:p-10 shadow-sm">
          {projects.length === 0 ? (
            <p className="text-center text-[#746b61]">Loading projects...</p>
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

        <section className="mt-12 grid gap-5 rounded-3xl border border-[#d8cec0]/70 bg-[#171514] p-6 text-white shadow-xl md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">Ready to plan your renovation?</p>
            <h2 className="font-serif text-3xl md:text-4xl">Turn a portfolio reference into your own home or commercial space.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
              Share the project style you like with ID Work Studio and we can advise on layout, scope, budget range, and practical renovation direction.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a
              href="https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio%2C%20I%20viewed%20your%20gallery%20and%20would%20like%20to%20discuss%20a%20renovation%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#C5A059] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#D6B26B]"
            >
              WhatsApp ID Work Studio
            </a>
            <a
              href="/hdb-renovation-style-quiz"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/15"
            >
              Find Your Home Style
            </a>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#d8cec0]/70 bg-[#fbf8f2]/90 p-6 shadow-sm md:p-10">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#a99683]">Planning Resources</p>
            <h2 className="font-serif text-3xl font-bold text-[#171514] md:text-4xl">Continue your renovation planning</h2>
            <p className="mt-3 text-sm leading-7 text-[#746b61]">Explore these pages to compare style, budget, timeline and renovation services before starting your consultation.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a href="/hdb-renovation-style-quiz" className="rounded-2xl border border-[#d8cec0]/70 bg-[#fffaf4] p-5 text-sm font-semibold text-[#171514] transition-all hover:border-[#c8aa72] hover:bg-[#fffaf2]">
              HDB Renovation Style Quiz
              <span className="mt-2 block text-xs font-normal leading-5 text-[#746b61]">Discover the interior style that fits your HDB lifestyle.</span>
            </a>
            <a href="/renovation-cost-calculator" className="rounded-2xl border border-[#d8cec0]/70 bg-[#fffaf4] p-5 text-sm font-semibold text-[#171514] transition-all hover:border-[#c8aa72] hover:bg-[#fffaf2]">
              Renovation Cost Calculator
              <span className="mt-2 block text-xs font-normal leading-5 text-[#746b61]">Estimate your Singapore renovation budget.</span>
            </a>
            <a href="/residential" className="rounded-2xl border border-[#d8cec0]/70 bg-[#fffaf4] p-5 text-sm font-semibold text-[#171514] transition-all hover:border-[#c8aa72] hover:bg-[#fffaf2]">
              Residential Renovation
              <span className="mt-2 block text-xs font-normal leading-5 text-[#746b61]">Explore HDB, condo and home renovation services.</span>
            </a>
            <a href="/commercial" className="rounded-2xl border border-[#d8cec0]/70 bg-[#fffaf4] p-5 text-sm font-semibold text-[#171514] transition-all hover:border-[#c8aa72] hover:bg-[#fffaf2]">
              Commercial Renovation
              <span className="mt-2 block text-xs font-normal leading-5 text-[#746b61]">Plan office, retail and commercial fit-out works.</span>
            </a>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-[#C5A059]">
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="md:col-span-2 rounded-xl overflow-hidden shadow-2xl border border-[#d8cec0]/40">
                <img 
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-[#C5A059] font-medium mb-2">{selectedImage.category}</p>
                  <h2 className="text-3xl font-serif text-white mb-4">{selectedImage.title}</h2>
                  <p className="text-white/70 text-lg">{selectedImage.description}</p>
                </div>
                <a
                  href={`https://wa.me/6598333085?text=${encodeURIComponent(`Hi ID Work Studio, I saw the ${selectedImage.title} project in your gallery and would like to discuss a similar renovation direction.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#C5A059] text-white font-bold rounded-full hover:bg-[#D6B26B] transition-colors"
                >
                  Inquire About Similar Projects
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="/renovation-cost-calculator"
                  className="flex items-center justify-center gap-2 w-full py-4 border border-white/20 bg-white/10 text-white font-bold rounded-full hover:bg-white/15 transition-colors"
                >
                  Estimate Project Budget
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
