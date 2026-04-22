// ─────────────────────────────────────────────────────────────
// /commercial/retail-mall-renovation
// GEO sub-page — hardcoded English (B2B commercial audience)
// Design mirrors Reinstatement.tsx exactly
// Hero image: replace Unsplash URL with your own project photo
// ─────────────────────────────────────────────────────────────
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, FileCheck, Clock,
  Lightbulb, LayoutPanelLeft, Package, Zap, PenTool, Store,
  Search, FileText, Hammer, CheckCircle2,
  AlertTriangle, ArrowRight, Moon,
} from 'lucide-react';

export default function RetailMallRenovation() {
  const whatsappLink = `https://wa.me/6598333085?text=Hi%20ID%20Work%20Studio,%20I'd%20like%20a%20free%20site%20survey%20for%20retail%20or%20mall%20store%20renovation.`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retail & Mall Store Renovation Singapore",
    "description": "Specialist retail fit-out contractor for shopping mall stores and standalone retail shops in Singapore. MCST submission management, shopfront design, night-works capability, and full permit handling. Serving CapitaLand, Frasers, Mapletree, and Lendlease malls across Singapore.",
    "serviceType": "Retail Renovation",
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
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SGD",
      "description": "Retail and mall store renovation in Singapore from S$65 to S$150 per square foot depending on concept intensity, shopfront complexity, and lighting specification."
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://idworkstudio.com/commercial/retail-mall-renovation"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What approvals do I need to renovate a store in a Singapore shopping mall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To renovate a retail store in a Singapore mall you need approval from three parties in sequence: first, the mall management (MCST), who requires detailed floor plans, electrical single-line diagrams, and fire sprinkler layouts submitted at least one to two weeks before works begin, along with a renovation deposit and public liability insurance certificate. Second, BCA approval if any structural changes are involved. Third, SCDF fire safety plan submission if sprinkler heads, smoke detectors, or escape routes are affected. ID Work Studio manages all three submissions as part of our fit-out service."
        }
      },
      {
        "@type": "Question",
        "name": "How long does retail shop renovation take in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A full retail store fit-out in Singapore typically takes 6 to 12 weeks — covering design finalisation, MCST submission and approval (1–2 weeks before works), procurement, and construction. A minor refresh or rebranding can be completed in 2–3 weeks. If your opening date is fixed by your tenancy commencement, MCST approval lead time must be factored in before construction can begin."
        }
      },
      {
        "@type": "Question",
        "name": "What are night-works and do they apply to my mall store renovation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Night-works are a requirement imposed by certain mall managements (MCST) that restrict noisy renovation works — hacking, drilling, tiling — to after-hours only, typically 10pm to 6am, to avoid disrupting shoppers and neighbouring tenants during trading hours. Not all malls impose this; it depends on the mall's specific fit-out guidelines and the nature of your works. ID Work Studio identifies these requirements during our MCST pre-screening stage, so you know the schedule and cost implications before signing your lease or committing to a renovation budget."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Retail & Mall Store Renovation Singapore | MCST Fit-Out Specialist | ID Work Studio</title>
        <meta name="description" content="Specialist retail and mall store renovation contractor in Singapore. MCST submissions, shopfront design, night-works capable. Serving CapitaLand, Frasers, and Mapletree malls. From $65 psf. Free site survey." />
        <meta name="keywords" content="retail renovation Singapore, mall store renovation Singapore, shop fit-out Singapore, MCST renovation Singapore, retail fit-out contractor Singapore, shopping mall renovation Singapore 2026" />
        <meta name="geo.region" content="SG" />
        <meta name="geo.placename" content="Woodlands, Singapore" />
        <meta name="geo.position" content="1.4348129;103.7326522" />
        <meta name="ICBM" content="1.4348129, 103.7326522" />
        <link rel="canonical" href="https://idworkstudio.com/commercial/retail-mall-renovation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idworkstudio.com/commercial/retail-mall-renovation" />
        <meta property="og:title" content="Retail & Mall Store Renovation Singapore | ID Work Studio" />
        <meta property="og:description" content="Specialist retail fit-out for Singapore shopping malls. MCST submissions, shopfront design, night-works capable. From $65 psf. Free site survey." />
        <meta property="og:image" content="https://idworkstudio.com/gallery/commercial-expertise.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ID Work Studio" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Retail & Mall Store Renovation Singapore | ID Work Studio" />
        <meta name="twitter:description" content="Specialist retail fit-out for Singapore shopping malls. MCST submissions, night-works capable. From $65 psf." />
        <meta name="twitter:image" content="https://idworkstudio.com/gallery/commercial-expertise.png" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-off-white min-h-screen font-sans selection:bg-gold selection:text-dark-charcoal">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-charcoal pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-white">
          <div className="absolute inset-0 z-0">
            {/* Replace this Unsplash URL with your own retail project photo */}
            <img
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1920&q=80"
              alt="Retail Store Mall Renovation Singapore"
              className="w-full h-full object-cover opacity-40"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-dark-charcoal/60" />
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
              <span className="font-sans font-bold text-gold uppercase tracking-wider">Retail & Mall Store Renovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            >
              From MCST submission and shopfront design to full store fit-out — we handle the mall management process that most contractors overlook. Night-works capable for zero-disruption renovations.
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
              Get a Free Site Survey
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              {[
                { icon: <FileCheck size={22} />, label: "MCST Submission Experts" },
                { icon: <Moon size={22} />, label: "Night-Works Capable" },
                { icon: <Clock size={22} />, label: "Opening Deadline Driven" },
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
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Why Mall Store Renovation</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Is Different From Other Commercial Work</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Renovating a store inside a Singapore shopping mall involves a layer of approvals that simply does not exist for standalone retail or office renovation. The Management Corporation Strata Title — the MCST — sits between you and the government authorities, and their fit-out requirements must be satisfied before BCA or SCDF submissions can even begin.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Before any wall is touched, mall management requires detailed floor plans, electrical single-line diagrams, and fire sprinkler layouts to be submitted at least one to two weeks before works commence, along with a refundable renovation deposit (typically S$2,000–S$5,000 depending on the mall) and a valid public liability insurance certificate. Missing any of these stops the job before it starts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Many malls in Singapore also impose <strong className="text-dark-charcoal">night-works restrictions</strong> — requiring all noisy works (hacking, drilling, tiling) to be completed between 10pm and 6am to avoid disrupting trading. This significantly affects project scheduling and cost, and is something clients almost never anticipate when planning their renovation budget. ID Work Studio identifies these requirements during MCST pre-screening, so there are no surprises.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Fashion & Apparel Brands",
                    desc: "Shopfront-led design with premium lighting and display systems that communicate brand positioning from 10 metres away."
                  },
                  {
                    title: "Beauty & Wellness Retailers",
                    desc: "Product display design, consultation nook layouts, and specialist lighting for colour-accurate product presentation."
                  },
                  {
                    title: "F&B, Lifestyle & Concept Stores",
                    desc: "Mixed-use retail spaces with service counters, storage integration, and brand experience design from entrance to back-of-house."
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-off-white border border-gray-100 rounded-xl p-6 hover:border-gold/30 transition-colors">
                    <h3 className="font-bold text-dark-charcoal mb-2 uppercase tracking-wide text-sm">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SCOPE OF WORKS ────────────────────────────────────── */}
        <section className="py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-dark-charcoal/60 text-2xl mb-2">Everything</span>
                <span className="font-sans font-bold text-dark-charcoal uppercase tracking-wider">Included in Our Retail Fit-Out</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Store size={28} />, title: "Shopfront Design", desc: "Entrance feature walls, shopfront fascia, display windows, and signage coordination with mall management guidelines." },
                { icon: <Lightbulb size={28} />, title: "Lighting System Design", desc: "Task, ambient, and accent lighting layered for maximum product visibility and brand atmosphere. LED track, cove, and downlight specification." },
                { icon: <Package size={28} />, title: "Display & Fixture Systems", desc: "Custom shelving, display tables, wall-mounted display rails, and gondola systems designed for your product category and brand language." },
                { icon: <LayoutPanelLeft size={28} />, title: "Flooring & Ceiling Works", desc: "Vinyl, timber effect, stone tile, and epoxy flooring. Feature ceilings, grid ceilings, and open soffit treatments with concealed M&E." },
                { icon: <Zap size={28} />, title: "M&E & Power Provisions", desc: "Retail power layout, display lighting circuits, POS terminal points, aircon, and data provisions all coordinated with your operations team." },
                { icon: <FileCheck size={28} />, title: "MCST & Permit Management", desc: "Full MCST submission package — drawings, insurance certificate, and renovation deposit processing. BCA and SCDF submissions where required." },
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
                { value: "$65–$150", unit: "psf", label: "Typical Cost Range" },
                { value: "6–12", unit: "weeks", label: "Full Fit-Out Duration" },
                { value: "1–2", unit: "weeks", label: "MCST Pre-Approval Lead Time" },
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
                <span className="font-sans font-bold text-gold uppercase tracking-wider">Retail Renovation Challenges</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <AlertTriangle size={48} strokeWidth={1} />,
                  pain: "MCST Rejection & Resubmission Delays",
                  solution: "We pre-screen your renovation plans against the specific mall's fit-out manual before submission, eliminating the most common causes of MCST rejection.",
                },
                {
                  icon: <Moon size={48} strokeWidth={1} />,
                  pain: "Night-Works Scheduling & Cost",
                  solution: "Our experienced night crews work efficiently in tight after-hours windows. We build night-works costs and scheduling into your initial quotation — no surprises.",
                },
                {
                  icon: <Clock size={48} strokeWidth={1} />,
                  pain: "Fixed Opening Dates & Lease Pressure",
                  solution: "We parallel-track design finalisation and MCST submission to compress timelines. Many clients achieve MCST approval before renovation design is fully signed off.",
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
              Experienced in CapitaLand, Frasers, Mapletree, Lendlease, and HDB shopfront fit-outs across Singapore.
            </p>
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────────── */}
        <section className="py-24 relative z-10 bg-dark-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 flex flex-col items-center">
                <span className="font-serif italic text-white/60 text-2xl mb-2">Our Seamless</span>
                <span className="font-sans font-bold text-gold uppercase tracking-wider">4-Step Retail Fit-Out Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              <div className="hidden md:block absolute top-[32px] left-0 w-full h-[1px] bg-gold/20 z-0"></div>

              {[
                { icon: <Search className="text-dark-charcoal" size={24} />, title: "Site Survey & MCST Pre-Screen", desc: "We visit your unit, review the mall's fit-out manual, and identify any night-works or material restrictions before design begins." },
                { icon: <FileText className="text-dark-charcoal" size={24} />, title: "Design & MCST Submission", desc: "Shopfront and interior concept, technical drawings, and full MCST submission package including insurance certificate and renovation deposit." },
                { icon: <Hammer className="text-dark-charcoal" size={24} />, title: "Fit-Out Works", desc: "Day or night works as required by the mall. Hoarding, protection of common areas, and daily cleaning maintained throughout." },
                { icon: <CheckCircle2 className="text-dark-charcoal" size={24} />, title: "Snagging & Store Opening", desc: "Final walkthrough with your team, defect rectification, and handover ready for your opening date." },
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
                  icon: <FileCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "What approvals do I need to renovate a store in a Singapore shopping mall?",
                  a: "You need approvals in sequence from three parties. First, <strong>MCST (mall management)</strong> — detailed floor plans, electrical single-line diagrams, fire sprinkler layouts, a renovation deposit, and a public liability insurance certificate, submitted at least 1–2 weeks before works begin. Second, <strong>BCA</strong> if structural changes are involved. Third, <strong>SCDF fire safety</strong> if sprinklers, smoke detectors, or escape routes are affected. ID Work Studio manages the full submission sequence."
                },
                {
                  icon: <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "How long does retail shop renovation take in Singapore?",
                  a: "A full retail fit-out typically takes <strong>6–12 weeks</strong> from design finalisation to handover. A minor refresh or rebranding can be done in <strong>2–3 weeks</strong>. Critically, MCST approval must be obtained <strong>before construction begins</strong> — allow 1–2 weeks for this. If your opening date is fixed by your tenancy commencement, build MCST lead time into your pre-renovation planning."
                },
                {
                  icon: <Moon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />,
                  q: "What are night-works and do they apply to my mall store renovation?",
                  a: "Night-works are a requirement imposed by certain mall managements that restrict noisy renovation works — hacking, drilling, tiling — to after-hours only (<strong>typically 10pm–6am</strong>). Not all malls impose this; it depends on the mall's fit-out guidelines and the nature of your works. ID Work Studio identifies these requirements during MCST pre-screening, so you know the scheduling and cost implications before committing to a renovation budget."
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
                { title: "Shophouse Renovation", desc: "URA conservation compliance + modern interior fit-out.", link: "/commercial/shophouse-renovation" },
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
              <span className="font-serif italic text-dark-charcoal">Ready to Open Your</span>
              <span className="font-sans font-bold text-gold uppercase tracking-wider">Dream Store?</span>
            </motion.h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gold text-dark-charcoal text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold-hover transition-all duration-300 rounded-full shadow-2xl hover:shadow-gold/20 font-sans"
            >
              WhatsApp for a Free Site Survey
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
            Free Retail Store Survey — WhatsApp Us
          </a>
        </div>

      </div>
    </>
  );
}
