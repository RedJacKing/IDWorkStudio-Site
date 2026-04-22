// ─────────────────────────────────────────────────────────────
// /commercial/shophouse-renovation
// GEO sub-page — hardcoded English (B2B commercial audience)
// Design mirrors Reinstatement.tsx exactly
// Hero image: replace Unsplash URL with your own project photo
// ─────────────────────────────────────────────────────────────
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, FileCheck, Clock,
  Landmark, LayoutPanelLeft, Zap, PenTool, Layers, KeyRound,
  Search, FileText, Hammer, CheckCircle2,
  AlertTriangle, ArrowRight, ScrollText,
} from 'lucide-react';

export default function ShophouseRenovation() {
  const whatsappLink = `https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20consultation%20for%20shophouse%20renovation.`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shophouse Renovation Singapore",
    "description": "Specialist shophouse renovation contractor in Singapore. We manage URA Conservation Permission, BCA structural submissions, and SCDF fire safety compliance — the tripartite approval process unique to conserved shophouses. Serving Tanjong Pagar, Chinatown, Kampong Glam, Boat Quay, Little India, and Emerald Hill.",
    "serviceType": "Shophouse Renovation",
    "areaServed": { "@type": "City", "name": "Singapore" },
    "provider": {
      "@type": "GeneralContractor",
      "name": "ID Work Studio",
      "url": "https://idworkstudio.com",
      "telephone": "+6568162872",
      "email": "contact@idworkstudio.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Woodlands Close, Woodlands 11, #03-10",
        "addressLocality": "Woodlands",
        "addressRegion": "Singapore",
        "postalCode": "737853",
        "addressCountry": "SG"
      }
    },
    "areaServed": [
      { "@type": "Place", "name": "Tanjong Pagar, Singapore" },
      { "@type": "Place", "name": "Chinatown, Singapore" },
      { "@type": "Place", "name": "Kampong Glam, Singapore" },
      { "@type": "Place", "name": "Boat Quay, Singapore" },
      { "@type": "Place", "name": "Little India, Singapore" },
      { "@type": "Place", "name": "Emerald Hill, Singapore" }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/commercial/shophouse-renovation"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What can and cannot be changed in a conserved shophouse in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under URA conservation guidelines, shophouse owners must preserve all externally visible architectural features: the facade, roof profile, parapet, cornices, pilasters, original windows, shutters, decorative plasterwork, Peranakan tiles, and the five-foot way (void deck corridor). These cannot be removed, replaced with modern materials, or substantially altered without URA Conservation Permission. What can be changed includes interior layouts (to some extent), internal fittings and utilities — air-conditioning, plumbing, and electrical systems can be upgraded — and rear extensions in specific areas, subject to height restrictions. Any change to internal load-bearing walls also requires BCA structural plan approval."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need URA Conservation Permission for shophouse renovation in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if your shophouse sits within a designated conservation area or is a standalone conserved building. URA Conservation Permission is required for any works that affect externally visible elements or significant internal features. If the works also involve structural changes, BCA Building Plan and Structural Plan approvals are required in addition. SCDF fire safety plan submission is required for any works affecting fire safety systems, means of escape, or fire compartmentation — and SCDF applies special relaxation provisions under Chapter 9 of the Fire Code 2023 specifically for conservation shophouses, acknowledging that standard fire code compliance would require demolishing the timber structures URA mandates you preserve."
        }
      },
      {
        "@type": "Question",
        "name": "How long does shophouse renovation take in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Total shophouse renovation timelines are significantly longer than standard commercial renovation due to the multi-agency approval process. Allow 4 to 8 weeks for URA, BCA, and SCDF submissions and approvals before construction begins, then 8 to 16 weeks for construction depending on scope and whether specialist heritage works are required. For projects involving significant structural works or change of use, total project timelines of 6 to 9 months are common. ID Work Studio coordinates simultaneous submissions to URA, BCA, and SCDF to compress the approval phase wherever possible."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Shophouse Renovation Singapore | URA Conservation Compliance | ID Work Studio</title>
        <meta name="description" content="Specialist shophouse renovation contractor in Singapore. URA Conservation Permission, BCA structural approval, and SCDF fire safety — all managed. Tanjong Pagar, Chinatown, Kampong Glam, Boat Quay. Free consultation." />
        <meta name="keywords" content="shophouse renovation Singapore, URA conservation renovation Singapore, conservation shophouse contractor Singapore, shophouse fit-out Tanjong Pagar, shophouse renovation Chinatown, shophouse renovation Kampong Glam" />
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />
        <link rel="canonical" href="https://idworkstudio.com/commercial/shophouse-renovation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/commercial/shophouse-renovation" />
        <meta property="og:title" content="Shophouse Renovation Singapore | URA Conservation Experts | ID Work Studio" />
        <meta property="og:description" content="Shophouse renovation in Singapore with full URA, BCA, and SCDF compliance. Tanjong Pagar, Chinatown, Kampong Glam specialists. Free consultation." />
        <meta property="og:image" content="https://idworkstudio.com/gallery/commercial-expertise.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shophouse Renovation Singapore | URA Conservation Experts | ID Work Studio" />
        <meta name="twitter:description" content="Shophouse renovation with full URA, BCA, and SCDF compliance. Tanjong Pagar, Chinatown, Kampong Glam specialists." />
        <meta name="twitter:image" content="https://idworkstudio.com/gallery/commercial-expertise.png" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-charcoal pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            {/* Replace this Unsplash URL with your own shophouse project photo */}
            <img
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1920&q=80"
              alt="Singapore Shophouse Renovation Conservation"
              className="w-full h-full object-cover opacity-40"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-dark-charcoal/65" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-8 font-semibold"
            >
              HDB-Registered HB-02-5250G · BCA-Registered
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl mb-6 leading-tight flex flex-col items-center"
            >
              <span className="font-serif italic text-white/80 text-2xl md:text-3xl mb-3">Singapore's Specialist</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">Shophouse Renovation Contractor</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            >
              URA Conservation Permission, BCA structural approval, and SCDF fire safety — the three-agency submission process that most contractors cannot navigate. We manage all of it. Serving Tanjong Pagar, Chinatown, Kampong Glam, Boat Quay, Little India, and Emerald Hill.
            </motion.p>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-xl"
            >
              Get a Free Consultation
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              {[
                { icon: <ScrollText size={22} />, label: "URA Conservation Compliant" },
                { icon: <ShieldCheck size={22} />, label: "SCDF Fire Safety Managed" },
                { icon: <FileCheck size={22} />, label: "BCA Structural Submissions" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4 backdrop-blur-sm">
                  <span className="text-gold flex-shrink-0">{item.icon}</span>
                  <span className="text-white/80 text-sm font-medium text-left">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── OVERVIEW ──────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Why Shophouse Renovation</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Demands a Different Specialist</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Renovating a conserved shophouse in Singapore is not simply a construction project — it is a tripartite negotiation between the Urban Redevelopment Authority (URA), the Building and Construction Authority (BCA), and the Singapore Civil Defence Force (SCDF). Each agency has its own requirements, and the three sets of requirements frequently conflict with one another in ways that only experienced shophouse contractors know how to resolve.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The URA mandates that the facade, roof profile, cornices, original windows, shutters, decorative plasterwork, Peranakan tiles, and the five-foot way must all be preserved or restored like-for-like. The BCA requires structural plan approval for any changes to load-bearing walls and a Professional Engineer endorsement. And SCDF requires fire safety compliance — but applies special relaxation provisions under Chapter 9 of the Fire Code 2023 specifically because strict adherence would require demolishing the timber structures the URA mandates you preserve.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  ID Work Studio has experience navigating this three-agency submission process across Singapore's major conservation districts. We coordinate URA, BCA, and SCDF submissions simultaneously to compress the approval timeline — critical for clients facing lease commencement deadlines or business opening targets.
                </p>
              </div>

              {/* Districts served — explicit GEO signals for AI */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-off-white border border-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">Conservation Districts We Serve</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Tanjong Pagar", "Chinatown", "Kampong Glam", "Boat Quay", "Little India", "Emerald Hill", "Blair Plain", "Joo Chiat"].map((d) => (
                      <div key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></div>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-off-white border border-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-dark-charcoal mb-2 uppercase tracking-wide text-sm">Typical Uses We Renovate For</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">F&B restaurants and cafes, boutique hotels and serviced apartments, professional offices, retail concept stores, creative studios and galleries, and mixed-use live-work spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SCOPE OF WORKS ────────────────────────────────────── */}
        <section className="py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Our Shophouse</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Renovation Scope & Expertise</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <ScrollText size={28} />, title: "URA Conservation Submission", desc: "Conservation Permission application prepared and submitted by our Qualified Person (QP). We identify what requires Permission and what qualifies as minor works before you spend a dollar." },
                { icon: <Layers size={28} />, title: "Facade Preservation & Restoration", desc: "Like-for-like repair of lime plaster, timber lintels, Peranakan tiles, decorative cornices, and original shutters. We have the specialist contractor network for heritage materials." },
                { icon: <Landmark size={28} />, title: "Interior Reconfiguration", desc: "Layout changes, new partitions, staircase modifications, and attic additions — all designed within URA's conservation constraints and BCA structural requirements." },
                { icon: <Zap size={28} />, title: "M&E Modernisation", desc: "Full electrical rewire, aircon system installation, plumbing upgrade, and data infrastructure — all routed to minimise visual impact on original fabric." },
                { icon: <ShieldCheck size={28} />, title: "SCDF Fire Safety", desc: "Fire safety strategy prepared under SCDF Chapter 9 relaxation provisions for conservation buildings. Sprinkler systems, smoke detection, means of escape — all coordinated with URA constraints." },
                { icon: <PenTool size={28} />, title: "Modern Interior Fit-Out", desc: "Contemporary commercial interior design that contrasts sensitively with heritage character. We balance original charm with modern operational requirements." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 border border-gray-100 rounded-xl hover:border-gold/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-gold mb-5">{item.icon}</div>
                  <h3 className="font-bold text-dark-charcoal mb-3 uppercase tracking-wide text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AT-A-GLANCE STATS ─────────────────────────────────── */}
        <section className="py-16 bg-dark-charcoal">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { value: "from $150", unit: "psf", label: "Interior Fit-Out Cost" },
                { value: "4–8", unit: "weeks", label: "URA / BCA / SCDF Approvals" },
                { value: "6–9", unit: "months", label: "Typical Total Project Duration" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-gold font-sans">{stat.value}</span>
                    <span className="text-gold/60 text-sm uppercase tracking-wider">{stat.unit}</span>
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHALLENGES VS SOLUTIONS ───────────────────────────── */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Overcoming</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">Shophouse Renovation Challenges</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ScrollText size={48} strokeWidth={1} />,
                  pain: "URA Conservation Restrictions",
                  solution: "We identify precisely what requires Conservation Permission and what can proceed as minor works — saving weeks of unnecessary submission and approval time.",
                },
                {
                  icon: <AlertTriangle size={48} strokeWidth={1} />,
                  pain: "Three-Agency Submission Complexity",
                  solution: "We coordinate simultaneous submissions to URA, BCA, and SCDF, compressing the approval phase. Most clients don't know these can overlap — we do.",
                },
                {
                  icon: <Landmark size={48} strokeWidth={1} />,
                  pain: "Heritage Materials & Specialist Works",
                  solution: "Lime plaster, timber joist repairs, Peranakan tile sourcing, decorative plasterwork — we have the specialist contractor network that standard renovation firms do not.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 shadow-xl border-b-4 border-gold group flex flex-col items-center text-center"
                >
                  <div className="mb-8 text-gold flex justify-center">{item.icon}</div>
                  <div className="mb-6 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-sans">The Challenge</span>
                    <h3 className="text-xl font-bold text-dark-charcoal uppercase font-sans leading-tight">{item.pain}</h3>
                  </div>
                  <div className="pt-6 border-t border-gray-100 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold block mb-2 font-sans">Our Solution</span>
                    <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">{item.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST ROW ─────────────────────────────────────────── */}
        <section className="py-12 bg-white border-y border-gray-100 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-serif italic text-dark-charcoal/40 text-lg md:text-xl tracking-wide">
              Navigating URA, BCA, and SCDF for conservation shophouses across Tanjong Pagar, Chinatown, Kampong Glam, and Boat Quay.
            </p>
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────────── */}
        <section className="py-24 relative z-10 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-white/60 text-2xl mb-2">Our Seamless</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">Shophouse Renovation Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              <div className="hidden md:block absolute top-[32px] left-0 w-full h-[1px] bg-gold/20 z-0"></div>

              {[
                { icon: <Search className="text-dark-charcoal" size={24} />, title: "Conservation Assessment", desc: "Free site visit and review of URA status, conservation category, and preliminary scope. We flag what requires Permission before you commit." },
                { icon: <FileText className="text-dark-charcoal" size={24} />, title: "Multi-Agency Submission", desc: "Simultaneous submission to URA, BCA, and SCDF — coordinated by our QP to compress the approval phase as much as possible." },
                { icon: <Hammer className="text-dark-charcoal" size={24} />, title: "Specialist & Fit-Out Works", desc: "Heritage restoration works (facade, timber, tiles) followed by modern interior fit-out — sequenced to avoid programme conflicts." },
                { icon: <CheckCircle2 className="text-dark-charcoal" size={24} />, title: "Inspection & Handover", desc: "BCA and SCDF inspections managed, Fire Safety Certificate obtained, and final handover with full compliance documentation." },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:scale-110 transition-transform relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-charcoal text-gold rounded-full flex items-center justify-center text-[10px] font-bold font-sans border border-gold/50">0{i + 1}</div>
                  </div>
                  <div className="w-full min-h-[3.5rem] flex items-center justify-center mb-4">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wider text-gold font-sans leading-tight">{step.title}</h4>
                  </div>
                  <div className="w-full min-h-[4rem] flex flex-col items-center">
                    <p className="text-white/90 text-sm leading-relaxed font-sans font-normal max-w-[200px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="py-24 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center text-dark-charcoal">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <ScrollText className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "What can and cannot be changed in a conserved shophouse in Singapore?",
                  a: "Under URA conservation guidelines, <strong>protected elements</strong> include the facade, roof profile, parapet, cornices, pilasters, original windows, shutters, decorative plasterwork, Peranakan tiles, and the five-foot way — all must be preserved or restored like-for-like. <strong>What can be changed</strong> includes interior layouts, internal fittings and utilities (aircon, plumbing, electrical), and rear extensions in specific areas subject to height restrictions. Any structural change requires BCA approval and a Professional Engineer endorsement."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "Do I need URA Conservation Permission for shophouse renovation?",
                  a: "Yes — if your shophouse is in a designated conservation area. URA Conservation Permission is required for any works affecting externally visible elements or significant internal features. Structural changes additionally require <strong>BCA Building Plan and Structural Plan approval</strong>. SCDF fire safety submission is required for any changes affecting fire systems, means of escape, or fire compartmentation — and SCDF applies <strong>Chapter 9 relaxation provisions</strong> specifically for conservation shophouses, acknowledging that standard fire code compliance would require demolishing the timber structures URA mandates you preserve."
                },
                {
                  icon: <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "How long does shophouse renovation take in Singapore?",
                  a: "Allow <strong>4–8 weeks</strong> for URA, BCA, and SCDF approvals before construction begins. Construction then takes <strong>8–16 weeks</strong> depending on scope and whether specialist heritage works are required. For projects with significant structural works or change of use, <strong>total timelines of 6–9 months</strong> are common. ID Work Studio coordinates simultaneous submissions across all three agencies to compress the approval phase wherever possible."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-dark-charcoal mb-3 flex items-start gap-3">
                    {item.icon}
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-9 text-sm" dangerouslySetInnerHTML={{ __html: item.a }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES ──────────────────────────────────── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif text-center text-dark-charcoal mb-10">Explore Our Other Commercial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Office Renovation", desc: "BCA permits, space planning, M&E, turnkey fit-out.", link: "/commercial/office-renovation" },
                { title: "Retail & Mall Store Renovation", desc: "MCST submissions, shopfront design, night-works capable.", link: "/commercial/retail-mall-renovation" },
                { title: "Permits & Compliance", desc: "SCDF, LEW, BCA, and MCST — all submissions managed.", link: "/commercial/permits-compliance" },
                { title: "Reinstatement", desc: "Bare shell handover for offices and mall units.", link: "/commercial/reinstatement" },
              ].map((svc, i) => (
                <Link key={i} to={svc.link} className="group flex items-start justify-between p-6 border border-gray-200 rounded-xl hover:border-gold hover:shadow-md transition-all duration-300">
                  <div>
                    <h3 className="font-bold text-dark-charcoal mb-2 text-sm uppercase tracking-wide group-hover:text-gold transition-colors">{svc.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{svc.desc}</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-gold transition-colors flex-shrink-0 mt-1 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────── */}
        <section className="py-32 bg-white relative z-10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl mb-12 flex flex-col items-center justify-center gap-2"
            >
              <span className="font-serif italic text-dark-charcoal">Ready to Restore Your</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">Shophouse Heritage?</span>
            </motion.h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans"
            >
              WhatsApp for a Free Consultation
            </a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-gold/10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-gold/10 translate-x-1/2 translate-y-1/2"></div>
        </section>

        {/* ── STICKY MOBILE CTA ─────────────────────────────────── */}
        <div className="fixed bottom-0 left-0 w-full bg-dark-charcoal/95 backdrop-blur-md border-t border-gold/30 p-4 z-[100] md:hidden">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gold py-4 rounded-full text-dark-charcoal font-bold text-xs uppercase tracking-widest font-sans"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408 0 12.044c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.408 12.052-12.044.002-3.218-1.248-6.242-3.514-8.508z"/>
            </svg>
            Free Shophouse Consultation
          </a>
        </div>

      </div>
    </>
  );
}
